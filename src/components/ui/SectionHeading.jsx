import { Box, Heading, Text } from '@chakra-ui/react';

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Box mb={{ base: 8, md: 12 }} textAlign={{ base: 'left', md: 'center' }}>
      {eyebrow && (
        <Text
          fontSize="sm"
          fontWeight={600}
          letterSpacing="0.15em"
          textTransform="uppercase"
          className="section-heading-accent"
          mb={2}
        >
          {eyebrow}
        </Text>
      )}
      <Heading as="h2" size="xl" mb={subtitle ? 3 : 0}>
        {title}
      </Heading>
      {subtitle && (
        <Text color="whiteAlpha.700" maxW="640px" mx={{ base: 0, md: 'auto' }}>
          {subtitle}
        </Text>
      )}
    </Box>
  );
}

export default SectionHeading;
