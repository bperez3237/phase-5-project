class CostCode < ApplicationRecord
    belongs_to :user
    has_many :activities

    validates :code, uniqueness: true

end
