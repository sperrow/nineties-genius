# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171201014235) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "title", null: false
    t.integer "artist_id", null: false
    t.date "release_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_url"
    t.index ["artist_id"], name: "index_albums_on_artist_id"
    t.index ["title"], name: "index_albums_on_title"
  end

  create_table "annotation_likes", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "annotation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["annotation_id"], name: "index_annotation_likes_on_annotation_id"
  end

  create_table "annotations", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "referent_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["referent_id"], name: "index_annotations_on_referent_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_url"
    t.index ["name"], name: "index_artists_on_name", unique: true
  end

  create_table "comment_likes", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "comment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["comment_id"], name: "index_comment_likes_on_comment_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "author_id", null: false
    t.text "body", null: false
    t.bigint "commentable_id"
    t.string "commentable_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"
  end

  create_table "referents", force: :cascade do |t|
    t.integer "track_id", null: false
    t.text "fragment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["track_id"], name: "index_referents_on_track_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.integer "author_id", null: false
    t.text "lyrics", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "track_number"
    t.integer "album_id"
    t.string "genre", default: "pop", null: false
    t.index ["title"], name: "index_tracks_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
