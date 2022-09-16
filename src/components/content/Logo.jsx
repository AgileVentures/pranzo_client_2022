import { Image, useColorModeValue } from "@chakra-ui/react";
import colorLogo from "../../assets/pranzo_color.png";
import whiteLogo from "../../assets/pranzo_white.png";

const Logo = ({width, height}) => {
  return (
    <Image
      htmlWidth={width ? width : "120px"}
      htmlHeight={height ? height : "auto"}
      objectFit="fit"
      src={useColorModeValue(colorLogo, whiteLogo)}
    />
  );
};

export default Logo;