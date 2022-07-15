class EventSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :venue_id, :venue_info, :user_name, :user_id, :date, :time, :game_info
  belongs_to :venue

  # belongs_to :user
  def venue_info
    self.object.venue.location
  end

  def game_info
    self.object.game
  end

  def user_name
    self.object.user.username
  end


end
