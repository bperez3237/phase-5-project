class WorkWeek < ApplicationRecord

    has_many :activities
    has_many :units
end
