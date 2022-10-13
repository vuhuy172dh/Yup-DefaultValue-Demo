import * as yup from 'yup'

export const userSchema = yup.object().shape({
  name: yup.string().required('Name should be required please'),
  email: yup.string().email().required(),
  address: yup.string().required()
})
