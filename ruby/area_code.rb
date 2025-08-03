dial_book = {
    "sundarapuram" => "24",
    "kuniyamuthu" => "8",
    "podanur" => "23",
    'town_hall' => "1",
    "newyork" => "212",
    "newbrunswick" => "732",
    "edison" => "908",
    "plainsboro" => "609",
    "sanfrancisco" => "301",
    "miami" => "305",
    "paloalto" => "650",
    "evanston" => "847",
    "orlando" => "407",
    "lancaster" => "717"
}

def get_city_names(hash)
    hash.keys
end

def get_area_code(hash, key)
    # if !hash.include?(key)
    if !hash.has_key?(key)
        return "not available in hash"
    else
        return hash[key]
    end
end

i = 1
while i < 4 do
    puts "Do you want to lookup an area code based on city name?(y/n)"
    selected_option = gets.chomp.downcase
    break if selected_option != "y"
    puts "Which city do you want the area code for?"
    dial_book.each { |key, value| puts key }
    puts "Enter your selection:"
    selected_city = gets.chomp
    puts "The area code of #{selected_city} is #{get_area_code(dial_book, selected_city)}"
    i = i + 1
end
# p get_city_names dial_book
# p get_area_code dial_book, "sundarapuram"
# p get_area_code dial_book, "town"
