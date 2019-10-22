import call from 'react-native-phone-call'
import Share from 'react-native-share'
import Toast from 'react-native-simple-toast';
import {
  isEmpty,
} from 'loadsh'

export const makeCall = ({phoneNo, makePrompt}) => {
  const args = {
    number: phoneNo,
    prompt: makePrompt,
  }
  call(args)
}

export const shareContact = ({phoneNo}) => {
  const shareOptions = {
    title: 'Share via',
    message: phoneNo,
  }
  Share.open(shareOptions)
}

export const validateField = fields => {
  for(let i=0; i<fields.length; i++) {
    const field = fields[i]
    const {
      placeHolder,
      value,
    } = field
    if (isEmpty(value)) {
      Toast.show(`Please ${placeHolder}.`)
      return false
    }
  }
  return true
}