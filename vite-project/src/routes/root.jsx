import ButtonAppBar from "../components/Appbar.tsx";
import BasicCard from "../components/Card";
import Box from "@mui/material/Box";
import List from "../components/List";
import { Button } from "@mui/material";
import axios from "axios";

export default function Root() {
  const getSales = async () => {
    try {
      const response = await axios.get("http://localhost:3001/sales");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "grey",
      }}
    >
      <div>
        <ButtonAppBar />
        <BasicCard />
        <Box sx={{ my: 1 }} />
        <List />
        <Button variant="contained" onClick={getSales}>
          Get Sales
        </Button>
      </div>
    </Box>
  );
}
