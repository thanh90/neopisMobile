import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  m_battery: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 100,
    alignItems: 'center'
  },
  battery_info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  battery_image: {
    width: 97,
    height: 41,
    borderRadius: 2,
    backgroundColor: '#2e2d2f'
  },
  battery_volumn: {
    height: 41,
    backgroundColor: 'green'
  },
  battery_value: {
    fontFamily: 'HiraKakuProN-W3',
    fontSize: 20,
    color: '#ebecec'
  },
  battery_label: {
    marginTop: 'auto',
    fontFamily: 'HiraKakuProN-W3',
    fontSize: 12,
    letterSpacing: -0.5,
    color: '#b8b8c2'
  }
})

const CurrentBatteryPercentage = props => {

  return <View onPress={() => LinkingIOS.openURL(`/#/gateways/${props.gwId}/sensors/${props.sensorId}`)}>
    <View style={styles.m_battery}>
      <View style={styles.battery_image}>
        {/* <View style={[{ width: 0.97 * props.value }, styles.battery_volumn]}>
        </View> */}
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#ffea9a', '#42e27f', '#338fff']}
          style={[{ width: 0.97 * props.value }, styles.battery_volumn]}>
        </LinearGradient>
      </View>
      <View style={styles.battery_info}>
        <Text style={styles.battery_value}>{props.value}%</Text>
        <Text style={styles.battery_label}>배터리량</Text>
      </View>
    </View>
  </View>
}

CurrentBatteryPercentage.propTypes = {
  value: PropTypes.number.isRequired
}

export default CurrentBatteryPercentage;