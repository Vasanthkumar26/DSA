public class GCD {
    public static void main(String args[]) {
        System.out.println("GCD of 48 and 18: " + gcd(48, 18)); // Output: 6
        System.out.println("GCD of 56 and 98: " + gcd(56, 98)); // Output: 14
        System.out.println("GCD of 101 and 10: " + gcd(101, 10)); // Output: 1
        System.out.println("GCD of 48 and 18: " + gcdWhile(48, 18)); // Output: 6
        System.out.println("GCD of 56 and 98: " + gcdWhile(56, 98)); // Output: 14
        System.out.println("GCD of 101 and 10: " + gcdWhile(101, 10)); // Output: 1
    }

    public static int gcd(int a, int b) {
        int result = 1;
        int loopLimit = Math.min(a, b);
        for (int i = 2; i <= loopLimit; i++) {
            if (a % i == 0 && b % i == 0) {
                result = i;
            }
        }
        return result;
    }

    public static int gcdWhile(int a, int b) {
        while (b != 0) {
            System.out.println("a :" + a + " b :" + b);
            int temp = b;
            b = a % b;
            a = temp;
            System.out.println(">>>>>>>a :" + a + " b :" + b);
        }
        return a;
    }
}
