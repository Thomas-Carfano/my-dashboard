import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//react grid styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//import data

const BasicGrid = () => {
  return (
    //Create Grid for sales information 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>Sales Dashboard:</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Agent: </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Total Weekly Sales</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Total Monthly Sales</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Total Yearly Sales</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BasicGrid