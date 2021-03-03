import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Grid,
    ChakraProvider
  } from '@chakra-ui/react';
  import Navbar from '../components/navbar'
  import withApollo from '../utils/apollo-client'
  import { Swiper, SwiperSlide } from 'swiper/react';
  import FavoriteCard from 'components/favorite-card';
import fevCardImageOne from 'assets/fev-course-1-1.png';
import fevCardImageTwo from 'assets/fev-course-1-2.png';
import fevCardImageThree from 'assets/fev-course-1-3.png';
import CustomCard from '../components/custom-card'
import {theme} from '../theme/chakra-theme'
import {motion} from 'framer-motion'
import EventItem from '../components/event-item'
import {ArrowDownIcon} from '@chakra-ui/icons'
import Carousel from '../components/carousel'
  // const IMAGE =
  //   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  // const image2="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/74624070_2611387025574369_2560075562416603136_o.png?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=YfMd226QcwIAX_tm7jS&_nc_ht=scontent-mrs2-1.xx&oh=c2e030251cec030074255045055d36c3&oe=605D02A9"


  
  const favoriteCourseData = [
    {
      title: 'MTC ISIMM',
      image: fevCardImageOne,
      reviewCount: '5.0 (392 reviews)',
      watchCount: '7 Members',
      videoLink: 'g9avOpUOREM',
      starCount: 5,
    },
    {
      title:
        'CPU ISIMM',
      image: fevCardImageTwo,
      reviewCount: '4.5 (524 reviews)',
      watchCount: '7 Members',
      videoLink: 'L9jU-IIN0ng',
      starCount: 4,
    },
    {
      title:
        'Google Club',
      image: fevCardImageThree,
      reviewCount: '5.0 (392 reviews)',
      watchCount: '8 Members',
      videoLink: 'L9jU-IIN0ng',
      starCount: 5,
    },
  ];
  
    const FavoriteCarousel = {
      spaceBetween: 30,
      slidesPerView: 3,
      breakpoints: {
        0: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        376: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        576: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 1,
        },
        992: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
        1200: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
      },
    };


    // Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition:{ duration: 0.85, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6 ,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
    

  function Home() {
    return (

      <ChakraProvider  theme={theme}>
        <motion.div exit={{opacity:0}} animate='animate' initial='initial' style={{backgroundImage:require('../assets/unnamed.png')}}>
        <Navbar>
        <Carousel/>
        <Box mt={10}>
        <Box mb={4}>
          <Heading size="lg" mb={2} ml="0.5rem">
            Our Clubs <ArrowDownIcon/>
          </Heading>
        </Box>

          <Grid
          gridTemplateColumns={{md:['repeat(2, 1fr)','repeat(5,1fr)'],base:'repeat(1,fr)'}}
          gap={3}
          mb={3}
          ml="0.5rem"
          mr="0.5rem"
        >     
        
        {Array(5).fill("").map((_,i)=>(
            <motion.div  variants={fadeInUp}
           
           
            >   
            <CustomCard image="" portrait={true}/>
           </motion.div>
        ))
      
    }
           
          </Grid>
          
          <Box mb={4}>
          <Heading size="lg" mb={2} ml={"0.5rem"}>
            Upcoming Events <ArrowDownIcon/>
          </Heading>
        </Box>

        <Grid
          gridTemplateColumns={{md:['repeat(3, 1fr)'],base:'repeat(1,fr)'}}
          gap={3}
          mb={3}
          ml="0.5rem"
          mr="0.5rem"
          placeItems="center"
         
        >     
        
        {Array(3).fill("").map((_,i)=>(
            <motion.div 
            whileTap={{ scale: 0.95 }}
            >   
            <EventItem/>
           </motion.div>
        ))
      
    }
           
          </Grid>


          </Box>
      </Navbar>
      </motion.div>
      </ChakraProvider>
    );
  }

  const styles = {
    fevCourse: {
      paddingTop: ['60px', null, null, '80px', '110px'],
      pb: [null, null, null, '30px', '50px', '0'],
      container: {
        maxWidth: 1440,
        '@media(max-width:1440px)': {
          maxWidth: 1240,
        },
        '.swiper-container': {
          pb: '30px',
          overflow: [null, null, null, null, null, 'visible'],
        },
      },
      blockTitle: {
        textAlign: 'center',
        marginBottom: '30px',
      },
      row: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: 30,
        '@media(max-width: 991px)': {
          gridTemplateColumns: '1fr 1fr',
        },
        '@media(max-width: 575px)': {
          gridTemplateColumns: '1fr',
        },
      },
      col: {
        display: 'flex',
      },
    },
  };


  export default Home

