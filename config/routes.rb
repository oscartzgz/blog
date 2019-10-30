Rails.application.routes.draw do
  devise_for :users
  root to: "pages#index"
  get "aboutme", to: "pages#aboutme"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :articles, only: [:show, :new, :create, :edit, :update, :destroy]

  namespace :admin do
    root to: "articles#manage"
    resources :articles, except: [:show]
  end
end
