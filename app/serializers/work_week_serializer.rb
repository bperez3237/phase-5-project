class WorkWeekSerializer < ActiveModel::Serializer
  attributes :id, :end_date, :activities

  has_many :activities
end
