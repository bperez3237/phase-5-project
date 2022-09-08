class WorkWeekSerializer < ActiveModel::Serializer
  attributes :id, :end_date, :activities, :units, :cost_codes, :total_cost, :total_hours

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
 
end

