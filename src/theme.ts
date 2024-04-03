import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    colors: {
        brand: theme.colors.blue,
        placeholder: theme.colors.white
    },
    styles: {
        global: {
            "body": {
                bg: "dimgrey",
                // color: "white"
            },
            "::placeholder": {
                color: "white"
            }
        }
    }
});
