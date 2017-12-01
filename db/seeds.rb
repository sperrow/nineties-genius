# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Story.create(title: 'Madonna in Wonderland', img_url: 'https://i.imgur.com/VZTyGRw.jpg', site_url: 'https://www.vanityfair.com/magazine/1992/10/madonna199210')
Story.create(title: 'Michael Jackson Collapses At Rehearsal', img_url: 'https://i.imgur.com/bmQHplw.jpg', site_url: 'http://www.nytimes.com/1995/12/07/nyregion/michael-jackson-collapses-at-rehearsal.html')
Story.create(title: 'Kylie Minogue - Pop Princess', img_url: 'https://i.imgur.com/fxBu7PD.jpg', site_url: 'http://jimshelley.com/music/kylie-minogue/')
Story.create(title: 'Love Loses It at Lollapalooza', img_url: 'https://i.imgur.com/Ob6FhEN.jpg', site_url: 'http://www.sfgate.com/entertainment/article/Love-Loses-It-at-Lollapalooza-Hole-s-Shoreline-3026070.php')
Story.create(title: 'Nirvana: Inside the Heart and Mind of Kurt Cobain', img_url: 'https://i.imgur.com/x73DPDY.jpg', site_url: 'http://www.rollingstone.com/music/news/nirvana-inside-the-heart-and-mind-of-kurt-cobain-19920416')
Story.create(title: "TLC's glam goddesses resurface with 'Fan Mail'", img_url: 'https://i.imgur.com/rweqNLy.jpg', site_url: 'http://www.cnn.com/SHOWBIZ/Music/9902/25/tlc/index.html?related')
Story.create(title: 'Alanis Morissette: The Adventures of Miss Thing', img_url: 'https://i.imgur.com/aAqn22z.jpg', site_url: 'http://www.rollingstone.com/music/news/alanis-morissette-the-adventures-of-miss-thing-19951102')
Story.create(title: 'Spice Girls: Too Hot to Handle', img_url: 'https://i.imgur.com/HFiMa4f.jpg', site_url: 'http://www.rollingstone.com/music/news/spice-girls-too-hot-to-handle-19970710')

User.create(username: 'sperrow', password: 'password')
User.create(username: 'demo_user', password: 'password')
User.create(username: 'patrick', password: 'password')
User.create(username: 'steve', password: 'password')
User.create(username: 'margaret', password: 'password')
User.create(username: 'spongebob', password: 'password')

Artist.create(name: 'No Doubt', author_id: 1)
Artist.create(name: 'Nirvana', author_id: 1)
Artist.create(name: 'Oasis', author_id: 1)

Album.create(title: 'Tragic Kingdom', author_id: 1, artist_id: 1, release_date: '1995-10-05', img_url: "https://upload.wikimedia.org/wikipedia/en/9/9d/No_Doubt_-_Tragic_Kingdom.png",)
Album.create(title: 'Nevermind', author_id: 1, artist_id: 2, release_date: '1991-09-24', img_url: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg")
Album.create(title: "(What's the Story) Morning Glory?", author_id: 1, artist_id: 3, release_date: '1995-10-02', img_url: "https://upload.wikimedia.org/wikipedia/en/b/b1/Oasis_-_%28What%27s_The_Story%29_Morning_Glory_album_cover.jpg")

Track.create(title: 'Spiderwebs', author_id: 1, artist_id: 1, album_id: 1, track_number: 1, genre: 'rock',
  lyrics: "You think that we connect\nThat the chemistry's correct\nYour words walk right through my ears\nPresuming I like what I hear\nAnd now I'm stuck in the web\nYou're spinning\nYou've got me for your prey\nSorry I'm not home right now\nI'm walking into spiderwebs\nSo leave a message\nAnd I'll call you back\nA likely story, but leave a message\nAnd I'll call you back\nYou're intruding on what's mine and\nYou're taking up my time\nDon't have the courage inside me\nTo tell you please let me be\nCommunication, a telephonic invasion\nI'm planning my escape\nSorry I'm not home right now\nI'm walking into spiderwebs\nSo leave a message\nAnd I'll call you back\nA likely story, but leave a message\nAnd I'll call you back\nAnd it's all your fault\nI screen my phone calls\nNo matter who calls\nI gotta scream my phone calls\nNow it's gone too deep\nYou wake me in my sleep\nMy dreams become nightmares\n'Cause you're ringing in my ears.\nSorry I'm not home right now\nI'm walking into spiderwebs\nSo leave a message\nAnd I'll call you back\nA likely story, but leave a message\nAnd I'll call you back\nAnd It's all your fault\nI screen my phone calls\nNo matter matter matter who calls\nI gotta scream my phone calls\nOh spider webs\nLeave a message and I'll call you back\nI'm walking in a spider webs\nSo leave a message and I'll call you back\nAnd It's all your fault\nI screen my phone calls\nNo matter matter matter who calls\nI gotta scream my phone calls\nIt's all your fault\nIt's all your fault\nNo matter who calls\nNo matter who calls\nI'm walking into spiderwebs\nSo leave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back\nI'm walking into spiderwebs\nLeave a message\nAnd I'll call you back")
Track.create(title: 'Excuse Me Mr.', author_id: 3, artist_id: 1, album_id: 1, track_number: 2, genre: 'rock',
  lyrics: "[Verse 1]\nI'm like a beggar with no luck\nI'm holding signs up\nOn your street corner stops\nLike most you try not to see me\nYou stare straight ahead\nIgnore the responsibility\n\n[Pre-Chorus]\nExcuse me (Excuse me Mr)\nI've been waiting in line\nAnd I'd like to buy some of your time\nI'm very anxious, eager, willing\nWhat's your billing?\n\n[Chorus]\nSo please excuse me Mr\nYou've got things all wrong\nYou make it feel like a crime\nSo don't confuse me Mr\nI've known you too long\nAll I need is a little of your time\n\n[Verse 2]\nFor most love comes for free\nThey don't pay the high cost\nOf mental custody I'll pay bail for a guarantee\nPlease make space for me In the time yet to be\n\n[Pre-Chorus]\nExcuse me (Excuse me Mr)\nI've been waiting in line\nAnd I'd like to buy\nSome of your time\nI've been saving up my life\nWhat's your price?\n\n[Chorus]\n\n[Bridge]\nWhat should I do?\nI'm about to crack\nAnd there's a force\nThat comes over me\nIt's almost as if I'm tied to the tracks\nAnd I'm waiting for him\nTo rescue me\nThe funny thing is\nHe's not going to come\nHe's not going to find me\nThis is a matter of fact\nThe desire you lack\nThis is the way I guess it has to be\n\nA little of your time\nI need a little of your time\nPlease, a little of your time\n\n[Chorus]\n\n[Outro]\nI'm in line to buy time\nI'm in line to buy time")
Track.create(title: 'Just A Girl', author_id: 4, artist_id: 1, album_id: 1, track_number: 3, genre: 'rock',
  lyrics: "[Verse 1]\nTake this pink ribbon off my eyes\nI'm exposed, and it's no big surprise\nDon't you think I know exactly where I stand?\nThis world is forcing me to hold your hand\n\n[Chorus]\nCause I'm just a girl, oh little old me\nDon't let me out of your sight\nI'm just a girl, all pretty and petite\nSo don't let me have any rights\n\n[Post-Chorus]\nOh, I've had it up to here\n\n[Verse 2]\nThe moment that I step outside\nSo many reasons for me to run and hide\nI can't do the little things I hold so dear\nCause it's all those little things that I fear\n\n[Chorus]\nCause I'm just a girl, I'd rather not be\nCause they won't let me drive late at night\nI'm just a girl, guess I'm some kind of freak\nCause they all sit and stare with their eyes\nI'm just a girl, take a good look at me\nJust your typical prototype\n\n[Post-Chorus]\nOh, I've had it up to here\nOh, am I making myself clear?\n\n[Bridge]\nI'm just a girl\nI'm just a girl in the world\nThat's all that you'll let me be\n\n[Chorus]\nI'm just a girl, living in captivity\nYour rule of thumb makes me worrisome\nI'm just a girl, what's my destiny\nWhat I've succumbed to is making me numb\nI'm just a girl, my apologies\nWhat I've become is so burdensome\nI'm just a girl, lucky me\nTwiddle-dum, there's no comparison\n\n[Outro]\nOh, I've had it up to\nOh, I've had it up to\nOh, I've had it up to here")

Track.create(title: 'Smells Like Teen Spirit', author_id: 3, artist_id: 2, album_id: 2, track_number: 1, genre: 'rock', lyrics: "[Verse 1]\nLoad up on guns, bring your friends\nIt's fun to lose and to pretend\nShe's overboard and self-assured\nOh no I know, a dirty word\n\n[Pre-Chorus]\nHello, hello, hello, how low\nHello, hello, hello, how low\nHello, hello, hello, how low\nHello, hello, hello\n\n[Chorus]\nWith the lights out it's less dangerous\nHere we are now, entertain us\nI feel stupid and contagious\nHere we are now, entertain us\nA mulatto, an Albino\nA mosquito, my libido, yeah\n\n[Post-Chorus]\nHey, yay\n\n[Verse 2]\nI'm worse at what I do best\nAnd for this gift, I feel blessed\nOur little group has always been\nAnd always will until the end\n\n[Pre-Chorus]\nHello, hello, hello, how low\nHello, hello, hello, how low\nHello, hello, hello, how low\nHello, hello, hello\n\n[Chorus]\nWith the lights out, it's less dangerous\nHere we are now, entertain us\nI feel stupid and contagious\nHere we are now, entertain us\nA mulatto, an Albino\nA mosquito, my libido, yeah\n\n[Post-Chorus]\nHey, yay\n\n[Guitar Solo]\n\n[Verse 3]\nAnd I forget just why I taste\nOh yeah, I guess it makes me smile\nI found it hard, it's hard to find\nOh well, whatever, nevermind\n\n[Pre-Chorus]\nHello, hello, hello, how low\nHello, hello, hello, how low\nHello, hello, hello, how low\nHello, hello, hello\n\n[Chorus]\nWith the lights out, it's less dangerous\nHere we are now, entertain us\nI feel stupid and contagious\nHere we are now, entertain us\nA mulatto, an Albino\nA mosquito, my libido\n\n[Outro]\nA denial, a denial, a denial, a denial, a denial\nA denial, a denial, a denial, a denial")
Track.create(title: 'In Bloom', author_id: 6, artist_id: 2, album_id: 2, track_number: 2, genre: 'rock', lyrics: "[Verse 1]\nSell the kids for food\nWeather changes moods\nSpring is here again\nReproductive glands\n\n[Chorus]\nHe’s the one who likes all our pretty songs\nAnd he likes to sing along\nAnd he likes to shoot his gun\nBut he don't know what it means\nDon't know what it means when I say\nHe’s the one who likes all our pretty songs\nAnd he likes to sing along\nAnd he likes to shoot his gun\nBut he don't know what it means\nDon't know what it means when I say\n\n[Verse 2]\nWe can have some more\nNature is a whore\nBruises on the fruit\nTender age in bloom\n\n[Chorus]\nHe’s the one who likes all our pretty songs\nAnd he likes to sing along\nAnd he likes to shoot his gun\nBut he knows not what it means\nKnows not what it means when I say\nHe’s the one who likes all our pretty songs\nAnd he likes to sing along\nAnd he likes to shoot his gun\nBut he don't know what it means\nDon't know what it means when I say\n\n[Guitar solo]\n\n[Chorus]\nHe’s the one who likes all our pretty songs\nAnd he likes to sing along\nAnd he likes to shoot his gun\nBut he don't know what it means\nDon't know what it means when I say\nHe’s the one who likes all our pretty songs\nAnd he likes to sing along\nAnd he likes to shoot his gun\nBut he don't know what it means\nDon't know what it means\nDon't know what it means\nDon't know what it means when I say")
Track.create(title: 'Come as You Are', author_id: 3, artist_id: 2, album_id: 2, track_number: 3, genre: 'rock', lyrics: "[Verse 1]\nCome as you are, as you were\nAs I want you to be\nAs a friend, as a friend\nAs an old enemy\nTake your time, hurry up\nThe choice is yours, don't be late\nTake a rest as a friend, as an old memoria\n\n[Interlude]\nMemoria\nMemoria\nMemoria\n\n[Verse 2]\nCome doused in mud, soaked in bleach\nAs I want you to be\nAs a trend, as a friend\nAs a known enemy, yeah\n\n[Interlude]\nMemoria\nMemoria\nMemoria\n\n[Chorus]\nAnd I swear that I don't have a gun\nNo, I don't have a gun\nNo, I don't have a gun\n\n[Guitar Solo]\n\n[Interlude]\nMemoria\nMemoria\nMemoria\nMemoria\n\n[Chorus]\nAnd I swear that I don't have a gun\nNo, I don't have a gun\nNo, I don't have a gun\nNo, I don't have a gun\nNo, I don't have a gun\n\n[Outro]\nMemoria\nMemoria")

Track.create(title: 'Hello', author_id: 5, artist_id: 3, album_id: 3, track_number: 1, genre: 'rock', lyrics: "[Verse 1]\nI don't feel as if I know you\nYou take up all my time\nThe days are long and the nights will throw you away\nCause the sun don't shine\n\n[Pre-Chorus]\nNobody ever mentions the weather\nCan make or break your day\nNobody ever seems to remember\nLife is a game we play\n\n[Chorus]\nWe live in the shadows and we\nHad the chance and threw it away\nAnd it's never going to be the same\nCause the years are falling by like the rain\nIt's never gonna be the same\nTill the life I knew comes to my house and says\nHello\n\n[Verse 2]\nThere ain't no sense in feeling lonely\nThey got no faith in you\nBut I've got a feeling you still owe me\nSo wipe the shit from your shoes\n\n[Pre-Chorus]\nNobody ever mentions the weather\nCan make or break your day\nNobody ever seems to remember\nLife is a game we play\n\n[Chorus]\nWe live in the shadows and we\nHad the chance and threw it away\nAnd it's never going to be the same\nCause the years are falling by like the rain\nIt's never gona be the same\nTill the life I knew comes to my house and says\nHello\n\n[Outro]\nHello, hello\nHello, hello\nHello, hello, hello\n\n[Ad Libs]\nIt's good to be back")
Track.create(title: 'Roll with It', author_id: 6, artist_id: 3, album_id: 3, track_number: 2, genre: 'rock', lyrics: "[Chorus]\nYou've gotta roll with it\nYou've gotta take your time\nYou gotta say what you say\nDon't let anybody get in your way\n'Cause it's all too much for me to take\n\nDon't ever stand aside\nDon't ever be denied\nYou wanna be who you'd be\nIf you're coming with me\n\n[Post-Chorus]\nI think I've got a feeling I've lost inside\nI think I'm gonna take me away and hide\nI'm thinking of things that I just can't abide\n\n[Verse 1]\nI know the roads down which your life will drive\nI find the key that lets you slip inside\nKiss the girl, she's not behind the door\nBut you know I think I recognize your face\nBut I've never seen you before\n\n[Chorus]\nYou've gotta roll with it\nYou've gotta take your time\nYou gotta say what you say\nDon't let anybody get in your way\n'Cause it's all too much for me to take\n\n[Guitar Solo]\n\n[Verse 2]\nI know the roads down which your life will drive\nI find the key that lets you slip inside\nKiss the girl, she's not behind the door\nBut you know I think I recognize your face\nBut I've never seen you before\n\n[Chorus]\nYou gotta roll with it\nYou gotta take your time\nYou gotta say what you say\nDon't let anybody get in your way\n'Cause it's all too much for me to take\n\nDon't ever stand aside\nDon't ever be denied\nYou wanna be who you'd be\nIf you're coming with me\n\n[Outro]\nI think I've got a feeling I've lost inside (Take me away)\nI think I've got a feeling I've lost inside (Take me away)\nI think I've got a feeling I've lost inside (Take me away)\nI think I've got a feeling I've lost inside (Take me away)\nI think I've got a feeling I've lost inside (Take me away)\nI think I've got a feeling I've lost inside (Take me away)\nI think I've got a feeling I've lost inside (Take me away)\nI think I've got a feeling I've lost inside (Take me away)")
Track.create(title: 'Wonderwall', author_id: 4, artist_id: 3, album_id: 3, track_number: 3, genre: 'rock', lyrics: "[Intro: Instrumental]\n\n[Verse 1]\nToday is gonna be the day\nThat they're gonna throw it back to you\nBy now, you should have somehow\nRealised what you gotta do\nI don't believe that anybody\nFeels the way I do, about you now\n\n[Verse 2]\nBackbeat, the word is on the street\nThat the fire in your heart is out\nI'm sure you've heard it all before\nBut you never really had a doubt\nI don't believe that anybody\nFeels the way I do, about you now\n\n[Pre-Chorus]\nAnd all the roads we have to walk are winding\nAnd all the lights that lead us there are blinding\nThere are many things that I\nWould like to say to you\nBut I don't know how\n\n[Chorus]\nBecause maybe\nYou're gonna be the one that saves me\nAnd after all\nYou're my wonderwall\n\n[Verse 3]\nToday was gonna be the day\nBut they'll never throw it back to you\nBy now you should've somehow\nRealized what you're not to do\nI don't believe that anybody\nFeels the way I do, about you now\n\n[Pre-Chorus]\nAnd all the roads that lead you there were winding\nAnd all the lights that light the way are blinding\nThere are many things that I\nWould like to say to you\nBut I don't know how\n\n[Chorus]\nI said maybe\nYou're gonna be the one that saves me\nAnd after all\nYou're my wonderwall\n\nI said maybe\nYou're gonna be the one that saves me\nAnd after all\nYou're my wonderwall\n\n[Outro]\nI said maybe\nYou're gonna be the one that saves me\nYou're gonna be the one that saves me\nYou're gonna be the one that saves me\n\n[Final instrumental]")


Referent.create(track_id: 1, fragment: "So leave a message\nAnd I'll call you back")
Annotation.create(author_id: 5, referent_id: 1, body: "She is too busy trapped in what the Man thinks is a relationship. She is working out her problems and deciding what to do.\n\nThis could be a specific message for the Man, or it could be a generic excuse.")

Referent.create(track_id: 1, fragment: "You think that we connect\nThat the chemistry's correct\nYour words walk right through my ears\nPresuming I like what I hear")
Annotation.create(author_id: 6, referent_id: 2, body: "Gwen wrote the song about a man who, failing to see the stunning dislike on her face, endlessly calls. Thinking them to have excellent “chemistry,” he goes on and on about their future together. The words, frustrating and tiring to Gwen, pass right by.")

Referent.create(track_id: 4, fragment: "Hello, hello, hello, how low\nHello, hello, hello, how low\nHello, hello, hello, how low\nHello, hello, hello")
Annotation.create(author_id: 1, referent_id: 3, body: "Ever notice that when you say a word enough times in a row, it starts to sound insane and different? That’s how “hello” becomes “how low,” and finally slurred guitar noise.\n\nCobain plays with assonance, internal rhyme, to underscore the importance of sounds over meaning in most mainstream songs.\n\nThis is regarded as one of the best sections Cobain ever wrote. The repetition of “hello” sounds rather simple, even dumb and silly. By just a slight change in pronunciation, it becomes a typical, depression-oriented Nirvana line, with “how low” being a commentary on Kurt’s mood.\n\nAn alternative interpretation paints this section as a criticism of how some artists write their lyrics: with basic, silly repetition. “How low” is an expression of Kurt’s feelings about how the music industry has become one in which sounds and catchiness are more important than depth and meaning.")

Referent.create(track_id: 4, fragment: "[Guitar Solo]")
Annotation.create(author_id: 2, referent_id: 4, body: "Kurt Cobain’s guitar solo is as simple as the chords required to this song. This guitar part is very similar to vocal line sung by Kurt in Verse 1 and Verse 2. It’s also probably one of the best known guitar solos in the history of Rock music, even if it’s just the melody of the verse.")

Referent.create(track_id: 9, fragment: "I'm sure you've heard it all before\nBut you never really had a doubt")
Annotation.create(author_id: 3, referent_id: 5, body: "The line “I’m sure you’ve heard it all before” is in reference to the promises that other people have told him/her in previous friend- or relationships. Despite being let down by these people, the person has never doubted their good intentions.")

Referent.create(track_id: 9, fragment: "Because maybe\nYou're gonna be the one that saves me\nAnd after all\nYou're my wonderwall")
Annotation.create(author_id: 3, referent_id: 6, body: "According to Noel Gallagher, a “Wonderwall” describes, “an imaginary friend who’s gonna come and save you from yourself”. However, Liam Gallagher said that, “It’s just a beautiful word.”\n\nSometimes, you need to lay down some hard truths to great friends to save them from whatever trouble they’ve gotten themselves into. This is the only way of saving them from themselves.")
