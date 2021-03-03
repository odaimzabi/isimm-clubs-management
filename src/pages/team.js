import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    ChakraProvider
  } from '@chakra-ui/react';
  import Navbar from '../components/navbar'
  import TeamCard from '../components/team-card'
  import {theme} from '../theme/chakra-theme'
  import {motion} from 'framer-motion'


  const images=['odai.jpg','ahmed.jpg','charaf.jpg','odai.jpg','ahmed.jpg','charaf.jpg']
  const names=['Odai Mzabi','Ahmed Jemai','Charaf Reggui']

  export default function team() {
    return (
      <ChakraProvider theme={theme}>
        <Navbar>
           <Center py={12} display={{base:'grid',md:'grid'}} gridTemplateColumns={{md:[
            'repeat(4, 1fr)',
          ],base:'none'}} gap={{md:"2",base:'none'}}>
      {
        images.map((img,i)=>(
     
        <TeamCard key={i} image={img} name={names[i]}/>
        ))
      }
      </Center>
      </Navbar>
      </ChakraProvider>
    );
  }
  