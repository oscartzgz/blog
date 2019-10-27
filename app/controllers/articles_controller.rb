class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  
  def show
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @article.update(article_params)  
      render json: @article, status: :ok
    else
      render json: @article.erros, status: :unprocesable_entity
    end
  end

  def destroy
    @article.delete
    head :no_content
  end

  private
  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :content)
  end
end