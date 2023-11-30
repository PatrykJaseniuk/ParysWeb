
import { Icon247 } from "@/src/components/2/IconsParys/Icon247"
import { IconMotto } from "@/src/components/2/IconsParys/IconMoto"
import { IconParysLogo } from "@/src/components/2/IconsParys/IconParysLogo"
import { Container, SimpleGrid, useMantineColorScheme, useMantineTheme, Text, Box, Stack, Space, ThemeIcon } from "@mantine/core"
import { Background } from "../2/Background"
import { FitureI, HeaderI } from "@/src/interface/1/Header"
import { useMediaQuery } from "@mantine/hooks"



export const Tytul = ({ data }: { data: HeaderI }) => {

    const colorSheme = useMantineColorScheme()
    const theme = useMantineTheme()
    const color = colorSheme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9]


    return (
        <>
            <Background
                imgSrc="zasoby/SilowniaBackground.png"
            >
                {/* <Overlay backgroundOpacity={0} color={'blue'} /> */}
                <Container opacity={1} size={'xl'}>

                    <SimpleGrid
                        cols={{ sm: 1, md: 2 }}
                        // mih={'100vh'}
                        spacing={'xl'}
                    >
                        <Box m={'md'}>
                            <IconParysLogo />
                            <Space h={'xl'} />
                            <IconMotto />
                        </Box>
                        <Stack justify="center" align="center" m={'xl'}>
                            <Icon247 style={{ width: '50%', height: 'auto' }} />
                            <Text size="xl" ta={'center'} variant="gradient" gradient={{ from: 'red', to: color, deg: 0 }} >
                                Czynne całą dobę
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Background>
            <FeaturesGrid data={data.feature} />
        </>)
}

export function Feature({ icon: Icon, title, description }: FitureI) {
    const isLargeScreen = useMediaQuery(`(min-width: 1000px)`);
    return (
        <div>
            <ThemeIcon variant="light" size={isLargeScreen ? 80 : 50} radius={40}>
                <Icon style={{ width: '80%', height: 'auto' }} />
            </ThemeIcon>
            <Text size={isLargeScreen ? 'xl' : 'md'} mt="sm" mb={7}>
                {title}
            </Text>
            <Text c="dimmed" lh={1.6}>
                {description}
            </Text>
        </div>
    );
}

export function FeaturesGrid({ data }: { data: FitureI[] }) {
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container size={'xl'} >
            <SimpleGrid
                mt={60}
                cols={{ base: 2, sm: 2, md: 3 }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 50 }}
            >
                {features}
            </SimpleGrid>
            <Space h={'xl'} />
        </Container>
    );
}
