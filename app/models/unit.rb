class Unit < ApplicationRecord
    validates :quantity, :cost_code_id, :work_week_id, presence: true
    validates :quantity, numericality: true

    belongs_to :cost_code
    belongs_to :work_week
end
