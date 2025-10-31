public class SieveOfEratosthenes {
    public static void main(String args[]) {
        int n = 30;
        System.out.println("Prime numbers up to " + n + ":");
        sieveOfEratosthenes(n);
        int n1 = 50;
        System.out.println("Prime numbers up to " + n1 + ":");
        sieveOfEratosthenes(n1);
    }

    public static void sieveOfEratosthenes(int n) {
        boolean isPrime[] = new boolean[n + 1];
        for (int i = 0; i <= n; i++) {
            isPrime[i] = true;
        }

        for (int p = 2; p * p <= n; p++) {
            if (isPrime[p] == true) {
                for (int i = p * p; i <= n; i += p) {
                    isPrime[i] = false;
                }
            }
        }

        for (int i = 2; i <= n; i++) {
            if (isPrime[i] == true) {
                System.out.print(i + " ");
            }
        }
    }
}
