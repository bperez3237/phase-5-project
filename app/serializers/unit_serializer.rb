class UnitSerializer < ActiveModel::Serializer
  attributes :id, :cost_code_id, :work_week_id,:quantity, :value_earned

  belongs_to :cost_code, serializer: WorkWeekCostCodeSerializerSerializer

  def value_earned
    work_week_id = self.object.work_week.id
    if self.object.cost_code.production_rate != 0
      self.object.cost_code.ave_labor_rate(work_week_id)*self.object.quantity/self.object.cost_code.production_rate
    else
      0
    end
  end

end
