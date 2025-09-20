#include <iostream>
#include <cstdlib>
#include <ctime>
#include <thread>
#include <chrono>

struct Trade {
    double price;
    double quantity;
};

Trade generateMockTrade() {
    Trade t;
    t.price = 27000 + (std::rand() % 1000 - 500); // random fluctuation
    t.quantity = (std::rand() % 1000) / 100.0;     // random qty
    return t;
}

int main() {
    std::srand(std::time(nullptr));
    std::cout << "Backend running - generating mock trades...\n";

    while (true) {
        Trade t = generateMockTrade();
        std::cout << "Trade | Price: " << t.price 
                  << " | Qty: " << t.quantity << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(2));
    }

    return 0;
}
