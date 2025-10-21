public class CheckPrime {
    public static void main(String args[]) {
        System.out.println("Is 7 prime? " + isPrime(7)); // Output: true
        System.out.println("Is 10 prime? " + isPrime(10)); // Output: false
        System.out.println("Is 13 prime? " + isPrime(13)); // Output: true
        System.out.println("Is 1 prime? " + isPrime(1)); // Output: false
    }

    public static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
