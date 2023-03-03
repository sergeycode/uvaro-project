import { Box } from '@chakra-ui/react';

export function YellowCircle() {
  return (
    <Box
      position="absolute"
      bottom={{ base: '20%' }}
      left={{
        base: 'calc(50% - 50px)',
        lg: 'calc(50% + 350px)',
        xl: 'calc(50% + 450px)',
      }}
      w="500px"
      h="500px"
      borderRadius="50%"
      bgColor="#F4C734"
      zIndex={-1}
    />
  );
}

export function GreenCircleOutline({
  top,
  bottom,
}: {
  top?: string;
  bottom?: string;
}) {
  return (
    <Box
      display={{ base: 'none', xl: 'block' }}
      position="absolute"
      top={top}
      bottom={bottom}
      left={{
        xl: 'calc(50% - 1000px)',
      }}
      w="300px"
      h="300px"
      border="8px solid #40A783"
      borderRadius="50%"
      bgColor="transparent"
    />
  );
}

export function GreenCircle() {
  return (
    <Box
      display={{ base: 'none', xl: 'block' }}
      position="absolute"
      bottom="15%"
      left={{ xl: 'calc(50% + 750px)' }}
      w="250px"
      h="250px"
      borderRadius="50%"
      bgColor="#40A783"
    />
  );
}

export function WhiteCircleOutline() {
  return (
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
    />
  );
}
