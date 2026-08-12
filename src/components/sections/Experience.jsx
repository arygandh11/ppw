import { Box, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import experience from '../../data/experience';
import { fadeUpVariants, staggerContainer } from '../../hooks/useScrollReveal';
import ExperienceCard from '../ui/ExperienceCard';
import SectionHeading from '../ui/SectionHeading';

const MotionVStack = motion.create(VStack);
const MotionBox = motion.create(Box);

const NODE_SIZE = { base: '48px', md: '64px' };
const RAIL_WIDTH = { base: '48px', md: '64px' };

function Experience() {
  return (
    <Box as="section" id="experience" py={{ base: 14, md: 20 }}>
      <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading
          eyebrow="Where I've worked"
          title="Professional Experience"
          subtitle="Six internships and counting, spanning ML infra, robotics, and full-stack tooling."
        />
        <Box position="relative">
          {/* Vertical timeline rail, centered under each logo node */}
          <Box
            position="absolute"
            top={2}
            bottom={2}
            left={{ base: '23px', md: '31px' }}
            width="2px"
            bgGradient="linear(to-b, whiteAlpha.300, whiteAlpha.100)"
          />
          <MotionVStack
            spacing={{ base: 6, md: 8 }}
            align="stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer()}
          >
            {experience.map((item) => (
              <MotionBox
                key={item.id}
                variants={fadeUpVariants}
                display="flex"
                alignItems="flex-start"
                gap={{ base: 3, md: 5 }}
              >
                <Box
                  flexShrink={0}
                  width={RAIL_WIDTH}
                  display="flex"
                  justifyContent="center"
                  position="relative"
                  zIndex={1}
                >
                  <Box
                    boxSize={NODE_SIZE}
                    borderRadius="full"
                    bg="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={2}
                    border="2px solid"
                    borderColor="#000"
                    boxShadow="0 0 0 2px rgba(255,255,255,0.15)"
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      w="100%"
                      h="100%"
                      objectFit="contain"
                      borderRadius="full"
                    />
                  </Box>
                </Box>
                <Box flex={1} minW={0}>
                  <ExperienceCard item={item} />
                </Box>
              </MotionBox>
            ))}
          </MotionVStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
