class TimeSlot < ApplicationRecord

    has_many :reservations

    belongs_to :restaurant

    def formatted_start_time
        start_time.strftime('%l:%M %p')
    end
end
