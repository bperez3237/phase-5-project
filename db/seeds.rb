require 'faker'
require 'byebug'



puts 'seeding users'
my_user = User.create(username: 'brian123', password_digest: 'password', name: 'Brian')
u1 = User.create(username: Faker::Internet.unique.username, password_digest: 'password3', name: Faker::Name.name )
u2 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u3 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u4 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u5 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u6 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )

puts 'seeding cost codes'
# byebug/
cc1 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-1000', name: 'nb formwork', budget_hours: 1700, budget_quantity: 34, unit_of_measure: 'SF' )
# puts 'one seeds'
cc2 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-1900', name: 'concrete', budget_hours: 2000, budget_quantity: 68, unit_of_measure: 'CY')
cc3 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '33-3100', name: 'trenching', budget_hours: 300, budget_quantity: 102, unit_of_measure: 'CY')
cc4 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '05-6000', name: 'structural steel', budget_hours: 4000, budget_quantity: 23, unit_of_measure: 'EA')
cc5 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '33-2500', name: 'utilities', budget_hours: 700, budget_quantity: 50, unit_of_measure: 'LF')
cc6 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-2300', name: 'ductbanks', budget_hours: 700, budget_quantity: 50,unit_of_measure: 'CY' )
cc7 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-1100', name: 'eb formwork', budget_hours: 700, budget_quantity: 50,unit_of_measure: 'SF' )
cc8 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '33-2600', name: 'utilities', budget_hours: 700, budget_quantity: 50, unit_of_measure: 'SF')



puts 'seeding employees'
e1 = Employee.create(name: 'Vincent Delessio' , labor_rate: 50.05, labor_union: 'Carpenter')
e2 = Employee.create(name: 'Melvin Galloway' , labor_rate: 50.05, labor_union: 'Carpenter')
e3 = Employee.create(name: 'Flavio' , labor_rate: 60.0, labor_union: 'Dockbuilder')
e4 = Employee.create(name: 'Paul Armour' , labor_rate: 43.5, labor_union: 'Laborer')
e5 = Employee.create(name: 'Sam Footman' , labor_rate: 43.5, labor_union: 'Laborer')
e6 = Employee.create(name: 'Terrell Smalls' , labor_rate: 50.05, labor_union: 'Carpenter')
e7 = Employee.create(name: 'James Tretola' , labor_rate: 60.0, labor_union: 'Dockbuilder')
e8 = Employee.create(name: 'Chris Sollin' , labor_rate: 43.5, labor_union: 'Laborer')



puts 'done seeding'