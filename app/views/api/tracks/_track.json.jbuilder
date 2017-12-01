json.extract! track, :id, :title, :author_id, :artist_id, :album_id, :genre, :lyrics, :track_number

json.artist track.artist.name
json.album track.album
json.author track.author.username
