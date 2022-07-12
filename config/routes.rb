Rails.application.routes.draw do
  resources :games, only: [:index, :show]
  resources :events
  resources :users, only: [:create, :destroy]
  resources :venues
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
  
end
