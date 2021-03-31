
import NavBar from '../../components/navbar'
import Carousel from '../../components/carousel'
import {theme} from '../../theme/chakra-theme'
import {ChakraProvider,Grid,Button,Box,Flex,Text} from '@chakra-ui/react'
import BlogPost from '../../components/blog-post'
import {AddIcon,ArrowDownIcon} from '@chakra-ui/icons'

export default function BlogIndex(){


    return (
        <ChakraProvider theme={theme}>
        <NavBar>
            <Box>
        <Button
          id="login"
          type="submit"
          colorScheme="messenger"
          color="white"
          fontWeight="medium"
          mt={4}
          h="50px"
          fontSize="lg"
        //   _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
          float="right"
          mr="1rem"
          leftIcon={<AddIcon />}
        >
          Create Post
        </Button>
        </Box>

        <Grid gridTemplateColumns={{md:"repeat(3,1fr)",base:"repeat(1,fr)"}} gap={1} mt="3rem" ml="3rem">
        {Array(6).fill("").map(()=>(<BlogPost/>))
         }
        </Grid>

         <Flex color="white" alignItems="center" justifyContent="center" mr="4rem">
         <Button
          id="login"
          type="submit"
          colorScheme="messenger"
          color="white"
          fontWeight="medium"
          mt={3}
          mb="1rem"
          h="50px"
          fontSize="lg"
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
          rightIcon={<ArrowDownIcon/>}
        >
          Load More 
          </Button>
         </Flex>
        </NavBar>
        </ChakraProvider>
    )

}