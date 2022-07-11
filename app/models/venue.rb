class Venue < ApplicationRecord
  has_many :events
  has_many :games, through: :events
end
