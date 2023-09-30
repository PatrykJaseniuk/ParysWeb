import { SectionDane, SectionDaneAnd } from "@/Data/Interface";
import { BackgroundImage, Center, Container, Text, Title } from "@mantine/core";
import { Background } from "../Background";

export const Sekcja = ({ children, data }: { data: SectionDane, children: React.ReactNode }) => {
    return (
        <>
            <Background
                imgSrc={data.background}
            >

                <Title order={2}>
                    <Text ta={'center'} inherit variant="gradient" gradient={{ from: 'red', to: 'purple' }}>
                        {data.title}
                    </Text>
                </Title>
            </Background>
            {children}
        </>
    )
}


