import { Box, Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export interface ITestimonial {
  image: string;
  name: string;
  company: string;
  text: string;
}

export default function Testimonial({
  image,
  name,
  company,
  text,
}: ITestimonial) {
  return (
    <Box
      pt={{ base: '10' }}
      pb={{ base: '12' }}
      px={{ base: '10' }}
      borderRadius="xl"
      bgColor="ui.primary"
      w={{ base: '100%', lg: '90%' }}
      mx="auto"
      position="relative"
      zIndex={2}
    >
      <Grid gap={{ base: '8' }} templateColumns={{ lg: '250px auto' }}>
        <GridItem ml={{ xl: 5 }}>
          <Flex alignItems="center" h="100%">
            <Box mx="auto" w={{ base: '120px', lg: '100%' }}>
              <Image
                src={image}
                alt={name}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100px, 500px"
              />
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Box
            borderRadius="xl"
            border="2px solid white"
            py={{ base: 10, lg: 10 }}
            px={{ base: 6, lg: 12 }}
          >
            <Box
              color="text.secondary"
              textTransform="uppercase"
              fontWeight="extrabold"
              letterSpacing={2}
              mb={{ base: 1 }}
            >
              {name}
            </Box>
            <Box as="em" display="inline-block" mb={{ base: 5 }} color="white">
              {company}
            </Box>
            <Text
              fontSize={{ base: 'md', lg: 'lg' }}
              lineHeight={1.8}
              color="white"
            >
              {text}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
