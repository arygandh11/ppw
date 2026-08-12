import { Box, HStack, Heading, Image, Tag, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '../../hooks/useScrollReveal';

const MotionBox = motion.create(Box);

function CertificationCard({ cert }) {
  return (
    <MotionBox
      className="monochrome-card"
      p={{ base: 5, md: 6 }}
      display="flex"
      flexDirection="column"
      h="100%"
      variants={fadeUpVariants}
    >
      <HStack spacing={3} mb={4}>
        <Box
          boxSize="44px"
          borderRadius="full"
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
          flexShrink={0}
        >
          <Image src={cert.logo} alt={`${cert.issuer} logo`} w="100%" h="100%" objectFit="contain" />
        </Box>
        <Box>
          <Text fontWeight={600} fontSize="sm" color="white">
            {cert.issuer}
          </Text>
          <Text fontSize="xs" color="whiteAlpha.600">
            Issued {cert.issued}
          </Text>
        </Box>
      </HStack>
      <Heading as="h3" size="sm" mb={3} flexGrow={1}>
        {cert.title}
      </Heading>
      {cert.credentialId && (
        <Text fontSize="xs" color="whiteAlpha.500" mb={cert.skills.length ? 3 : 0}>
          Credential ID: {cert.credentialId}
        </Text>
      )}
      {cert.skills.length > 0 && (
        <HStack spacing={2} flexWrap="wrap">
          {cert.skills.map((skill) => (
            <Tag key={skill} size="sm" bg="whiteAlpha.100" color="whiteAlpha.800">
              {skill}
            </Tag>
          ))}
        </HStack>
      )}
    </MotionBox>
  );
}

export default CertificationCard;
