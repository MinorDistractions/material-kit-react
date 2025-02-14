import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import StockCard from './StockCard';

// ----------------------------------------------------------------------

StockList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function StockList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.ticker} item xs={12} sm={6} md={3}>
          <StockCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
