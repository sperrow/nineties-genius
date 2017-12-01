class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.string :img_url, null: false
      t.string :site_url, null: false
      t.string :title, null: false

      t.timestamps
    end
  end
end
