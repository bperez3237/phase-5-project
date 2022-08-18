class ActivitiesController < ApplicationController

    def create
        activity = Activity.create(cost_code_id: params[:cost_code_id], description: params[:description])
        if activity.valid?
            render json: activity, status: :created
        else 
            render json: { error: activity.errors }, status: :unprocessable_entity
        end
    end

    def index
        activities = Activity.all 
        render json: activities
    end
end
