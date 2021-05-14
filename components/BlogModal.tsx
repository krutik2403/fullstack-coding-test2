import { Button } from '@chakra-ui/button'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import { Text } from '@chakra-ui/layout'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  openBlog: string
  setOpenBlog: Function
  data: any
  blogId: string
}
const BlogModal = ({
  isOpen,
  onClose,
  openBlog,
  setOpenBlog,
  data,
  blogId,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen && openBlog === blogId}
      size="4xl"
      isCentered
      onClose={() => {
        setOpenBlog('')
        onClose()
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Blog Content</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as="p">{data}</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            onClick={() => {
              setOpenBlog('')
              onClose()
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default BlogModal
