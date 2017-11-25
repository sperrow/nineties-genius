class UpdateTracksTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :album_id
    add_column :tracks, :track_number, :integer
    add_column :tracks, :album_id, :integer
  end
end
