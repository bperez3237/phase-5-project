class Activity < ApplicationRecord
    validates :cost_code_id, :description, presence: true


    has_many :costs
    has_many :employees, through: :costs

    belongs_to :cost_code
end
