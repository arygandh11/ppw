import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const toast = useToast();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: 'Contact form not configured yet',
        description:
          'Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to a .env file (see .env.example).',
        status: 'warning',
        duration: 6000,
        isClosable: true,
      });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out — I'll get back to you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      formRef.current?.reset();
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again, or email me directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Box as="section" id="contact" py={{ base: 14, md: 20 }}>
      <Box maxW="640px" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading
          eyebrow="Let's talk"
          title="Get in Touch"
          subtitle="Open to full-time SWE/ML roles for 2027 — always happy to talk shop, collabs, or coffee chats."
        />
        <Box as="form" ref={formRef} onSubmit={handleSubmit} className="monochrome-card" p={{ base: 5, md: 8 }}>
          <Stack spacing={5}>
            <FormControl isRequired>
              <FormLabel fontSize="sm">Name</FormLabel>
              <Input name="from_name" bg="whiteAlpha.50" borderColor="whiteAlpha.200" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize="sm">Email</FormLabel>
              <Input type="email" name="reply_to" bg="whiteAlpha.50" borderColor="whiteAlpha.200" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize="sm">Message</FormLabel>
              <Textarea name="message" rows={5} bg="whiteAlpha.50" borderColor="whiteAlpha.200" />
            </FormControl>
            <Button
              type="submit"
              isLoading={isSending}
              className="monochrome-button"
              borderRadius="md"
              alignSelf="flex-start"
              px={6}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
        <Text mt={5} fontSize="sm" color="whiteAlpha.600" textAlign="center">
          Prefer email? Reach me directly at{' '}
          <Link href="mailto:arygandhi111@gmail.com" color="brand.400">
            arygandhi111@gmail.com
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Contact;
