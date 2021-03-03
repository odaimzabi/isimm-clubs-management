import { Box, Image, Link, Text, Icon,Button } from "@chakra-ui/react"
import NextLink from "next/link"

const colors = ['red.100', 'orange.100', 'green.100', 'teal.100', 'blue.100', 'purple.100', 'pink.100']
const color = colors[Math.floor(Math.random() * colors.length)];

export default function CustomCard({ googlePull, image, portrait, children, ...rest }){


    return (
    <Box
    rounded="md"
    bg="white"
    display={{ md: !portrait ? 'flex' : '' }}
    {...rest}
  >
    <Box
      flexShrink="0"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={{ base: 250, md: 200 }}
      // shadow="sm"
      rounded="md"
    >
      <Image
        width={{ md: portrait ? '' : 40 }}
        height={{ md: 175 }}
        objectFit="contain"
        src={image}
        alt="Woman paying for a purchase"
        fallbackSrc={`https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/74624070_2611387025574369_2560075562416603136_o.png?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=YfMd226QcwIAX_tm7jS&_nc_ht=scontent-mrs2-1.xx&oh=c2e030251cec030074255045055d36c3&oe=605D02A9`}
        boxShadow="lg"
      />
    </Box>
    <Box
      mt={{ base: !portrait ? 2 : '', md: portrait ? 0 : 0 }}
      ml={{ md: !portrait ? 6 : '' }}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      p={4}
      w="full"
    >
      {/* <NextLink href={`/book/${id}-${title.replace(/ /g, "-").replace(/[!,.:]/g, "")}`}> */}
        <Text
          display="block"
          fontSize="xl"
          lineHeight="normal"
          fontWeight="bold"
          mt={{ md: portrait ? 0 : 3 }}
        >
          MTC ISIMM
        </Text>
      
      <NextLink href={`/book/${image}`} passHref>
      <Button
          id="login"
          type="submit"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          h="50px"
          fontSize="lg"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Details
        </Button>
      </NextLink>


      {children}
    </Box>
  </Box>
    )

}