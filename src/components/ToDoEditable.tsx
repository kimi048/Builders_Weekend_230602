import { Flex, Text, Box, Button, Spacer, Input } from "@chakra-ui/react";
import { useState } from "react";
import { TodoItem } from "../types/todoItem";

const TodoEditableCard = ({ todo }: { todo: TodoItem }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <Flex direction="column" gap={3} mt={5}>
      <Text fontSize="xl">{todo.id}</Text>
      <Box>
        {isEditing === true ? (
          <Input
            type="text"
            value={todo.title as string}
            onChange={(e) => {}}
          />
        ) : (
          <>{todo.title}</>
        )}
      </Box>
      <Box>
        {isEditing === true ? (
          <Input
            type="textarea"
            value={todo.body as string}
            onChange={(e) => {}}
          />
        ) : (
          <>{todo.body}</>
        )}
      </Box>
      <Box>
        {isEditing === true ? (
          <Input
            type="date"
            value={todo.duedate as string}
            onChange={(e) => {}}
          />
        ) : (
          <>{todo.duedate}</>
        )}
      </Box>
      <Flex mt={4}>
        <Spacer />
        <Button
          mr={4}
          onClick={() => {
            setIsEditing((pre) => !pre);
          }}
        >
          {isEditing === false ? "Edit" : "Finish"}
        </Button>
        <Button colorScheme="blue">done</Button>
      </Flex>
    </Flex>
  );
};

export default TodoEditableCard;
