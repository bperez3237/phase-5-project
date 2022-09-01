class UnitSerializer < ActiveModel::Serializer
  attributes :id, :cost_code_id, :quantity

  belongs_to :cost_code
end
