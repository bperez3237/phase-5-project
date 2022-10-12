class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :auto_login]

    def index
        users = User.all 
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        user = User.find_by(username: params[:username])
        if user
            render json: user
        else
            render json: { error: 'User not found'}, status: :unauthorized
        end
    end

    def auto_login
        user = User.find(session[:user_id])
        if user
            render json: user
        else
            render json: { error: 'User not found'}, status: :unauthorized
        end
    end
    
    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name)
    end
end
