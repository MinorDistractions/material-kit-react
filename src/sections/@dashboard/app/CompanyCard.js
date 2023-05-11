import { Box, Card, CardContent, Typography } from '@mui/material';

export default function CompanyCard({ companyData }) {
    const { name, ceo, country, description, industry, sector } = companyData;
  
    return (
      <Card> 
        <Box display="flex" justifyContent="flex-end">
            <Box sx={{ borderRadius: 16 }} bgcolor="secondary.main" color="white" mr={1} mt={2} px={1}>
            <Typography variant="caption">{industry}</Typography>
            </Box>            
            <Box sx={{ borderRadius: 16 }} bgcolor="secondary.main" color="white" mr={1} mt={2} px={1}>
            <Typography variant="caption">{sector}</Typography>
            </Box>
        </Box>        
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary">
            {description}
          </Typography>          
          <Typography color="textSecondary">
          {name} is a {sector} company in the {industry} industry
          </Typography>
          <Typography color="textSecondary">
            CEO: {ceo}
          </Typography>
          <Typography color="textSecondary">
            Country: {country}
          </Typography>          
        </CardContent>
      </Card>
    );
  }