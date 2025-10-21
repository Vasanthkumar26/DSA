public class BitwiseOperators {
    public static void main(String args[]) {
        int a = 5; // binary: 0101
        int b = 7; // binary: 0111
        System.out.println("Bitwise AND (a & b): " + (a & b));
        // 0101 & 0111 = 0101 = 5
        System.out.println("Bitwise OR (a | b): " + (a | b));
        // 0101 | 0111 = 0111 = 7
        System.out.println("Bitwise XOR (a ^ b): " + (a ^ b));
        // 0101 ^ 0111 = 0010 = 2
        System.out.println("Bitwise NOT (~a): " + (~a));
        // ~0101 = 1010 (in 32-bit representation, this is -6)
        a &= b; // a = a & b
        System.out.println("After a &= b, a: " + a); // a = 5

        int a1 = 3; // binary: 0011
        int b1 = 6; // binary: 0110
        int c = a1 | b1; // c = 0011 | 0110 = 0111 = 7
        int d = a1 ^ b1; // d = 0011 ^ 0110 = 0101 = 5
        int e = a1 & b1; // e = 0011 & 0110 = 0010 = 2
        int f = ~a1; // f = ~0011 = 1100 (in 32-bit representation, this is -4)
        int g = (~a1 & b1) | (a1 & ~b1); // g = (1100 & 0110) | (0011 & 1001)
        int h = ~a1 & 0X0F; // h = 1100 & 1111 = 1100 = 12
        System.out.println("c (a1 | b1): " + c);
        System.out.println("d (a1 ^ b1): " + d);
        System.out.println("e (a1 & b1): " + e);
        System.out.println("f (~a1): " + f);
        System.out.println("g ((~a1 & b1) | (a1 & ~b1)): " + g);
        System.out.println("h (~a1 & 0X0F): " + h);

        int x = 3; // binary: 0011
        System.out.println(x << 1); // 0110 = 6
        System.out.println(x << 2); // 1100 = 12
        int y = 10;
        System.out.println(x << y); // 3 * 2^10 = 3072
        int z = -1; // binary: 11111111 11111111 11111111 11111111
        System.out.println(z << 1); // shifts left, fills with 0: 11111111 11111111 11111111 11111110 = -2

        int x1 = -4;
        System.out.println(x1 >> 1); // arithmetic right shift: 11111111 11111111 11111111 11111110 = -2
        int x2 = 4;
        System.out.println(x2 >> 1); // arithmetic right shift: 00000000 00000000 00000000 00000010 = 2

        int x3 = -1;
        System.out.println(x3 >>> 29); // logical right shift: 00000000 00000000 00000000 00000111 = 7
        System.out.println(x3 >>> 30); // logical right shift: 00000000 00000000 00000000 00000011 = 3
        System.out.println(x3 >>> 31); // logical right shift: 00000000 00000000 00000000 00000001 = 1
    }
}
