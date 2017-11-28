# == Schema Information
#
# Table name: albums
#
#  id           :integer          not null, primary key
#  author_id    :integer          not null
#  title        :string           not null
#  artist_id    :integer          not null
#  release_date :date             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  img_url      :string
#

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
