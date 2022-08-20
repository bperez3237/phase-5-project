class ActivitiesController < ApplicationController

    def create
        cost_code = CostCode.find_by(code: params[:code])
        activity = Activity.create(cost_code_id: params[:cost_code_id], description: params[:description])
        if activity.valid? & cost_code
            render json: activity,  status: :created
        else 
            render json: { error: {activity: activity.errors, cost_code: cost_code.errors} }, status: :unprocessable_entity
        end
    end

    # def update
    #     activity = Activity.find(params[:id])
    #     activity.update(activity_params)
    #     if activity.valid?
    #         render json: activity, status: :created
    #     else 
    #         render json: { error: activity.errors }, status: :unprocessable_entity
    #     end
    # end
    
    def index
        activities = Activity.all 
        render json: activities, include: [:costs, :cost_code]
    end

    def show 
        activity = Activity.find(params[:id])
        render json: activity, include: :costs
    end

    private

    def activity_params
        params.permit(:costs,:cost_code,:description,:cost_code_id)
    end
end
