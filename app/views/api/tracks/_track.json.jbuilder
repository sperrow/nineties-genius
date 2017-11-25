json.extract! track, :id, :title, :author_id, :artist_id, :album_id, :lyrics, :track_number

json.artist track.artist.name
json.album track.album.title
