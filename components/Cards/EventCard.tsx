import {
  Box,
  Heading,
  Text,
  Icon,
  HStack,
  VStack,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';

export interface IEventCard {
  id: string;
  title: string;
  image: string;
  description: string;
  speakerName: string;
  dateTime: string;
}

export function EventCard({
  id,
  title,
  image,
  description,
  speakerName,
  dateTime,
}: IEventCard) {
  // modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Push buttons to the bottom if text is smaller */}
      <VStack justifyContent="space-between" height="100%">
        {/* Content container */}
        <Box>
          {/* Image */}
          <Box border="2px solid" borderColor="ui.primary">
            <Image
              src={image}
              alt={title}
              width={768}
              height={200}
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>
          {/* Title */}
          <Heading
            as="h3"
            mt={3}
            mb={4}
            fontSize={{ base: 'xl' }}
            textTransform="uppercase"
            fontWeight="medium"
          >
            {title}
          </Heading>
          {/* Description */}
          <Text
            fontSize={{ base: 'lg', lg: 'md' }}
            mb={4}
            noOfLines={{ base: 3, lg: 4 }}
          >
            {description}
          </Text>
          {/* Speaker */}
          <HStack spacing={2} mb={{ base: 2, lg: 4 }}>
            <Icon viewBox="0 0 20 20" color="ui.primary">
              <path
                fill="currentColor"
                d="M10 .113c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-4.93 16.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78a7.893 7.893 0 01-4.93 1.72c-1.86 0-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 012 10.113c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM10 4.113c-1.94 0-3.5 1.56-3.5 3.5s1.56 3.5 3.5 3.5 3.5-1.56 3.5-3.5-1.56-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
              />
            </Icon>
            <Box fontSize={{ base: 'lg', lg: 'md' }}>{speakerName}</Box>
          </HStack>
          {/* Date and time */}
          <HStack spacing={2} mb={{ base: 4, lg: 6 }}>
            <Icon viewBox="0 0 24 25" color="ui.primary">
              <path
                fill="currentColor"
                d="M20 3.5h-1v-2h-2v2H7v-2H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2Zm0 18H4v-11h16v11Zm0-13H4v-3h16v3Z"
              />
            </Icon>
            <Box fontSize={{ base: 'lg', lg: 'md' }}>{dateTime}</Box>
          </HStack>
        </Box>
        {/* Buttons */}
        <HStack spacing={5} w="100%">
          <Button
            variant="primary"
            flex={1}
            as="a"
            href={`https://example.org?eventid=${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Button>
          <Button variant="secondary" flex={1} onClick={onOpen}>
            Enroll
          </Button>
        </HStack>
      </VStack>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={24} mb={12}>
            <Heading as="h3" textAlign="center">
              Thanks for enrolling!
            </Heading>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
