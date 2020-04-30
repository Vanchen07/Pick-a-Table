
class CreateTimeSlotsService

    # TIME_ZONE = 'Pacific Time (US & Canada)'

    # def initialize(restaurant, datetime)
    #     @restaurant = restaurant
    #     @datetime = datetime
    # end

    # def create!
    #     start_hour = @restaurant.opening_hour.in_time_zone(TIME_ZONE).hour
    #     end_hour = @restaurant.closing_hour.in_time_zone(TIME_ZONE).hour

    #     start_of_day = @datetime.beginning_of_day.in_time_zone(TIME_ZONE)

    #     (start_hour..end_hour).step(0.5).to_a.each do |hour|
    #         t = TimeSlot.where(restaurant_id: @restaurant.id, start_time: start_of_day + hour.hours).first_or_initialize
    #         t.save!
    #     end

    # end
end