class Restaurant < ApplicationRecord
    validates :name, presence: true

    belongs_to :neighborhood

    belongs_to :cuisine

    has_many :reservations

    has_many :time_slots

    def neighborhood_name
        neighborhood.name
    end

    def cuisine_type
        cuisine.name 
    end

    def remaining_capacity_for_time_slot(time_slot)
        capacity - reservations.where(time_slot_id: time_slot.id).sum(&:party_size)
    end

    def fully_booked_for_time_slot?(time_slot)
        remaining_capacity_for_time_slot(time_slot) <= 0
    end

    def remaining_time_slots_for_today
        current_time = DateTime.now.hour

        time_slots.where("start_time > ? ", current_time).where("restaurant_id = ? ", self.id).limit(6)
    end

    def formatted_opening_hour
        formatted_hour = 0

        if opening_hour.to_i < 12
            formatted_hour = "#{opening_hour} AM"
        else
            temp = opening_hour.to_i - 12
            formatted_hour = "#{temp.to_s}:00 PM"
        end

        formatted_hour
    end

    def formatted_closing_hour
        formatted_hour = 0

        if closing_hour.to_i < 12
            formatted_hour = "#{closing_hour} AM"
        else
            temp = closing_hour.to_i - 12
            formatted_hour = "#{temp.to_s}:00 PM"
        end

        formatted_hour
    end

end
