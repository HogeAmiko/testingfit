import React, { ChangeEvent, useState } from 'react';

import { Slider } from '../Slider/Slider';
import { FoodList } from '../FoodList/FoodList';
import { FoodConfirmedList } from '../FoodConfirmedList/FoodConfirmedList';
import { Chart } from '../Chart/Chart';
import { FoodCalories } from '../FoodCalories/FoodCalories';

import style from './Calculator.module.css';
// @ts-ignore
import SearchIcon from '@mui/icons-material/Search';

import coverBtnUp from '../../assets/btnCoverUp.png';
import coverBtnDarkUp from '../../assets/btnCoverDarkUp.png';
import coverBtnDown from '../../assets/btnCoverDown.png';
import coverBtnDarkDown from '../../assets/btnCoverDarkDown.png';
import howToUseCover from '../../assets/howUseCover.png';
import howToUseCoverDark from '../../assets/howUseCoverDark.png';
import foodCover from '../../assets/foodCover.png';
import foodCoverDark from '../../assets/foodCoverDark.png';

type themeCalculatorType = {
  theme: boolean
};

export function Calculator(props: themeCalculatorType) {

  const purposeContent = [
    'Снизить вес',
    'Поддержать форму'
  ];

  const typeOfFoot = [
    'Кето',
    'Сбалансированный'
  ];

  const activeLevel = [
    'Лёгкая',
    'Средняя',
    'Тяжёлая',
  ];

  const [growth, setGrowth] = useState<string>('176');
  const [errorGrowth, setErrorGrowth] = useState<string>('');
  const [weight, setWeight] = useState<string>('73');
  const [errorWeight, setErrorWeight] = useState<string>('');
  const [age, setAge] = useState<string>('26');
  const [errorAge, setErrorAge] = useState<string>('');
  const [errorSearch, setErrorSearch] = useState<string>('');

  const lightTheme = props.theme;

  const onChangeGrowthHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorGrowth('')
    setGrowth(e.currentTarget.value)
  };

  const onBlurGrowth = () => {
    if (growth === '') {
      setErrorGrowth('Укажите рост')
    }
  };

  const onChangeWeightHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorWeight('')
    setWeight(e.currentTarget.value)
  };

  const onBlurWeight = () => {
    if (weight === '') {
      setErrorWeight('Укажите вес')
    }
  };

  const onChangeAgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAge('')
    setAge(e.currentTarget.value)
  };

  const onBlurAge = () => {
    if (age === '') {
      setErrorAge('Укажите возраст')
    }
  };

  const onBlurSearch = () => {
    if (errorSearch === '') {
      setErrorSearch('Не найдено')
    }
  };

  return (
    <div className={style.calculatorBlock}>
      <div className={style.calculator}>
        <div className={style.leftBlock}>
          <div className={lightTheme ? style.mainTitle : style.mainTitleDark}>
            <h1 className={style.title}>Расчет рациона питания</h1>
          </div>
          <div className={lightTheme ? style.howToUse : style.howToUseDark}>
            <img src={lightTheme ? howToUseCover : howToUseCoverDark} className={style.howToUseCover}/>
            <div className={style.howToUseBlock}>
              <h1>Как пользоваться</h1>
              <div className={style.howToUseText}>
                <p>Самостоятельное составление индивидуального плана питания.</p>
                Калькулятор позволит рассчитать и проанализировать ваш рацион питания.
                Как пользоваться калькулятором:
                <li>Заполните данные и себе.</li>
                <li>Составте топ ваших любимых продуктов.</li>
                <li>Получите расчет рациона питания.</li>
              </div>
            </div>
          </div>
          <div className={lightTheme ? style.topFood : style.topFoodDark}>
            <hr className={lightTheme ? style.topFoodHr : style.topFoodHrDark}/>
            <div className={style.howToUseBlock}>
              <h1>Топ продуктов</h1>
              <div className={style.howToUseText}>
                <p>Выберите ваши любимые продукты и распределите их от 1 до 10</p>
              </div>
              <input onBlur={onBlurSearch} placeholder={'Поиск'} className={lightTheme ? style.searchInput : style.searchInputDark}/>
              <SearchIcon className={style.searchIcon}/>
              {errorSearch ? <div className={style.errorSearch}>{errorSearch}</div> : null}
            </div>
          </div>
          <div className={lightTheme ? style.selectFood : style.selectFoodDark}>
            <div className={style.howToUseBlock}>
              <FoodList theme={lightTheme}/>
            </div>
          </div>
        </div>
        <div className={style.rightBlock}>
          <div className={lightTheme ? style.mainCalcBlock : style.mainCalcBlockDark}>
            <div className={style.calcBlock}>
              <div className={style.growthAndWeight}>
                <div className={style.growth}>
                  <span>Рост</span>
                  <input className={lightTheme ? style.growthInput : style.growthInputDark} value={growth} onChange={onChangeGrowthHandler} onBlur={onBlurGrowth}/>
                  {errorGrowth ? <div className={style.errorMessage}>{errorGrowth}</div> : null}
                </div>
                <div className={style.weight}>
                  <span>Вес</span>
                  <input className={lightTheme ? style.weightInput : style.weightInputDark} value={weight} onChange={onChangeWeightHandler} onBlur={onBlurWeight}/>
                  {errorWeight ? <div className={style.errorMessage}>{errorWeight}</div> : null}
                </div>
              </div>
              <div className={style.ageAndSex}>
                <div className={style.age}>
                  <span>Возраст</span>
                  <input className={lightTheme ? style.ageInput : style.ageInputDark} value={age} onChange={onChangeAgeHandler} onBlur={onBlurAge}/>
                  {errorAge ? <div className={style.errorMessage}>{errorAge}</div> : null}
                </div>
                <div className={style.weight}>
                  <span>Пол</span>
                  <select className={lightTheme ? style.selectSex : style.selectSexDark}>
                    <option>Мужской</option>
                    <option>Женский</option>
                  </select>
                </div>
              </div>
              <div className={style.yourPurpose}>
                <span>Ваша цель</span>
                <Slider content={purposeContent} theme={lightTheme}/>
              </div>
              <div className={style.yourPurpose}>
                <span>Тип питания</span>
                <Slider content={typeOfFoot} theme={lightTheme}/>
              </div>
              <div className={style.yourPurpose}>
                <span>Уровень активности</span>
                <Slider content={activeLevel} theme={lightTheme}/>
              </div>
              <hr className={lightTheme ? style.hrRight : style.hrRightDark}/>
            </div>

          </div>
          <div className={lightTheme ? style.foodConfirmed : style.foodConfirmedDark}>
            <img src={lightTheme ? foodCover : foodCoverDark} className={style.foodConfirmedCover}/>
            <div className={style.foodConfirmedBlock}>
              <FoodConfirmedList theme={lightTheme}/>
            </div>
          </div>
        </div>
      </div>
      <img src={lightTheme ? coverBtnUp : coverBtnDarkUp} className={style.imgBtnRight}/>
      <img src={lightTheme ? coverBtnDown : coverBtnDarkDown} className={style.imgBtnLeft}/>
      <button className={lightTheme ? style.btnComplete : style.btnCompleteDark}>РАССЧИТАТЬ</button>
      <div className={style.finalBlock}>
        <div className={style.leftBlock}>
          <div className={lightTheme ? style.dietFinal : style.dietFinalDark}>
            <img src={lightTheme ? howToUseCover : howToUseCoverDark} className={style.dietFinalCover}/>
            <hr className={lightTheme ? style.dietFinalHr : style.dietFinalHrDark}/>
            <div className={style.dietFinalDataBlock}>
              <h1>Ваш рацион</h1>
              <div className={style.dietResult}>
                <div className={style.caloriesCompositions}>
                  <div className={lightTheme ? style.caloriesFinal : style.caloriesFinalDark}>
                    <h1>Калории</h1>
                    <p>1852</p>
                  </div>
                  <div className={lightTheme ? style.caloriesFinal : style.caloriesFinalDark}>
                    <h1>Белки</h1>
                    <p>131.3</p>
                  </div>
                </div>
                <div className={style.caloriesCompositions}>
                  <div className={lightTheme ? style.caloriesFinal : style.caloriesFinalDark}>
                    <h1>Жиры</h1>
                    <p>65.1</p>
                  </div>
                  <div className={lightTheme ? style.caloriesFinal : style.caloriesFinalDark}>
                    <h1>Углеводы</h1>
                    <p>179.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={lightTheme ? style.finalChart : style.finalChartDark}>
            <div className={style.chartBlock}>
                <Chart/>
                <span className={style.protein}>Белки</span>
                <span className={style.fat}>Жиры</span>
                <span className={style.carbonates}>Углеводы</span>
            </div>
          </div>
        </div>
        <div className={style.rightBlock}>
          <div className={lightTheme ? style.dietFinalData : style.dietFinalDataDark}>
            <hr className={lightTheme ? style.dietFinalHr : style.dietFinalHrDark}/>
            <div className={style.dietFinalDataBlock}>
              <h1>Калорийность</h1>
              <div className={style.dietResult}>
                <FoodCalories theme={lightTheme}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
