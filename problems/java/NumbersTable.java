public class NumbersTable {
    public static void main(String args[]) {
        int n = 5;
        printNumbersTable(n);
        int n1 = 7;
        printNumbersTable(n1);
    }

    public static void printNumbersTable(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " : " + (n * i));
        }
    }
}
