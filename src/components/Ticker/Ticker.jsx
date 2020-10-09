import React, { memo } from 'react';
import { Text, View } from 'react-native';

import styles from './Ticker.styled';
import formatNumber from '../../utils/formatNumber';

const Ticker = ({ records, apiSymbol }) => {
  if (!records || !apiSymbol) {
    return null;
  }

  const [
    BID,
    // BID_SIZE,
    // ASK,
    // ASK_SIZE,
    DAILY_CHANGE,
    DAILY_CHANGE_RELATIVE,
    // LAST_PRICE,
    VOLUME,
    HIGH,
    LOW
  ] = records;

  const bid = formatNumber(BID, '0,0.0');
  const volume = formatNumber(VOLUME);
  const dailyChange = formatNumber(DAILY_CHANGE);
  const changedPercent = formatNumber(DAILY_CHANGE_RELATIVE / (BID * 100), '%0,0.00');
  const low = formatNumber(BID - LOW, '0,0.0');
  const high = formatNumber(BID + HIGH, '0,0.0');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {apiSymbol}
        </Text>
        <Text style={styles.text}>
          {bid}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>
          VOL: {volume}
        </Text>
        <Text style={styles.text}>
          {`${dailyChange} (${changedPercent})`}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>
          LOW: {low}
        </Text>
        <Text style={styles.text}>
          HIGH: {high}
        </Text>
      </View>
    </View>
  );
};

export default memo(Ticker);
