30.times { print "-" }
puts
puts "Please enter first number: "
num_1 = gets.chomp.to_f
puts "Please enter second number: "
num_2 = gets.chomp.to_f
puts "Enter what do you want to do?"
puts "Enter 1 for multiply, 2 for addition, 3 for subraction"
user_entry = gets.chomp
puts "You have selected #{user_entry}"

def multiply(first_num, second_num)
    first_num * second_num
end

def divide(first_num, second_num)
    return first_num / second_num
end

def subract(first_num, second_num)
    return first_num - second_num
end

def add(first_num, second_num)
    return first_num + second_num
end

def modulo(first_num, second_num)
    return first_num % second_num
end

if user_entry == "1"
    puts "You have selected Multiply"
    puts "The first number multiplied by the second number is: #{multiply(num_1,num_2)}"
elsif user_entry == "2"
    puts "You have selected Addition"
    puts "The first number added to the second number is: #{add num_1,num_2}"
elsif user_entry == "3"
    puts "You have selected Subraction"
    puts "The first number subtracted from the second number is: #{subract(num_1,num_2)}"
else
    puts "Please select correct option"
end

# puts "The first number multiplied by the second number is: #{multiply(num_1,num_2)}"
# puts "The first number divided by the second number is: #{divide num_1,num_2}"
# puts "The first number subtracted from the second number is: #{subract(num_1,num_2)}"
# puts "The first number added to the second number is: #{add num_1,num_2}"
# puts "The first number mod the second number is: #{modulo(num_1,num_2)}"

# We can call a function in both ways <function_name>(params) / <function_name> params