class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :cost_code_id, :costs, :cost_code, :date, :approved, :total_hours, :total_cost

  belongs_to :cost_code
  has_many :costs

  def total_hours
    self.object.total_hours
  end

  def total_cost
    self.object.total_cost
  end
end
