# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts "Seeding users..."
user1 = User.create(name: 'Osvaldo', username: "ozz")
user2 = User.create(name: 'Peachy', username: "georgia")
user3 = User.create(name: 'Robert', username: "bobby")
user4 = User.create(name: 'Norah', username: "emt")
user5 = User.create(name: 'NyiNyi', username: "nnlt")
user6 = User.create(name: 'YiXin', username: "yxg")
user7 = User.create(name: 'Micaela', username: "cannndiess")
user8 = User.create(name: 'Mark', username: "wakkawakka")
user9 = User.create(name: 'Yeming', username: "YML")
user10 = User.create(name: 'Corey', username: "schadek")
user11 = User.create(name: 'Tashi', username: "dolma")
user12 = User.create(name: 'James', username: "Imallin")
user13 = User.create(name: 'Akilah', username: "snowden")
user14 = User.create(name: 'Leigh', username: "harrystan")

puts "Seeding games..."
game1 = Game.create(name: 'Basketball-Full Court', no_of_players: 10)
game2 = Game.create(name: 'Basketball-Half Court', no_of_players: 6)
game3 = Game.create(name: 'Baseball', no_of_players: 13)
game4 = Game.create(name: 'Pickleball', no_of_players: 2)
game5 = Game.create(name: 'Handball-Singles', no_of_players: 2)
game6 = Game.create(name: 'Handball-Doubles', no_of_players: 4)
game7 = Game.create(name: 'Tennis-Singles', no_of_players: 2)
game8 = Game.create(name: 'Tennis-Doubles', no_of_players: 4)
game9 = Game.create(name: 'Poker', no_of_players: 8)
game10 = Game.create(name: 'Volleyball', no_of_players: 4)

puts "Seeding venues..."
venue1 = Venue.create(location: 'Park1')
venue2 = Venue.create(location: 'Park2')
venue3 = Venue.create(location: 'Park3')
venue4 = Venue.create(location: 'Park4')

puts "Seeding events..."
event1 = Event.create(game_id: game1.id, date: "06/25/2022", time: "09:00AM", created_by: user1.id, venue_id: venue1.id)
event2 = Event.create(game_id: game2.id, date: "06/25/2022", time: "09:00AM", created_by: user11.id, venue_id: venue2.id)
event3 = Event.create(game_id: game3.id, date: "06/25/2022", time: "09:00AM", created_by: user8.id, venue_id: venue3.id)
event4 = Event.create(game_id: game4.id, date: "06/25/2022", time: "09:00AM", created_by: user10.id, venue_id: venue4.id)
event5 = Event.create(game_id: game5.id, date: "06/25/2022", time: "09:00AM", created_by: user7.id, venue_id: venue1.id)
event6 = Event.create(game_id: game6.id, date: "06/25/2022", time: "09:00AM", created_by: user4.id, venue_id: venue2.id)
event7 = Event.create(game_id: game7.id, date: "06/25/2022", time: "09:00AM", created_by: user3.id, venue_id: venue3.id)
event8 = Event.create(game_id: game8.id, date: "06/25/2022", time: "09:00AM", created_by: user12.id, venue_id: venue4.id)
event9 = Event.create(game_id: game9.id, date: "06/25/2022", time: "09:00AM", created_by: user14.id, venue_id: venue1.id)

# puts " Seeding signups..."
# Signup.create(game: game.id, user: activity2.id)
# Signup.create(camper_id: camper1.id, activity_id: activity1.id)
# Signup.create(camper_id: camper1.id, activity_id: activity4.id)
# Signup.create(camper_id: camper2.id, activity_id: activity2.id)
# Signup.create(camper_id: camper2.id, activity_id: activity1.id)
# Signup.create(camper_id: camper4.id, activity_id: activity8.id)
# Signup.create(camper_id: camper5.id, activity_id: activity7.id)
# Signup.create(camper_id: camper3.id, activity_id: activity4.id)

puts "✅ Done seeding!"