declare module 'react-native-oss-licenses' {
  import React from 'react'
  import { ViewStyle, StyleProp } from 'react-native'

  export interface License {
    project: string
    license: string
  }

  export interface LicenseListProps {
    data: License[]
    style?: StyleProp<ViewStyle>
  }

  export class LicenseList extends React.Component<LicenseListProps> {}

  export interface LicenseItemProps {
    license: License
  }

  export class LicenseItem extends React.Component<LicenseItemProps> {}
}
