import React, { useState, useRef } from "react";
import { Center,Box, Flex, Icon, Link, Stack, Heading, Text, FormControl, FormLabel, Input, FormErrorMessage, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, useToast, useMediaQuery,Avatar } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import NextLink from "next/link"

const AuthContent = ({ register, errors, type, loading, ...rest }) => {
    return (
      <>
        <Stack {...rest}>
          <Flex justify="center">
            <Box
              as="a"
              href="/"
              aria-label="Back to homepage"
              textAlign="center"
            >
              <Heading fontSize="lg">ICM</Heading>
              <Text>Sign up to access this content</Text>
            </Box>
          </Flex>
          <FormControl isInvalid={errors.email && errors.email.message}>
            <FormLabel>Email Address</FormLabel>
            <Input
              aria-label="emailAddress"
              id="emailAddress"
              name="email"
              ref={register({
                required: 'Please enter your email address.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address!'
                }
              })}
              placeholder="katniss@gmail.com"
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.username && errors.username.message}>
            <FormLabel>Username</FormLabel>
            <Input
              aria-label="username"
              id="username"
              name="username"
              ref={register({
                required: 'Please enter your username.',
                pattern: {
                  value: /^[A-Za-z0-9]+$/i,
                  message: 'Username can only include letters and numbers.'
                }
              })}
              placeholder="katnisseverdeen"
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password && errors.password.message}>
            <FormLabel>Password</FormLabel>
            <Input
              aria-label="Password"
              name="password"
              id="password"
              type="password"
              ref={register({
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long'
                },
                required: 'Please enter a password, longer than 8 characters.'
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            id="register"
            type="submit"
            bg={'blue.400'}
            color="white"
            isLoading={loading}
            fontWeight="medium"
            mt={4}
            h="50px"
            fontSize="lg"
              colorScheme="messanger"
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            {type}
          </Button>
          <NextLink href="/signin">
            <Link mt={10}>Already have an account? Sign in here</Link>
          </NextLink>
        </Stack>
      </>
    );
}

const ProfileContent = ({  errors, type , ...rest }) => {
    return (
      <>
        <Stack {...rest}>
          <Flex justify="center">
            <Box
              as="a"
              href="/"
              aria-label="Back to homepage"
              textAlign="center"
            >
              <Heading fontSize="lg">Profile</Heading>
            </Box>
          </Flex>

            <Center>
            <Avatar/>
            </Center>
            <Center><Heading>Odai Mzabi</Heading></Center>
          

          <Button
            id="register"
            type="submit"
            bg={'blue.400'}
            color="white"
            fontWeight="medium"
            mt={4}
            h="50px"
            fontSize="lg"
              colorScheme="messanger"
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
              Logout
          </Button>
         
        </Stack>
      </>
    );
}

export const ProfileModal=({isOpen,onClose})=>{
    const [ mobile ] = useMediaQuery("(min-width: 500px)")

    return (
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={mobile ? "md" : "md"}
        motionPreset="slideInBottom"
        isCentered={mobile ? true : false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody px={8} py={12}>
            <ProfileContent
              as="form"
              w="100%"
              spacing={6}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    )

}

export const AuthModal = ({ isOpen, onClose, loading, type, onSubmit }) => {

    const { handleSubmit, register, errors } = useForm();
    const [ mobile ] = useMediaQuery("(min-width: 500px)")

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={mobile ? "md" : "full"}
        motionPreset="slideInBottom"
        isCentered={mobile ? true : false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody px={8} py={12}>
            <AuthContent
              as="form"
              errors={errors}
              onSubmit={handleSubmit((data) => onSubmit(data))}
              register={register}
              type={type}
              loading={loading}
              w="100%"
              spacing={6}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    );

}

export const withAuthModal = (Component) => (props) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const [loading, setLoading] = useState(false);


   
    return (
        <>
            <AuthModal isOpen={isOpen} onClose={onClose} type="Sign Up" loading={loading} onSubmit={onSignup} />
            <Component openAuthModal={onOpen} {...props} />
        </>
    )
}