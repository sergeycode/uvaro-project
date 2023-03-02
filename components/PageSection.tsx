import { Box, Container } from '@chakra-ui/react';

export default function PageSection({
  bgColor,
  children,
}: {
  bgColor?: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      py={{ base: '16' }}
      position="relative"
      overflow="hidden"
      bgColor={bgColor}
    >
      <Container>{children}</Container>
    </Box>
  );
}
