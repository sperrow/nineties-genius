class CreateCommentLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :comment_likes do |t|
      t.integer :author_id, null: false
      t.integer :comment_id, null: false

      t.timestamps
    end

    add_index :comment_likes, :comment_id
  end
end
