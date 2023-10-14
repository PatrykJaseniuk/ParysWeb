import { SectionDane, SectionDaneAnd } from "@/Data/Interface";
import { BackgroundImage, Center, Container, Text, Title, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { Background } from "../Background";
import { use } from "react";

export const Sekcja = ({ children, data }: { data: SectionDane, children: React.ReactNode }) => {

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


