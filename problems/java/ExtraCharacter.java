import java.lang.reflect.Array;
import java.util.Arrays;;

public class ExtraCharacter {
    public static void main(String args[]) {
        String str1 = "abcd";
        String str2 = "abcde";
        System.out.println("The extra character is: " + findExtraCharacter(str1, str2)); // Output: e
        System.out.println("The extra character is: " + findExtraCharacter1(str1, str2)); // Output: e
        System.out.println("The extra character is: " + findExtraCharacter2(str1, str2)); // Output: e
        System.out.println("The extra character is: " + findExtraCharacterXOR(str1, str2)); // Output: e
    }

    public static char findExtraCharacter(String str1, String str2) {
        boolean[] visited = new boolean[26];
        for (int i = 0; i < str2.length(); i++) {
            char ch = str2.charAt(i);
            if (str1.indexOf(ch) != -1) {
                if (visited[ch - 'a']) {
                    return ch;
                }
                visited[ch - 'a'] = true;
            } else {
                return ch;
            }
        }
        return '0';
    }

    public static char findExtraCharacter1(String str1, String str2) {
        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        int n = arr1.length;
        for (int i = 0; i < n; i++) {
            if (arr1[i] != arr2[i]) {
                return arr2[i];
            }
        }

        return arr2[n];
    }

    public static char findExtraCharacterXOR(String str1, String str2) {
        int result = 0;

        for (int i = 0; i < str1.length(); i++) {
            result ^= str1.charAt(i);
        }

        for (int i = 0; i < str2.length(); i++) {
            result ^= str2.charAt(i);
        }

        return (char) result;
    }

    public static char findExtraCharacter2(String str1, String str2) {
        int[] count = new int[26];

        for (int i = 0; i < str1.length(); i++) {
            count[str1.charAt(i) - 'a']++;
        }

        for (int i = 0; i < str2.length(); i++) {
            count[str2.charAt(i) - 'a']--;
            if (count[str2.charAt(i) - 'a'] < 0) {
                return str2.charAt(i);
            }
        }

        return '0';
    }
}
