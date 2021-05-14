import { useDisclosure } from '@chakra-ui/hooks'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import BlogModal from '../components/BlogModal'
import firebase from '../utils/firebase'

type BlogProps = {
  blogs: [{ blogId: string; data: any }]
}

const Blog = ({ blogs }: BlogProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [openBlog, setOpenBlog] = useState('')
  return (
    <Box>
      <Text fontSize="5xl" textAlign="center">
        Blogs
      </Text>
      <Flex wrap="wrap" m={4}>
        {blogs.map((blog, index) => (
          <Box
            m={4}
            p={4}
            borderWidth={1}
            maxW={400}
            borderRadius="lg"
            bg="gray.100"
            _hover={{
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.24)',
            }}
            role="button"
            onClick={() => {
              setOpenBlog(blog?.blogId)
              onOpen()
            }}
            key={index}
          >
            <Image src={blog?.data?.blog_image} borderRadius="lg" />
            <Text as="h2" fontSize="2xl" color="gray.700" mt={2}>
              {blog?.data?.title}
            </Text>
            <BlogModal
              isOpen={isOpen}
              onClose={onClose}
              openBlog={openBlog}
              setOpenBlog={setOpenBlog}
              data={blog?.data?.content}
              blogId={blog?.blogId}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const db = firebase.firestore()
  const res = await db.collection('blogs').get()
  let data = []
  res.forEach((doc) => data.push({ blogId: doc.id, data: doc.data() }))
  return {
    props: { blogs: data },
  }
}

export default Blog
