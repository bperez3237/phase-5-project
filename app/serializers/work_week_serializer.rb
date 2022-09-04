class WorkWeekSerializer < ActiveModel::Serializer
  attributes :id, :end_date, :activities, :units

  has_many :activities
  has_many :units
end

