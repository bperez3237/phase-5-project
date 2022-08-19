class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :cost_code_id, :costs, :cost_code
end
