class Api::AlbumsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @albums = Album.all
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render 'api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])
    if @album.update_attributes(album_params)
      render 'api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    if @album.destroy
      render 'api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :artist_id, :author_id, :img_url, :release_date)
  end
end
