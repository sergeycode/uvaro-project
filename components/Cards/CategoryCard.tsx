import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export interface ICategoryCard {
  icon: string;
  title: string;
  text: string;
}

export function CategoryCard({ icon, title, text }: ICategoryCard) {
  return (
    <Box
      px="6"
      py="7"
      borderRadius="xl"
      border="2px solid"
      borderColor="brand.black"
      bgColor="white"
      boxShadow="md"
      height="100%"
    >
      <Box mx="auto" w="55px" height="55px" position="relative">
        <Image src={icon} alt={title} fill />
      </Box>
      <Heading
        as="h3"
        my="3"
        fontSize={{ base: '2xl' }}
        textTransform="uppercase"
        fontWeight="semibold"
      >
        {title}
      </Heading>
      <Text fontSize={{ base: 'sm' }}>{text}</Text>
    </Box>
  );
}
