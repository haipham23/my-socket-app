import React, { memo } from 'react';
import { Text, View } from 'react-native';

import styles from './Ticker.styled';

const Ticker = ({ records }) => {

  return (
    <View>
      <Text style={styles.title}>Ticker</Text>
      <View style={styles.container} >
        <Text>
          {JSON.stringify(records)}
        </Text>
      </View>
    </View>
  );
};

export default memo(Ticker);
