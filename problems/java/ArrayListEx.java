import java.util.*;

public class ArrayListEx {
    public static void main(String args[]) {
        final int MAX_VALUE = 5;
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 1; i <= MAX_VALUE; i++) {
            list.add(i * 10);
        }

        System.out.println("ArrayList elements: " + list);

        list.remove(2);
        System.out.println("After removing element at index 2: " + list);

        ArrayList<String> strList = new ArrayList<>();
        strList.add("Apple");
        strList.add("Banana");
        strList.add("Cherry");
        strList.add("Date");
        strList.add("Elderberry");
        System.out.println("String ArrayList elements: " + strList);

        // To add at specific index
        strList.add(1, "Blueberry");
        System.out.println("After adding 'Blueberry' at index 1: " + strList);

        // To modify element at specific index
        strList.set(2, "Blackberry");
        System.out.println("After setting index 2 to 'Blackberry': " + strList);

        // To remove by value
        strList.remove("Apple");
        System.out.println("After removing 'Apple': " + strList);

        // To remove by index
        strList.remove(0);
        System.out.println("After removing element at index 0: " + strList);

        for (int i = 0; i < strList.size(); i++) {
            System.out.println("Element at index " + i + ": " + strList.get(i));
        }
    }
}
