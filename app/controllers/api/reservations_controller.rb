class Api::ReservationsController < ApplicationController

    def create
        @reservation = Reservation.new(reservation_params)
        render :show
    end 

    def index
        @reservations = Reservation.all
        render :index
    end 

    def show
        @reservation = Reservation.find_by(params[:id])
    end 

    private
    def reservation_params
        params.require(:id).permit(:date, :party_size)
    end 

end
