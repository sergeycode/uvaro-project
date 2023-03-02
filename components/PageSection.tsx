import { Box, Container } from '@chakra-ui/react';

export default function PageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box py={{ base: '16' }} position="relative" overflow="hidden">
      <Container>{children}</Container>
    </Box>
  );
}
