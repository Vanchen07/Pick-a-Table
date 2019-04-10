class Api::TimeSlotsController < ApplicationController
    def index
        render :index
    end 

    def show
        @time_slot = TimeSlot.find_by(params[:id])
        render :show
    end 

end
