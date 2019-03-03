class AddNewColumnsToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :opening_hour, :time
    add_column :restaurants, :closing_hour, :time
  end
end
