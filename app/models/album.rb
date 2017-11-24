class Album < ApplicationRecord
  validates :author_id, :artist_id, :title, :release_date, presence: true
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
