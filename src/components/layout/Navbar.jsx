import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={50}
      bg="rgba(0, 0, 0, 0.7)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        <Text fontWeight={800} letterSpacing="-0.02em" color="white">
          AG
        </Text>
        <HStack as="ul" spacing={{ base: 3, md: 6 }} listStyleType="none">
          {NAV_LINKS.map((link) => (
            <Box as="li" key={link.href}>
              <Link
                href={link.href}
                fontSize="sm"
                color="whiteAlpha.800"
                _hover={{ color: 'white', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
