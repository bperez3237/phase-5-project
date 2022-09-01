class Cost < ApplicationRecord
    validates :activity_id, :employee_id, :hours, presence: true


    belongs_to :employee
    belongs_to :activity

    def labor_cost
        result = self.employee.labor_rate * self.hours
        result
    end
end
