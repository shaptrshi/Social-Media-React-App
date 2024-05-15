import { Box, useTheme, Typography } from "@mui/material"
import FlexBetween from "components/FlexBetween"
import WidgetWrapper from "components/WidgetWrapper";
// import { useSelector } from "react-redux"

const MessagesWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    // const medium = palette.neutral.medium;
    // const main = palette.neutral.main;

    return (
        <WidgetWrapper>
            {/*Friends list in left side*/}
            <FlexBetween
                gap="0.5rem"
                pb="48rem"
            >
                <FlexBetween gap="50rem">
                    <Box>

                        <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            textAlign="center"
                        >
                            ChatLeftBar
                        </Typography>
                    </Box>
                    <Box justifyContent="space-between">
                        <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            textAlign="center"
                        >
                            Messages Container
                        </Typography>
                    </Box>
                </FlexBetween>


            </FlexBetween>
        </WidgetWrapper>
    )
}

export default MessagesWidget