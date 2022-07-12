class EventSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :venue_id, :user_id, :date, :time

  # belongs_to :user


end
