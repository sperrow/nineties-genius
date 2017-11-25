# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'test_user', password: 'password')
User.create(username: 'demo_user', password: 'password')

Artist.create(name: 'No Doubt', author_id: 1)
Artist.create(name: 'Nirvana', author_id: 1)
Artist.create(name: 'Oasis', author_id: 1)

Album.create(title: 'Tragic Kingdom', author_id: 1, artist_id: 1, release_date: '1995-10-05')
Album.create(title: 'Nevermind', author_id: 1, artist_id: 2, release_date: '1991-09-24')
Album.create(title: "(What's the Story) Morning Glory?", author_id: 1, artist_id: 3, release_date: '1995-10-02')

Track.create(title: 'Spiderwebs', author_id: 1, artist_id: 1, album_id: 1, track_number: 1, lyrics: 'these are lyrics')
Track.create(title: 'Excuse Me Mister', author_id: 1, artist_id: 1, album_id: 1, track_number: 2, lyrics: 'these are lyrics')
Track.create(title: 'Just A Girl', author_id: 1, artist_id: 1, album_id: 1, track_number: 3, lyrics: 'these are lyrics')
