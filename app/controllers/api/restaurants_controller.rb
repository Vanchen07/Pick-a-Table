class Api::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.includes(:time_slots).all
        render :index
    end 

    def show
        @restaurant = Restaurant.find_by(name: params[:id])
        render :show
    end 

    private
    def restaurant_params
        
    end

end