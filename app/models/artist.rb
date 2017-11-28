# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  img_url    :string
#

class Artist < ApplicationRecord
  validates :author_id, presence: true
  validates :name, presence: true, uniqueness: true

  has_many :albums
end
