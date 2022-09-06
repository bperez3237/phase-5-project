class WorkWeekCostCodeSerializerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :code, :budget_hours, :budget_quantity, :unit_of_measure, :name, :units, :activities, :last_week_hours, :last_week_quantity, :last_week_cost


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
end
