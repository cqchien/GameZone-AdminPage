import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Form, FormikProvider } from 'formik';
import closeFill from '@iconify/icons-eva/close-fill';
import plusFill from '@iconify/icons-eva/plus-fill';
// material
import {
  Box,
  Stack,
  Button,
  Drawer,
  Divider,
  TextField,
  IconButton,
  Typography,
} from '@mui/material';
//
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

ShopFilterSidebar.propTypes = {
  isOpenFilter: PropTypes.bool,
  onResetFilter: PropTypes.func,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
  formik: PropTypes.object
};

export default function ShopFilterSidebar({
  isOpenFilter,
  onResetFilter,
  onOpenFilter,
  onCloseFilter,
  formik
}) {

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
  
  return (
    <>
        <Button
            variant="contained"
            startIcon={<Icon icon={plusFill} />}
            onClick={onOpenFilter}
          >
            New Product
        </Button>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Drawer
            anchor="right"
            open={isOpenFilter}
            onClose={onCloseFilter}
            PaperProps={{
              sx: { width: 600, border: 'none', overflow: 'hidden' }
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 2 }}
            >
              <Typography variant="h4" sx={{ ml: 3 }}>
                Create a new product
              </Typography>
              <IconButton onClick={onCloseFilter}>
                <Icon icon={closeFill} width={20} height={20} />
              </IconButton>
            </Stack>

            <Divider />

            <Scrollbar>
              {/* Code in here .... */}
              <Box sx={{
                        m: 3,
                        borderRadius : 1.5, 
                        border: '1px solid #ccc'
                }}
              >
              <Stack spacing={3} sx={{m: 3}}>
                <TextField
                  fullWidth
                  autoComplete="name"
                  type="name"
                  label="Product Name"
                  {...getFieldProps('name')}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />

                <TextField
                  fullWidth
                  autoComplete="productSKU"
                  type="productSKU"
                  label="Product SKU"
                  {...getFieldProps('productSKU')}
                />

                <Stack direction="row" justifyContent="space-between">
                <TextField
                  sx={{mr:1}}
                  fullWidth
                  autoComplete="category"
                  type="category"
                  label="Category"
                  {...getFieldProps('category')}
                />

                <TextField
                  fullWidth
                  autoComplete="price"
                  type="price"
                  label="Sale Price"
                  {...getFieldProps('price')}
                />
                </Stack>
            </Stack>

              </Box>

            </Scrollbar>
            <Stack direction="row" justifyContent="space-around">
            <Box sx={{ p: 3 , width: '210px'}} >
              <Button
              fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={onResetFilter}
              >
                Cancel
              </Button>
            </Box>

            <Box sx={{ p: 3 }}>
              <Button
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Create Product
              </Button>
            </Box>
            </Stack>
          </Drawer>
        </Form>
      </FormikProvider>
    </>
  );
}
