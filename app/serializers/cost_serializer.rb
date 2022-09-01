class CostSerializer < ActiveModel::Serializer
  attributes :id, :hours, :employee_id, :activity_id, :labor_cost


  belongs_to :activity
  belongs_to :employee


  def labor_cost
    self.object.labor_cost
  end
end
