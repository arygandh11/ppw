import { Box, Text } from '@chakra-ui/react';

export const STATUS_CONFIG = {
  completed: {
    label: 'Completed',
    color: '#68d391',
    bg: 'rgba(104, 211, 145, 0.12)',
    border: 'rgba(104, 211, 145, 0.4)',
  },
  'in-progress': {
    label: 'In Progress',
    color: '#63b3ed',
    bg: 'rgba(99, 179, 237, 0.12)',
    border: 'rgba(99, 179, 237, 0.4)',
  },
  upcoming: {
    label: 'Upcoming',
    color: '#f6e05e',
    bg: 'rgba(246, 224, 94, 0.12)',
    border: 'rgba(246, 224, 94, 0.4)',
  },
};

function StatusTag({ status }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.completed;

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      gap={1.5}
      px={2.5}
      py={1}
      borderRadius="full"
      bg={config.bg}
      border="1px solid"
      borderColor={config.border}
      flexShrink={0}
    >
      <Box as="span" boxSize="6px" borderRadius="full" bg={config.color} />
      <Text fontSize="xs" fontWeight={600} color={config.color}>
        {config.label}
      </Text>
    </Box>
  );
}

export default StatusTag;
