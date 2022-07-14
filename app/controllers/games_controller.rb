class GamesController < ApplicationController

  def index
    # binding.pry
    games = Game.all
    render json: games, status: :ok
  end

  def show
    game = Game.find(params[:id])
    # events = game.events.map do |event|
    #   {
    #     venue: event.venue.location,
    #     date: event.date,
    #     time: event.time
    #   }
    # end

  #   render json: { game: game, events: events }, status: :ok
  # end

    render json: game, status: :ok
  end

end
