import React, { memo } from 'react';
import { Text, View } from 'react-native';

import styles from './Books.styled';

const Books = ({ records }) => {

  return (
    <View>
      <Text style={styles.title}>Books</Text>
      {/* <View style={styles.container} >
        <Text>
          {JSON.stringify(records)}
        </Text>
      </View> */}
    </View>
  );
};

export default memo(Books);
