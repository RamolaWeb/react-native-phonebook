import React, {
  Component,
} from 'react'
import {
  connect,
} from 'react-redux'
import {
  View,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'

import {
  viewAllContact,
} from '../../slices'

class ViewAllContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
    getAllContacts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      getAllContacts,
    } = this.props
    getAllContacts()
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>
          View All Contacts
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.viewAllContact.contacts
})

export default connect(mapStateToProps, {
  getAllContacts: viewAllContact,
})(ViewAllContacts)

