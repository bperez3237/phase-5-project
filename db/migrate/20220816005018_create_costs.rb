class CreateCosts < ActiveRecord::Migration[6.1]
  def change
    create_table :costs do |t|
      t.integer :cost_code_id
      t.integer :employee_id
      t.integer :activity_id

      t.timestamps
    end
  end
end
