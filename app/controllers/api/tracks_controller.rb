class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def create
    @track = Track.new(track_params)
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
    p 'HAYYYY'
    p @track
    if @track.update_attributes(track_params)
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def track_params
    params.require(:track).permit(:title, :author_id, :lyrics, :artist_id, :album_id)
  end
end
