# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "Seeding users..."
user1 = User.create(username: "ozz", password: "asdf")
user2 = User.create(username: "georgia", password: "1234")
user3 = User.create(username: "bobby", password: "asdf")
user4 = User.create(username: "emt", password: "1234")
user5 = User.create(username: "nnlt", password: "asdf")
user6 = User.create(username: "yxg", password: "1234")
user7 = User.create(username: "candies", password: "asdf")
user8 = User.create(username: "wakkawakka", password: "1234")
user9 = User.create(username: "yml", password: "asdf")
user10 = User.create(username: "schadek", password: "1234")
user11 = User.create(username: "dolma", password: "asdf")
user12 = User.create(username: "imallin", password: "1234")
user13 = User.create(username: "densnowden", password: "asdf")
user14 = User.create(username: "wild4stylez", password: "1234")

puts "Seeding games..."
game1 = Game.create(name: 'Basketball-Full Court', no_of_players: 10, image: "https://media.istockphoto.com/photos/orange-basketball-ball-on-wooden-parquet-closeup-image-of-basketball-picture-id1292401641?k=20&m=1292401641&s=612x612&w=0&h=OSoLBcvlm1uUD70lCj-e1SmC-00ejy2TKj-6U6bpyUU=")
game2 = Game.create(name: 'Basketball-Half Court', no_of_players: 6, image: "https://media.istockphoto.com/photos/orange-basketball-ball-on-wooden-parquet-closeup-image-of-basketball-picture-id1292401641?k=20&m=1292401641&s=612x612&w=0&h=OSoLBcvlm1uUD70lCj-e1SmC-00ejy2TKj-6U6bpyUU=")
game3 = Game.create(name: 'Baseball', no_of_players: 13, image: "https://coastsportstoday.com/wp-content/uploads/2018/04/baseball-stock-art.jpg")
game4 = Game.create(name: 'Pickleball', no_of_players: 2, image: "https://i5.walmartimages.com/asr/fc2a54bf-6d61-4058-a6b8-0435b3337931.7ff2f15081bc2f9699c7ac5d1cbd7e1f.jpeg")
game5 = Game.create(name: 'Handball-Singles', no_of_players: 2, image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2013/06/05/1331595499670_2/red-bull-slaps-competitor-in-handball-action")
game6 = Game.create(name: 'Handball-Doubles', no_of_players: 4, image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2013/06/05/1331595499670_2/red-bull-slaps-competitor-in-handball-action")
game7 = Game.create(name: 'Tennis-Singles', no_of_players: 2, image: "https://media.istockphoto.com/photos/tennis-court-with-tennis-ball-close-up-picture-id471621500?k=20&m=471621500&s=612x612&w=0&h=svV37qFsUIRFsAUBosrXrodQxwTWhEcWjwo2XJto8DI=")
game8 = Game.create(name: 'Tennis-Doubles', no_of_players: 4, image: "https://media.istockphoto.com/photos/tennis-court-with-tennis-ball-close-up-picture-id471621500?k=20&m=471621500&s=612x612&w=0&h=svV37qFsUIRFsAUBosrXrodQxwTWhEcWjwo2XJto8DI=")
game9 = Game.create(name: 'Poker', no_of_players: 8, image: "https://thumbs.dreamstime.com/b/worst-hand-poker-27206324.jpg")
game10 = Game.create(name: 'Volleyball', no_of_players: 4, image: "https://media.istockphoto.com/photos/high-school-volleyball-match-in-gymnasium-picture-id498130725?k=20&m=498130725&s=612x612&w=0&h=PGPd7Rr-Qxuwn9Ks6T48yynSacJ4_6M2z8KDVhfPjKw=")

puts "Seeding venues..."
venue1 = Venue.create(location: 'Park1')
venue2 = Venue.create(location: 'Park2')
venue3 = Venue.create(location: 'Park3')
venue4 = Venue.create(location: 'Park4')

puts "Seeding events..."
Event.create(game_id: game1.id, venue_id: venue1.id, user_id: user1.id, date: "06/25/2022", time: "09:00AM")
Event.create(game_id: game1.id, venue_id: venue2.id, user_id: user3.id, date: "08/25/2022", time: "12:00PM")
Event.create(game_id: game2.id, venue_id: venue2.id, user_id: user11.id, date: "06/25/2022", time: "09:00AM")
Event.create(game_id: game3.id, venue_id: venue3.id, user_id: user8.id, date: "06/25/2022", time: "09:00AM")
Event.create(game_id: game4.id, venue_id: venue4.id, user_id: user10.id, date: "06/25/2022", time: "09:00AM")
Event.create(game_id: game5.id, venue_id: venue1.id, user_id: user7.id, date: "06/25/2022", time: "09:00AM")
Event.create(game_id: game6.id, venue_id: venue2.id, user_id: user4.id, date: "06/25/2022", time: "09:00AM")
Event.create(game_id: game7.id, venue_id: venue3.id, user_id: user3.id, date: "06/25/2022", time: "09:00AM")
Event.create(game_id: game8.id, venue_id: venue4.id, user_id: user12.id, date: "06/25/2022", time: "09:00AM")
Event.create(game_id: game9.id, venue_id: venue1.id, user_id: user14.id, date: "06/25/2022", time: "09:00AM")

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