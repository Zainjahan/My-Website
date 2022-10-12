import React from 'react';
import '../components/style.css';
import TextTransition, { presets } from "react-text-transition";


export default function Careers() {
  const [index, setIndex] = React.useState(0);
  const TEXTS = [
    "Innovative",
    "Disruptive ",
    "Delightful "
  ];
  

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <section className='separate'>
        <h1 className='heading-title'>We create</h1><br />
        <h2 class="transition">
      <TextTransition  springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h2>

        <h1 className='heading3'>digital products <br /> & experiences.</h1>
        <br />

      </section>

    </div>
  )
}
