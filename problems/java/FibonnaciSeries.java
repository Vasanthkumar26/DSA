public class FibonnaciSeries {
    public static void main(String args[]) {
        System.out.println("Fibonacci of 5: " + fibonacciSeries(5)); // Output: 0 1 1 2 3
        System.out.println("Fibonacci of 10: " + fibonacciSeries(10)); // Output: 0 1 1 2 3 5 8 13 21 34
        System.out.println("Fibonacci of 15: " + fibonacciSeries(15)); // Output: 0 1 1 2 3 5 8 13 21 34 55 89 144 233
                                                                       // 377
    }

    public static String fibonacciSeries(int n) {
        String result = "";
        int a = 0, b = 1;
        for (int i = 1; i <= n; i++) {
            result = result + a + (i == n ? "" : " ");
            int temp = a + b;
            a = b;
            b = temp;
        }
        return result;
    }
}