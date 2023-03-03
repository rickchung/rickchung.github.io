import { Divider, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Layout from '../components/layout';

const MyNextWebsite = () => {
  return (
    <Layout>
      <Head>
        <title>Yet Another CYC</title>
      </Head>

      {/* TODO: Featured Posts */}

      <Grid container spacing={4} pt={2}>

        {/* New Posts */}
        <Grid item xs={12} md={8}>
          <Typography variant='h6' gutterBottom>
            Something New
          </Typography>
          <Divider />
          <Typography pt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi natus repellendus, facilis atque blanditiis at enim praesentium et placeat harum, odio hic laudantium sapiente, aspernatur ea eligendi velit dicta doloribus.
          </Typography>
        </Grid>

        {/* Sidebar */}
        <Grid item md={4}>
          <Typography variant='h6'>
            About
          </Typography>
          <Typography pt={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae aliquam maxime. Consectetur accusantium distinctio nostrum nulla labore facere tempore eum hic provident. Quidem, animi! Tempora a sed unde expedita.
          </Typography>
          <Typography variant='h6' pt={2}>
            Social
          </Typography>
          <Typography pt={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae aliquam maxime. Consectetur accusantium distinctio nostrum nulla labore facere tempore eum hic provident. Quidem, animi! Tempora a sed unde expedita.
          </Typography>
        </Grid>

      </Grid>
    </Layout>
  );
};

export default MyNextWebsite;
