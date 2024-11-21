# Print
print("Hello World")

# Variables
name = "Vasanthkumar"
age = 29
age = 30.25
last_name = "Sadasivam"
isDeveloper = True
print(age, name)

# Task1
patient_name = "Patient"
patient_age = 80
is_new_patient = True

# Get Input
get_name = input("What is your name? ")
print("Hello " + get_name)

# Type Conversion
get_birth_year = input("Enter birth year : ")
calculate_age = 2024 - int(get_birth_year)
print(calculate_age)

# Task 2
get_first_number = input("Enter fist number : ")
get_second_number = float(input("Enter second number : "))
result = float(get_first_number) + get_second_number
print("Result is : " + str(result))

# Strings
course = 'Python for beginers'
print(course.upper())
print(course.lower())
print(course.find("o"))
print(course.replace("for", "4"))
print("Print" in course)

# Arithmetic Operations
print(10 / 3)
print(10 // 3)
print(10 % 3)
print(10 ** 3)
x = 10
x += 3
print(x)

# Comparison Operators
print(3 > 2)
print(3 < 2)
print(3 == 2)
print(3 != 2)
print(3 <= 2)
print(3 >= 2)

# Logical Operators
price1 = 25
print(price1 > 10 and price1 < 30)
price2 = 5
print(price2 > 10 or price2 < 30)
print(not price2 > 10)

# If Statements
temperature = 35
if temperature > 30:
    print("It's a hot day")
    print("Drink plenty of water")
elif temperature > 20: #(20,30]
    print("It's a nice day")
elif temperature > 10: #(10, 20]
    print("It's a bit cold")
else:
    print("It's cold")

#Task 3
get_weight = float(input("Enter your weight : "))
get_weight_type = input("(K)g or (L)bs : ")
if(get_weight_type.upper() == "K"):
    weight_in_lbs = get_weight / 0.45
    print("Weight in Kg : " + str(weight_in_lbs))
elif(get_weight_type.upper() == "L"):
    weight_in_kgs = get_weight * 0.45
    print("Weight in Kgs : " + str(weight_in_kgs))
else:
    print("Enter valid values")

# While loop
i = 1
while i <= 5:
    print(i)
    i+=1

j = 1
while j <= 5:
    print(j * "*")
    j+=1

# Lists
names = ["Vasanth", "Kumar", "Sangeetha", "Lithanya"]
print(names)
print(names[0])
print(names[2])
print(names[-1])
names[0] = "Vasanthkumar"
print(names[0:3]) # ["Vasanth", "Kumar", "Sangeetha"] This will not change in original list
names.append(4)
names.insert(2, "26")
names.remove("Kumar")
names.pop(1)
# names.clear()
print(names)
print("Sangeetha" in names)
print(len(names))

# For Loops
numbers = [1,2,3,4,5]
for num in numbers: # 1 2 3 4 5
    print(num)

k = 0
while k < len(numbers): # 1 2 3 4 5
    print(numbers[k])
    k+=1

range_numbers = range(5) # 0 1 2 3 4
for num in range_numbers:
    print(num)

range_numbers1 = range(5, 10) # 5 6 7 8 9
for num in range_numbers1:
    print(num, end=" ")

range_numbers2 = range(5, 20, 2) # Here 2 is difference 5 7 9 11 13 15 17 19
for num in range_numbers2:
    print(num)

for num in range(5): # 0 1 2 3 4
    print(num)

# Tuples
# We cannot change the values in tuple (immutable)
tuple_number = (1,2,3,3)
# tuple_number[0] = 4 # Will throw error
tuple_number.count() # O/p => 2
tuple_number.index(3) # O/p => 2

# List [] = mutable, most flexible
# Tuple () = immutable, faster
# Set {} = mutable (add/remove), unordered, no duplicates, best for membership testing

# Set
fruits = {"Apple", "Mango", "Banana", "Orange"}
for fruit in fruits: # Mango Orange Apple Banana
    print(fruit, end=" ")
fruits.add("Coconut")
fruits.remove("Apple")
# fruits.clear()

get_fruit_name = input("Enter fruit name to search for : ")
if get_fruit_name in fruits:
    print(f"{get_fruit_name} was found")
else:
    print(f"{get_fruit_name} was not found")