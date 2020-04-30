class UpdateStartTime < ActiveRecord::Migration[5.2]
  def change
    remove_column :time_slots, :start_time
    add_column :time_slots, :start_time, :integer
  end
end
