class User < ApplicationRecord
    has_many :cost_codes

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
