import { Box, Heading, Button, Center, FormControl, FormLabel, Input, Textarea, Stack } from "@chakra-ui/react";

import { SEO } from "../components/seo";

const Home = () => (
  <>
    <SEO title="Home" />
    <Center>
    <Box
      as="section"
      maxW="1440px"
      py="4"
      px={[4, 6, 10, 14, 20]}
      mx="auto"
      display="flex"
      flexDir={{ base: "column-reverse", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      textAlign={{ base: "center", lg: "center" }}
    >
      <Box maxW={{ base: "50%", lg: "100%" }}>
        <Heading
          as="h1"
          fontSize={{ base: "1.5rem", sm: "2rem", lg: "3rem" }}
          fontWeight="800"
        >
          Kirim Pesan!
        </Heading>
        <Box
          display="flex"
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignItems="center"
          flexDir={{ base: "column", lg: "row" }}
        >

          <FormControl>
            <Stack spacing={2}>
              <FormLabel htmlFor='text'>Nama</FormLabel>
              <Input id='text' type='text' />
              <FormLabel htmlFor='email'>Pesan</FormLabel>
              <Textarea placeholder='Pesan yang ingin disampaikan' paddingBottom="12px" />
              <Button
                colorScheme="facebook"
                variant="outline"
                mb="2"
                px="12"
                fontWeight="600"
                size="lg"
              >
                Simpan
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Box>
    </Box>
    </Center>
  </>
);

export default Home;
