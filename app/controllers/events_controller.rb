class EventsController < ApplicationController

  def index
    render json: Event.all, status: :ok
  end

  def show
    event = Event.find(params[:id])
    render json: event, status: :ok
  end
  
  def destroy
    event = Event.find(params[:id])
    event.destroy
    head :no_content
  end

end
