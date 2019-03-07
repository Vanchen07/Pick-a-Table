class Restaurant < ApplicationRecord
    validates :name, presence: true

    belongs_to :neighborhood

    belongs_to :cuisine

    has_many :reservations

    def neighborhood_name
        neighborhood.name
    end

    def cuisine_type
        cuisine.name 
    end

    def image_url
        ActionController::Base.helpers.asset_path("restaurant_heads/#{name}")
    end

end
