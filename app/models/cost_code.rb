class CostCode < ApplicationRecord
    belongs_to :user
    has_many :activities

    validates :cost_code, uniqueness: true

end
