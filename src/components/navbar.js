import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Avatar,
    Drawer,
    DrawerOverlay,
    DrawerHeader,
    DrawerContent,
    DrawerBody
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import NextLink from 'next/link'
  import Link from 'next/link'
  import {useRecoilValue} from 'recoil'
  import {UserSelector,User} from '../lib/atoms'
  import { ME } from 'graphql/Queries';
  import {useQuery} from '@apollo/client'
  import {useEffect} from 'react'
  import {useSetRecoilState} from 'recoil'
  import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import {CgAlbum} from "react-icons/cg"
import {AiOutlineHome} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import {Profile} from './profile-modal'
import SearchBar from './search-bar'
   export default function NavBar({children}) {
    const { isOpen, onToggle,onOpen,onClose } = useDisclosure();

    const user = useRecoilValue(UserSelector);
    const { loading, error, data } = useQuery(ME);
    const setUser=useSetRecoilState(UserSelector)
    const [placement, setPlacement] = React.useState("left")
  

      useEffect(()=>{
          if(data){
              if (!user){
                setUser(data)
              }
          }
      },[data])
      console.log(user)
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'flex' }}
            >
            <IconButton
              onClick={onToggle}
              icon={
               <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
         
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen} overflowX="hidden">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">ICM</DrawerHeader>
            <DrawerBody>
             
                <Flex flexDir="column" mt="5rem">
                 <NextLink href="/home">
                <Button colorScheme="messenger" variant="ghost" leftIcon={<AiOutlineHome/>} autoFocus={false} mb="1rem">
                    Home
                  </Button>
                  </NextLink> 
                  <NextLink href="/events">
                  <Button colorScheme="messenger" variant="ghost" leftIcon={<BsBookmark/>}  mb="1rem">
                    Events
                  </Button>
                  </NextLink>
                  <NextLink href="/blog">
                  <Button colorScheme="messenger" variant="ghost" leftIcon={<CgAlbum/>}  mb="1rem">
                    Blogger
                  </Button>
                  </NextLink>
                 
                </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
            </Flex>
            <Flex
            justifyContent="center"
            alignItems="center"
            w="5xl"
            mx={{ base: '0', md: 10 }}
            ml="4rem"
          >
            <SearchBar  />
          </Flex>

        
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
              {!user?(
                <>
              <NextLink href="/login">
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            </NextLink>
            <NextLink href="/signup">
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
              
             
            </Button>
            </NextLink>
              </>
              ):(  <Profile username={user.me.username||user.username}/>)
              }
          </Stack>
        </Flex>
        <Drawer in={isOpen} animateOpacity>
          <MobileNav />
        </Drawer>
        {children}
      </Box>
    );
  }
  
  const DesktopNav = () => {
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <NextLink href={navItem.href}>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={useColorModeValue('gray.600', 'gray.200')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('gray.800', 'white'),
                  }}>
                  {navItem.label}
                </Link>
                </NextLink>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={useColorModeValue('white', 'gray.800')}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
            <NextLink href={href}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
              cursor="pointer"
            >
            {label}
          </Text>
          </NextLink>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <NextLink href={child.href}>
                <Link key={child.label} py={2}>
                  {child.label}
                </Link>
                </NextLink>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

  
  const NAV_ITEMS = [
    
    {
      label: 'Home',
      href: '/home',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label:'Events',
      href:'/events'
    },
    {
      label:'Blog',
      href:'/blog'
    }
  ];
  