import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";


export const Kalendaz = ({ data }: { data: string }) => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal fullScreen opened={opened} onClose={close} title="Kalendarz" centered  >
                <iframe src={data} style={{ width: '100%', height: '75vh' }} ></iframe>
            </Modal >
            <Button variant="light" onClick={open}>Kalendarz</Button>
        </>
    )
}
