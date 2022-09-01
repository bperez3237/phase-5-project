class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :labor_rate, :labor_union

  has_many :costs

end
