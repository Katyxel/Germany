import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const AccordionComponent = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              bg="#374151"
              w="100%"
              p={4}
              color="white"
            >
              Составление резюме + LinkedIn
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box as="h2" fontWeight="bold" mb={4}>
            200€
          </Box>
          <Box as="h2" fontWeight="bold" mb={4}>
            Видеоконсультация 1,5 часа
          </Box>
          <UnorderedList>
            <ListItem>Изучим ваш опыт и продумаем все варианты.</ListItem>
            <ListItem>
              Учтём все навыки, знания, дипломы и достижения, обязанности на
              работах и другое.
            </ListItem>
            <ListItem>
              Составим структуру резюме: разделы, наполнение, тезисное
              наполнение контента частей.
            </ListItem>
            <ListItem>
              Расскажем подробно: о чём писать, что не указывать, как рассказать
              факты так, чтобы они выглядели выигрышно для работодателя.
            </ListItem>
            <ListItem>
              В результате вы получите готовую структуру CV. А также — новые
              актуальные знания и рекомендации, с которыми сможете создать
              идеальное резюме.
            </ListItem>
            <ListItem>
              Дадим оценку профиля в LinkedIn, выявим ошибки и поможем сделать
              её лучше.
            </ListItem>
            <ListItem>
              Если страницы в LinkedIn ещё нет, поможем создать с использованием
              составленного CV.
            </ListItem>
            <ListItem>
              В качестве бонуса вы получите советы и лайфхаки по поиску работы в
              LinkedIn и через другие платформы.
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              bg="#374151"
              w="100%"
              p={4}
              color="white"
            >
              Подготовка к собеседованию
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box as="h2" fontWeight="bold" mb={4}>
            150€
          </Box>
          <Box as="h2" fontWeight="bold" mb={4}>
            Видеоконсультации на русском или английском
          </Box>
          <UnorderedList>
            <ListItem>Помощь с выполнением тестовых заданий</ListItem>
            <ListItem>Проверка выполненных заданий специалистом в IT</ListItem>
            <ListItem>
              Консультация со специалистом: как правильно отвечать на вопросы HR
              и работодателя, что рассказывать, а что нет. Какие задавать
              вопросы.
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              bg="#374151"
              w="100%"
              p={4}
              color="white"
            >
              Разбор тестовых заданий
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box as="h2" fontWeight="bold" mb={4}>
            150€
          </Box>
          <Box as="h2" fontWeight="bold" mb={4}>
            Видеоконсультации на русском или английском
          </Box>

          <UnorderedList>
            <ListItem>
              Проанализируем ваше тестовое и составим для вас план выполнения
            </ListItem>
            <ListItem>
              Проверим выполненное задание, дадим оценку «со стороны
              работодателя».
            </ListItem>
            <ListItem>
              Дадим фидбек: что исправить, доделать, какие вопросы скорее всего
              зададут на собеседовании.
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};



export default AccordionComponent;
