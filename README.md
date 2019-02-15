# react-native-oss-licenses

A license list generator of all your dependencies for react-native applications.

## Installation

```
yarn add -D heathrow-inc/react-native-oss-licenses
```

### iOS

No additional steps are required.

### Android

Install [Gradle License Plugin](https://github.com/jaredsburrows/gradle-license-plugin).

```android/build.gradle
buildscript {
    // ...
    dependencies {
        // ...
        classpath 'com.jaredsburrows:gradle-license-plugin:0.8.42' // <- ADD
    }
}
```

```android/app/build.gradle
apply plugin: 'com.android.application'
apply plugin: 'com.jaredsburrows.license' // <- ADD

// ...

licenseReport {
    generateHtmlReport = false
    generateJsonReport = true
    copyHtmlReportToAssets = false
    copyJsonReportToAssets = false
}
```

## Usage

```
yarn run react-native-oss-licenses > ./licenses.json
```

## Example

```
const licenses = require('./licenses.json')

const LicenseList = () => {
  return (
    <FlatList
      data={licenses}
      renderItem={({ item }) => (
        <LicenseItem item={item} />
      )
    />
  )
}

const LicenseItem = (license) => {
  return (
    <View>
      <Text>{license.project}</Text>
      <Text>{license.license}</Text>
    </View>
  )
}
```
