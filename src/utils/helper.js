import call from 'react-native-phone-call'
import Share from 'react-native-share'

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