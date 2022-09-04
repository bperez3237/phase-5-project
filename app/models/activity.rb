class Activity < ApplicationRecord
    validates :cost_code_id, :description, presence: true


    has_many :costs
    has_many :employees, through: :costs

    belongs_to :cost_code 
    belongs_to :work_week


    def total_hours
        sum = self.costs.sum {|cost| cost.hours }
        sum
    end

    def total_cost
        sum = self.costs.sum {|cost| cost.labor_cost}
        sum
    end
end
