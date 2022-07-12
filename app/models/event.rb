class Event < ApplicationRecord
  belongs_to :game
  belongs_to :venue
  belongs_to :user

end
