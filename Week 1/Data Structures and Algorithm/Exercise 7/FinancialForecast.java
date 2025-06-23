public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double pv, double rate, int years) {
        if (years == 0) {
            return pv; 
        }
        return (1 + rate) * futureValue(pv, rate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 10000.0; 
        double annualGrowthRate = 0.08; 
        int years = 5;

        double result = futureValue(presentValue, annualGrowthRate, years);
        System.out.printf("Future value after %d years: Rs%.2f\n", years, result);
    }
}