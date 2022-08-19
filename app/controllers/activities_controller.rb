class ActivitiesController < ApplicationController

    def create
        activity = Activity.create(cost_code_id: params[:cost_code_id], description: params[:description])
        if activity.valid?
            render json: activity,  status: :created
        else 
            render json: { error: activity.errors }, status: :unprocessable_entity
        end
    end

    def update
        activity = Activity.update(cost_code_id: params[:cost_code_id], description: params[:description])
        if activity.valid?
            render json: activity, status: :created
        else 
            render json: { error: activity.errors }, status: :unprocessable_entity
        end
    end
    
    def index
        activities = Activity.all 
        render json: activities, include: [:costs, :cost_code]
    end

    def show 
        activity = Activity.find(params[:id])
        render json: activity, include: :costs
    end
end
