class Referent < ApplicationRecord
  validates :track_id, :fragment, presence: true

  belongs_to :track
  has_many :annotations
end
