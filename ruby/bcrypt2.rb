require_relative "bcrypt1"

# $LOAD_PATH << "."
# require "bcrypt1" # This won't work if both are not in same directory

users = [
    {username: 'Sadasivam', password: 'password'},
    {username: 'Rajeswari', password: 'password1'},
    {username: 'Vasanthkumar', password: 'password2'},
    {username: 'Mythili', password: 'password3'},
    {username: 'Sangeetha', password: 'password4'},
    {username: 'Lithanya', password: 'password5'}
]

# puts create_secure_users(users)
Crud.create_secure_users(users)
puts Crud.authenticate_user("Vasanthkumar", "password2", users)
puts Crud.authenticate_user("Vasanthkumar", "password3", users)