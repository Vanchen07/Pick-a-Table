class Api::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all.includes(:time_slots)
        render :index
    end 

    def show
        @restaurant = Restaurant.find_by(name: params[:id])
        render :show
    end 

end