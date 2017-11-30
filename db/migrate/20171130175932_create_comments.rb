class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
      t.integer :commentable_id
      t.string :commentable_type
      t.references :commentable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
