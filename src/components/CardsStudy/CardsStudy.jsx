import React from "react";
import Image from "next/image";
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

// функция scrollToSection, которая будет прокручивать страницу к нужному якорю на странице Study
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const CardsStudy = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card maxW="sm" className="m-6">
        <CardBody>
          <Image
            src="/images/studenty-v-germanii.jpg"
            width={400}
            height={300}
            alt="study"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Полное сопровождение</Heading>
            <Text>
              Для тех, кто хочет поступить в немецкий ВУЗ, Studienkolleg, на
              среднее профессиональное образование в Германии по программе
              Ausbildung, в бакалавриат, магистратуру или на подготовительные
              курсы при университете.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            onClick={() => scrollToSection("all")}
            variant="ghost"
            colorScheme="red"
            className="mx-auto"
          >
            Подробнее
          </Button>
        </CardFooter>
      </Card>

      <Card maxW="sm" className="m-6">
        <CardBody>
          <Image
            src="/images/vus2.jpeg"
            width={400}
            height={300}
            alt="Proposes"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Отдельные услуги</Heading>
            <Text>
              У нас можно заказать нотариально заверенный перевод документов,
              консультацию, помощь в составлении пакета документов на визу в
              консульство Германии — по отдельности.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            onClick={() => scrollToSection("proposes")}
            variant="ghost"
            colorScheme="red"
            className="mx-auto"
          >
            Подробнее
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardsStudy;
