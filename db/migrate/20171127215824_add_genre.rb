class AddGenre < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :genre, :string, default: "pop", null: false
  end
end
