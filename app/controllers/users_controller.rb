class UsersController < ApplicationController
    validates :name, presence: true, uniqueness: true
end
