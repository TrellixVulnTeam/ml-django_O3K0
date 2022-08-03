import React from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  Card,
  CardMedia,
} from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Video from "../assets/video/home.mp4";

const Home = () => {
  let theme = createTheme({
    typography: {
      fontFamily: [
        'Hina Mincho'
      ].join(',')
    }
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Card>
          <CardMedia
            component="video"
            autoPlay
            loop
            muted
            src={Video}
            sx={{ 
              width: 'auto',
              minWidth: '100%', 
              height: '100%', 
              minHeight: 850,
              position: 'relative',
            }}
          />
        </Card>
        <Box
          sx={{
            height: "auto",
          }}
        >
          <Stack
            direction="column"
            spacing={{ md: 3, xs: 2 }}
            alignItems="flex-start"
            justifyContent="center"
            sx={{
              pl: {xs: 3},
              mt: 15,
              position: "absolute",
              minWidth: '80%',
              top: { xl: "44%", lg: "48%", md: '50%', xs: "46%" },
              left: { xs: "50%" },
              transform: "translate(-50%, -50%)",
            
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontFamily: "Yuji Syuku",
                color: "#FFFF",
                mb: 3
              }}
            >
              にてるまち
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontFamily: "Yuji Syuku ",
                letterSpacing: ".2rem",
                color: "#FFFF",
                fontWeight: 600,
                p: 2
              }}
            >
              〜帰省気分を味わう〜
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "Hina Mincho",
                color: "#FFFF",
                fontWeight: 700,
                textShadow: '0 2px 3px rgba(0, 0, 0, 0.3)'
              }}
            >
              「仕事が忙しくて、帰省する余裕がない」 「コロナ禍で地元に帰りづらい」
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "Hina Mincho",
                color: "#FFFF",
                fontWeight: 700,
                textShadow: '0 2px 3px rgba(0, 0, 0, 0.3)'
              }}
            >
              地元に帰りたくても帰れないと感じることはありませんか。
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Hina Mincho",
                color: "#FFFF",
                fontWeight: 700,
                textShadow: '0 2px 3px rgba(0, 0, 0, 0.3)'
              }}
            >
              にてるまちはあなたの地元に「似てる町」を案内するサービスです。
            </Typography>
            

            <Stack alignItems="center" sx={{ pt: 5 }}>
              <Link to="/search" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    p: "1.0rem",
                    width: 170,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    fontFamily:  "Hina Mincho",
                    color: "#FFFF",
                    bgcolor: "#ef6c00",
                    borderRadius: "15px",
                  }}
                >
                  <SearchIcon />
                  検索画面へ
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Stack alignItems="center">
        <Outlet />
      </Stack>
    </ThemeProvider>
  );
};

export default Home;
