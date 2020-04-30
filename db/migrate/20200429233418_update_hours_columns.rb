class UpdateHoursColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :opening_hour
    remove_column :restaurants, :closing_hour
    add_column :restaurants, :opening_hour, :string
    add_column :restaurants, :closing_hour, :string
  end
end
