class Unit < ApplicationRecord
    validates :quantity, :cost_code_id, :work_week_id, presence: true
    validates :quantity, numericality: true

    belongs_to :cost_code
    belongs_to :work_week

    def value_earned
        work_week_id = self.work_week.id
        if self.cost_code.production_rate != 0
          self.cost_code.ave_labor_rate(work_week_id)*self.quantity/self.cost_code.production_rate
        else
          0
        end
      end
end
