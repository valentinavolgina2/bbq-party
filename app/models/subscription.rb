class Subscription < ApplicationRecord
  belongs_to :event
  belongs_to :user, optional: true

  validates :user_name, presence: true, unless: -> { user.present? }
  validates :user_email, presence: true, format: /\A[a-zA-Z0-9\-_.]+@[a-zA-Z0-9\-_.]+\z/, unless: -> { user.present? }
  validates :user, uniqueness: {scope: :event_id}, if: -> { user.present? }
  validates :user_email, uniqueness: {scope: :event_id}, unless: -> { user.present? }

  validate :cannot_subscribe_on_my_event
  validate :cannot_use_other_user_email

  def user_name
    if user.present?
      user.name
    else
      super
    end
  end

  def user_email
    if user.present?
      user.email
    else
      super
    end
  end

  private

  def cannot_subscribe_on_my_event
    if event.user.email == user_email
      errors.add(:user_email, :owner_not_allowed)
    end
  end

  def cannot_use_other_user_email
    if !user.present? && User.exists?(email: user_email)
      errors.add(:user_email, :email_is_taken)
    end
  end
end
