class WorkWeekSerializer < ActiveModel::Serializer
  attributes :id, :end_date, :activities, :units, :cost_codes, :total_cost, :total_hours, :estimated_value

  has_many :activities
  has_many :cost_codes, serializer: CostCodeShortSerializer, through: :activities

  has_many :units

  def cost_codes
    self.object.cost_codes.distinct
  end

  def total_cost
    sum = self.object.activities.sum {|activity| activity.total_cost}
    sum
  end

  def total_hours
    sum = self.object.activities.sum {|activity| activity.total_hours}
    sum
  end

  def estimated_value
    value_earned = Unit.where(work_week_id: self.object.id).sum {|unit| unit.value_earned}
    value_earned - total_cost
  end
 
end

