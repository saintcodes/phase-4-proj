class User < ApplicationRecord
  has_many :events
  has_many :games, through: :events
  has_secure_password
end
