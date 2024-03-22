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

// создаём функцию scrollToSection, которая будет прокручивать страницу к нужному якорю на странице Work
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const CardsVisa = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card maxW="sm" className="m-6">
        <CardBody>
          <Image
            src="/images/immigration.jpg"
            width={500}
            height={400}
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
            src="/images/immigr.jpg"
            width={500}
            height={400}
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

export default CardsVisa;
