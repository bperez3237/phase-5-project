class WorkWeeksController < ApplicationController

    def index
        work_weeks = WorkWeek.all.sort_by(&:end_date)
        render json: work_weeks
    end
    
    def show
        @work_week = WorkWeek.find(params[:id])
        render json: @work_week
    end

    def get_id
        work_week = WorkWeek.find_by(end_date:params[:end_date])
        if work_week
            render json: work_week
        else
            render json: {error: work_week.errors}, status: :not_found
        end
    end

    def auto_select
        work_week = WorkWeek.find(session[:work_week_id])
        if work_week
            render json: work_week
        else
            render json: { error: 'Week not found'}, status: :unauthorized
        end
    end
end
