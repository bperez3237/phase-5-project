class UnitSerializer < ActiveModel::Serializer
  attributes :id, :cost_code_id, :work_week_id,:quantity, :value_earned

  belongs_to :cost_code, serializer: WorkWeekCostCodeSerializerSerializer

  def value_earned
    self.object.value_earned
  end

end
