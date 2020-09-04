json.extract! reservation, :id, :party_size, :date, :user_id, :restaurant_id
json.restaurant reservation.restaurant.name
json.time reservation.time_slot.start_time 