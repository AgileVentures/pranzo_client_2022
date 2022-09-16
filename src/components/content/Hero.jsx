import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import { useTranslation } from 'react-i18next'


const Hero = () => {
  const { t } = useTranslation();

  return (
    <Stack
      data-cy="hero-section"
      minH={"50vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Logo width={"250px"} />
          <Heading fontSize={{ base: "3xl", md: "2xl", lg: "3xl" }}>
            <Text as={"span"} position={"relative"}>
              {t('hero.mainSlogan')}
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            {t('hero.promoText')}

          </Text>

          <Heading fontSize={{ base: "1xl", md: "1xl", lg: "1xl" }}>
            <Text as={"span"} position={"relative"}>
            {t('hero.subSlogan')}
            </Text>
          </Heading>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
          alt={"Example Project"}
          objectFit={"cover"}
          src={"https://source.unsplash.com/random/?restaurant"}
        />
      </Flex>
    </Stack>
  );
};

export default Hero;
