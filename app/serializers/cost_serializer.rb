class CostSerializer < ActiveModel::Serializer
  attributes :id, :hours, :employee_id, :activity_id
end
