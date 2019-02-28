class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name, :string, null: false
    add_column :users, :name, :string
  end
end
