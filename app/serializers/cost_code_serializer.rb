class CostCodeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :code, :budget_hours, :budget_quantity, :unit_of_measure, :name, :units, :activities, :current_hours, :current_quantity, :current_cost

  belongs_to :user
  has_many :activities
  has_many :units

  def current_hours
    self.object.hours
  end

  def current_quantity
    self.object.quantity
  end

  def current_cost
    self.object.total_cost
  end
end
