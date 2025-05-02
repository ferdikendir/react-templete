export const getCurrencyDisplay = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'narrowSymbol'
    }).format(amount)
        .replace(/(\D)(\d)/, '$1 $2');
};
