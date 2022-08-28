class CostsController < ApplicationController

    def create
        employee = Employee.find_by(name: params[:employee])
        cost = Cost.create(activity_id: params[:activity_id], hours: params[:hours], employee_id: employee.id)
        cost_code = cost.activity.cost_code
        if cost.valid? & employee
            updatedCode = cost_code.update(current_hours: cost_code.current_hours + cost.hours)
            if updatedCode.valid?
                render json: cost, status: :created
            else
                render json: { error: cost_code.errors}, status: :unprocessable_entity
            end
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
