import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { useState } from "react";

const Bar = () => {
  const [horizontal, setHorizontal] = useState(false);
  return (
    <Box m="20px">
      <Header title="Столбчатая диаграмма" subtitle="Простая столбчатая диаграмма" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
