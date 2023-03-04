import { Container, Box, Heading, Text } from '@chakra-ui/react';

export interface IHero {
  title: string;
  text: string;
  image: string;
}

export default function Hero({ title, text, image }: IHero) {
  return (
    <Box
      // set dark area to 35% of the image height
      bgImage={{
        base: `linear-gradient(180deg, rgba(24,24,25,1) 35%, rgba(24,24,25,0.5) 50%, rgba(24,24,25,0) 60%), url(${image})`,
        xl: `linear-gradient(90deg, rgba(24,24,25,1) 35%, rgba(24,24,25,0.5) 70%, rgba(24,24,25,0) 80%), url(${image})`,
      }}
      bgRepeat="no-repeat"
      bgPosition={{ base: '50% 0', xl: 'center, calc(50% + 300px) 100%' }}
      bgSize="auto 100%"
      minH="100vh"
      // center content on large screens
      display={{ xl: 'flex' }}
      alignItems={{ xl: 'center' }}
    >
      <Container
        maxW={{
          base: '100%',
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '90%',
        }}
      >
        <Box
          // match to dark area
          pt={{ base: '12vh', md: '20vh', xl: '0' }}
          maxW="700px"
        >
          <Box>
            <Heading
              as="h1"
              color="white"
              textTransform="uppercase"
              fontSize={{ base: '4xl', lg: '6xl' }}
              mb={{ base: '4rem', md: '2rem' }}
            >
              {title}
            </Heading>
            <Text color="white" fontSize={{ base: 'lg', lg: 'xl' }}>
              {text}
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
