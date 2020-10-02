import { StatusBar } from 'components/StatusBar/StatusBar'
import React from 'react'

const styles = {
  bar: {
    backgroundColor: 'transparent',
  },
}

export const StatusBarSpacer = () => <StatusBar style={styles.bar} />
