json.partial! 'api/tracks/track', track: @track

json.comments @track.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end

json.referents @track.referents do |ref|
  json.id ref.id
  json.track_id ref.track_id
  json.fragment ref.fragment
  json.annotations ref.annotations do |ann|
    json.id ann.id
    json.author_id ann.author_id
    json.referent_id ann.referent_id
    json.body ann.body
    json.author ann.author.username
    json.created_at ann.created_at
    json.comments ann.comments do |com|
      json.partial! 'api/comments/comment', comment: com
    end
    json.likes ann.likes
  end
end
