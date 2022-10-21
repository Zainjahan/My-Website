import React from "react";
import Logo from '../assets/Logo.png';
import { Box } from "@mui/system";
const FrontPic = () => {

    return (
        <Box
        component="img"
        sx={{
          height: 118,
          width: 456,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          marginTop:{lg:"-1%"},
          marginLeft:{lg:"-4%"},
          paddingLeft:{lg:"6%"}
        }}
        alt="Atomic"
        src="https://atompoint.com/wp-content/uploads/2020/09/logo-white_2x_optimized.png"
      />    ) 
};

export default FrontPic;
