import PropTypes from 'prop-types'
import React from 'react'
import { FlatList, View, ViewPropTypes } from 'react-native'
import LicenseItem from './LicenseItem'

const LiscenseList = ({ data, style }) => {
  return (
    <View style={style}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <LicenseItem license={item} />}
      />
    </View>
  )
}

LiscenseList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      project: PropTypes.string,
      license: PropTypes.string,
    })
  ).isRequired,
  style: ViewPropTypes.style,
}

LiscenseList.defaultProps = {
  style: undefined,
}

export default LiscenseList
