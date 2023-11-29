
import { Badge, Card, Center, Container, Divider, Group, Paper, SimpleGrid, Text, Title, rem, useMantineTheme } from "@mantine/core"
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
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Profesjonaliści
                </Badge>
            </Group>
            <Container size={'sm'}>
                <Text ta="center" mt="md">
                    {data.description}
                </Text>
            </Container>
            <Center m={'xl'}>
                <Cennik data={data.cennik} />
            </Center>
            <Trenerzy data={data.trenerzy} />
        </Container>
    )
}

const Trenerzy = ({ data }: { data: TrenerI[] }) => {

    const theme = useMantineTheme();
    const features = data.map((trener) => (
        <Card key={trener.name} shadow="md" radius="md" padding="xl">
            <IconUser
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text fz="lg" fw={500} mt="md">
                {trener.name}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {trener.description}
            </Text>
        </Card>
    ));
    return (
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
            {features}
        </SimpleGrid>

    )
}
