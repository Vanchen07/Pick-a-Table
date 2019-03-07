class Api::TimeSlotsController < ApplicationController

    def index
        @time_slots = TimeSlot.all
        render :index
    end 

    def show
        @time_slot = TimeSlot.find_by(params[:id])
        render :show
    end 

end
