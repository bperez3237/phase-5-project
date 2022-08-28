class CostCode < ApplicationRecord
    belongs_to :user
    has_many :activities

    validates :code, uniqueness: true
    # validates :current_hours, comparison: {less_than: :budget_hours}
    # validates :current_quantity, comparison: {less_than: :budget_quantity}

end
