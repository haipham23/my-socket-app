import numeral from 'numeral';

const formatNumber = (str, format = '0,0') => numeral(str).format(format);

export default formatNumber;
