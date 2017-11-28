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

class Album < ApplicationRecord
  validates :author_id, :title, :release_date, presence: true
  # validates :in_the_nineties?
  #
  # def in_the_nineties?
  #   puts self.release_date.year
  #   unless self.release_date.year.between?(1990, 1999)
  #     errors.add(:release_date, "Must be from the 90s")
  #   end
  # end

  belongs_to :artist

  has_many :tracks
end
