import java.util.*;

class Product {
    int productId;
    String productName;
    int quantity;
    double price;

    Product(int id, String name, int qty, double price) {
        this.productId = id;
        this.productName = name;
        this.quantity = qty;
        this.price = price;
    }

    public String toString() {
        return "ID: " + productId + ", Name: " + productName + ", Qty: " + quantity + ", Price: " + price;
    }
}

class InventorySystem {
    private HashMap<Integer, Product> inventory = new HashMap<>();

    public void addProduct(Product p) {
        inventory.put(p.productId, p);
    }

    public void updateProduct(int id, String name, int qty, double price) {
        if (inventory.containsKey(id)) {
            inventory.put(id, new Product(id, name, qty, price));
        }
    }

    public void deleteProduct(int id) {
        inventory.remove(id);
    }

    public void displayInventory() {
        for (Product p : inventory.values()) {
            System.out.println(p);
        }
    }
}

public class Main{
    public static void main(String[] args) {
        InventorySystem inv = new InventorySystem();

        inv.addProduct(new Product(101, "Mouse", 50, 299.99));
        inv.addProduct(new Product(102, "Keyboard", 30, 499.99));
        inv.updateProduct(101, "Mouse", 60, 279.99);
        inv.deleteProduct(102);

        inv.displayInventory();
    }
}
