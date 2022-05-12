class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :events
  has_many :comments, dependent: :destroy

  validates :name, presence: true, length: {maximum: 35}
end
