# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_01_225039) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.text "description"
    t.integer "cost_code_id"
    t.date "date"
    t.boolean "approved"
    t.integer "work_week_id"
  end

  create_table "cost_codes", force: :cascade do |t|
    t.integer "user_id"
    t.string "code"
    t.float "budget_hours"
    t.float "budget_quantity"
    t.string "name"
    t.string "unit_of_measure"
  end

  create_table "costs", force: :cascade do |t|
    t.float "hours"
    t.integer "employee_id"
    t.integer "activity_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.float "labor_rate"
    t.string "labor_union"
  end

  create_table "units", force: :cascade do |t|
    t.integer "cost_code_id"
    t.float "quantity"
    t.date "date"
    t.integer "work_week_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
  end

  create_table "work_weeks", force: :cascade do |t|
    t.date "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
