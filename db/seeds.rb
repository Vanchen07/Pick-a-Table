# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#create users
User.destroy_all 

user1 = User.create({first_name: "guest", last_name: "user", email: "Demo_User@demo.com", password: "password"})


require 'csv'

#create neighborhoods
Neighborhood.destroy_all

csv_text = File.read(Rails.root.join('lib', 'seeds', 'neigborhoods.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    Neighborhood.create!(name: row[0])
    puts "created #{row[0]}"
end

#create cuisines
Cuisine.destroy_all

csv_text = File.read(Rails.root.join('lib', 'seeds', 'cuisines.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
   Cuisine.create!(name: row[0])
end

#create restaurants
Restaurant.destroy_all

csv_text = File.read(Rails.root.join('lib', 'seeds', 'restaurant_seed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    Restaurant.create!(
        name: row[0],
        price_range: row[1],
        description: row[2],
        address: row[3],
        website: row[4],
        phone_number: row[5],
        dining_style: row[6],
        dress_code: row[7],
        neighborhood_id: Neighborhood.find_by(name: row[8]).id,
        cuisine_id: Cuisine.find_by(name: row[9]).id,
        opening_hour: Time.parse(row[10]),
        closing_hour: Time.parse(row[11]),
    )
    puts "created #{row[0]}"
end