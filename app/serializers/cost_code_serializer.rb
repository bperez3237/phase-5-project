class CostCodeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :code, :budget_hours, :budget_quantity, :current_hours, :current_quantity
end
