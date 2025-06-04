import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// component isimlerinde ilk harf büyük olsun
const UUIDGenerator = () => {
	// Arrow Function ile Function Component tanımlama işlemi
	const [uuid, setUuid] = useState('');

	const generate = () => {
		const id = uuidv4();
		console.log('uuid', id);

		setUuid(id);
	};

	return (
		<>
			<p>UUID: {uuid}</p>
			<button onClick={generate}>Generate</button>
		</>
	);
};
export default UUIDGenerator;

// -> user actions -> setState -> updateDom -> render -> show current state
// REACT Render Phase
