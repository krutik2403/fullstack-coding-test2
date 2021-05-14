import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Flex, Stack, Text } from '@chakra-ui/layout'
import { Field, Form, Formik } from 'formik'

type Props = {
  type: string
  onSubmit: Function
}

const Auth = ({ type, onSubmit }: Props) => {
  return (
    <div>
      <Flex align="center" justify="center" h="100vh" minW="3xl">
        <Stack>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            {type}
          </Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              onSubmit(values)
            }}
          >
            {() => (
              <Form>
                <Field name="email">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        autoFocus
                        aria-label="Email Address"
                        placeholder="example@example.com"
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input aria-label="Password" type="password" {...field} />
                    </FormControl>
                  )}
                </Field>
                <Button type="submit" mt={4} colorScheme="teal" variant="solid">
                  {type}
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
    </div>
  )
}

export default Auth
