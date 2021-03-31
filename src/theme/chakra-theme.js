import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
      global: {
        body: {
          // bg: '#FAFAFC',
          color: 'black.900',
          bgGradient:"linear(to left, #0f2027, #203a43, #2c5364)"
        }
      }
    },
    colors: {
      primary: {
        indigo: '#4B4DED'
      },
      black: {
        900: '#1C1C28'
      },
      brand: {
        peach: '#F6F5F4'
      }
    },
    
  });


  