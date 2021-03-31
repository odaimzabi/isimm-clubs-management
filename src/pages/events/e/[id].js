import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Icon,
    Image,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Grid,
    Divider,
    Button,
    VStack,
    ChakraProvider,
    Container
  } from '@chakra-ui/react';
  import {ChevronDownIcon} from '@chakra-ui/icons'
  import Navbar from '../../../components/navbar'
  import EventItem from '../../../components/event-item'
  import {theme} from '../../../theme/chakra-theme'
  import CustomCard from '../../../components/custom-card'
  import {RiParentLine,RiBookmarkLine} from 'react-icons/ri'
  import {FcCalendar,FcDonate,FcPhoneAndroid} from 'react-icons/fc'
  import {HiLocationMarker} from 'react-icons/hi'
export default function EventPost(){


    return(
        <>
        <ChakraProvider theme={theme}>
            <Navbar>

            <Box display="grid" placeItems="center" mt="3rem">
         <Box bg="white"height="100%" width={{base:"100vw",md:"50vw"}} borderRadius="0.5rem">
                <Center mb="2rem" mt="1rem">
                    <Image src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/158500541_3848307971882262_5756986725912902631_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=VqT6YQg6IrgAX_AFotM&_nc_ht=scontent.ftun12-1.fna&oh=1c9170abc1dd8300e509fbb7115f4404&oe=6071F3BA"   w="3xs" />
                    <Text ml="2rem">10 Places Left</Text>
                </Center>
                <Text fontSize="xl" fontWeight="bold">Description:</Text>
                <Center>
                <Container mt="2rem" mb="1rem" fontSize="18px">
                    There are many benefits to a joint design and development system. Not only
                    does it bring benefits to the design team, but it also brings benefits to
                    engineering teams. It makes sure that our experiences have a consistent look
                    and feel, not just in our design specs, but in production
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae dui neque. Duis ipsum mauris, cursus nec interdum a, euismod ac massa. Nullam consequat accumsan leo, et hendrerit nisi eleifend vitae. Quisque sagittis nisl orci, non mattis diam mollis vitae. Donec sit amet mattis sapien. Proin posuere risus risus. Ut eu risus sed risus luctus sagittis. Sed id lectus est. Nunc ac consectetur sem, id sollicitudin erat. Quisque ut ipsum dignissim, auctor ex sodales, facilisis diam. Proin et erat id diam congue mollis in elementum velit. Nam id hendrerit nisl. Praesent vestibulum, risus at pretium condimentum, sem magna semper lacus, vel efficitur libero est at justo.

Donec accumsan vel mi vitae eleifend. Suspendisse convallis dictum odio, sed luctus lacus egestas a. Aliquam sit amet orci in mi sollicitudin tincidunt id nec nibh. Cras scelerisque euismod tellus, vitae scelerisque nisi bibendum in. Etiam dictum nisl a lorem elementum sollicitudin dictum sit amet nibh. Mauris vel tortor sit amet ipsum condimentum rhoncus ac a leo. Proin ac elementum nibh. Nunc at nisl malesuada quam aliquam aliquet. In vitae nunc ut justo accumsan pulvinar. Ut rhoncus libero quam, et ultrices nibh vehicula ut. Vivamus vestibulum ante ac elit iaculis volutpat. Suspendisse tellus ligula, mollis id euismod ut, venenatis vitae sapien.

Etiam ornare, turpis eu euismod tincidunt, lorem felis euismod augue, nec tincidunt erat tortor vel felis. Quisque pharetra tempor tortor, quis eleifend magna euismod in. Aenean scelerisque nec tortor vel condimentum. Donec tempor, magna vitae tristique suscipit, dui ipsum porta arcu, rutrum lobortis ligula ipsum consequat tortor. Mauris ac arcu in est pulvinar scelerisque vel id diam. Morbi quis velit orci. Maecenas nunc nisl, aliquam eget magna a, cursus fringilla eros. Morbi id eros iaculis, scelerisque ligula et, placerat ipsum. Phasellus condimentum magna vulputate velit lobortis, in volutpat ex tempor. In volutpat pulvinar accumsan. In id sollicitudin enim. Donec pulvinar elit eget molestie imperdiet.

Nam sed lectus bibendum, luctus odio sed, facilisis nisi. Etiam sit amet magna et ligula efficitur ultrices a non ipsum. Duis volutpat pretium orci. Aliquam volutpat tincidunt nisl, at congue nunc tempus sed. Pellentesque lobortis ultricies justo, vitae facilisis turpis finibus quis. Ut ut justo in ipsum eleifend tristique eget vel lacus. In nec varius lectus. Sed finibus placerat risus nec hendrerit. Ut vehicula eros leo, eu bibendum nunc consequat vitae. Nulla convallis cursus purus, vel maximus elit tincidunt ac. Etiam vitae elit id enim feugiat fringilla. Morbi ac metus nibh.

Quisque quis dolor odio. Duis justo ligula, blandit sed orci nec, porta condimentum augue. Pellentesque vulputate tortor ut congue eleifend. Phasellus aliquam malesuada diam, sit amet rhoncus justo laoreet eu. Nullam vehicula libero vitae dolor sagittis pellentesque. Nunc auctor nibh tortor, sed auctor sem congue vitae. Praesent vel eros nunc. Vivamus eleifend ex odio, ac dapibus tellus mattis a. Morbi eu quam placerat, tempor odio a, consequat mauris. Suspendisse porttitor pretium massa, nec venenatis velit gravida ut. Vestibulum sed ex erat. Donec condimentum est non velit mattis, quis vehicula enim euismod. Fusce luctus justo vel nunc consequat, ut mollis erat dictum. Sed scelerisque ipsum a sagittis rhoncus. Suspendisse ac dui nec tellus rhoncus aliquam in sit amet mauris. 
                        </Container>

            </Center>
            <Divider mb={4} />       
            <Text fontSize="xl" fontWeight="bold">Details:</Text>
            <VStack spacing={4} align="stretch">
            <Box h="40px">
                <Text>
                    <Icon boxSize={6} as={FcCalendar}/>
                    Starting Date: 33/12/2050
                </Text>
            </Box>
            <Box h="40px" ml="1rem">
            <Text>
                    <Icon boxSize={6} as={FcCalendar}/>
                    Ending Date: 33/12/2050
                </Text>
            </Box>
            <Box h="40px" ml="1rem">
               <Icon boxSize={6} as={FcDonate}/>
                Price:10DT
            </Box>
            <Box h="40px" ml="1rem">
               <Icon boxSize={6} as={HiLocationMarker} fill='red'/>
                Location:ISIMM
            </Box>

            <Box h="40px" ml="1rem">
               <Icon boxSize={6} as={FcPhoneAndroid}/>
                Contact Us: 58 828 919
            </Box>

         </VStack>
            </Box>
            <Box bg="white"height="100%" width={{base:"100vw",md:"50vw"}} borderRadius="0.5rem" mt="3rem" >
            <Text fontSize="xl" fontWeight="bold">Actions:</Text>
            <Box> 
                <Center>
                <Button colorScheme="green" mr="1rem"  leftIcon={<Icon boxSize={4} mt="-2px" as={RiParentLine}/>}>Participate</Button>
                <Button 
                backgroundColor="blue.100" 
                color="blue.500"
                _hover={{ bg: 'purple.600', color: 'whiteAlpha.900' }}
                leftIcon={<Icon boxSize={4} mt="-2px" as={RiBookmarkLine} />}
                >
                    Save for later
                </Button>
                </Center>
            </Box>
            </Box>
            </Box>


            </Navbar>
        </ChakraProvider>

        </>

    )


}
