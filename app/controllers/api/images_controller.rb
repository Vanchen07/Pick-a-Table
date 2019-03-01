class Api::ImagesController < ApplicationController

    def index
        images = ['restaurant1.jpg', 'restaurant2.jpg', 'restaurant3.jpg'].map do |image|
            {url: ActionController::Base.helpers.asset_path("#{image}"), alt: 'restaurant splash'}
        end

        render json: {images: images}
    end 

end