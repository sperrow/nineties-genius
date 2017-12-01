class Comment < ApplicationRecord
  validates :body, presence: true
  belongs_to :commentable, polymorphic: true
  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
  has_many :likes,
    class_name: 'CommentLike',
    foreign_key: :comment_id
end
