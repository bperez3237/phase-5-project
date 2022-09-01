class WorkWeeksController < ApplicationController

    def index
        work_weeks = WorkWeek.all 
        render json: work_weeks
    end
    def show
        work_week = WorkWeek.find(params[:id])
        render json: work_week
    end
end
