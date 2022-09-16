class SessionsController < ApplicationController
    # skip_before_action :authorized, only: :create

    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
 
        # render json: user, status: :created
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end
    end

    def select_week
        work_week = WorkWeek.find(params[:work_week_id])
        session[:work_week_id] = work_week.id
        render json: work_week, status: :created
    end 

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            session.delete :user_id
            head :no_content
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized
        end
    end


end
