class CostCodesController < ApplicationController

    def index
        cost_codes = CostCode.all
        render json: cost_codes
    end

    def show
        cost_code = CostCode.find(params[:id])
        render json: cost_code
    end

    def update
        cost_code = CostCode.find(params[:id])
        cost_code.update(cost_code_params)
        if cost_code.valid?
            render json: cost_code
        else
            render json: { error: cost_code.errors}, status: :unprocessable_entity
        end
    end

    def report
        if params[:work_week_id]
            cost_codes = CostCode.joins(:activities).where(activities: {work_week_id: params[:work_week_id]}).distinct
        else
            cost_codes = CostCode.joins(:activities).distinct
        end
        render json: cost_codes
    end


    private

    def cost_code_params
        params.permit(:budget_hours,:budget_quantity,:unit_of_measure,:code,:name,:user_id)
    end
end
