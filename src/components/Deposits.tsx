import * as React from 'react';
import {useState} from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { mockTransactions } from './mockdata'

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  let sum = 0;

  mockTransactions.forEach((a) => {
    sum += parseFloat(a.cost)
    console.log(a.cost)
    console.log(sum)
  })

  return (
    <React.Fragment>
      <Title>Recent Sales</Title>
      <Typography component="p" variant="h4">
        ${sum}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}