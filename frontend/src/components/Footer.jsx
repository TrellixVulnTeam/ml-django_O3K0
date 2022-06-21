import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Footer = () => {
  return (
    <Stack direction="row" sx={{ gap: { sm: '150px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'center' }} px="20px">
    <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="center"
      justifyContent="center"
    >
      <Link to="/terms" style={{ textDecoration: 'none', color: "#8D8DAA" }}>利用規約</Link>
      <a href="/privacy" style={{ textDecoration: 'none', color: "#8D8DAA" }}>プライバシーポリシー</a>
    </Stack>
  </Stack>
  )
}

export default Footer