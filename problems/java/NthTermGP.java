public class NthTermGP {
    public static int helperFunction(int a, int r, int n) {
        return (int) (a * Math.pow(r, n - 1));
    }

    public static void main(String args[]) {
        int GP = helperFunction(3, 2, 4);
        System.out.println("4th term of the GP with first term 3 and common ratio 2 is: " + GP);
        int GP1 = helperFunction(2, 3, 5);
        System.out.println("3rd term of the GP with first term 5 and common ratio 3 is: " + GP1);
    }
}
