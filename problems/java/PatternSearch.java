public class PatternSearch {
    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        searchPattern(text, pattern);

        String text2 = "Welcome to the training";
        String pattern2 = "Welcome";
        searchPattern(text2, pattern2);
    }

    public static void searchPattern(String text, String pattern) {
        int pos = text.indexOf(pattern);

        while (pos >= 0) {
            System.out.print(pos + " ");
            pos = text.indexOf(pattern, pos + 1);
        }
        System.out.println();
    }
}
