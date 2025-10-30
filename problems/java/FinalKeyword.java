public class Animal {
    final void sound() {
        System.out.println("Animal makes a sound");
    }
}

public class Dog extends Animal {
    // Trying to override final method will cause a compile-time error

    // void sound() {
    // System.out.println("Dog barks");
    // }
}

final class Human {
    void speak() {
        System.out.println("Human speaks");
    }
}

// Shows inheritance error [cannot inherit from final Human]
// class Man extends Human {
// }

public class FinalKeyword {
    static final int MAX_VALUE = 1000; // static final variable [Used as constant for class / all objects]
    final int y = 200; // instance final variable

    public static void main(String args[]) {
        final int x; // local final variable
        x = 100;
        System.out.println("Value of x: " + x);

        FinalKeyword fk = new FinalKeyword();
        System.out.println("Value of y: " + fk.y);

        System.out.println("Value of static max: " + MAX_VALUE);

        final StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        System.out.println("StringBuffer after modification: " + sb.toString());
        // refernece of sb cannot be changed but state of the object can be changed
    }
}
