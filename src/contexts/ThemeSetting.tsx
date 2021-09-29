import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContextProvider: React.FC<{}> = ({ children }) => {
    const theme = createTheme({
        typography: {
            fontFamily: [
                "NotoSans",
                "NotoSansThai",
                "Arial",
                "Roboto",
                "'Helvetica Neue'",
                "sans-serif",
            ].join(","),
        },
        shape: {
            borderRadius: 15,
        },
    });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
