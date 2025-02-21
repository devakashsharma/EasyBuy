import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { PiPlusSquare } from "react-icons/pi";

const Navbar = () => {

  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={"16"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{base: "column", sm: "row"}}
      >
        <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PiPlusSquare fontSize={20} />
            </Button>
          </Link>
          {/* <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "🌙" : "☀️"}</Button> */}
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
