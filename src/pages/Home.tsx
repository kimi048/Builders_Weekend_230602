import {
  Box,
  Flex,
  Text,
  Link,
  Spacer,
  Input,
  Button,
  Heading,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
// import styled from "@emotion/styled";
import { useState, useEffect, useMemo } from "react";
import { TodoItem } from "../types/todoItem";
import { dataClient, adminClient } from "../util/morphClient";
import ShowInfoCard from "../components/InfoCard/ShowInfoCard";
const Home = () => {
  const TagListsAll = [
    "Bread and Bakery",
    "Eggs",
    "yogurt",
    "Fruits and Vegetables",
    "Meat and Seafood",
    "Snacks and Sweets",
    "Pasta and Rice",
    "Frozen Foods",
    "Deli and Prepared Foods",
    "Organic and Natural Products",
    "Snak",
    "Drinks",
  ];
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const TagsNotSelected = useMemo<string[]>(() => {
    const restItems = TagListsAll.filter((tag) => {
      const tagindexNum = selectedTags.findIndex((select) => select === tag);
      return tagindexNum === -1 ? true : false;
    });
    return restItems || [];
  }, [selectedTags]);
  const apikey = import.meta.env.VITE_MORPH_APIKEY1;
  const baseUrl = import.meta.env.VITE_MORPH_APIURL1;
  useEffect(() => {
    const fetcher = async () => {
      const { items: fetchedTodos } = await dataClient.queryRecords<TodoItem>(
        baseUrl,
        apikey,
        {
          select: ["id", "title", "body", "isdone", "duedate"],
          limit: 100,
        }
      );
      setTodos(fetchedTodos);
      console.log(fetchedTodos);
    };
    fetcher();
  }, []);
  type ResultItemType = {
    titile: string;
    // description:string;
    price: string;
    duedate: string;
    imgPath?: string;
  };
  const ResultItems: ResultItemType[] = [
    {
      titile: "Taco Tuesday? Join us",
      price: "¥120",
      duedate: "2023/06/08",
      imgPath:
        "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    },
    {
      titile: "SOS Dishes!!",
      price: "¥1200",
      duedate: "2023/06/11",
      imgPath:
        "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80",
    },
    {
      titile: "Who need Lemon?",
      price: "¥260",
      duedate: "2023/06/04",
      imgPath:
        "https://images.unsplash.com/photo-1609639643505-3c158a56de42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80",
    },
    {
      titile: "Discounted Mango",
      price: "¥300",
      duedate: "2023/06/09",
      imgPath:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      titile: "Need Damplings??",
      price: "¥360",
      duedate: "2023/06/12",
      imgPath:
        "https://images.unsplash.com/photo-1589047133531-570405874c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      titile: "Get Ready for Pizza Party!",
      price: "¥980",
      duedate: "2023/06/08",
      imgPath:
        "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      titile: "Searching Potato Hero",
      price: "¥130",
      duedate: "2023/06/08",
      imgPath:
        "https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80",
    },
    {
      titile: "Grocery neet to be consumed",
      price: "¥260",
      duedate: "2023/06/05",
      imgPath:
        "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80",
    },
  ];
  return (
    <>
      <Heading pt={8}>Search</Heading>
      <Flex mt={3} pb={8}>
        <Input mr={6} />
        <Button colorScheme="pink">Search</Button>
      </Flex>
      <Heading>Tags</Heading>
      <Box pb={6}>
        <Flex mt={3} gap={3} flexWrap="wrap">
          {TagsNotSelected.map((unselectedTag) => (
            <Tag
              colorScheme="teal"
              cursor="pointer"
              onClick={() => {
                setSelectedTags((prev) => [...prev, unselectedTag]);
              }}
            >
              {"+ " + unselectedTag}
            </Tag>
          ))}
        </Flex>
        {selectedTags.length > 0 && (
          <Box pt={6}>
            <Heading size="md">Items Selected</Heading>
            <Flex mt={2} gap={4} flexWrap="wrap">
              {selectedTags.map((selectedTag) => (
                <Tag
                  colorScheme="purple"
                  onClick={() => {
                    setSelectedTags(
                      selectedTags.filter((item) => item !== selectedTag)
                    );
                  }}
                >
                  <TagLabel>{selectedTag}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </Flex>
          </Box>
        )}
      </Box>

      <Flex gap="60px" flexWrap={"wrap"}>
        {todos.length > 0 &&
          ResultItems.map((item) => (
            // <TodoEditableCard key={todo.id} todo={todo} />
            <ShowInfoCard
              price={item.price}
              imgPath={item.imgPath}
              dueDate={item.duedate}
              title={item.titile}
            />
          ))}
      </Flex>
    </>
  );
};
export default Home;
