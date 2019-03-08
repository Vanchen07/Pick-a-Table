json.extract! restaurant, :id, :name, :price_range, :description, :address, :website, :phone_number, :dining_style, :dress_code, :neighborhood_name, :cuisine_type, :formatted_opening_hour, :formatted_closing_hour
json.remaining_time_slots do
    json.array! restaurant.remaining_time_slots_for_today do |time_slot|
        json.partial! 'api/time_slots/time_slot', time_slot: time_slot
    end
end