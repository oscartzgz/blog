class Admin::ArticlesController < Admin::BaseController
  before_action :set_article, only: [:show, :edit, :update, :destroy]

  def manage
    @articles = Article.all.order(created_at: :desc)
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      flash[:notice] = "El artículo fue creado <a href='#{article_path(@article)}'>Ver</a>".html_safe
      render json: @article, status: :created
    else
      flash[:error] = "No se pudo crear la publicación"
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @article.update(article_params)  
      flash[:notice] = "El artículo fue actualizado <a href='#{article_path(@article)}'>Ver</a>".html_safe
      render json: @article, status: :ok
    else
      flash[:error] = "No se pudo actualizar la publicación"
      render json: @article.errors, status: :unprocesable_entity
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