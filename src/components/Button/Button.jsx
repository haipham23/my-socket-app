import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './Button.styled';

const Button = ({ onPress, text, disabled }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.buttonContainer,
      disabled
        ? styles.buttonDisabled
        : styles.buttonEnabled
    ]}
    disabled={disabled}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);


Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default memo(Button);
