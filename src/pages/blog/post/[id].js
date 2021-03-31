
import NavBar from '../../../components/navbar'
import {theme} from '../../../theme/chakra-theme'
import {ChakraProvider,Grid,Button,Box,Text,Heading,Input,Center,Divider,Container,Flex,Avatar} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import react from 'react'


export default function Post(){


    return(
        <ChakraProvider theme={theme}>
                <NavBar>

                    <Box display="grid" placeItems="center" mt="3rem">
                    <Box bg="white"height="100%" width={{base:"100vw",md:"50vw"}} borderRadius="0.5rem">
                      <Center>
                    <Heading color="rgb(45, 55, 72)" overflowWrap="break-word">
                        How to create a todo list in React?
                    </Heading>
                    </Center>  
                    <Divider mt="1rem"/>
                    <Flex ml="1rem" mt="1rem">
                        <Avatar
                         src={require('../../../assets/odai.jpg')}
                         alt={'Author'}

                        />
                        <Text ml="1rem">Odai Mzabi</Text>
                    </Flex>
                    <Container mt="2rem" mb="1rem" fontSize="18px">
                    There are many benefits to a joint design and development system. Not only
                    does it bring benefits to the design team, but it also brings benefits to
                    engineering teams. It makes sure that our experiences have a consistent look
                    and feel, not just in our design specs, but in production
                    
                        </Container>
                    </Box>  
                    </Box>
                </NavBar>
        </ChakraProvider>
    )

}