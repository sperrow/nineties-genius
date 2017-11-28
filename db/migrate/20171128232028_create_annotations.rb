class CreateAnnotations < ActiveRecord::Migration[5.1]
  def change
    create_table :annotations do |t|
      t.integer :author_id, null: false
      t.integer :referent_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :annotations, :referent_id
  end
end
