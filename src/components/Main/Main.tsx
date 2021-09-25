import { useState } from 'react';

import { Sidebar } from '../Sidebar/Sidebar';
import { Instruction } from '../Instruction/Instruction';
import { Calculator } from '../Calculator/Calculator';

import style from './Main.module.css';
import s from '../../style/Container.module.css';


export function Main() {

  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? style.main : style.mainDark}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Sidebar theme={theme} setTheme={setTheme}/>
          <div>
            <Instruction theme={theme}/>
            <Calculator theme={theme}/>
          </div>
        </div>
      </div>
    </div>
  )
}