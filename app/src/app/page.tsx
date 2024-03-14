import FetchAPI from '@/components/common/FetchAPI'
import Todos from '../components/todo-list/Todos'
import { Box, Flex, Divider, Text, Button } from '@chakra-ui/react'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import { MdLogin, MdLockPerson } from 'react-icons/md'

export const metadata: Metadata = {
  title: 'Well hello!',
}

const HomePage: FC<NextPage> = () => {
  return (
    <Box>
      <Todos />
      <Divider />
      <Text mt={10} fontSize='20'>
        Menu
      </Text>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        p={4}
        bg='gray.50'
        borderRadius='md'
        boxShadow='sm'
      >
        <Link href='/login' passHref>
          <Box
            as='a'
            marginRight='5px'
            color='blue.500'
            _hover={{ textDecoration: 'underline' }}
          >
            Login
          </Box>
        </Link>
        <Link href='/signup' passHref>
          <Box as='a' color='blue.500' _hover={{ textDecoration: 'underline' }}>
            Sign up
          </Box>
        </Link>
      </Flex>
      <Flex alignItems='center' mb={10}>
        <MdLockPerson style={{ marginRight: '5px' }} />
        <Link href='/protected-page' passHref>
          Protected Page
        </Link>
      </Flex>
      <FetchAPI />
    </Box>
  )
}

export default HomePage
