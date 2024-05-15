import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Navbar from 'scenes/navbar';
import MessagesWidget from 'scenes/widgets/MessagesWidget';
// import FriendListWidget from 'scenes/widgets/FriendListWidget';

const ChatPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    // const primaryLight = theme.palette.primary.light;

    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                pading="20rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "100%" : undefined}>
                    <MessagesWidget />
                </Box>
            </Box>
        </Box>
    )
}

export default ChatPage