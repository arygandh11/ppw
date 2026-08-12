import { Box, Button, Text } from '@chakra-ui/react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const RESUME_URL = '/resume.pdf';

function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [failed, setFailed] = useState(false);

  return (
    <Box as="section" id="resume" py={{ base: 14, md: 20 }}>
      <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading eyebrow="The full story" title="Resume" />
        <Box
          className="monochrome-card"
          overflow="hidden"
          h={{ base: '520px', md: '700px' }}
          position="relative"
        >
          {!failed ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={RESUME_URL}
                plugins={[defaultLayoutPluginInstance]}
                theme="dark"
                onDocumentAskPassword={() => setFailed(true)}
              />
            </Worker>
          ) : null}
          {failed && (
            <Box
              position="absolute"
              inset={0}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={4}
              p={6}
              textAlign="center"
            >
              <Text color="whiteAlpha.700">
                Couldn&apos;t load a resume yet. Drop your PDF at{' '}
                <Text as="code" color="brand.400">
                  public/resume.pdf
                </Text>
                .
              </Text>
            </Box>
          )}
        </Box>
        <Button
          as="a"
          href={RESUME_URL}
          download
          mt={5}
          className="monochrome-button-outline"
          borderRadius="md"
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
}

export default Resume;
