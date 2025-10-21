import java.util.Scanner;

public class BasicCalculator {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        boolean isValidOption = false;
        while (!isValidOption) {
            System.out.println("Select operation:");
            System.out.println("1 for Addition");
            System.out.println("2 for Subraction");
            System.out.println("3 for Multiplication");
            int operations = sc.nextInt();
            if (operations < 1 || operations > 3) {
                System.out.println("Invalid option. Please try again.");
                continue;
            }
            isValidOption = true;
            System.out.println("Enter first number:");
            int a = sc.nextInt();
            System.out.println("Enter second number:");
            int b = sc.nextInt();
            performOperation(operations, a, b);
        }
    }

    public static void performOperation(int op, int a, int b) {
        switch (op) {
            case 1:
                System.out.println("Addition: " + (a + b));
                break;
            case 2:
                System.out.println("Subtraction: " + (a - b));
                break;
            case 3:
                System.out.println("Multiplication: " + (a * b));
                break;
            default:
                System.out.println("Invalid operation");
                break;
        }

    }
}
