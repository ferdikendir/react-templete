import { AccountType } from '@core/types';
import { CreditCard, Account } from '@core/api';

export interface Bank {
    id: number;
    name: string;
    logo: string;
    accountCount?: number;
    creditCount?: number;
    creditCardCount?: number;
    totalCreditCardBalance?: number;
    totalAccountBalance?: number;
    totalCreditBalance?: number;
}

export interface DataType {
    key: React.ReactNode;
    name: string;
    logo: React.ReactNode;
    status?: React.ReactNode;
    creditCardCount?: number;
    totalCreditCardBalance?: React.ReactNode;
    accountCount?: number;
    totalAccountBalance?: React.ReactNode;
    type: React.ReactNode;
    accountType: AccountType;
    children?: DataType[];

    account?: Account;
    creditCard?: CreditCard;
    bank?: Bank;
}

export const mainBanks: Bank[] = [
    {
        id: 1,
        name: 'Ziraat Bankası',
        logo: 'https://mir-s3-cdn-cf.behance.net/projects/404/16457723.548b0671582f4.png'
    }, {
        id: 2,
        name: 'Enpara',
        logo: 'https://play-lh.googleusercontent.com/HKHy3M2W1h72e78sNLFIEngGaI5S2xjb-8b6jIXm3aOM01cYeV24wyETYEiKHTVOleY'
    }, {
        id: 3,
        name: 'Akbank',
        logo: 'https://logos-world.net/wp-content/uploads/2021/02/Akbank-Logo.png'
    }, {
        id: 4,
        name: 'Garanti BBVA',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckDLd4Qysjj2A8E4tbtGZELhagDWl-Bm1yA&s'
    }, {
        id: 5,
        name: 'İş Bankası',
        logo: 'https://cdn.brandfetch.io/isbank.com.tr/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed'
    }, {
        id: 6,
        name: 'Yapı Kredi',
        logo: 'https://www.esmmmo.org/storage/images/1c87cdb503944d9b9eefeb72e1d3d1fa.png'
    }
];