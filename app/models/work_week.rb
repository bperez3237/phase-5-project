class WorkWeek < ApplicationRecord

    has_many :activities
    has_many :cost_codes, through: :activities
    has_many :units
end
