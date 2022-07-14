class User < ApplicationRecord
  has_many :events
  has_many :games, through: :events
  validates :username, uniqueness: true, presence: true
  validates :password, presence: true
  has_secure_password
end
