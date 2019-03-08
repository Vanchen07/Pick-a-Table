class AddRestaurantToTimeslot < ActiveRecord::Migration[5.2]
  def change
    add_column :time_slots, :restaurant_id, :integer, index: true
  end
end
