import React from "react";
import Image from "next/image";
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Button,
  Heading,
  SimpleGrid,
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

const CardsComponent = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <Card maxW="sm">
        <CardBody>
          <Image
            src="/images/rabotavit.jpg"
            width={300}
            height={200}
            alt="it"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Работа для программистов</Heading>
            <Text>
              Для специалистов в области IT с профильным образованием или опытом
              работы от 3 лет предоставляются наиболее выгодные условия. Поможем
              получить Голубую Карту.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            onClick={() => scrollToSection("programmers")}
            variant="ghost"
            colorScheme="red"
            className="mx-auto"
          >
            Подробнее
          </Button>
        </CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="/images/paketuslug.jpg"
            width={300}
            height={200}
            alt="Packets"
            borderRadius="lg"
          />

          <Stack mt="6" spacing="3">
            <Heading size="md">Пакет услуг для переезда по работе</Heading>
            <Text>
              «Всё включено», начиная с составления резюме и биографии, и
              заканчивая получение рабочей визы или Голубой карты для сотрудника
              и всей семьи.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            onClick={() => scrollToSection("packege")}
            variant="ghost"
            colorScheme="red"
            className="mx-auto"
          >
            Подробнее
          </Button>
        </CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="/images/uslugi.jpg"
            width={300}
            height={200}
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
    </SimpleGrid>
  );
};

export default CardsComponent;
