import { Box } from '@chakra-ui/react';

const NAME = 'Aryan Gandhi';

function ScrollingName() {
  const repeated = `${NAME} • `.repeat(6);

  return (
    <Box className="scrolling-name-container" py={{ base: 4, md: 8 }}>
      <span className="scrolling-name">{repeated}</span>
    </Box>
  );
}

export default ScrollingName;
