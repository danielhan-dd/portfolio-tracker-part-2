import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';

const BrowseCoinCell = ({coin}) => {

    const top2List = ['bitcoin', 'ethereum']
    const randomizer = Math.floor(Math.random() * (2) ) + 0;
    const coinLink = top2List.includes(coin.id) ? coin.id : top2List[randomizer]

    return (
        <TableRow component={Link} to={`/coins/${coinLink}`} style={{textDecoration: 'none'}} hover='true'>
            <TableCell>
                <img src={coin.image} alt="" width="50px"/>
            </TableCell>
            <TableCell>
                <Typography>
                    { coin.id
                        .replace(/-/g, ' ')
                        .split(' ')
                        .map(x => {
                            return (
                                x.charAt(0).toUpperCase() + x.slice(1)
                            )
                        })
                            .join(' ') }: { coin.symbol.toUpperCase() 
                    }
                </Typography>
            </TableCell>
            <TableCell>
                <Typography>
                    ${ coin.market_cap.toLocaleString("en-US") }                              
                </Typography>
            </TableCell>
            <TableCell>
                <Typography>
                    ${ coin.current_price.toLocaleString("en-US") }
                </Typography>
            </TableCell>
            <TableCell>
                <Typography color={String(coin.price_change_percentage_24h).startsWith('-') ? 'secondary' : 'primary'}>
                    { coin.price_change_percentage_24h.toFixed(2) }%
                </Typography>
            </TableCell>
        </TableRow>
    )
}

export default BrowseCoinCell