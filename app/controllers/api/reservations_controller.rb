class Api::ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new(reservation_params)
        
        if @reservation.save
            render :show
        else 
            render  json: @reservation.errors.full_messages
        end 
    end 

    def index
        @reservations = Reservation.all
        render :index
    end 

    def show
        @reservation = Reservation.find_by(params[:id])
        render :show
    end 

    def destroy
        @reservation = Reservation.find_by(params[:id])
        @reservation.destroy
        @reservations = Reservation.all
        render :index
    end 

    private
    def reservation_params
        params.require(:reservation).permit(:time_slot_id, :party_size, :restaurant_id, :user_id, :date)
    end 

end
