class Artist < ApplicationRecord
  validates :author_id, presence: true
  validates :name, presence: true, uniqueness: true

  has_many :albums
end
