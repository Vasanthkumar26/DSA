public class LargestOfThreeNumbers {
    public static int findLargest(int a, int b, int c) {
        int largest = a;
        if (b > largest) {
            largest = b;
        }
        if (c > largest) {
            largest = c;
        }
        int largest1 = Math.max(a, Math.max(b, c));
        System.out.println("Using Math.max, the largest is: " + largest1);

        return largest;
    }

    public static void main(String args[]) {
        int num1 = 10, num2 = 25, num3 = 15;
        int largest = findLargest(num1, num2, num3);
        System.out.println("The largest of " + num1 + ", " + num2 + ", and " + num3 + " is: " + largest);

        int num4 = -5, num5 = -10, num6 = -3;
        int largestNegative = findLargest(num4, num5, num6);
        System.out.println("The largest of " + num4 + ", " + num5 + ", and " + num6 + " is: " + largestNegative);
    }
}
