import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import HeaderBar from "../../components/common/HeaderBar";
const WithMenuBar: React.FC = () => {
  const Wrapper = styled.div({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingBottom: "200px",
  });

  return (
    <>
      <HeaderBar />
      <Wrapper>
        <Box w="900px">
          <Outlet />
        </Box>
      </Wrapper>
    </>
  );
};
export default WithMenuBar;
