json.partial! 'api/albums/album', album: @album

json.tracks @album.tracks
json.artist @album.artist.name
