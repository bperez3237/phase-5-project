class CostsController < ApplicationController

    def create
        employee = Employee.find_by(name: params[:employee])
        cost = Cost.create(activity_id: params[:activity_id], hours: params[:hours], employee_id: employee.id)
        if cost.valid? & employee
            render json: cost, status: :created
        else
            render json: { error: {costs: cost.errors , employee: employee.errors} }, status: :unprocessable_entity
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
