class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :cost_code_id
end
