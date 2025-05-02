export const getCurrencySymbol = (currency: string) => {
    return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        currencyDisplay: 'narrowSymbol',
    })
        .formatToParts(1)
        .find(part => part.type === 'currency')?.value;
};
