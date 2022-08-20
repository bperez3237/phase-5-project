class AddColumnsToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :day, :date
    add_column :activities, :approved, :boolean
  end
end
