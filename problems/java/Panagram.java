public class Panagram {
    public static void main(String[] args) {
        String str = "The quick brown fox jumps over a lazy dog";
        String str1 = "Hello World";
        System.out.println(isPanagram(str) ? "The string is a panagram." : "The string is not a panagram.");
        System.out.println(isPanagram(str1) ? "The string is a panagram." : "The string is not a panagram.");
    }

    public static boolean isPanagram(String str) {
        String strToCheck = str.toLowerCase();
        boolean visited[] = new boolean[26];

        for (int i = 0; i < strToCheck.length(); i++) {
            char ch = strToCheck.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                visited[ch - 'a'] = true;
            }
        }

        for (int i = 0; i < 26; i++) {
            if (!visited[i]) {
                return false;
            }
        }
        return true;
    }
}