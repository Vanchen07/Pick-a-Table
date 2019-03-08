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

    def image_url
        ActionController::Base.helpers.asset_path("restaurant_heads/#{name}")
    end

    def remaining_capacity_for_time_slot(time_slot)
        capacity - reservations.where(time_slot_id: time_slot.id).sum(&:party_size)
    end

    def fully_booked_for_time_slot?(time_slot)
        remaining_capacity_for_time_slot(time_slot) <= 0
    end

    def remaining_time_slots_for_today(limit: 6)
        time_slots.where("start_time BETWEEN ? AND ?", DateTime.now, DateTime.now.end_of_day).first(6)
    end

    def formatted_opening_hour
        opening_hour.strftime('%l:%M %p')
    end

    def formatted_closing_hour
        closing_hour.strftime('%l:%M %p')
    end

end
