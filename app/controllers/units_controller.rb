class UnitsController < ApplicationController

    def create
        unit = Unit.create(quantity: params[:quantity], cost_code_id: params[:cost_code_id])
        render json: unit, status: :created
    end
end
