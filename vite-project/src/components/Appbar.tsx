import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Stack, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface RenderList {
  id: number;
  title: string;
}

const ButtonAppBar: React.FC = () => {
  const renderList: RenderList[] = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Services" },
    { id: 4, title: "Contact" },
  ];

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Stack direction="row">
            {renderList.map((item) => (
              <Button key={item.id} color="inherit">
                {item.title}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ButtonAppBar;
