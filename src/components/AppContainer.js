import * as React from 'react';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import MenuBar from './MenuBar';

export default function AppContainer({ data }) {
    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: '#0F0B46', color: '#FB2961'  }}>
                <CssBaseline />
                <MenuBar data={data} />
            </Box>
        </>
    );
}
