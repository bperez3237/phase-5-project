class WorkWeekCostCodeSerializerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :code, :budget_hours, :budget_quantity, :unit_of_measure, :name, :units, :activities, :last_week_hours, :last_week_quantity, :last_week_cost, :ave_labor_rate, :production_rate, :estimated_value


  has_many :activities
  has_many :units


  def units
    self.object.units.where(work_week_id: @instance_options[:work_week_id])
  end

  def activities
    self.object.activities.where(work_week_id: @instance_options[:work_week_id])
  end

  def last_week_hours
    self.object.hours(@instance_options[:work_week_id])
  end
  
  def last_week_quantity
    self.object.quantity(@instance_options[:work_week_id])
  end

  def last_week_cost
    self.object.total_cost(@instance_options[:work_week_id])
  end

  def ave_labor_rate
    if last_week_hours != 0
      last_week_cost/last_week_hours
    else 
      0
    end
  end

  def estimated_value
    value_earned = Unit.where(work_week_id: @instance_options[:work_week_id], cost_code_id: self.object.id).sum {|unit| unit.value_earned}
    value_earned
  end


end
