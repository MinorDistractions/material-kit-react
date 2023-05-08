import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

StockCard.propTypes = {
  product: PropTypes.object,
};

export default function StockCard({ product }) {
  const { ceo, country, description, industry, name, prices, ticker } = product;

  return (
    <Link href={`/dashboard/${ticker}`} color="inherit" underline="none">
      <Card>
        <Box sx={{position: 'relative', height: '150px' }}>
          <StyledProductImg alt={name} src='/assets/images/products/product_1.jpg' />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
            <Typography variant="subtitle2" noWrap>
              {`${ticker}: ${name}`}
            </Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }}
              >
                {prices[0] && fCurrency(prices[0])}
              </Typography>
              &nbsp;
              {fCurrency(prices[900])}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
}
