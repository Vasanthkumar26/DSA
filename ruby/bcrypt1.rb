require 'bundler/inline'

# This helps us to use dependencies without using Gemfile [inline gem installation]
gemfile true do
    source 'http://rubygems.org'
    gem 'bcrypt'
end

module Crud
    require 'bcrypt'
    puts "Module CRUD loaded"

    # my_hashed_pwd = BCrypt::Password.create("password1")
    # my_hashed_pwd1 = BCrypt::Password.create("password1")
    # puts "hashed pwd -> #{my_hashed_pwd}"

    # puts my_hashed_pwd.version # 2a
    # puts my_hashed_pwd.cost # 12
    # puts my_hashed_pwd == "password1" # true
    # puts my_hashed_pwd == "pa55w.rd1" # false

    # # my_hashed_pwd = BCrypt::Password.new('$2a$12$1FP.5Sgn4WkHUAfqM6/2cezktJTCJSQuSxjJ69t/K0DKN4s3O2WT2')
    # # puts "new hashed pwd -> #{my_hashed_pwd}"
    # # puts my_hashed_pwd == "password1" # true
    # # puts my_hashed_pwd == "pa55w.rd1" # false
    # puts my_hashed_pwd == my_hashed_pwd1 # false
    # puts my_hashed_pwd1 == 'password1' # true

    # To use a method from we need to add self. / <Module_name>. before method name
    # If we are using include <Module_name> within a class we don't want to use self. / <Module_name>.

    # def self.create_hash(password)
    #     BCrypt::Password.create(password)
    # end

    # def self.verify_hash_digest(password)
    #         BCrypt::Password.new(password)
    # end

    # def self.create_secure_users(users_list)
    #     users_list.each do |user|
    #         user[:password] = create_hash(user[:password])
    #     end
    #     users_list
    # end

    # def self.authenticate_user(username, password, users_list)
    #     users_list.each do |user|
    #         if user[:username] == username && verify_hash_digest(user[:password]) == password
    #             return user
    #         end
    #     end
    #     "Credentials are not correct"
    # end

    def create_hash(password)
        BCrypt::Password.create(password)
    end

    def verify_hash_digest(password)
            BCrypt::Password.new(password)
    end

    def create_secure_users(users_list)
        users_list.each do |user|
            user[:password] = create_hash(user[:password])
        end
        users_list
    end

    def authenticate_user(username, password, users_list)
        users_list.each do |user|
            if user[:username] == username && verify_hash_digest(user[:password]) == password
                return user
            end
        end
        "Credentials are not correct"
    end
end

# my_hashed_pwd2 = create_hash("Pa55w.rd")
# puts my_hashed_pwd2
# puts my_hashed_pwd2 == "Pa55w.rd"
# puts my_hashed_pwd2 == "Pa55w.rd1"
# puts create_secure_users(users)
# create_secure_users(users)
# puts authenticate_user("Vasanthkumar", "password2", users)
# puts authenticate_user("Vasanthkumar", "password3", users)




