class CostSerializer < ActiveModel::Serializer
  attributes :id, :hours, :employee_id, :activity_id, :price

  def price
    self.object.labor_cost
  end
end
