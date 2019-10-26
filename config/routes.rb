Rails.application.routes.draw do
  root "pages#index"
  get "aboutme", to: "pages#aboutme"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :articles, only: [:show, :new, :create, :edit, :update]
end
