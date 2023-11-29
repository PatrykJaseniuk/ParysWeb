import { BackgroundImage, Center, Container, Text, Title, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { Background } from "../2/Background";
import { SectionBaseI, SectionI } from "@/src/interface/1/Section";

export const Sekcja = ({ children, data }: { data: SectionBaseI, children: React.ReactNode }) => {

    const colorSheme = useMantineColorScheme()
    const theme = useMantineTheme()
    const color = colorSheme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9]

    return (
        <>
            <Background
                imgSrc={data.background}
            >
                <Center>
                    <Title order={1}>
                        <Text ta={'center'} inherit variant="gradient" gradient={{ from: 'red', to: color }}>
                            {data.title}
                        </Text>
                    </Title>
                </Center>
            </Background>
            {children}
        </>
    )
}


