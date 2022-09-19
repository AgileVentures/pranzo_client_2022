import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import { t } from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../state/features/authentication";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authenticated, currentUser } = useSelector((state) => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    authenticated && navigate("/");
  }, [authenticated]);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const email = event.target["email"].value;
    const password = event.target["password"].value;

    dispatch(signInUser({ email: email, password: password }));

  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>
            {t("authentication.signIn.header")}
          </Heading>
          <form data-cy="sign-in-form" onSubmit={handleFormSubmission}>
            <FormControl>
              <FormLabel>
                {t("authentication.signIn.email")}
              </FormLabel>
              <Input name="email" data-cy="email" type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>
                {t("authentication.signIn.password")}
              </FormLabel>
              <Input name="password" data-cy="password" type="password" />
            </FormControl>

            <Stack spacing={6}>
              <Button
                data-cy="submit"
                colorScheme={"pink"}
                variant={"solid"}
                type="submit"
              >
                {t("authentication.submit")}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://source.unsplash.com/random/?restaurant"}
        />
      </Flex>
    </Stack>
  );
};

export default SignIn;