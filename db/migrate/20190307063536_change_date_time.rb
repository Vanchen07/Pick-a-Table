class ChangeDateTime < ActiveRecord::Migration[5.2]
  def change
    remove_column :time_slots, :start_time
    remove_column :time_slots, :date
    add_column :time_slots, :start_time, :datetime
  end
end
