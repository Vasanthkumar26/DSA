public class TypeConversion {
    public static void main(String args[]) {
        automaticTypeConversion();
        explicitTypeCasting();
    }

    public static void automaticTypeConversion() {
        int i = 100;
        long l = i; // automatic type conversion from int to long
        float f = l; // automatic type conversion from long to float
        double d = f; // automatic type conversion from float to double
        System.out.println("Automatic Type Conversion:");
        System.out.println("int value: " + i);
        System.out.println("long value: " + l);
        System.out.println("float value: " + f);
        System.out.println("double value: " + d);
    }

    public static void explicitTypeCasting() {
        double d = 5678.89;
        long l = (long) d; // explicit type casting from double to long
        int i = (int) l; // explicit type casting from long to int
        System.out.println("Explicit Type Casting:");
        System.out.println("double value: " + d);
        System.out.println("long value: " + l);
        System.out.println("int value: " + i);

        byte b;
        int i1 = 257;
        double d1 = 350.799;
        b = (byte) i1; // explicit type casting from int to byte
        // underflow occurs here as 257 % 256 = 1
        System.out.println("int value: " + i1);
        System.out.println("byte value after casting: " + b);
        b = (byte) d1; // explicit type casting from double to byte
        // 350.799 % 256 = 94.799 -> 94 after truncation
        System.out.println("double value: " + d1);
        System.out.println("byte value after casting: " + b);
    }
}
