class DropOperatingHoursTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :operating_hours
  end
end
