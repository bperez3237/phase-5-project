class ActivitiesController < ApplicationController

    def create
        activity = Activity.create(cost_code_id: params[:cost_code_id], description: params[:description])
        render json: activity, status: :created
    end
end
