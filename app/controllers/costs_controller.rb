class CostsController < ApplicationController

    def create
        cost = Cost.create(cost_params)
        if cost.valid?
            render json: cost, status: :created
        else
            render json: { error: cost.errors }, status: :unprocessable_entity
        end
    end

    def index
        costs = Cost.all 
        render json: costs
    end

    private

    def cost_params
        params.permit(:activity_id,:employee_id,:hours)
    end
end
