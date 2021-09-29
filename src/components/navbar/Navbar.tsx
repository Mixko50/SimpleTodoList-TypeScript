import {
    faClipboardCheck,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box, Theme } from "@mui/system";

const Navbar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.section}>
            <Box className={classes.section2}>
                <Box className={classes.logo}>
                    <FontAwesomeIcon icon={faClipboardCheck} size="2x" />
                    <Typography variant="h5">To-Do List</Typography>
                </Box>
                <Box>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme2: Theme) => ({
    section: {
        height: "70px",
        backgroundColor: blue[100],
        display: "flex",
        top: "0",
        position: "fixed",
        width: "100%",
    },
    section2: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "0 40px",
    },
    logo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "150px",
    },
}));
export default Navbar;
