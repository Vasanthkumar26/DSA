public class LastDigitOfNumber {
    public static int helperFunction(int n) {
        return Math.abs(n % 10);
    }

    public static void main(String args[]) {
        int lastDigit = helperFunction(12345);
        System.out.println("Last digit of " + 12345 + " is: " + lastDigit);
        int lastDigit1 = helperFunction(-9876);
        System.out.println("Last digit of " + -9876 + " is: " + lastDigit1);
    }
}
