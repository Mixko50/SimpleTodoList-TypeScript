import React, { useState, useImperativeHandle, forwardRef } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const TagSelect = forwardRef((props, ref) => {
    const [tag, setTag] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setTag(event.target.value as string);
    };

    useImperativeHandle(ref, () => ({
        sendTag: () => {
            return tag;
        },
    }));

    return (
        <Box sx={{ maxWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tag}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="blue">Blue</MenuItem>
                    <MenuItem value="pink">Pink</MenuItem>
                    <MenuItem value="purple">Purple</MenuItem>
                    <MenuItem value="red">Red</MenuItem>
                    <MenuItem value="green">Green</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
});
