class UnitsController < ApplicationController


    def index
        units = Unit.all 
        render json: units
    end

    def show
        unit = Unit.find(params[:id])
        render json: unit
    end

    def create
        unit = Unit.create(quantity: params[:quantity], cost_code_id: params[:cost_code_id])
        render json: unit, status: :created
    end
end
