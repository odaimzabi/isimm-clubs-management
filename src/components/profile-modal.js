
import {useDisclosure,Button,Avatar,Menu,MenuList,MenuItem,IconButton,MenuButton} from '@chakra-ui/react'
import {ProfileModal} from './auth'
import {AddIcon,ExternalLinkIcon,RepeatIcon,EditIcon} from '@chakra-ui/icons'
import {IoPersonOutline} from 'react-icons/io5'
import {RiParentLine,RiBookmarkLine} from 'react-icons/ri'
import {BiLogOut} from 'react-icons/bi'
export const Profile=({username})=>{
    const { isOpen, onToggle,onOpen,onClose } = useDisclosure();

    return (
        <>
         {/* <Avatar src="https://bit.ly/broken-link" as={Button} onClick={onOpen}/>
      
        <ProfileModal isOpen={isOpen} onClose={onClose}/> */}

<Menu>
  <MenuButton
    as={IconButton}
    aria-label="Options"
    size="xs"
    variant="outline"
    mr="3rem"
  />
  <MenuList>
    <MenuItem icon={<IoPersonOutline />}>
        Profile
    </MenuItem>
    <MenuItem icon={<RiParentLine />} >
      Participated Events
    </MenuItem>
    <MenuItem icon={<RiBookmarkLine />}>
    Saved Events
    </MenuItem>
    <MenuItem icon={<BiLogOut />} >
     Logout
    </MenuItem>
  </MenuList>
</Menu>

        </>
    )
}