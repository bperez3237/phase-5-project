require 'faker'
require 'byebug'



puts 'seeding users'
my_user = User.create(username: 'brian123', password_digest: 'password', name: 'Brian')
u1 = User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u2 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u3 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u4 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u5 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u6 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )

puts 'seeding cost codes'
cc1 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-1000', name: 'formwork', budget_hours: 1700, budget_quantity: 34, current_hours: 1400, current_quantity: 20)
cc2 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-1900', name: 'concrete', budget_hours: 2000, budget_quantity: 68, current_hours: 1640, current_quantity: 60)
cc3 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '33-3100', name: 'trenching', budget_hours: 300, budget_quantity: 102, current_hours: 110, current_quantity: 16)
cc4 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '05-6000', name: 'structural steel', budget_hours: 4000, budget_quantity: 23, current_hours: 160, current_quantity: 6)
cc5 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '33-2500', name: 'utilities', budget_hours: 700, budget_quantity: 50, current_hours: 300, current_quantity: 20)


puts 'seeding employees'
e1 = Employee.create(name: Faker::Name.name , labor_rate: 50.05, labor_union: 'Carpenter')
e2 = Employee.create(name: Faker::Name.name , labor_rate: 50.05, labor_union: 'Carpenter')
e3 = Employee.create(name: Faker::Name.name , labor_rate: 60.0, labor_union: 'Dockbuilder')
e4 = Employee.create(name: Faker::Name.name , labor_rate: 43.5, labor_union: 'Laborer')
e5 = Employee.create(name: Faker::Name.name , labor_rate: 43.5, labor_union: 'Laborer')



puts 'done seeding'