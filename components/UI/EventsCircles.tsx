import { Box } from '@chakra-ui/react';

export const TrendingCategoriesCircles = () => (
  <>
    {/* Yellow circle */}
    <Box
      position="absolute"
      w="500px"
      h="500px"
      borderRadius="50%"
      bgColor="#F4C734"
      zIndex={1}
      bottom={{ base: '20%' }}
      left={{
        base: 'calc(50% - 50px)',
        lg: 'calc(50% + 350px)',
        xl: 'calc(50% + 450px)',
        '2xl': 'calc(50% + 550px)',
      }}
    />
    {/* Green circle outline bottom */}
    <Box
      display={{ base: 'none', xl: 'block' }}
      position="absolute"
      bottom="-150px"
      left={{
        xl: 'calc(50% - 1000px)',
      }}
      w="300px"
      h="300px"
      border="8px solid #40A783"
      borderRadius="50%"
      bgColor="transparent"
      zIndex={1}
    />
  </>
);

export const UpcomingEventsCircles = () => (
  <>
    {/* Green circle outline top */}
    <Box
      display={{ base: 'none', xl: 'block' }}
      position="absolute"
      top="-150px"
      left={{
        xl: 'calc(50% - 1000px)',
      }}
      w="300px"
      h="300px"
      border="8px solid #40A783"
      borderRadius="50%"
      bgColor="transparent"
      zIndex={1}
    />
    {/* Green circle bottom */}
    <Box
      display={{ base: 'none', xl: 'block' }}
      position="absolute"
      bottom="15%"
      left={{ xl: 'calc(50% + 750px)' }}
      w="250px"
      h="250px"
      borderRadius="50%"
      bgColor="#40A783"
      zIndex={1}
    />
    {/* White circle bottom */}
    <Box
      display={{ base: 'none', xl: 'block' }}
      position="absolute"
      bottom="8.5%"
      left={{ xl: 'calc(50% + 690px)' }}
      w="150px"
      h="150px"
      borderRadius="50%"
      border="7px solid white"
      bgColor="transparent"
      zIndex={1}
    />
    {/* Green circle bottom */}
    <Box
      display={{ md: 'none' }}
      position="absolute"
      w={{ base: '320px' }}
      h={{ base: '320px' }}
      borderRadius="50%"
      bgColor="#40A783"
      zIndex={1}
      bottom={{ base: '-300px' }}
      left={{
        base: 'calc(50% - 400px)',
      }}
    />
  </>
);

export const TestimonialCircles = () => (
  <>
    {/* Green circle */}
    <Box
      display={{ md: 'none' }}
      position="absolute"
      w={{ base: '320px' }}
      h={{ base: '320px' }}
      borderRadius="50%"
      bgColor="#40A783"
      zIndex={1}
      top={{ base: '-20px' }}
      left={{
        base: 'calc(50% - 400px)',
      }}
    />
    {/* Yellow circle */}
    <Box
      position="absolute"
      w={{ base: '350px', lg: '420px' }}
      h={{ base: '350px', lg: '420px' }}
      borderRadius="50%"
      bgColor="#F4C734"
      zIndex={1}
      bottom={{ base: '-100px' }}
      left={{
        base: 'calc(50% - 10px)',
        md: 'calc(50% - 580px)',
        lg: 'calc(50% - 730px)',
        xl: 'calc(50% - 850px)',
        '2xl': 'calc(50% - 900px)',
      }}
    />
  </>
);
