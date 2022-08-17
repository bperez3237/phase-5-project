class CostsController < ApplicationController

    def create
        cost = Cost.create(cost_params)
        render json: cost, status: :created
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
