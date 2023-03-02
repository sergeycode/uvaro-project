import { Box, Heading, Text, VStack, Grid, GridItem } from '@chakra-ui/react';

import { ICategoryCard, CategoryCard } from '@/components/Cards/CategoryCard';

export interface ITrendingContent {
  title: string;
  text: string[];
}

export default function TrendingCategories({
  content,
  categories,
}: {
  content: ITrendingContent;
  categories: ICategoryCard[];
}) {
  return (
    <Box textAlign={{ base: 'center' }}>
      <Heading
        as="h2"
        textTransform="uppercase"
        fontSize={{ base: '2xl', lg: '4xl' }}
        mb={{ base: 10, lg: 6 }}
        textAlign={{ base: 'center' }}
      >
        {content.title}
      </Heading>
      <VStack spacing={6} maxW="700px" mx="auto">
        {content.text.map((text, index) => (
          <Text key={index}>{text}</Text>
        ))}
      </VStack>
      <Grid
        mt={{ base: 10, lg: 20 }}
        templateColumns={{ lg: 'repeat(3, 1fr)' }}
        gap={{ base: 10, xl: 16 }}
      >
        {categories.map((category, index) => (
          <GridItem key={index}>
            <CategoryCard {...category} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
