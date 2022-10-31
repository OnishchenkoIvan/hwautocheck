import React from "react";
import { SliderProps } from "@mui/material";
import { PrettoSlider } from "../CustomSlider";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <PrettoSlider
      sx={{
        width: 300,
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
