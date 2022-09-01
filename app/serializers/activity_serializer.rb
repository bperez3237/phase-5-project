class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :cost_code_id, :costs, :cost_code, :date, :approved, :total_hours

  def total_hours
    self.object.total_hours
  end
end
