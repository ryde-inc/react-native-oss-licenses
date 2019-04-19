import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LicenseItem = ({ license }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.project}>{license.project}</Text>
      <View style={styles.licenseWrapper}>
        <Text style={styles.license}>{license.license}</Text>
      </View>
    </View>
  )
}

LicenseItem.propTypes = {
  license: PropTypes.shape({
    project: PropTypes.string,
    license: PropTypes.string,
  }).isRequired,
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  project: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  licenseWrapper: {
    marginTop: 8,
    padding: 16,
    backgroundColor: '#f7f7f9',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    borderRadius: 4,
  },
  license: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 12,
    fontWeight: 'normal',
  },
})

export default LicenseItem
