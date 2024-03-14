'use client'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // there is no time to add logic here
    //future interns can do it ;)
  }

  return (
    <Box width='full' maxW='md' mx='auto' mt={5} p={4} boxShadow='md'>
      <Box textAlign='center' mb={5}>
        <h1>Sign Up</h1>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type='text'
                name='name'
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                name='password'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type='password'
                name='confirmPassword'
                placeholder='Confirm your password'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </FormControl>
            <Button width='full' type='submit' colorScheme='teal'>
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  )
}

export default SignUpPage
