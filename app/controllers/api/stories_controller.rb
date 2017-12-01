class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
  end
end
