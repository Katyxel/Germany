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

const AccordionProposes = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              bg="grey"
              w="100%"
              p={4}
              color="white"
            >
              Индивидуальная консультация по переезду и адаптации в Германии
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box as="h2" fontWeight="bold" mb={4}>
            120€ — 45 минут
          </Box>
          Консультация подойдет как для тех, кто только собирается переезжать,
          так и для тех, кто уже находится в Германии. После консультации у вас
          будут ответы на все волнующие вопросы и чёткий план действий в вашей
          ситуации. Для подготовки нам необходимы описание ситуации, ваши
          пожелания и список конкретных вопросов. <br></br><br></br> * При отмене консультации
          менее чем за сутки предоплата возврату не подлежит.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              bg="grey"
              w="100%"
              p={4}
              color="white"
            >
              Перевод и адаптация резюме под немецкие стандарты
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box as="h2" fontWeight="bold" mb={4}>
            120€
          </Box>
          Для поиска работы в Германии необходимо сильное, продающее резюме. Мы
          поможем вам в его составлении, с русского языка переведем на немецкий
          или английский, проведем полную коррекцию и приведем резюме в
          выигрышный формат. <br></br> <br></br> *Если ваше резюме на английском и необходим перевод
          на немецкий или наоборот, к стоимости прибавляется 15 евро.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              bg="grey"
              w="100%"
              p={4}
              color="white"
            >
              Сопровождение признания образования
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box as="h2" fontWeight="bold" mb={4}>
            400€
          </Box>
          При подаче на трудовую визу в Германию в некоторых случаях необходимо
          пройти процедуру признания вашего образования. В каждой земле для
          этого процесса существует отдельный ответственный орган. Мы подберем
          подходящую организацию и сопроводим вас на всем пути признания. <br></br>
          <br></br> *Внимание: переводы и заверение документов и сборы органов признания в
          Германии оплачиваются отдельно.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionProposes;
