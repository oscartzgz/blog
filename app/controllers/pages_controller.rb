class PagesController < ApplicationController
  LIMIT_ARTICLES = 5
  
  def index
    @articles = Article.order(created_at: :desc).limit(LIMIT_ARTICLES)
  end

  def aboutme
  end
end
