public class CheckLeapYear {
    public static boolean isLeapYear(int year) {
        if (year % 400 == 0) {
            return true;
        } else if (year % 100 != 0 && year % 4 == 0) {
            return true;
        } else {
            return false;
        }
    }

    public static void main(String args[]) {
        int year1 = 2020;
        if (isLeapYear(year1)) {
            System.out.println(year1 + " is a leap year.");
        } else {
            System.out.println(year1 + " is not a leap year.");
        }

        int year2 = 1900;
        if (isLeapYear(year2)) {
            System.out.println(year2 + " is a leap year.");
        } else {
            System.out.println(year2 + " is not a leap year.");
        }

        int year3 = 2000;
        if (isLeapYear(year3)) {
            System.out.println(year3 + " is a leap year.");
        } else {
            System.out.println(year3 + " is not a leap year.");
        }
    }
}
