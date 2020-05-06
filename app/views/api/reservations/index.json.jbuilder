json.array! @reservations do |reservation|
    json.partial! 'api/reservations/reservation', reservation: reservation
    json.restaurant reservation.restaurant.name
    json.time reservation.time_slot.start_time
end

