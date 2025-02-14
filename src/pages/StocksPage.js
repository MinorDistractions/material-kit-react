import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, StockList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import companiesPrices from '../_mock/companiesPrices.json';

// ----------------------------------------------------------------------

export default function StocksPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  console.log(companiesPrices);

  return (
    <>
      <Helmet>
        <title> Dashboard: Stocks | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Stocks
        </Typography>

        <StockList products={companiesPrices} />

      </Container>
    </>
  );
}
