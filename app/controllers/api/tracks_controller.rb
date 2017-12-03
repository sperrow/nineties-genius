class Api::TracksController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @tracks = Track.all
  end

  def create
    @track = Track.new(track_params)

    artist = Artist.find_or_create_by(name: params[:track][:artist]) do |a|
      a.author_id = current_user.id
    end

    if params[:track][:album_title]
      album = Album.find_or_create_by(title: params[:track][:album_title]) do |a|
        a.author_id = current_user.id
        a.artist_id = artist.id
        a.release_date = params[:track][:release_date]
        a.img_url = params[:track][:img_url]
      end
    end

    @track.artist_id = artist.id
    @track.album_id = album.id if album

    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
    @track = Track.find(params[:id])

    artist = Artist.find_or_create_by(name: params[:track][:artist])

    if params[:track][:album_title]
      album = Album.find_or_create_by(title: params[:track][:album_title]) do |a|
        a.author_id = current_user.id
        a.artist_id = artist.id
        a.release_date = params[:track][:release_date]
        a.img_url = params[:track][:img_url]
      end
    end

    @track.artist_id = artist.id
    @track.album_id = album.id if album

    if @track.update_attributes(track_params)
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :author_id, :genre, :lyrics)
  end
end
