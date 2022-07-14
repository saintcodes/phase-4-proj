class GamesController < ApplicationController

  def index
    # binding.pry
    games = Game.all
    render json: games, status: :ok
  end

  def show
    game = Game.find(params[:id])
    event_info = game.events.map do |event|
      {
        venue: event.venue.location,
        date: event.date,
        time: event.time
      }
    end

    render json: { game: game, event_info: event_info }, status: :ok
  end

end
