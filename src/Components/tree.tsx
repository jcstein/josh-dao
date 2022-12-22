import { Button, VStack } from "@chakra-ui/react";
import {
  FaTwitter,
} from "react-icons/fa";

export const Tree = () => {
  return (
    <VStack spacing={4} direction="column" align="center" width="90%">
      <Button
        colorScheme="blue"
        size="lg"
        rightIcon={<FaTwitter />}
        onClick={() => window.open("https://twitter.com", "_blank")}
        width="100%"
        _hover={{ transform: "scale(1.1)" }}
        rounded="full"
      >
        Coming Soon
      </Button>
    </VStack>
  );
};
