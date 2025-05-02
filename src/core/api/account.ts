
import moment from 'moment';
import { Bank } from './bank';

export interface Account {
    accountId: number;
    bank?: Bank;
    bankId: number;
    currency: string;
    information: string;
    description: string;
    status: boolean;
    createdOn: moment.Moment | string;
    balance: number;
}

export const mainAccounts: Account[] = [
    {
        accountId: 1,
        bankId: 1,
        currency: 'EUR',
        information: 'Bursa Şubesi - 5004',
        description: 'Bursa Şubesi - 5004',
        status: true,
        createdOn: '2024-02-12',
        balance: 1000000
    },
    {
        accountId: 2,
        bankId: 1,
        currency: 'TRY',
        information: 'Bursa Şubesi - 5003',
        description: 'Bursa Şubesi - 5003',
        status: true,
        createdOn: '2023-03-27',
        balance: 200000
    },
    {
        accountId: 3,
        bankId: 1,
        currency: 'TRY',
        information: 'Gölyaka Şubesi - 5001',
        description: 'Gölyaka Şubesi - 5001',
        status: true,
        createdOn: '2015-12-18',
        balance: 3000000
    },
    {
        accountId: 4,
        bankId: 2,
        currency: 'TRY',
        information: 'Online Bankacılık - 03663',
        description: 'Online Bankacılık - 03663',
        status: true,
        createdOn: '2020-07-03',
        balance: 400000
    },
    {
        accountId: 5,
        bankId: 3,
        currency: 'TRY',
        information: 'Beşyüzevler Şubesi - 0643',
        description: 'Beşyüzevler Şubesi - 0643',
        status: true,
        createdOn: '2020-09-14',
        balance: 500000
    },
    {
        accountId: 6,
        bankId: 4,
        currency: 'TRY',
        information: 'Beşyüzevler Şubesi - 0178',
        description: 'Beşyüzevler Şubesi - 0178',
        status: true,
        createdOn: '2020-09-14',
        balance: 60000
    },
    {
        accountId: 7,
        bankId: 5,
        currency: 'TRY',
        information: 'Düzce Şubesi - 4320',
        description: 'Düzce Şubesi - 4320',
        status: true,
        createdOn: '2015-10-02',
        balance: 700000
    },
    {
        accountId: 8,
        bankId: 6,
        currency: 'TRY',
        information: 'Beşyüzevler Şubesi - 0493',
        description: 'Beşyüzevler Şubesi - 0493',
        status: true,
        createdOn: '2023-02-15',
        balance: 80000000
    }
];