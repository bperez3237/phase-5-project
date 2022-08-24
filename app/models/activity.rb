class Activity < ApplicationRecord
    validates :cost_code_id, :description, presence: true


    has_many :costs
    has_many :employees, through: :costs

    belongs_to :cost_code 


    def total_hours
        if self.costs
            value = self.costs.sum("hours")
        else 
            value = 0
        end
        value
    end
end
