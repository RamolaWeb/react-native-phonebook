import {
    fieldType,
  } from '../../constants'
  
  const {
    TEXT,
    PHONE_NUMBER,
    DATE_OF_BIRTH,
  } = fieldType
  
  export const fields = [
    {
      key: 'name',
      type: TEXT,
      required: true,
      value: '',
      placeHolder: 'Enter the name of contact',
    },
    {
      key: 'company',
      type: TEXT,
      required: true,
      value: '',
      placeHolder: 'Enter the company of contact',
    },
    {
      key: 'phone_number',
      type: PHONE_NUMBER,
      required: true,
      value: '',
      placeHolder: 'Enter the phone number of contact',
    },
    {
      key: 'dob',
      type: DATE_OF_BIRTH,
      required: true,
      value: '',
      placeHolder: 'Enter the date of birth of the contact',
    }
  ]