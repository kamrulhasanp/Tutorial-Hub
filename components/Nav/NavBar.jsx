'use client'

import { Badge, Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { TbBell } from 'react-icons/tb'
import { FaUser } from "react-icons/fa";
import UserMenu from "./UserMenu";

const NavBar = ({title}) => {
    // test user
    const loginUser = {
        UserName: 'TEST User',
        UserID: '001'
      }

      const notificationItems = {
        content: 1,
        category: 'primary',
      }

    return (
        <Box position="fixed" top={0} className="w-full relative z-100">
            <Box bg='surface.AccentSuccessLight' py={2} border={{base: '1px solid #E3E6ED'}}>
                <Heading>{title}</Heading>
                <Flex justify='flex-end' alignItems='stretch' pr={5} gap={10}>
                    <Divider orientation="vertical" />
                    <Flex gap={3} className="items-center" >
                        {/* Notifications Icon */}

                       
                            <TbBell size={26}  bg='surface.AccentSuccessLight'/>

                       
                    </Flex>

                    {/* User icon and Options */}
                    <Flex gap={3} alignItems='center'>
                   
                        <UserMenu currentUser={loginUser} />
                    </Flex>
                   

                </Flex>

            </Box>
            
        </Box>
    );
};

export default NavBar;