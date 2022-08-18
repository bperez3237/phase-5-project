class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show]


    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        user = User.find(params[:id])
        if user
            render json: user
        else
            render json: { error: 'User not found'}, status: :unauthorized
        end
    end

end
