class EventsController < ApplicationController

  def index
    render json: Event.all, status: :ok
  end

  def show
    event = Event.find(params[:id])
    # binding.pry
  #   events = game.events.map do |event|
  #     {
  #       venue: event.venue.location,
  #       date: event.date,
  #       time: event.time
  #     }
  #   end
  #   render json: { game: game, events: events }, status: :ok
  # end
    
  
  # event = Event.find(params[:id])
    # events = game.events
    # render json: event.to_json(include: [:game, :venue]), status: :ok
    # render json: event.to_json(include: [:venue]), status: :ok
    render json: event, status: :ok
  
    
  end
  
end
