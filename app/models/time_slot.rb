class TimeSlot < ApplicationRecord

    has_many :reservations

    belongs_to :restaurant

    def formatted_start_time
        formatted_hour = 0

        if start_time < 12
            formatted_hour = "#{start_time.to_i}:00 AM"
        elsif start_time > 12
            formatted_hour = "#{start_time - 12}:00 PM"
        else  
            formatted_hour = "12:00 PM"
        end

        formatted_hour
    end
end
