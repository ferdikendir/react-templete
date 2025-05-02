import { getCurrencyDisplay } from '@shared/utils';

interface CurrencyProps {
    value: number;
    currency: string;
    className?: string;
}

export const Currency = ({ value, currency, className }: CurrencyProps) => {
    return (
        <span className={className}>{getCurrencyDisplay(value, currency)}</span>
    );
};
