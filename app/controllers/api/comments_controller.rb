class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :commentable_id, :commentable_type)
  end
end
