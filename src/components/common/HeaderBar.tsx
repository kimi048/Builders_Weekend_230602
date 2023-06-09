// import { Flex, Link, Text } from "@chakra-ui/react";
// const HeaderBar = () => {
//   return (
//     <>
//       {/* Header */}
//       <Flex gap={10}>
//         <Link href="/">
//           <Text fontSize="5xl">Home</Text>
//         </Link>
//         <Link href="/create">
//           <Text fontSize="5xl">Create</Text>
//         </Link>
//       </Flex>
//     </>
//   );
// };
// export default HeaderBar;

import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        onClick={() => {
          navigate(to);
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent="center"
      px={12}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Box width="100%" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">
              <Box maxW="106px">
                <Image src="/Logo.png" />
              </Box>
            </NavLink>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} to={"/" + link.toLowerCase()}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={"/" + link.toLowerCase()} key={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Flex>
  );
}
