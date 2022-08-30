class CostCodeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :code, :budget_hours, :budget_quantity, :unit_of_measure, :name
end
