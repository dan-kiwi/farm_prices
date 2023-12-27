"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Image from "next/image";
import pricePicture from "./price_page.png";

export default function PricePictureModal() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Website archived"
        centered
        size="lg"
      >
        <div>
          <p>
            Welcome to the archived version of this website. Please note that
            the back-end is currently offline, which means pricing information
            is not available. This project was in its developmental stages and
            should not be considered a reflection of my full capabilities.
            Instead, it serves as a glimpse into my work process. For a
            comprehensive view of my personal projects, I invite you to visit my
            GitHub profile. Below, you'll find an image illustrating how the
            pricing page appeared when the back-end was active.
          </p>
          <Image
            src={pricePicture}
            alt="Picture of price page with active back-end"
          />
        </div>
      </Modal>
    </>
  );
}
