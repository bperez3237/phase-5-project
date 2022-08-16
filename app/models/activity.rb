class Activity < ApplicationRecord
    has_many :costs
    has_many :employees, through: :costs
    has_many :cost_codes, through: :costs
end
