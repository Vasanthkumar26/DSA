users = [
    {username: 'Sadasivam', password: 'password'},
    {username: 'Rajeswari', password: 'password1'},
    {username: 'Vasanthkumar', password: 'password2'},
    {username: 'Mythili', password: 'password3'},
    {username: 'Sangeetha', password: 'password4'},
    {username: 'Lithanya', password: 'password5'}
]

puts "Welcome to the authenticator"
30.times { print "-" }
puts
puts "The program will take input from user and compare password"

i = 1
while i < 4 do
    print "Username: "
    name_1 = gets.chomp
    print "Password: "
    pwd_1 = gets.chomp

    found_user = users.select { |val| val[:username] == name_1 && val[:password] == pwd_1 }
    
    if found_user.empty?
        puts "Please enter correct ceredentials"
    else
        puts found_user.last
    end

    puts
    print "Enter q to quit or any other key to continue: "
    entered_val = gets.chomp.downcase
    if entered_val.eql?('q')
        break
    end
    i = i + 1
end

puts
puts "You have exceeded the number of attempts"