class Cost < ApplicationRecord
    belongs_to :cost_codes
    belongs_to :employees
    belongs_to :activities
end
