require 'faker'

puts 'seeding work weeks'
w1 = WorkWeek.create(end_date: '2022-09-25')
w1 = WorkWeek.create(end_date: '2022-09-18')
w1 = WorkWeek.create(end_date: '2022-09-11')
w1 = WorkWeek.create(end_date: '2022-09-04')

puts 'seeding users'
my_user = User.create(username: 'brian123', password_digest: 'password', name: 'Brian')
u1 = User.create(username: Faker::Internet.unique.username, password_digest: 'password3', name: Faker::Name.name )
u2 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u3 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u4 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u5 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )
u6 =  User.create(username: Faker::Internet.unique.username, password_digest: Faker::Internet.unique.password, name: Faker::Name.name )

puts 'seeding cost codes'
cc1 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-1000', name: 'Formwork', budget_hours: 1700, budget_quantity: 34, unit_of_measure: 'SF' )
cc2 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-1900', name: 'Pour Concrete', budget_hours: 2000, budget_quantity: 68, unit_of_measure: 'CY')
cc3 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '33-3100', name: 'Trenching', budget_hours: 300, budget_quantity: 102, unit_of_measure: 'CY')
cc4 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '05-6000', name: 'Erect Steel', budget_hours: 4000, budget_quantity: 23, unit_of_measure: 'EA')
cc5 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '33-2500', name: 'Install Steam Pipe', budget_hours: 700, budget_quantity: 50, unit_of_measure: 'LF')
cc6 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-2300', name: 'Pave Walkways', budget_hours: 700, budget_quantity: 50,unit_of_measure: 'SF' )
cc7 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '03-1100', name: 'Site Cleanup', budget_hours: 700, budget_quantity: 50,unit_of_measure: 'HR' )
cc8 = CostCode.create(user_id: User.order('RANDOM()').first.id, code: '33-2600', name: 'Excavate Foundation', budget_hours: 700, budget_quantity: 50, unit_of_measure: 'CY')


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