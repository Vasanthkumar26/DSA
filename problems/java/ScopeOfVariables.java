public class ScopeOfVariables {
    static int staticVar = 10;
    private int privateVar = 20;

    public void method1(int x) {
        ScopeOfVariables obj1 = new ScopeOfVariables();
        System.out.println("method1.staticVar: " + this.staticVar);
        System.out.println("ScopeOfVariables staticVar: " + obj1.staticVar);
        System.out.println("Static Variable: " + staticVar);
        System.out.println("ScopeOfVariables privateVar: " + obj1.privateVar);
        System.out.println("PrivateVar: " + privateVar);
        System.out.println("Private Variable: " + privateVar);

        this.staticVar = 15;
        privateVar = 25;

        System.out.println("method1.staticVar: " + this.staticVar);
        System.out.println("ScopeOfVariables staticVar: " + obj1.staticVar);
        System.out.println("ScopeOfVariables privateVar: " + obj1.privateVar);
        System.out.println("PrivateVar: " + privateVar);
    }

    public static void boxingExample() {
        int x1 = 10;
        Integer x2 = x1; // Autoboxing
        int x3 = x2; // Unboxing

        System.out.println("Primitive int x1: " + x1);
        System.out.println("Boxed Integer x2: " + x2);
        System.out.println("Unboxed int x3: " + x3);
    }

    public static void boxingSample() {
        Integer x1 = new Integer(10);
        Integer x2 = new Integer(10);
        if (x1 == x2) {
            System.out.println("x1 and x2 are equal using ==");
        } else {
            System.out.println("x1 and x2 are not equal using ==");
        }

        Integer y1 = 10;
        Integer y2 = 10;
        if (y1 == y2) {
            System.out.println("y1 and y2 are equal using ==");
        } else {
            System.out.println("y1 and y2 are not equal using ==");
        }
    }

    public static void main(String args[]) {
        ScopeOfVariables obj1 = new ScopeOfVariables();
        obj1.method1(5);
        {
            int x = 26;
            System.out.println("Block Variable x: " + x);
        }
        // System.out.println(x); // This will cause a compile-time error

        int y;
        for (y = 0; y < 3; y++) {
            System.out.println("Loop Variable y: " + y);
        }
        System.out.println("Final value of y after loop: " + y);

        int j = 5;
        {
            // int j = 10;
            // This will cause a compile-time error due to duplicate variable declaration
            System.out.println("Inner Block Variable j: " + j);
        }

        int a = 10;
        // for (int a = 0; a < 2; a++) {
        // // This will cause a compile-time error due to duplicate variable declaration
        // System.out.println("Loop Variable a: " + a);
        // }

        for (int i = 0; i < 2; i++) {
            System.out.println("Loop Variable i: " + i);
        }
        int i = 10;
        System.out.println("Variable i outside loop: " + i);
        // This will not cause an error as 'i' inside the loop is out of scope here

        boxingExample();
        boxingSample();
    }
}
