public class DivisorsOfNumber {
    public static void main(String args[]) {
        System.out.println("Divisors of 12: ");
        printDivisors(12); // Output: 1 2 3 4 6 12
        System.out.println("Divisors of 15: ");
        printDivisors(15); // Output: 1 3 5 15
        System.out.println("Divisors of 28: ");
        printDivisors(28); // Output: 1 2 4 7 14 28
    }

    public static void printDivisors(int n) {
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                System.out.print(i + " ");
            }
        }
        System.out.println();
    }
}
