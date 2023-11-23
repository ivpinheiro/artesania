class ProductDiscount {
    static discountCalculator(productSale: number, productPrice: number): number {
        const value: number = ((productPrice - productSale) / productPrice) * 100
        return Number(value.toFixed(0))
    }
}
class ProductList {
    static shuffleArray<T>(listShuffle: T[]): T[] {
        for (let i: number = listShuffle.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [listShuffle[i], listShuffle[j]] = [listShuffle[j], listShuffle[i]];
        }
        return listShuffle;
    }
}

export const ProductUtils = {
    ProductDiscount,
    ProductList
};
