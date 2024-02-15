'use client'

import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { FaHospitalUser } from "react-icons/fa";
import { LuUserCog } from 'react-icons/lu'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { IoMdLogOut } from 'react-icons/io'

const UserMenu = ({currentUser}) => {
    if(!currentUser) {
        currentUser = {UserName: "Test User", UserId: "Test_ID"}
    }

    const handleLogout = async () => {

    }
    const navigationToProfile = (id) => {
        //
    }
    return (
        <Box display='flex' alignItems='baseline' gap={5}>
            {/* User Info */}
            <Text fontSize={16} fontWeight={600}>
                {currentUser.UserName}
            </Text>
            {/* User Dropdown Menu: Profile Logout */}
            <Menu>
                <MenuButton as={IconButton} aria-label="User Menu" icon={<HiOutlineChevronDown  />}>
                    <MenuList bg='bg_color.MenuBackground' >
                        <MenuItem color='text.MenuText'  bg='bg_color.MenuBackground' _hover={{
                            color: 'text.Inverse',
                            bg: 'action.NavPrimaryHover',
                            }}
                            icon={<LuUserCog />}
                            onClick={() => navigationToProfile(currentUser)}
                            >
                                Profile
                        </MenuItem>
                        <MenuItem color='text.MenuText'  bg='bg_color.MenuBackground' _hover={{
                            color: 'text.Inverse',
                            bg: 'action.NavPrimaryHover',
                            }}
                            icon={<IoMdLogOut  />}
                            onClick={() => {}}
                            >
                                Log out
                        </MenuItem>

                    </MenuList>
                </MenuButton>
            </Menu>
            
        </Box>
    );
};

export default UserMenu;