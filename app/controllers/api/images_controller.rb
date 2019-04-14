class Api::ImagesController < ApplicationController

    def index
        images = get_images(['restaurant1.jpg', 'restaurant2.jpg', 'restaurant3.jpg'])

        render json: {images: images}
    end 

    def cuisines
        images = get_images(['cuisines/cuisine_1.jpg', 'cuisines/cuisine_2.jpg', 'cuisines/cuisine_3.jpg', 'cuisines/cuisine_4.jpg'])
        render json: {images: images}
    end

    def neighborhoods
        images = get_images(['neighborhoods/neighborhood_1.jpg', 'neighborhoods/neighborhood_2.jpg', 'neighborhoods/neighborhood_3.jpg', 'neighborhoods/neighborhood_1.jpg', 'neighborhoods/neighborhood_2.jpg', 'neighborhoods/neighborhood_3.jpg'])

        render json: {images: images}
    end

    def restaurants
        images = get_images(['restaurants/restaurant_1.jpg', 'restaurants/restaurant_2.jpg', 'restaurants/restaurant_3.jpg'])

        render json: {images: images}
    end

    def get_images(image_array)
        image_array.map do |image|
            {url: ActionController::Base.helpers.asset_path("#{image}"), alt: 'restaurant splash'}
        end
    end


end