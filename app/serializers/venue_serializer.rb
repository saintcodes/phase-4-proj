class VenueSerializer < ActiveModel::Serializer
  attributes :id, :location
  has_many :events

end
