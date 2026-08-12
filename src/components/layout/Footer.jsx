import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/arygandh11', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-gandhi23/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:arygandhi111@gmail.com', icon: HiOutlineMail },
];

function Footer() {
  return (
    <Box as="footer" borderTop="1px solid rgba(255, 255, 255, 0.1)" py={8} mt={16}>
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
      >
        <Text fontSize="sm" color="whiteAlpha.600">
          © {new Date().getFullYear()} Aryan Gandhi. Built with React &amp; Chakra UI.
        </Text>
        <HStack spacing={3}>
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              isExternal
              aria-label={link.label}
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="38px"
              borderRadius="full"
              border="1px solid rgba(255, 255, 255, 0.15)"
              color="whiteAlpha.800"
              _hover={{ color: 'black', bg: 'white', borderColor: 'white' }}
              transition="all 0.2s ease"
            >
              <Box as={link.icon} boxSize="18px" />
            </Link>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}

export default Footer;
