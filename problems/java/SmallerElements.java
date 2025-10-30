import java.util.ArrayList;
import java.util.List;

public class SmallerElements {

    public static void main(String args[]) {
        int arr[] = { 5, 2, 6, 1, 3 };
        int target = 4;
        int arr1[] = { 10, 15, 3, 7, 8, 23, 1 };
        int target1 = 9;
        List<Integer> result = getSmallerElements(arr, target);
        List<Integer> result1 = getSmallerElements(arr1, target1);
        System.out.println("Elements smaller than " + target + ": " + result);
        System.out.println("Elements smaller than " + target1 + ": " + result1);
    }

    public static List<Integer> getSmallerElements(int[] arr, int target) {
        List<Integer> result = new ArrayList<Integer>();
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < target) {
                result.add(arr[i]);
            }
        }
        return result;
    }
}
