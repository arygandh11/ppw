import { Box, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import projects from '../../data/projects';
import { staggerContainer } from '../../hooks/useScrollReveal';
import ProjectCard from '../ui/ProjectCard';
import SectionHeading from '../ui/SectionHeading';

const MotionGrid = motion.create(SimpleGrid);

function Projects() {
  return (
    <Box as="section" id="projects" py={{ base: 14, md: 20 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading
          eyebrow="What I've built"
          title="Latest Projects"
          subtitle="A mix of AI agents, hackathon builds, and full-stack apps, most of them shipped on Vercel."
        />
        <MotionGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer()}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </MotionGrid>
      </Box>
    </Box>
  );
}

export default Projects;
