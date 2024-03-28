import React, { useState } from 'react';

// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick
const ClickCounter = ({ value, onUpdate }) => {
	return <button onClick={onUpdate}>Current: {value}</button>
};

const App = () => {
	const [clicks, setClicks] = useState(0);

	// Функція, яку будемо передавати в ClickCounter
	// для виклику під час кліку
	const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
			<ClickCounter value={clicks} onUpdate={handleClick} />
			<ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
};

export default App;
