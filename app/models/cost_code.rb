class CostCode < ApplicationRecord
    belongs_to :user
    has_many :activities
    has_many :units

    validates :code, uniqueness: true

end
