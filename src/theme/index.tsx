import { createTheme } from "@mui/material";

const THEME = createTheme({
  palette: {
    primary: {
      main: '#34AC40',
      light: '#FFFFFF',
      dark: '#010101'
    },
    secondary: {
        main: '#F46D1B',
        light: '#FFFFFF',
        dark: '#010101'
      },
    common: {
      black: 'rgba(0, 0, 0, 0.3)'
    }
  },
  typography: {
    fontFamily: ["inter", "cursive"].join(","),
    h3: {
      fontSize: '2.5rem',
    }
  },
  components: {
    MuiAppBar: {
      variants: [
        {
          props: { variant: "elevation" },
          style: {
            height: '10vh',
            justifyContent: 'center',
          }
        }
      ]
    }
  }
})

export default THEME