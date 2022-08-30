class RemoveCurrentFromCostCodes < ActiveRecord::Migration[6.1]
  def change

    remove_column :cost_codes, :current_quantity
    remove_column :cost_codes, :current_hours

    add_column :cost_codes, :unit_of_measure, :string

  end
end
