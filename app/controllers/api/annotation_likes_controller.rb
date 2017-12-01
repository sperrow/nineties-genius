class Api::AnnotationLikesController < ApplicationController
  before_action :require_logged_in

  def create
    @annotation_like = AnnotationLike.new(annotation_like_params)
    if @annotation_like.save
      render :show
    else
      render json: @annotation_like.errors.full_messages, status: 422
    end
  end

  def destroy
    @annotation_like = AnnotationLike.find(params[:id])
    if @annotation_like.destroy
      render json: { message: "deleted" }, status: :ok
    else
      render json: @annotation_like.errors.full_messages, status: 422
    end
  end

  private

  def annotation_like_params
    params.require(:annotation_like).permit(:author_id, :annotation_id)
  end
end
