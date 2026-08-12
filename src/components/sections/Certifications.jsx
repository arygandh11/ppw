import { Box, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import certifications from '../../data/certifications';
import { staggerContainer } from '../../hooks/useScrollReveal';
import CertificationCard from '../ui/CertificationCard';
import SectionHeading from '../ui/SectionHeading';

const MotionGrid = motion.create(SimpleGrid);

function Certifications() {
  return (
    <Box as="section" id="certifications" py={{ base: 14, md: 20 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading
          eyebrow="Verified skills"
          title="Certifications"
          subtitle="Professional certifications earned from Oracle and IBM."
        />
        <MotionGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer()}
        >
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </MotionGrid>
      </Box>
    </Box>
  );
}

export default Certifications;
