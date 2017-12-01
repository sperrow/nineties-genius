class CreateAnnotationLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :annotation_likes do |t|
      t.integer :author_id, null: false
      t.integer :annotation_id, null: false

      t.timestamps
    end

    add_index :annotation_likes, :annotation_id
  end
end
