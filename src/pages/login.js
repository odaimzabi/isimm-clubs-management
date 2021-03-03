import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    ChakraProvider
  } from '@chakra-ui/react';
  import withApollo from '../utils/apollo-client'
  import {useMutation} from '@apollo/client'
  import {LOGIN} from '../graphql/Mutations'
  import {useForm} from 'react-hook-form'
  import {useSetRecoilState,useRecoilValue} from 'recoil'
  import {User,UserSelector } from '../lib/atoms'
  import react,{useEffect} from 'react'
  import {useRouter} from 'next/router'
  import Cookie from 'js-cookie'
 function Login() {

  const setUser=useSetRecoilState(UserSelector)
  const user = useRecoilValue(UserSelector);
   const [login,{loading}]=useMutation(LOGIN)
    const router=useRouter()
   const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) =>{
      const response=await login({variables:{input:data}}).catch(err=>console.log(err))
      console.log(response)
      if (!user){
      setUser(response.data.login.user)
      }
      Cookie.set('qid',response.data.login.jwt);
      
      router.push('/home')
  }

  useEffect(()=>{
    console.log(user)
  },[user])

    return (
      <ChakraProvider>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="identifier" ref={register}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" ref={register} />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  mt="2rem"
                  type="submit"
                  isLoading={loading}
                  >
                  Sign in
                </Button>
              </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </ChakraProvider>
    );
  }
  
  export default Login