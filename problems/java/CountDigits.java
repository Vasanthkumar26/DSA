public class CountDigits {
    public static void main(String args[]) {
        System.out.println("Count of digits in 12345: " + countDigits(12345));
        System.out.println("Count of digits in 0: " + countDigits(0));
        System.out.println("Count of digits in -789: " + countDigits(-789));
        System.out.println("Count of digits in 100000: " + countDigits(100000));
    }

    public static int countDigits(int n) {
        if (n == 0) {
            return 1;
        }
        int result = 0;
        n = Math.abs(n);
        while (n > 0) {
            n /= 10;
            result++;
        }
        return result;
    }
}
