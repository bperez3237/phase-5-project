class WorkWeekSerializer < ActiveModel::Serializer
  attributes :id, :end_date, :activities, :units, :cost_codes

  has_many :activities
  has_many :cost_codes, serializer: CostCodeShortSerializer, through: :activities

  has_many :units

  def cost_codes
    self.object.cost_codes.distinct
  end
end

