# == Schema Information
#
# Table name: tracks
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  author_id    :integer          not null
#  lyrics       :text             not null
#  artist_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  track_number :integer
#  album_id     :integer
#  genre        :string           default("pop"), not null
#

class Track < ApplicationRecord
  validates :title, :lyrics, presence: true
  validates :genre, inclusion: { in: ['pop', 'rock', 'rap', 'r&b', 'country', 'non-music'] }

  belongs_to :album
  belongs_to :artist
  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
end
