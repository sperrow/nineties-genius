json.partial! 'api/tracks/track', track: @track

json.referents @track.referents do |ref|
  json.id ref.id
  json.track_id ref.track_id
  json.fragment ref.fragment
  json.annotations ref.annotations
end
