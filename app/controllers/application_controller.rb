class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  helper_method :current_user_can_edit?, :current_user_can_subscribe?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(
      :sign_up,
      keys: [:email, :name, :password, :password_confirmation]
    )
    devise_parameter_sanitizer.permit(
      :account_update,
      keys: [:password, :password_confirmation, :current_password]
    )
  end

  def current_user_can_edit?(model)
    user_signed_in? && (
      model.user == current_user ||
        (model.try(:event).present? && model.event.user == current_user)
    )
  end

  def current_user_can_subscribe?(event, subscription = Subscription.new)
    loggedin_event_owner = user_signed_in? && event.user == current_user
    anonymous_event_owner = !user_signed_in? && event.user.email == subscription.user_email

    !loggedin_event_owner && !anonymous_event_owner
  end
end
