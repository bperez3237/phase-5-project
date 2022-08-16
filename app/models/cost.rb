class Cost < ApplicationRecord
    belongs_to :employees
    belongs_to :activities
end
