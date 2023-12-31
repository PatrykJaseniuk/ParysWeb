
import { Badge, Card, Center, Container, Divider, Group, Paper, SimpleGrid, Stack, Text, Title, rem, useMantineTheme } from "@mantine/core"
import { Sekcja } from "./Sekcja"
import { IconCookie, IconGauge, IconUser } from "@tabler/icons-react"
import { Cennik } from "../2/Cennik"
import { SectionI } from "@/src/interface/1/Section"
import { TrenerI, ZajeciaIndywidualneI } from "@/src/interface/1/ZajeciaIndywidualne"

export const SekcjaZajeciaIndywidualne = ({ data }: { data: SectionI<ZajeciaIndywidualneI> }) => {


    return (
        <Sekcja data={data.section}>
            <ZajecaiIndywidualne data={data.content} />
        </Sekcja>
    )
}

const ZajecaiIndywidualne = ({ data }: { data: ZajeciaIndywidualneI }) => {
    return (
        <Container size={'xl'} my={'xl'}>
            <Stack>
                <Container size={'sm'}>
                    <Text ta="center" mt="md">
                        {data.description}
                    </Text>
                </Container>

                <Cennik data={data.cennik} />

                <Trenerzy data={data.trenerzy} />
            </Stack>

        </Container>
    )
}

const Trenerzy = ({ data }: { data: TrenerI[] }) => {

    const theme = useMantineTheme();
    const features = data.map((trener) => (
        <Card key={trener.name} shadow="md" radius="md" padding="md">
            <IconUser
                style={{ width: rem(50), height: rem(35) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text fz="md" fw={500} mt="md">
                {trener.name}
            </Text>
            <Text fz="sm" opacity={0.7} mt="sm">
                {trener.description}
            </Text>
        </Card>
    ));
    return (
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="xl" mt={50}>
            {features}
        </SimpleGrid>

    )
}
