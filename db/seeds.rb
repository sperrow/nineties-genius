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

Track.create(title: 'Spiderwebs', author_id: 1, artist_id: 1, album_id: 1, track_number: 1, img_url: "https://upload.wikimedia.org/wikipedia/en/9/9d/No_Doubt_-_Tragic_Kingdom.png", lyrics: "You think that we connect\nThat the chemistry's correct\nYour words walk right through my ears\nPresuming I like what I hear\nAnd now I'm stuck in the web\nYou're spinning\nYou've got me for your prey\nSorry I'm not home right now\nI'm walking into spiderwebs\nSo leave a message\nAnd I'll call you back\nA likely story, but leave a message\nAnd I'll call you back\nYou're intruding on what's mine and\nYou're taking up my time\nDon't have the courage inside me\nTo tell you please let me be\nCommunication, a telephonic invasion\nI'm planning my escape\nSorry I'm not home right now\nI'm walking into spiderwebs\nSo leave a message\nAnd I'll call you back\nA likely story, but leave a message\nAnd I'll call you back\nAnd it's all your fault\nI screen my phone calls\nNo matter who calls\nI gotta scream my phone calls\nNow it's gone too deep\nYou wake me in my sleep\nMy dreams become nightmares\n'Cause you're ringing in my ears.\nSorry I'm not home right now\nI'm walking into spiderwebs\nSo leave a message\nAnd I'll call you back\nA likely story, but leave a message\nAnd I'll call you back\nAnd It's all your fault\nI screen my phone calls\nNo matter matter matter who calls\nI gotta scream my phone calls\nOh spider webs\nLeave a message and I'll call you back\nI'm walking in a spider webs\nSo leave a message and I'll call you back\nAnd It's all your fault\nI screen my phone calls\nNo matter matter matter who calls\nI gotta scream my phone calls\nIt's all your fault\nIt's all your fault\nNo matter who calls\nNo matter who calls\nI'm walking into spiderwebs\nSo leave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back")
Track.create(title: 'Excuse Me Mr.', author_id: 1, artist_id: 1, album_id: 1, track_number: 2, lyrics: 'these are lyrics')
Track.create(title: 'Just A Girl', author_id: 1, artist_id: 1, album_id: 1, track_number: 3, lyrics: 'these are lyrics')
