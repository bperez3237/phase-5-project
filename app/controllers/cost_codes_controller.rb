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

    def with_costs
        cost_codes = CostCode.all 
        res = []
        cost_codes.each do |cost_code|
            activities = cost_code.activities
            if activities != []
                res << cost_code
            end
        end
        render json: res
    end

    private

    def cost_code_params
        params.permit(:budget_hours,:budget_quantity,:unit_of_measure,:code,:name,:user_id)
    end
end
