class CostCode < ApplicationRecord
    belongs_to :user
    has_many :activities
    has_many :costs, through: :activities
    has_many :work_weeks, through: :activities
    has_many :units

    validates :code, uniqueness: true

    def hours(work_week_id=nil)
        if work_week_id != nil
            sum = self.costs.joins(:activity).where(activities: {work_week_id: work_week_id}).sum {|cost| cost.hours }
        else 
            sum = self.costs.sum {|cost| cost.hours }
        end
        sum
    end

    def quantity(work_week_id=nil)
        if work_week_id != nil
            sum = self.units.where(work_week_id: work_week_id).sum {|unit| unit.quantity }
        else 
            sum = self.units.sum {|unit| unit.quantity }
        end
        sum
    end

    def total_cost(work_week_id=nil)
        if work_week_id != nil
            sum = self.activities.where(work_week_id: work_week_id).sum {|activity| activity.total_cost}
        else 
            sum = self.activities.sum {|activity| activity.total_cost}
        end
        sum
    end

end
