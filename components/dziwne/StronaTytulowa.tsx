import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './Stronatytulowa.module.css';

const image = {
    src: '/image.svg',
};
export function StronaTytulowa() {
    return (
        <div>
            <Container>
                marian
            </Container>
            <Container>
                marian
            </Container>
            <Container>
                marian
            </Container>

            <Container>
                witM
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            A <span className={classes.highlight}>modern</span> React <br /> components library
                        </Title>
                        <Text c="dimmed" mt="md">
                            Build fully functional accessible web applications faster than ever – Mantine includes
                            more than 120 customizable components and hooks to cover you in any situation
                        </Text>

                        <List
                        
                            mt={30}
                            spacing="sm"
                            size="xl"
                            icon={
                                <Text size='5rem' variant='gradient' gradient={{ deg: 20, from: 'blue', to: 'red' }} > xD </Text>
                            }
                        >
                            <List.Item>
                                <b>TypeScript based</b> – build type safe applications, all components and hooks
                                export types
                            </List.Item>
                            <List.Item>
                                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                                any project
                            </List.Item>
                            <List.Item>
                                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                keyboard
                            </List.Item>
                            <List.Item>
                                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                keyboard
                            </List.Item>
                            <List.Item>
                                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                keyboard
                            </List.Item>
                            <List.Item>
                                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                keyboard
                            </List.Item>

                        </List>

                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Get started
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Source code
                            </Button>
                        </Group>
                    </div>
                    <Image src='image.svg' className={classes.image} />
                </div>
            </Container>
        </div>
    );
}