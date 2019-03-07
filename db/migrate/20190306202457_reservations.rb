class Reservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :party_size
      t.date :date
      t.integer :restaurant_id
      t.integer :user_id
      t.integer :time_slot_id

      t.timestamps
    end

    add_index :reservations, :restaurant_id
    add_index :reservations, :user_id
    add_index :reservations, :time_slot_id
  end
end
