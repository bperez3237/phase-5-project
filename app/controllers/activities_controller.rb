class ActivitiesController < ApplicationController


    def create
        cost_code = CostCode.find_by(code: params[:code])
        activity = Activity.create(cost_code_id: cost_code.id, description: params[:description], date: params[:date], approved: false, work_week_id: 1)
    
        if activity.valid? & cost_code
            render json: activity,  status: :created
        else 
            render json: { error: { activity: activity.errors, cost_code: cost_code.errors} }, status: :unprocessable_entity
        end
    end


    def update
        activity = Activity.find(params[:id])
        activity.update(activity_params)
        if activity.valid?
            render json: activity, status: :created
        else 
            render json: { error: activity.errors }, status: :unprocessable_entity
        end
    end
    

    def index
        activities = Activity.all 
        if params[:cost_code_id]
            cost_code = CostCode.find(params[:cost_code_id])
            render json: cost_code.activities
        else
            render json: activities, include: [:costs, :cost_code]
        end
    end


    def show 
        activity = Activity.find(params[:id])
        render json: activity, include: :costs
    end

    def activity_week
        activities = Activity.joins(:work_week).where(work_week: {end_date: params[:end_date]}).distinct
        render json: activities
    end

    private

    def activity_params
        params.permit(:costs,:cost_code,:description,:cost_code_id,:date,:approved, :work_week_id)
    end
end
