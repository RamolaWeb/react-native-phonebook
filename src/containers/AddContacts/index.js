import React, {
  Component,
} from 'react'
import {
  connect,
} from 'react-redux'
import PropTypes from 'prop-types'

import {
  AddContacts,
} from '../../components'

class AddContactsHolder extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <AddContacts
      />
    )
  }

}

const mapStateToProps = state => ({})
export default connect(mapStateToProps, null)(AddContactsHolder)