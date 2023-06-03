import {
  Flex,
  Text,
  Input,
  Button,
  Heading,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
const Dashboard = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  return (
    <>
      <Heading pt={12} pb={10}>
        Create New Item
      </Heading>
      <Flex direction="column" gap={16} pb={8}>
        <Flex gap={5} alignItems="center">
          <Text width="300px" fontSize="md" textAlign="right" fontWeight={700}>
            Title
          </Text>
          <Input
            variant="filled"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Flex>

        <Flex gap={5} alignItems="flex-start">
          <Text width="300px" fontSize="md" textAlign="right" fontWeight={700}>
            Description
          </Text>
          <Textarea
            variant="filled"
            height="100px"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Flex>

        <Flex gap={5} alignItems="center">
          <Text width="300px" fontSize="md" textAlign="right" fontWeight={700}>
            Due Date
          </Text>
          <Input
            variant="filled"
            type="date"
            value={!!dueDate ? dueDate : undefined}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </Flex>

        <Flex gap={5} alignItems="center">
          <Text width="300px" fontSize="md" textAlign="right" fontWeight={700}>
            Price
          </Text>
          <Input
            variant="filled"
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Flex>
        <Flex gap={5} alignItems="center">
          <Text width="300px" fontSize="md" textAlign="right" fontWeight={700}>
            Image URL
          </Text>
          <Input
            variant="filled"
            type="text"
            value={imgUrl}
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
          />
        </Flex>
      </Flex>
      <Center>
        <Button colorScheme="pink" onClick={() => {}}>
          Submit
        </Button>
      </Center>
    </>
  );
};
export default Dashboard;
