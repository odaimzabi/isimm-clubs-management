
import react from 'react'
import {Box,Image,Text,Link} from '@chakra-ui/react'

export default function EventItem(){



    return(
        <Box p={4} display={{ md: "flex" }} bg={"white"} borderRadius="1rem">
  <Box flexShrink={0}>
    <Image
      borderRadius="lg"
      width={{ md: 40 }}
      src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/74624070_2611387025574369_2560075562416603136_o.png?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=YfMd226QcwIAX_tm7jS&_nc_ht=scontent-mrs2-1.xx&oh=c2e030251cec030074255045055d36c3&oe=605D02A9"
      alt="Woman paying for a purchase"
      boxShadow="lg"
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="sm"
      letterSpacing="wide"
      color="teal.600"
    >
      MTC ISIMM
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
      wordBreak='break-word'
    >
    qjwnqwbyqbwg1v2g1yf2vf1c2f12c1fc2
    </Link>
    {/* <Text mt={2} color="gray.500">
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </Text> */}
  </Box>
</Box>
    )


}