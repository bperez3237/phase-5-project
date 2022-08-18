Rails.application.routes.draw do
  resources :costs, only: [:create, :index]
  resources :activities, only: [:create, :index, :update] 
  resources :employees, only: [:index]
  resources :cost_codes, only: [:index, :show]
  resources :users, only: [:show]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
