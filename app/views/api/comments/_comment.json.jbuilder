json.extract! comment, :id, :body, :author_id, :commentable_id, :commentable_type, :created_at
json.author comment.author.username
json.likes comment.likes
