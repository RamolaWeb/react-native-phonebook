import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      margin: 10,
      borderWidth: 1,
      borderRadius: 7,
      elevation: 1,
    },
    nameContainer: {
      flex: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nameText: {
      fontSize: 18,
    },
    actionContainer: {
      flex: 0.3,
      justifyContent: 'space-between',
    },
    callContainer: {},
    messageContainer: {},
    callText: {
      fontSize: 15,
    },
    messageText: {
      fontSize: 15,
    },
})

export default styles