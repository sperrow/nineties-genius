class Annotation < ApplicationRecord
  validates :author_id, :referent_id, :body, presence: true

  belongs_to :referent

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  include Commentable
end
