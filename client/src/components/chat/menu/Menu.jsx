import React from 'react';
import {  Box } from '@mui/material';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';


const Menu = () => {
  return (
        <Box>
            <Header/>
            <Search  />
            <Conversations  />
        </Box>
  )
}

export default Menu

// import { useState } from 'react';

// import { Box } from '@mui/material';

// //components
// import Header from './Header';
// import Search from './Search';
// import Conversations from './Conversations';

// const Menu = () => {
//     const [text, setText] = useState('');
    
//     return (
//         <Box>
//             <Header/>
//             <Search setText={setText} />
//             <Conversations text={text} />
//         </Box>
//     )
// }

// export default Menu;