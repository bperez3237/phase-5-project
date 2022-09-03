Rails.application.routes.draw do
  resources :work_weeks
  resources :units, only: [:create, :index, :show]
  resources :costs, only: [:create, :index]
  resources :activities, only: [:create, :index, :update] 
  resources :employees, only: [:index]
  resources :cost_codes, only: [:index, :show, :update]
  resources :users, only: [:show, :index]

  resources :activities, only: [:index, :show] do
    resources :costs, only: [:show, :index]
  end

  resources :cost_codes, only: [:show] do
    resources :activities, only: [:index]
    resources :units, only: [:index]
  end

  resources :work_weeks, only: [:show] do 
    resources :activities, only: [:index, :show, :create]
  end

  get '/activity_week/:end_date', to: 'activities#activity_week'
  get '/work_week/:end_date', to: 'work_weeks#get_id'


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: 'users#auto_login'

  get '/report', to: 'cost_codes#report'
  get '/report/:work_week_id', to: 'cost_codes#report'

  get '/report_activities/:cost_code_id/:work_week_id', to: 'activities#report_activities'
  get '/report_units/:cost_code_id/:work_week_id', to: 'units#report_units'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
