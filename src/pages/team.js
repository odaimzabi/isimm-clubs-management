import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import Navbar from '../components/navbar'
  import TeamCard from '../components/team-card'

  
  export default function team() {
    return (
        <Navbar>
      <TeamCard/>
      </Navbar>
    );
  }
  