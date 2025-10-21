public class SumOfNaturalNumbers {
    public static int helper(int n) {
        if (n <= 0) {
            return 0;
        }
        return (n * (n + 1)) / 2;
    }

    public static void main(String args[]) {
        int sum = helper(10);
        System.out.println("Sum of first " + 10 + " natural numbers is: " + sum);
        int sum1 = helper(5);
        System.out.println("Sum of first " + 5 + " natural numbers is: " + sum1);
    }
}
