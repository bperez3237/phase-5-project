class CreateWorkWeeks < ActiveRecord::Migration[6.1]
  def change
    create_table :work_weeks do |t|
      t.date :end_date

      t.timestamps
    end

    add_column :activities, :work_week_id, :integer
    add_column :units, :work_week_id, :integer
  end
end
