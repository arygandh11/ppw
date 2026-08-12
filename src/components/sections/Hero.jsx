import { Box, Button, Flex, HStack, Heading, Image, Tag, Text, Wrap } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ScrollingName from '../layout/ScrollingName';

const MotionBox = motion.create(Box);

const SKILLS = [
  'Agentic AI',
  'LLMs',
  'RAG',
  'LangGraph',
  'Python',
  'C++',
  'ROS2',
  'PyTorch',
];

function Hero() {
  return (
    <Box as="section" id="home" pt={{ base: 16, md: 24 }} pb={{ base: 10, md: 16 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 12 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            textAlign={{ base: 'left', md: 'left' }}
            flex="1 1 0"
            alignSelf="stretch"
            minW={0}
          >
            <Text
              fontSize="sm"
              fontWeight={600}
              letterSpacing="0.15em"
              textTransform="uppercase"
              className="section-heading-accent"
              mb={4}
            >
              Software Engineer · ML &amp; Agentic AI
            </Text>
            <Heading as="h1" size="2xl" mb={5}>
              Hi, I&apos;m Aryan Gandhi.
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.800" maxW="560px" mb={6}>
              CS student at Texas A&amp;M (Class of 2027) who's shipped ML and agentic-AI systems at
              Slack, robotics software at Amazon, and internal tools at Oracle — currently building
              LLM-powered products and figuring out what breaks at scale.
            </Text>
            <Wrap mb={8} spacing={2}>
              {SKILLS.map((skill) => (
                <Tag key={skill} size="sm" bg="whiteAlpha.100" color="whiteAlpha.800">
                  {skill}
                </Tag>
              ))}
            </Wrap>
            <HStack spacing={4}>
              <Button
                as="a"
                href="#projects"
                className="monochrome-button"
                px={6}
                py={5}
                h="auto"
                borderRadius="md"
              >
                View Projects
              </Button>
              <Button
                as="a"
                href="#contact"
                className="monochrome-button-outline"
                px={6}
                py={5}
                h="auto"
                borderRadius="md"
              >
                Get in Touch
              </Button>
            </HStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            position="relative"
            boxSize={{ base: '200px', sm: '260px', md: '300px', lg: '340px' }}
            flexShrink={0}
          >
            {/* Glow layers */}
            <Box
              position="absolute"
              inset="-30px"
              borderRadius="full"
              bg="radial-gradient(circle, rgba(37,102,232,0.55) 0%, rgba(37,102,232,0) 70%)"
              filter="blur(24px)"
              zIndex={0}
            />
            <Box
              as={motion.div}
              position="absolute"
              inset="-10px"
              borderRadius="full"
              bg="radial-gradient(circle, rgba(37,102,232,0.45) 0%, rgba(37,102,232,0) 65%)"
              filter="blur(10px)"
              zIndex={0}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <Image
              src="/images/aryan.png"
              alt="Aryan Gandhi"
              position="relative"
              zIndex={1}
              boxSize="100%"
              objectFit="cover"
              borderRadius="full"
              border="2px solid rgba(255,255,255,0.15)"
            />
          </MotionBox>
        </Flex>
      </Box>
      <Box mt={{ base: 12, md: 16 }}>
        <ScrollingName />
      </Box>
    </Box>
  );
}

export default Hero;
