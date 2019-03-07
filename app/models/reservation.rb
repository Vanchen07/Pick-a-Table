class Reservation < ApplicationRecord

    belongs_to :time_slot

    belongs_to :user

    belongs_to :restaurant
end
