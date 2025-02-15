import Accordion from '../components/Accordion';
import { useState } from 'react';

function AccordionPage() {
  const items = [
    {
      label: 'What is Lorem Ipsum?',
      content:
        "More information Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin",
      id: 'bkdadf',
    },
    {
      label: 'What is Lorem Ipsum?',
      content:
        "More information Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin",
      id: 'fhewaw',
    },
    {
      label: 'What is Lorem Ipsum?',
      content:
        "More information Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin",
      id: 'afhsfkei',
    },
  ];

  const [selection, setSelection] = useState('');
  const handleSelection = (option) => {
    setSelection(option);
  };

  return (
    <div>
      <Accordion
        items={items}
        selection={selection}
        onSelection={handleSelection}
      />
    </div>
  );
}

export default AccordionPage;
