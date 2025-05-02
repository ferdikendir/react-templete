import moment from 'moment';

export const momentFormatter = (date: moment.Moment | string, format = 'DD MMMM YYYY') => {
    return moment(date).format(format);
};

