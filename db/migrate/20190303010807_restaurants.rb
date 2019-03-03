class Restaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :price_range
      t.text :description
      t.text :address
      t.string :website
      t.string :phone_number
      t.string :dining_style
      t.string :dress_code
      t.integer :neighborhood_id
      t.integer :cuisine_id

      t.timestamps
    end

    add_index :restaurants, :neighborhood_id
    add_index :restaurants, :cuisine_id
  end
end
