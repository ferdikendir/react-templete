export const maskCreditCardNumber = (cardNumber: string, startNumber = 0, endNumber = -4) => {
    // Sadece rakamları al (boşlukları korumak için)
    const digits = cardNumber.replace(/\D/g, '');

    // Son 6 rakamı al, geri kalanları * ile değiştir
    const masked = digits
        .slice(startNumber, endNumber)
        .replace(/\d/g, '*') + digits.slice(endNumber);

    // Boşlukları eski formata uygun şekilde ekle
    let formatted = '';
    let digitIndex = startNumber;

    for (const char of cardNumber) {
        if (/\d/.test(char)) {
            formatted += masked[digitIndex];
            digitIndex++;
        } else {
            formatted += char; // Boşlukları koru
        }
    }

    return formatted;
};
