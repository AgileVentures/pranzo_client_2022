import {
  Box,
  Stack,
  Link,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DesktopSubNav from "./DesktopSubNav";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { vendor, authenticated } = useSelector((state) => state.user);

  return (
    <Stack direction={"row"} spacing={4} data-cy="navigation-items">
      <Box data-cy="my-venue">
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {t("dashboard.headings.myVenue")}
            </Link>
          </PopoverTrigger>

          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack>
              {authenticated && (
                <>
                  {vendor && (
                    <DesktopSubNav
                      {...{
                        dataCy: "venue-details",
                        href: "/dashboard/venue",
                      }}
                    >
                      <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                        >
                        {t("dashboard.headings.detailsVenue")}
                      </Text>
                      <Text fontSize={"sm"}>
                        Detailed overview of your venue
                      </Text>
                    </DesktopSubNav>
                  )}
                  <DesktopSubNav
                    {...{
                      dataCy: "venue-setup",
                      href: "/dashboard/venue/setup",
                    }}
                  >
                    <Text
                      transition={"all .3s ease"}
                      _groupHover={{ color: "pink.400" }}
                      fontWeight={500}
                    >
                      {vendor
                        ? t("dashboard.headings.editVenue.label")
                        : t("dashboard.headings.setupVenue.label")}
                    </Text>
                    <Text fontSize={"sm"}>
                      {vendor
                        ? t("dashboard.headings.editVenue.subLabel")
                        : t("dashboard.headings.setupVenue.subLabel")}
                    </Text>
                  </DesktopSubNav>
                </>
              )}
            </Stack>
          </PopoverContent>
        </Popover>
      </Box>
      {/* {ITEMS.map((navItem) => (
        <Box key={navItem.label} data-cy={navItem.dataCy}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                onClick={() => navigate(navItem.href)}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {labelHandler(navItem.label)}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child, index) => {
                    return (
                      <DesktopSubNav
                        key={index}
                        {...child}
                        labelHandler={labelHandler}
                      />
                    );
                  })}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))} */}
    </Stack>
  );
};

export default DesktopNav;
