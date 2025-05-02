import { Account } from './account';
import { Bank } from './bank';

export interface CreditCard {
    creditCardId: number;
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvv: string;
    balance: number;
    status: boolean;
    createdOn: string;
    currency: string;
    bankId?: number;
    bank?: Bank;
    accountId?: number;
    account?: Account;

    closeDate?: string;
}

export const mainCreditCards: CreditCard[] = [
    {
        creditCardId: 1,
        cardNumber: '1234 5678 9012 3456',
        cardHolder: 'Ferdi KENDİR',
        expirationDate: '12/24',
        cvv: '123',
        balance: 140000,
        status: true,
        createdOn: '2024-02-12',
        bankId: 1,
        accountId: 2,
        currency: 'TRY'
    },
    {
        creditCardId: 2,
        cardNumber: '1234 5678 9012 3456',
        cardHolder: 'Ferdi KENDİR',
        expirationDate: '12/24',
        cvv: '123',
        balance: 500000,
        status: true,
        createdOn: '2024-02-12',
        bankId: 3,
        accountId: 5,
        currency: 'TRY'
    },
    {
        creditCardId: 3,
        cardNumber: '1234 5678 9012 3456',
        cardHolder: 'Ferdi KENDİR',
        expirationDate: '12/24',
        cvv: '123',
        balance: 31800,
        status: true,
        createdOn: '2024-02-12',
        bankId: 2,
        accountId: 4,
        currency: 'TRY'
    },
    {
        creditCardId: 4,
        cardNumber: '1234 5678 9012 3456',
        cardHolder: 'Ferdi KENDİR',
        expirationDate: '12/24',
        cvv: '123',
        balance: 500000,
        status: false,
        createdOn: '2024-02-12',
        bankId: 4,
        accountId: 6,
        currency: 'TRY',
        closeDate: '2025-01-10'
    },
    {
        creditCardId: 5,
        cardNumber: '1234 5678 9012 3456',
        cardHolder: 'Ferdi KENDİR',
        expirationDate: '12/24',
        cvv: '123',
        balance: 122100,
        status: false,
        createdOn: '2024-02-12',
        bankId: 6,
        accountId: 8,
        currency: 'TRY',
        closeDate: '2025-01-10'
    },
    {
        creditCardId: 5,
        cardNumber: '1234 5678 9012 3456',
        cardHolder: 'Ferdi KENDİR',
        expirationDate: '12/24',
        cvv: '123',
        balance: 140000,
        status: false,
        createdOn: '2024-02-12',
        bankId: 5,
        accountId: 7,
        currency: 'TRY',
        closeDate: '2025-01-10'
    }
];