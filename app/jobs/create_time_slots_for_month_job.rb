class CreateTimeSlotsForMonthJob < ApplicationJob
    def perform
        start_time = DateTime.now
        end_time = start_time + 1.month

        (start_time..end_time).to_a.each do |datetime|
            Restaurant.all.each do |restaurant|
                CreateTimeSlotsService.new(restaurant, datetime).create!
            end
        end
    end
end