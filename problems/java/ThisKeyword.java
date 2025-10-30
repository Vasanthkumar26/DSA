public class Point {
    int x, y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    Point setX(int x) {
        this.x = x;
        return this;
    }

    Point setY(int y) {
        this.y = y;
        return this;
    }

    void display() {
        System.out.println("x: " + x + ", y: " + y);
    }
}

public class Point1 {
    int x, y;

    Point1(int x, int y) {
        this.x = x;
        this.y = y;
    }

    Point1() {
        this(1, 1); // Calling parameterized constructor from default constructor
    }

    void display() {
        System.out.println("x: " + x + ", y: " + y);
    }

}

public class ThisKeyword {
    public static void main(String args[]) {
        Point p1 = new Point(10, 20);
        p1.setX(5).setY(15);
        p1.display();

        Point1 p2 = new Point1();
        p2.display();
    }
}
