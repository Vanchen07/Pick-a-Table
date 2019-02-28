class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false 
    remove_column :users, :username
    remove_column :users, :name
  end
end
