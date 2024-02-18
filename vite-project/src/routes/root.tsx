import ButtonAppBar from "../components/Appbar.js";
import BasicCard from "../components/Card.jsx";
import Box from "@mui/material/Box";
import List from "../components/List.jsx";
import { Button } from "@mui/material";
import { createTRPCProxyClient, httpLink } from "@trpc/client";
import type { AppRouter } from "../../../server/index.js";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});

export default function Root() {
  const getSales = async () => {
    const sales = await trpc.getSales.query();
    console.log(sales);
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
