class UnitsController < ApplicationController


    def index
        if params[:cost_code_id]
            units = CostCode.find(params[:cost_code_id]).units
        else
            units = Unit.all 
        end
        render json: units
    end

    def show
        unit = Unit.find(params[:id])
        if unit
            render json: unit
        else
            render json: {error: "Unit not found"}, status: :not_found
        end
    end

    def create
        unit = Unit.create(quantity: params[:quantity], cost_code_id: params[:cost_code_id],work_week_id: params[:work_week_id])
        if unit.valid?
            render json: unit, status: :created
        else
            render json: {error: unit.errors}, status: :unprocessable_entity
        end
    end

    def report_units
        units = Unit.where({cost_code_id: params[:cost_code_id] ,work_week_id: params[:work_week_id]})
        render json: units
    end
end
