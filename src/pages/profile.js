import { ChakraProvider } from "@chakra-ui/react";
import { Image, Box, Text } from "@chakra-ui/react";

export default function ProfilePage() {
  return (
    <ChakraProvider>
      <div>
        <Box w="100%" h="150px" background="#ccc"></Box>
        <Box
          w="100%"
          marginTop="-80px"
          padding="10px"
          fontWeight="700"
          fontSize="24px"
          align="center"
        >
          <Image
            borderRadius="full"
            boxSize="150px"
            marginBottom="10px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <div>Ian Liao</div>
        </Box>
        <Box w="100%" paddingLeft="5%" paddingRight="5%" flexDirection="column" alignItems="center" justifyContent='center'>
          <Box w="100%" fontSize={16} paddingBottom={5}>
            <Box
              as="button"
              borderRadius="md"
              bg="tomato"
              color="white"
              mr={2}
              px={4}
              h={8}
            >
              React
            </Box>
            <Box
              as="button"
              borderRadius="md"
              bg="tomato"
              color="white"
              mr={2}
              px={4}
              h={8}
            >
              React
            </Box>
            <Box
              as="button"
              borderRadius="md"
              bg="tomato"
              color="white"
              mr={2}
              px={4}
              h={8}
            >
              React
            </Box>
          </Box>
          <Box w="100%" h="150px">
            <Text
              fontSize={20}
              fontWeight={500}
              color="#ccc"
            >
              關於
            </Text>
            <Text
              fontSize={16}
              marginTop={5}
              fontWeight={500}
              color="#ccc"
            >
              關於...
            </Text>
          </Box>
          <Box w="100%" h="150px">
            <Text
              fontSize={20}
              fontWeight={500}
              color="#ccc"
            >
              經歷
            </Text>
            <Text
              fontSize={16}
              marginTop={5}
              fontWeight={500}
              color="#ccc"
            >
              經歷....
            </Text>
          </Box>
        </Box>
      </div>
    </ChakraProvider>
  );
}
