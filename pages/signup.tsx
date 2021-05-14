import { useAuth } from '../utils/auth'
import Auth from '../components/Auth'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/toast'

const Signup = () => {
  const auth = useAuth()
  const toast = useToast()
  const router = useRouter()

  const signUp = ({ email, password }) => {
    auth
      .signup(email, password)
      .then(() => {
        toast({
          title: 'Success!',
          description: 'Your account has been created.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        router.push('/', '/', { scroll: false, shallow: true })
      })
      .catch((error) => {
        toast({
          title: 'An error occurred.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
  }

  return <Auth type="Sign Up" onSubmit={signUp} />
}

export default Signup
