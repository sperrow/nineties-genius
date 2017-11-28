class CreateReferents < ActiveRecord::Migration[5.1]
  def change
    create_table :referents do |t|
      t.integer :track_id, null: false
      t.text :fragment, null: false

      t.timestamps
    end

    add_index :referents, :track_id
  end
end
