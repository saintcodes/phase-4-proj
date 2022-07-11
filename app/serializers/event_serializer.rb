class EventSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :venue_id, :created_by, :date, :time
end
