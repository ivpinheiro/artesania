class ProductDiscount {
    static discountCalculator(productSale: number, productPrice: number): number {
        const value = ((productPrice - productSale) / productPrice) * 100
        return Number(value.toFixed(0))
    }
}

export const ProductUtils = {
    ProductDiscount
};
