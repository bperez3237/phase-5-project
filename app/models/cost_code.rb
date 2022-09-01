class CostCode < ApplicationRecord
    belongs_to :user
    has_many :activities
    has_many :costs, through: :activities
    has_many :units

    validates :code, uniqueness: true

    def hours
        incr = 0
        self.costs.each {|cost| incr += cost.hours }
        incr
    end

    def quantity
        incr = 0
        self.units.each {|unit| incr += unit.quantity }
        incr
    end

end
