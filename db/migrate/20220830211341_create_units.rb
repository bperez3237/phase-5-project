class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.integer :cost_code_id
      t.float :quantity
      t.date :date

      t.timestamps
    end

    rename_column :activities, :day, :date
  end
end
