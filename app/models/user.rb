class User < ApplicationRecord
  has_many :events
  has_many :games, through: :events
  # validates :username, uniqueness: true, presence: true
  # validates :password, presence: true, length: {greater_than_or_equal_to: 4}
  has_secure_password
end
