class ActivitiesController < ApplicationController


    def create
        cost_code = CostCode.find_by(code: params[:code])
        if params[:work_week_id]
            activity = Activity.create(cost_code_id: cost_code.id, description: params[:description], date: params[:date], approved: false, work_week_id: params[:work_week_id])
            if activity.valid? & cost_code
                render json: activity,  status: :created
            else 
                render json: { error: { activity: activity.errors, cost_code: cost_code.errors} }, status: :unprocessable_entity
            end
        else
            activity = Activity.create(cost_code_id: cost_code.id, description: params[:description], date: params[:date], approved: false, work_week_id: 1)
            if activity.valid? & cost_code
                render json: activity,  status: :created
            else 
                render json: { error: { activity: activity.errors, cost_code: cost_code.errors} }, status: :unprocessable_entity
            end
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
        if params[:cost_code_id]
            cost_code = CostCode.find(params[:cost_code_id])
            render json: cost_code.activities
        elsif params[:work_week_id]
            work_week = WorkWeek.find(params[:work_week_id])
            render json: work_week.activities
        else
            activities = Activity.all 
            render json: activities
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

    def report_activities
        activities = Activity.where({cost_code_id: params[:cost_code_id] ,work_week_id: params[:work_week_id]})
        render json: activities
    end

    def delete_week
        if params[:work_week_id]
            work_week = WorkWeek.find(params[:work_week_id])
            activities = work_week.activities 
            activities.each {|activity| activity.costs.destroy_all}
            activities.destroy_all
            head :no_content
        else
            render json: { error: 'no work week found' }, status: :not_found
        end
    end

    private

    def activity_params
        params.permit(:costs,:cost_code,:description,:cost_code_id,:date,:approved, :work_week_id)
    end
end
