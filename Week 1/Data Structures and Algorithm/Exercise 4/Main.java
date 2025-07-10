public class Main {
    static Employee[] employees = new Employee[100]; 
    static int count = 0; 

    public static void main(String[] args) {
        addEmployee(new Employee(101, "Adhu", "Manager", 50000));
        addEmployee(new Employee(102, "Akshaya", "Engineer", 40000));
        addEmployee(new Employee(103, "Annika", "Analyst", 35000));

        System.out.println("All Employees:");
        traverseEmployees();

        System.out.println("\nSearching for employee with ID 102:");
        Employee emp = searchEmployee(102);
        System.out.println(emp != null ? emp : "Not Found");

        System.out.println("\nDeleting employee with ID 101");
        deleteEmployee(101);

        System.out.println("\nAfter Deletion:");
        traverseEmployees();
    }

    static void addEmployee(Employee e) {
        if (count < employees.length) {
            employees[count++] = e;
        } else {
            System.out.println("Employee array is full.");
        }
    }

    static Employee searchEmployee(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id) {
                return employees[i];
            }
        }
        return null;
    }

    static void traverseEmployees() {
        for (int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
    }

    static void deleteEmployee(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id) {
                
                for (int j = i; j < count - 1; j++) {
                    employees[j] = employees[j + 1];
                }
                employees[--count] = null; 
            }
        }
        System.out.println("Employee not found.");
    }
}
