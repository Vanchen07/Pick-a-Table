Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :restaurants, only: [:index, :show]
    resources :neighborhoods, only: [:index, :show]
    resources :cuisines, only: [:index, :show]
    resources :reservations
    resources :reviews
    resources :time_slots, only: [:index, :show]
    resources :images, only: [:index]
    
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"

end
