Rails.application.routes.draw do
  # resources :costs
  # resources :activities
  # resources :employees
  resources :cost_codes, only: [:index, :show]
  # resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
