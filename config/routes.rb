Rails.application.routes.draw do
  resources :games, only: [:index, :show]
  resources :events
  resources :users, only: [:index, :create, :destroy]
  resources :venues
  
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
end
