class Activity < ApplicationRecord
    has_many :costs
    has_many :employees, through: :costs

    belongs_to :cost_code
end
