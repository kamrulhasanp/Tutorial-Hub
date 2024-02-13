import { CacheProvider } from "@emotion/react"; // I will use this later if need
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/chakraTheme";

export function Providers({ children })  {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
};
