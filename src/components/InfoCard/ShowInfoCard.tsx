import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  ButtonGroup,
  Button,
  Divider,
  AspectRatio,
  Tag,
  Box,
  Flex,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";
// import "whatwg-fetch";
const ShowInfoCard = ({
  price = "$10",
  dueDate = "2023/06/07",
  title = "Living room Sofa",
  imgPath = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  tag = "",
}: {
  price?: string;
  dueDate?: string;
  title?: string;
  imgPath?: string;
  tag?: string;
}) => {
  return (
    <Card width={{ base: "100%", md: "260px" }}>
      <CardBody>
        <AspectRatio ratio={16 / 11}>
          <Image
            objectFit="cover"
            src={imgPath}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </AspectRatio>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Flex gap={3} flexWrap="wrap">
            <Tag rounded="full">{dueDate}</Tag>
            {tag.length > 0 && <Tag rounded="full">{tag}</Tag>}
          </Flex>
          <Text color="blue.600" fontSize="2xl">
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export default ShowInfoCard;
