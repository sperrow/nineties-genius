Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :create, :show, :update, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :comment_likes, only: [:create, :destroy]
  end

  root "static_pages#root"
end
