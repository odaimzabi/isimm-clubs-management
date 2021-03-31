

import NavBar from '../components/navbar'
import Carousel from '../components/carousel'
import {theme} from '../theme/chakra-theme'
import {ChakraProvider,Grid,Button,Box,Text,Heading,Input,Center} from '@chakra-ui/react'
import BlogPost from '../components/blog-post'
import {AddIcon} from '@chakra-ui/icons'
import Editor from '../components/editor'
import react from 'react'
export default function CreatePost(){


    return (
        <ChakraProvider theme={theme}>
            <NavBar>
            <Box display="grid" placeItems="center" mt="5rem">
                <Box bg="white"height="100%" width={{base:"100vw",md:"50vw"}} >
                    <Box>
                    <Heading ml="0.5rem">Create Post</Heading>
                    </Box>
                <Box>
                    <Text mt="2rem" ml="1rem" fontSize="md">Title</Text>
                    <Center>
                    <Input placeholder="Title..." width="700px" mt="0.5rem"/>
                    </Center>
                </Box>
                <Box>
                    <Text mt="2rem" ml="1rem" fontSize="md">Content</Text>
                    <Center>
                        <Editor/>
                    </Center>
                </Box>
                <Button colorScheme="messenger" mt="2rem" mb="1rem" ml="1rem">Create Post</Button>
                </Box>        
            </Box> 

            </NavBar>
        </ChakraProvider>
    )
}