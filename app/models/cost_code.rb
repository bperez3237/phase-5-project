class CostCode < ApplicationRecord
    belongs_to :user
    has_many :activities
    has_many :costs, through: :activities
    has_many :units

    validates :code, uniqueness: true

    def hours
        sum = self.costs.sum {|cost| cost.hours }
        sum
    end

    def quantity
        sum = self.units.sum {|unit| unit.quantity }
        sum
    end

end
