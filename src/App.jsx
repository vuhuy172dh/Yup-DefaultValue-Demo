import { userSchema } from './validations/UserValidation'
import './styles/index.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const user = {
  name: 'Vu Quoc Huy',
  email: 'quochuy123dh@gmail.com',
  address: 'kí túc xá khu B đại học quốc gia tp hcm'
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: user,
    resolver: yupResolver(userSchema)
  })

  const submitForm = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitForm)}>
        {/*name*/}
        <input type="text" {...register('name')} placeholder="Name..." />
        <p>{errors?.name?.message}</p>

        {/*email*/}
        <input
          type="text"
          {...register('email')}
          placeholder="email@gmail.com"
        />
        <p>{errors.email?.message}</p>

        {/*address*/}
        <input type="text" {...register('address')} placeholder="address" />
        <p>{errors.address?.message}</p>
        <input type="submit" id="submit" />
      </form>
    </div>
  )
}

export default App
