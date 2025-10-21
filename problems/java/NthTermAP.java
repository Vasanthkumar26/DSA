public class NthTermAP {
    public static int helperFunction(int a, int d, int n) {
        return a + (n - 1) * d;
    }

    public static void main(String args[]) {
        int AP1 = helperFunction(2, 1, 5);
        System.out.println("5th term of the AP with first term 2 and common difference 1 is: " + AP1);
        int AP2 = helperFunction(5, 3, 4);
        System.out.println("4th term of the AP with first term 5 and common difference 3 is: " + AP2);
    }
}