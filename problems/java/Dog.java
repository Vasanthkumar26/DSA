public class Dog {
    String name;
    String breed;
    int age;
    String color;

    public Dog(String name, String breed, int age, String color) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public String getBreed() {
        return breed;
    }

    public int getAge() {
        return age;
    }

    public String getColor() {
        return color;
    }

    @Override
    public String toString() {
        return ("Hi my name is " + this.getName() + ".\nMy breed,age and color are " +
                this.getBreed() + "," + this.getAge() + "," + this.getColor());
    }

    public static void main(String args[]) {
        Dog dog1 = new Dog("tuffy", "papillon", 5, "white");
        System.out.println(dog1.toString());
    }
}

// Ways to create object
// 1. using new keyword
// Dog dog1 = new Dog("tuffy", "papillon", 5, "white");
// 2. using Class.forName()
// Dog dog2 = (Dog) Class.forName("Dog").getConstructor(String.class,
// String.class, int.class, String.class)
// .newInstance("bruno", "bulldog", 3, "brown");
// 3. using clone() method
// Dog dog3 = (Dog) dog1.clone();
// 4. using deserialization
// FileInputStream fis = new FileInputStream("dog.ser");
// ObjectInputStream ois = new ObjectInputStream(fis);
// Dog dog4 = (Dog) ois.readObject();
// 5. using factory method
// public static Dog createDog(String name, String breed, int age, String color)
// {
// return new Dog(name, breed, age, color);
// }
// Dog dog5 = Dog.createDog("max", "beagle", 4, "tricolor");
