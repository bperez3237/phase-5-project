class AddNameToCostCode < ActiveRecord::Migration[6.1]
  def change
    add_column :cost_codes, :name, :string
  end
end
