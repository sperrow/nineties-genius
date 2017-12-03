class Api::AnnotationsController < ApplicationController
  before_action :require_logged_in

  def create
    @annotation = Annotation.new(annotation_params)

    referent = Referent.create(
      fragment: params[:annotation][:fragment],
      track_id: params[:annotation][:track_id]
    )

    @annotation.referent_id = referent.id
    @annotation.author_id = current_user.id

    if @annotation.save
      render json: { message: "success" }, status: :ok
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    if @annotation.destroy
      render json: { message: "deleted" }, status: :ok
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  private

  def annotation_params
    params.require(:annotation).permit(:body)
  end
end
