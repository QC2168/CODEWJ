import { Component } from 'react'
import { View, Text} from '@tarojs/components'
import './profile.scss'

export default class Profile extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='profile flex justify-center'>
        <Text>HELLO PROFILE</Text>
      </View>
    )
  }
}
