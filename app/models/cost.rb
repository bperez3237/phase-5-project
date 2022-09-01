class Cost < ApplicationRecord
    validates :activity_id, :employee_id, :hours, presence: true


    belongs_to :employee
    belongs_to :activity

    def labor_cost
        product = self.employee.labor_rate * self.hours
        product
    end
end
