class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :operating_hours do |t|

      t.timestamps
    end
  end
end
