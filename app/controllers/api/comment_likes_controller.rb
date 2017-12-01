class Api::CommentLikesController < ApplicationController
  before_action :require_logged_in

  def create
    @comment_like = CommentLike.new(comment_like_params)
    if @comment_like.save
      render :show
    else
      render json: @comment_like.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment_like = CommentLike.find(params[:id])
    if @comment_like.destroy
      render json: { message: "deleted" }, status: :ok
    else
      render json: @comment_like.errors.full_messages, status: 422
    end
  end

  private

  def comment_like_params
    params.require(:comment_like).permit(:author_id, :comment_id)
  end
end
