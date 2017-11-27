json.extract! track, :id, :title, :author_id, :artist_id, :album_id, :lyrics, :track_number

json.artist track.artist.name
json.album track.album.title
json.album_url track.album.img_url
json.album_release_date track.album.release_date
