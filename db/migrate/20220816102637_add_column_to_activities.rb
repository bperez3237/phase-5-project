class AddColumnToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :cost_code_id, :integer
    remove_column :costs, :cost_code_id
  end
end
