print "Hello world"
puts "Hello world 1"
# puts prints the content and puts and after that by default
# print just simply prints whatever we specify
puts "Vasanthkumar"
print "Sadasivam"
puts ""
# Ruby executes code line by line
user_name = "Vasanth"
user_age = "     30     "
puts ("My name is " + user_name)
puts ("I am " + user_age + " years old")
valid_number = 30;
valid_integer = 3.142
valid_neg_number = -30
valid_neg_integer = -3.142
is_laptop = true
is_desktop = false
is_empty = nil

# String Methods
puts user_name.upcase()
puts user_name.downcase()
puts user_age.length()
puts user_age.strip()
puts user_name.include? "Vasanth"
puts user_name.include?("anth")
puts user_name.include? "kumar"
# In ruby methods that return a boolean value often ends with ? as naming convention
puts user_name[2]
puts user_name[50]
puts user_name[0,3]
# [start_index, end_index + 1]
puts user_name.index("s")
puts user_name.index("a")

# Number methods
puts 26+12
puts 26-12
puts 26 * 12
puts 26 / 12
puts 2**3
puts 26 % 12
# We cannot print num along with string directly
# We need to convert the num to string by using .to_s
puts ("This is a num " + user_age.to_s.strip)
num = 20
neg_num = -20
pi = 3.142
test_pi = 3.987
puts neg_num.abs()
puts pi.round()
puts pi.ceil()
puts test_pi.floor()
puts Math.sqrt(49)
puts Math.log(1)
puts Math.log(1.5)
puts 10+7
puts 1.0+7
puts 10/7
puts 10/7.0
puts 12/7

# Getting user input
# puts "Enter your name : "
# name = gets
# puts ("Hello "+ name)
# puts ("Hello "+ name + ", you are cool!")
# # When we enter name and click enter it will print "you are cool" in next line
# # To overcome this we need to get name as below
# name = gets.chomp()
# puts ("Hello "+ name + ", you are cool!")

# Building a basic calculator
# puts "Enter a number"
# num1 = gets.chomp()
# puts "Enter next number"
# # .to_i is used to convert string to number
# # .to_f is used to convert string to float
# num2 = gets.chomp().to_f
# puts (num1.to_i + num2)

# Mat libs game
# puts "Enter a color : "
# color = gets.chomp()
# puts "Enter a plural noun : "
# plural_noun = gets.chomp()
# puts "Enter a celebrity : "
# celebrity = gets.chomp()
# puts ("Roses are "+ color)
# puts ( plural_noun + " are blue")
# puts ("I love "+celebrity)

# Arrays
players = Array["Messi", "Reus", "Ronaldo", 1, true]
puts players.length
puts players[0]
puts players[9]
puts players[-1]
players[4] = "Rooney"
puts players[0,2]

players1 = Array.new
players1[0] = "Test1"
players1[4] = "Test2"
puts players1.include?("Test1")
puts players1.include?("Test3")
puts players1.reverse()
# puts players1.sort()

# Hashes
states = {
    "Coimbatore" => "CBE",
    "Chennai" => "CHN",
    :Salem => "SLM",
    1 => "ONE"
}
puts states
puts states["Coimbatore"]
puts states[:Salem]
puts states[1]

# Methods
# def sayHi
#     puts "Hi"
# end
def sayHi(name="xyz", age=0)
    # puts "Hi "+name
    puts ("Hi " + name + " , you are " + age.to_s + " years old!")
end
puts "Start"
sayHi
sayHi("Vasanth", 30)
puts "End"

def cube(num)
    # return num * num * num
    num * num * num
    return num * num * num, 26
end
puts cube(6)
puts "Test"
puts cube(3)[1]

# If statements
ismale = true
istall = false
if ismale and istall
    puts "You are a tall male"
elsif ismale and !istall
    puts "You are a short male"
elsif !ismale and istall
    puts "You are not male but tall"
else 
    puts "You are not male and not tall"
end

def max(num1, num2, num3)
    if num1 >= num2 and num1 >= num3
        return num1
    elsif num2 >= num3
        return num2
    else 
        return num3
    end
end

puts max(1,2,3)
puts max(1,3,2)
puts max(3,2,1)

# Creating calculator
# puts "Enter first number :"
# calc_num1 = gets.chomp().to_f
# puts "Enter operator :"
# calc_op = gets.chomp()
# puts "Enter second number :"
# calc_num2 = gets.chomp().to_f

# if calc_op == "+"
#     puts (calc_num1 + calc_num2)
# elsif calc_op == "-"
#     puts (calc_num1 - calc_num2)
# elsif calc_op == "*"
#     puts (calc_num1 * calc_num2)
# elsif calc_op == "/"
#     puts (calc_num1 / calc_num2)
# else
#     puts "Invalid operator"
# end

# Case expression
def get_day_name(day)
    day_name = ""
    case day
    when "mon"
        day_name = "Monday"
    when "tue"
        day_name = "Tuesday"
    when "wed"
        day_name = "Wednesday"
    when "thu"
        day_name = "Thursday"
    when "fri"
        day_name = "Friday"
    when "sat"
        day_name = "Saturday"
    when "sun"
        day_name = "sunday"
    else
        day_name = "Invalid value"
    end
    return day_name
end

puts get_day_name("mon")
puts get_day_name("sat")
puts get_day_name("vas")

# While loops
index = 1
while index <= 5
    puts index
    index += 1
end

# 2:22:00

# for loops
games = ["football", "cricket", "volley ball", "shuttle"]
for game in games
    puts game
end

puts "Each"
games.each do |game|
    puts game
end

for index in 0...5
    puts index
end

puts "Index"
6.times do |index|
    puts index
end

# 2:40:00

# Handling errors

begin
    games["test"]
    error_num = 10 / 0
rescue ZeroDivisionError
    puts "Division by zero error"
rescue TypeError => e
    puts e
end

# Classes & Objects
class Book
    attr_accessor :title, :author, :pages

    def initialize(title, author, pages)
        @title = title
        @author = author
        @pages = pages
    end

    def can_be_published
        if @pages >= 450
            return true
        end
        return false
    end
end

# book1 = Book.new()
# book1.title = "HP"
# book1.author = "JK Rowling"
# book1.pages = 400
# puts book1.title

# book2 = Book.new()
# book2.title = "Test"
# book2.author = "Xyz"
# book2.pages = 500
# puts book2.author

book3 = Book.new("HP", "JK Rowling", 400)
book4 = Book.new("Test", "Xyz", 500)
puts book3.title
puts book4.author

puts book3.can_be_published
puts book4.can_be_published

# 3:37:00

# Inheritance
class Chef
    def make_chicken
        puts "The chef makes chicken"
    end

    def make_salad
        puts "The chef makes salad"
    end

    def make_special_dish
        puts "The chef makes bbq ribs"
    end
end

chef = Chef.new
chef.make_salad

class ItalianChef < Chef
    # the above line mean ItalianChef class inherits Chef class
    def make_special_dish
        puts "The chef makes eggplant parm"
    end

    def make_pasta
        puts "The chef makes pasts"
    end
end

chef1 = ItalianChef.new
chef1.make_chicken
chef.make_special_dish
chef1.make_special_dish

# Modules

module Test
    def sayhi(name)
        puts "Hello #{name}"
    end

    def saybye(name)
        puts "Bye #{name}"
    end
end