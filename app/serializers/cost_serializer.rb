class CostSerializer < ActiveModel::Serializer
  attributes :id, :hours, :employee_id, :cost_code_id, :activity_id
end
