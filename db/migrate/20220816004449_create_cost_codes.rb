class CreateCostCodes < ActiveRecord::Migration[6.1]
  def change
    create_table :cost_codes do |t|
      t.integer :user_id
      t.float :budget_hours
      t.float :budget_quantity
      t.float :current_hours
      t.float :current_quantity
    end
  end
end
