class Activity < ApplicationRecord
    validates :cost_code_id, :description, presence: true


    has_many :costs
    has_many :employees, through: :costs

    belongs_to :cost_code 


    def total_hours
        if activity.costs
            sum = activity.costs.sum("hours")
            render json: sum
        else 
            render json: 0
        end
    end
end
