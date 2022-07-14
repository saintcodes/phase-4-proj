class Game < ApplicationRecord
  has_many :events
  has_many :venues, through: :events
  # has_many :users, through: :events
end
