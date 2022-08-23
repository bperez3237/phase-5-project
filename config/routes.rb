Rails.application.routes.draw do
  resources :costs, only: [:create, :index]
  resources :activities, only: [:create, :index, :update] 
  resources :employees, only: [:index]
  resources :cost_codes, only: [:index, :show, :update]
  resources :users, only: [:show, :index]

  resources :activities, only: [:index, :show] do
    resources :costs, only: [:show, :index]
  end

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: 'users#auto_login'

  get '/codes_with_costs', to: 'cost_codes#with_costs'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
