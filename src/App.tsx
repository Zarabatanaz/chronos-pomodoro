import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <> {/*REACT FRAGMENT*/}
      <Heading>
        Olá mundo 1 
        <button>
            <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        dolores quasi aliquam placeat dolor quia tenetur soluta omnis totam,
        tempora consectetur provident veniam quaerat doloremque incidunt illum,
        reiciendis voluptatibus consequatur?
      </p>
    </>
  );
}