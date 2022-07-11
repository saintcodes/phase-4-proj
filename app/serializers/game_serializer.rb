class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :no_of_players
end
