import React from 'react'
import { Stack, Toolbar } from '@mui/material';
import Link from './MuiNextLink';

const Navbar = ({ navLinks }) => {
    return (
        <Toolbar
        component="nav"
        sx={{
            display: { xs: 'none', md: 'flex' },
        }}
        >
            <Stack direction="row" spacing={4} >
                {
                    navLinks.map(({ title, path }, i) => (
                        <Link
                        key={`${title}${i}`}
                        href={path}
                        variant="button"
                        sx={{ color: 'black', opacity: 0.9, textDecoration: 'none', '&:hover': {
                            color: 'primary.main',
                        } }}
                        >
                            { title }
                        </Link>
                    ))
                }
            </Stack>
        </Toolbar>
    )
}

export default Navbar
