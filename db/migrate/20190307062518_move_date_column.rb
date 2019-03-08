class MoveDateColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :date 
    add_column :time_slots, :date, :date
  end
end
