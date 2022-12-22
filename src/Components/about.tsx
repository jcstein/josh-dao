import { Avatar, Heading, VStack } from "@chakra-ui/react";

export const About = () => {
  return (
    <VStack pb="5">
      <Avatar src="/josh.png" mx="auto" size="2xl" />
      <Heading pb="3">Josh DAO</Heading>
    </VStack>
  );
};
