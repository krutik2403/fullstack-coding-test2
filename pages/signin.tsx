import { useAuth } from '../utils/auth'
import Auth from '../components/Auth'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/toast'

const Signin = () => {
  const auth = useAuth()
  const toast = useToast()
  const router = useRouter()

  const signIn = ({ email, password }) => {
    auth
      .signin(email, password)
      .then(() => {
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
  return (
    <div>
      <Auth type="Sing In" onSubmit={signIn} />
    </div>
  )
}

export default Signin
