require_relative "bcrypt1"
# To have an interactive / if we want to work in terminal, we need to give "irb"
# irb -> Will create environment for ruby code

print "Hello World\n" # Don't add a new line, prints the value & returns nil
puts "Hello World" # Adds a new line, prints the value & returns null
p "Hello World" # Prints & returns the value

# To run the file we can use "ruby <file_name>.rb"

greeting = "Hello from greeting variable"
puts greeting

def say_hello(message)
    puts message
end
say_hello("Hello from say_hello function with bracket")
say_hello "Hello from say_hello function without bracket"

# Strings *****************************************************

name = "Vasanthkumar"
name1 = "Sangeetha"
p name
puts name1
# string concatenation
puts name + " " + name1
puts "My name is #{name} and my wife's name is #{name1}"

# string inerpolation
# With single quotes we cannot do string interpolation
puts 'My name is #{name} and my wife\'s name is #{name1}'
full_name = "#{name} #{name1}"

puts full_name.class # This will return the type of variable
# puts full_name.methods # This will return all the available methods for the class
puts 4.class
puts 26.12.class
puts "#{10.class} #{10.to_s.class}"
puts full_name.length
puts full_name.capitalize
puts full_name.reverse! # This will make changes to original string
puts full_name.upcase
puts full_name.downcase
puts full_name.empty?
puts "".empty?
puts "".nil?
puts nil.nil?

sentense = "Welcome to Bengaluru"
puts sentense.sub!("Bengaluru", "Coimbatore") # This will not replace in original string
puts sentense
# .sub is substitute [replaces only first instant]
# .gsub is global substitute [replaces all instances]

first_name = "Vasanth"
new_first_name = first_name
first_name = "Kumar"
puts "New first name is #{new_first_name}, changed name is #{first_name}"

# puts "Enter a number :"
# num1 = gets.chomp
# chomp is used to get user input

# Numbers *****************************************************

puts 1 + 2
puts 10 / 2
puts 10 / 4 # Returns 2, an integer [To get exact value we need to convert anyone of the value to float]
puts 11 / 3.to_f
puts 15.0 / 6
num_x = 10
num_y = 5
puts num_x / num_y
puts "*" * 10
puts "Check repeat"
10.times { print "*" }
5.times { puts rand(10) } # This prints a random number between 0 till 9 [inclusive]
puts rand # This prints random number between 0 to 1
num_z = "5"
puts "#{num_z.class}, #{num_z.to_i}, #{num_z.to_i.class}"
puts "#{num_z.to_f}, #{num_z.to_f.class}"
hello = "Hello"
puts "#{hello.to_i}, #{hello.to_f}" # If we can't convert to int/float it returns 0
puts 23.odd?
puts 23.even?

# Comparison Operators *****************************************************
30.times { print "-" }
puts 10 == "10"
puts 10 == "10".to_f
puts 10 == "10".to_i
puts 10 != 10
puts "Hello" == "hello"
puts "Hello" == "Hello"
puts 10.eql?(10.0)

# Methods *****************************************************
# We can call a function in both ways <function_name>(params) / <function_name> params
# In a function / method we can use return statement / it will return the last line by default

# Conditional Loop *****************************************************
age = 12
hasValidCard = true
if age >= 18 && hasValidCard
    puts "You can vote"
elsif age >= 18 && !hasValidCard
    puts "You cannot vote"
else
    puts "You cannot vote"
end

# Arrays *****************************************************

array_1 = [1,2,3,4,5,6,7,8,9]
# puts array_1 # This will display all the elements in separate line
# print array_1 # This will display all the elements in single line
p array_1
p "Last element is #{array_1.last}, #{array_1[array_1.length - 1]}"

range_1 = 1..100
puts range_1
puts range_1.class # Range
# puts range_1.to_a # this converts all the elements in the form of array
p range_1.to_a.shuffle!

array_2 = (1..10).to_a
p array_2.reverse
p array_2
p array_2.reverse! # ! in the end denotes we are modifying the original array
p array_2

array_3 = "a".."z"
array_4 = array_3.to_a
p array_4
p array_4.shuffle
p array_4.length
array_4 << "aa"
p array_4.last
p array_4.first
array_4.unshift("0")
p array_4
array_4.append("0")
p array_4
array_4.uniq!
p array_4
array_4.empty?
array_5 = []
array_5.empty?

p array_4.include?("a")
p array_4.include?("Vasanth")
array_4.push("ab")
p array_4
p array_4.class
p array_4.pop()
p array_4
p array_4.join
p array_4.join(", ")

array_6 = array_4.join(",")
p array_6.split(",")

array_7 = %w(Hello my name is Vasanthkumar Sadasivam)
p array_7

# array_8 = _ # _ means we can assign the previous value to current variable
# p array_8

for val in array_7
    p val
end

array_7.each do |val|
    p "#{val} -> val"
end

array_7.each { |val| print "#{val} " }

array_8 = (1..100).to_a.shuffle
p array_8.select { |num| num.odd? }

# Hashes / Dictinary *****************************************************

hash_1 = { 'a'=> 1, 'b'=> "Check", 'c'=> [1,2,3,4] }
hash_2 = { 'name' => 'Vasanthkumar', 'name1' => 'Sangeetha' }
p hash_1
p hash_2['name']
p hash_1.keys
p hash_2.values
hash_1.each do |key, value|
    p "Key -> #{key}, Key type -> #{key.class}, Value -> #{value}, Value type -> #{value.class}"
end
hash_2['name2'] = "Lithanya"
hash_2['name1'] = "Snageetha K K"
p hash_2

hash_3 = { a: 1, b: "Check", c: [1,2,3,4] }
# Here rails by default takes a:, b:, c: to symbol
# Symbols are identity, which don't mostly change
p hash_3
p hash_3[:c]
hash_3.each do |key, value|
    p "Key -> #{key}, Key type -> #{key.class}, Value -> #{value}, Value type -> #{value.class}"
end
hash_3[:d] = {'e'=> 'Test'}
p hash_3
hash_3.each { |key, value| puts "They key is #{key} and the value is #{value}" }
p hash_3.select { |key, value| value.is_a?(String) }
hash_3.each { |key, value| hash_3.delete(key) if value.is_a?(String) }
p hash_3

# Styling Guide *****************************************************
# snake_case => this_is_snake_case [Used for variables, methods name]
# CamelCase => ThisIsClassName, thisIsCamelCase [Used for class name]

# Practise in "ruby.github.io/TryRuby"
# Object Oriented Programming *****************************************************
# Programming paradigm that uses objects and their interactions to design & program applications
# Encapsulation - concept of blocking off areas of code and not making it available to the rest of the program
# Abstraction - is simplifying a complex process of a program, an enterprise software solution for example by modeling classes appropriate for it
# Inheritance - is used where a class inherits the behavior of another class, referred to as the superclass
# Polymorphism - is when a class inherits the behaviors of another class, but has the ability to not inherit everything and change some of it’s inherited behaviors. For example to write a method that does something differently from the inherited method
# Classes - It is a blueprint that describes the state and behavior that the objects of the class all share. A class can be used to create many objects. Objects created at runtime from a class are called instances of that particular class.

class Student
    include Crud
    # Above line of code is called as "mixin" which is including a module in a class
    attr_accessor :first_name, :last_name, :email, :username
    # Above line is used to set / get the attributes without defining a method for each
    attr_reader :password
    # Above line is used to only get the attribute, we cannot set them

    @first_name # Instance of the variable
    @last_name
    @email
    @username
    @password

    def initialize(firstname, lastname, email, username, password)
        @first_name = firstname
        @last_name = lastname
        @email = email
        @username = username
        @password = password
    end

    # # Setter function
    # def first_name=(name)
    #     @first_name = name
    # end

    # def first_name1(name)
    #     @first_name = name
    # end

    # # Getter function
    # def first_name
    #     @first_name
    # end

    # Whenever we try to print a class it defaults to to_s method
    def to_s
        "First Name: #{@first_name}, Last Name: #{@last_name}, Email: #{@email}, Username: #{@username}"
    end
end

student1 = Student.new("Vasanthkumar", "Sadasivam", "abc@abc.com", "VasanthS", "password1")
student2 = Student.new("Sangeetha", "K K", "abc1@abc.com", "SangeethaKK", "password2")
# puts student1.inspect
# student1.first_name = "Vasanth" # This will throw an error of method undefined
# # Above method will work if we add equal in between def first_name1=(name)
# puts student1
# # student1.first_name1 "Vasanthkumar" # This will work becuase we are having a method called first_name
# # puts student1
# puts student1.first_name # This will not work and throws an error
# # To make this work we need to add an getter function def first_name
# student1.last_name = "Sadasivam"
# puts student1.last_name
puts student1
puts student2
student2.last_name = student1.first_name
puts "Value modified"
puts student1
puts student2
hashed_pwd_1 = student1.create_hash(student1.password)
puts hashed_pwd_1

# Popular hashing algorithm is MD5
# bcrypt used MD5 and adds salt to it

# App Structure of MVC *****************************************************
# It is separation of presentation layer / UI and the business logic / backend
# Model -> are resources in the application [E.g:- User, Post, Article]
# View -> makes UI of the application [E.g:- home.html.erb, about.html.erb]
# Controller -> brains behind the application [E.g:- users_controller, post_controller, article_controller]
# rmdir <folder_name> -> removes the root folder / last level foler
# rm -rf <folder_name> -> this will remove present and the folders/files with the folder