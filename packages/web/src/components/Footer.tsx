import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box className='footer'
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 The Hub AUBG. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Facebook'} href={'https://www.facebook.com/TheHubAUBG'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/thehubaubg/'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UChdtBZBvaK9XZurP3GjPDug'}>
            <FaYoutube />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}