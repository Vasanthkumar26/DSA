public class LCM {
    public static void main(String args[]) {
        System.out.println("LCM of 4 and 5: " + lcm(4, 5)); // Output: 20
        System.out.println("LCM of 6 and 8: " + lcm(6, 8)); // Output: 24
        System.out.println("LCM of 15 and 20: " + lcm(15, 20)); // Output: 60
    }

    public static int lcm(int a, int b) {
        return (a * b) / gcd(a, b);
    }

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
