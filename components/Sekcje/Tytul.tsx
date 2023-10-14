import { FitureDane, HeaderDane } from "@/Data/Interface"
import { data } from "@/Data/data"
import { IconVerifed } from "@/Icons/IconVerified"
import { Icon247 } from "@/IconsParys/Icon247"
import { IconMotto } from "@/IconsParys/IconMoto"
import { IconParysLogo } from "@/IconsParys/IconParysLogo"
import { IconParysLogoMini } from "@/IconsParys/IconParysLogoMini"
import { BackgroundImage, Center, Container, Flex, Group, Image, SimpleGrid, useMantineColorScheme, useMantineTheme, Text, Title, Box, Stack, List, ListItem, Highlight, Mark, Space, ThemeIcon, Overlay } from "@mantine/core"
import { Icon123, IconAirConditioning, IconBarbell, IconClockShield, IconHeartHandshake, IconShield, IconSportBillard, IconSquare, IconVersions } from "@tabler/icons-react"
import { Background } from "../Background"



export const Tytul = ({ data }: { data: HeaderDane }) => {

    const colorSheme = useMantineColorScheme()
    const theme = useMantineTheme()
    const color = colorSheme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9]

    return (
        <>
            <Background
                imgSrc="SilowniaBackground.png"
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

export function Feature({ icon: Icon, title, description }: FitureDane) {
    return (
        <div>
            <ThemeIcon variant="light" size={80} radius={40}>
                <Icon style={{ width: '80%', height: 'auto' }} />
            </ThemeIcon>
            <Text size="xl" mt="sm" mb={7}>
                {title}
            </Text>
            <Text c="dimmed" lh={1.6}>
                {description}
            </Text>
        </div>
    );
}

export function FeaturesGrid({ data }: { data: FitureDane[] }) {
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container size={'xl'} >
            <SimpleGrid
                mt={60}
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 50 }}
            >
                {features}
            </SimpleGrid>
            <Space h={'xl'} />
        </Container>
    );
}
