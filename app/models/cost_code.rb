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


    def production_rate(work_week_id=nil)
        if work_week_id != nil
            self.quantity(work_week_id)/self.hours(work_week_id)
        else
            self.budget_quantity/self.budget_hours
        end
    end


    def ave_labor_rate(work_week_id=nil)
        if work_week_id != nil && self.hours(work_week_id) != 0
            self.total_cost(work_week_id)/self.hours(work_week_id)
        else
            self.total_cost/self.hours
        end
    end

    def total_cost(work_week_id=nil)
        if work_week_id != nil
            sum = self.activities.where(work_week_id: work_week_id).sum {|activity| activity.total_cost}
        else 
            sum = self.activities.sum {|activity| activity.total_cost}
        end
        sum
    end

    def self.total_cost
        sum = CostCode.all.sum {|cost_code| cost_code.total_cost}
        sum
    end

    def self.total_hours
        sum = CostCode.all.sum {|cost_code| cost_code.hours}
        sum
    end

    def self.project_budget_hours
        sum = CostCode.all.sum {|cost_code| cost_code.budget_hours}
        sum
    end


end
