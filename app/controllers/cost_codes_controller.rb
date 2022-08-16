class CostCodesController < ApplicationController

    def index
        cost_codes = CostCode.all
        render json: cost_codes
    end

    def show
        cost_code = CostCode.find(params[:id])
        render json: cost_code
    end
end
