import { Box, Heading, HStack, Link, Tag, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '../../hooks/useScrollReveal';

const MotionBox = motion.create(Box);

function ProjectCard({ project }) {
  return (
    <MotionBox
      className="monochrome-card"
      p={{ base: 5, md: 6 }}
      display="flex"
      flexDirection="column"
      h="100%"
      variants={fadeUpVariants}
    >
      <Text fontSize="xs" fontWeight={600} className="section-heading-accent" mb={1}>
        {project.blurb}
      </Text>
      <Heading as="h3" size="md" mb={2}>
        {project.title}
      </Heading>
      <Text fontSize="sm" color="whiteAlpha.800" mb={4} flexGrow={1}>
        {project.description}
      </Text>
      <HStack spacing={2} flexWrap="wrap" mb={4}>
        {project.tags.map((tag) => (
          <Tag key={tag} size="sm" bg="whiteAlpha.100" color="whiteAlpha.800">
            {tag}
          </Tag>
        ))}
      </HStack>
      <HStack spacing={4}>
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            isExternal
            fontSize="sm"
            fontWeight={600}
            color="white"
            _hover={{ color: 'brand.400' }}
          >
            GitHub →
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            isExternal
            fontSize="sm"
            fontWeight={600}
            color="white"
            _hover={{ color: 'brand.400' }}
          >
            Live Demo →
          </Link>
        )}
      </HStack>
    </MotionBox>
  );
}

export default ProjectCard;
