class CostCodeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :code, :budget_hours, :budget_quantity, :unit_of_measure, :name, :units, :activities, :current_hours, :current_quantity

  def current_hours
    self.object.hours
  end

  def current_quantity
    self.object.quantity
  end
end
