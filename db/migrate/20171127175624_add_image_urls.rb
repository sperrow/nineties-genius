class AddImageUrls < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :img_url, :string
    add_column :artists, :img_url, :string
  end
end
