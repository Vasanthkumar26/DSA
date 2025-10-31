public class TrailingZeroInFactorial {
    public static void main(String args[]) {
        System.out.println("Trailing zeros in 5! : " + countTrailingZeros(5));
        System.out.println("Trailing zeros in 10! : " + countTrailingZeros(10));
        System.out.println("Trailing zeros in 25! : " + countTrailingZeros(25));
        System.out.println("Trailing zeros in 100! : " + countTrailingZeros(100));
    }

    public static int countTrailingZeros(int n) {
        if (n < 0) {
            return -1;
        }
        int result = 0;
        for (int i = 5; n / i >= 1; i *= 5) {
            result += n / i;
        }
        return result;
    }
}
