import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '../../hooks/useScrollReveal';
import StatusTag from './StatusTag';

const MotionBox = motion.create(Box);

function ExperienceCard({ item }) {
  return (
    <MotionBox className="monochrome-card" p={{ base: 5, md: 7 }} variants={fadeUpVariants}>
      <Box
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ base: 'flex-start', sm: 'center' }}
        mb={3}
        gap={2}
      >
        <Box>
          <Heading as="h3" size="md">
            {item.title} · {item.company}
          </Heading>
        </Box>
        <Box display="flex" alignItems="center" gap={3} flexShrink={0}>
          <Text fontSize="sm" color="whiteAlpha.600" whiteSpace="nowrap">
            {item.start} – {item.end}
          </Text>
          <StatusTag status={item.status} />
        </Box>
      </Box>
      <Text fontSize="sm" color="whiteAlpha.600" mb={4}>
        {item.location}
      </Text>
      <List spacing={2}>
        {item.bullets.map((bullet) => (
          <ListItem key={bullet} fontSize="sm" color="whiteAlpha.800" pl={4} position="relative">
            <Box as="span" position="absolute" left={0}>
              –
            </Box>
            {bullet}
          </ListItem>
        ))}
      </List>
    </MotionBox>
  );
}

export default ExperienceCard;
