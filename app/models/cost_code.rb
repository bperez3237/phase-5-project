class CostCode < ApplicationRecord
    belongs_to :user
    has_many :costs
    has_many :activities, through: :costs
    has_many :employees, through: :costs

end
