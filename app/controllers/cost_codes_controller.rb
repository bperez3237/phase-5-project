class CostCodesController < ApplicationController

    def index
        if params[:work_week_id]
            @cost_codes = WorkWeek.find(params[:work_week_id]).cost_codes.distinct.sort_by(&:code)
            render json: @cost_codes, each_serializer: WorkWeekCostCodeSerializerSerializer, work_week_id: params[:work_week_id]
        else
            @cost_codes = CostCode.all.sort_by(&:code)
            render json: @cost_codes
        end
    end

    def show
        @cost_code = CostCode.find(params[:id])
        if @cost_code
            if params[:work_week_id]
                render json: @cost_code, serializer: WorkWeekCostCodeSerializerSerializer, work_week_id: params[:work_week_id]
            else
                render json: @cost_code
            end
        else
            render json: {error: @cost_code.errors}, status: :not_found
        end
    end

    def update
        cost_code = CostCode.find(params[:id])
        cost_code.update(cost_code_params)
        if cost_code.valid?
            render json: cost_code
        else
            render json: { error: cost_code.errors}, status: :unprocessable_entity
        end
    end

    def report
        if params[:work_week_id]
            @cost_codes = CostCode.joins(:activities).where(activities: {work_week_id: params[:work_week_id]}).distinct
            render json: @cost_codes, each_serializer: WorkWeekCostCodeSerializerSerializer, work_week_id: params[:work_week_id]
        else
            @cost_codes = CostCode.joins(:activities).distinct
            render json: @cost_codes
        end
    end

    def project_summary
        total_cost = CostCode.total_cost
        total_hours = CostCode.total_hours
        project_budget_hours = CostCode.project_budget_hours
        render json: {total_cost: total_cost, total_hours: total_hours, project_budget_hours: project_budget_hours}
    end

    private

    def cost_code_params
        params.permit(:budget_hours,:budget_quantity,:unit_of_measure,:code,:name,:user_id)
    end
end
