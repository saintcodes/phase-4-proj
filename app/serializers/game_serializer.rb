class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :no_of_players, :image
  has_many :events
  # has_many :users

end
