import { Title, Text, Anchor, Container, Button } from '@mantine/core';
import classes from './Welcome.module.css';
import { Sekcja } from '../Sekcja';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'blue' }}>
          Mantine
        </Text>
      </Title>
      <Title>
        Tytuł
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit page.tsx file.
      </Text>

      <Sekcja />
      <Container>
        witam
        <Title size={'100px'}>
          <Text >
            blue
          </Text>
          <Button variant="gradient" gradient={{ from: 'pink', to: 'blue' }}>
            Button
          </Button>

          <Container variant='gradient' color='black' size={'lg'} style={{ height: '100px' }}>

          </Container>

          <Button >
            <Text>
              Button
            </Text>
            Button
          </Button>

          <Text variant='gradient' gradient={{ from: 'pink', to: 'blue' }} >
            witam Państwa
          </Text>
        </Title>
        <Title>
          Wspanaiła robota
        </Title>
        <Title order={1}>
          h1
        </Title>
        <Title order={6}>
          h6
        </Title>
      </Container>
    </>
  );
}
