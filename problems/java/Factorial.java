public class Factorial {
    public static void main(String args[]) {
        System.out.println("Factorial of 5: " + factorial(5));
        System.out.println("Factorial of 0: " + factorial(0));
        System.out.println("Factorial of 7: " + factorial(7));

        System.out.println("Factorial Recursion of 5: " + recursionfactorial(5));
        System.out.println("Factorial Recursion of 0: " + recursionfactorial(0));
        System.out.println("Factorial Recursion of 7: " + recursionfactorial(7));
    }

    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        int result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public static int recursionfactorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * recursionfactorial(n - 1);
    }
}
