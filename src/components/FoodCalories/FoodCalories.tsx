import style from './FoodCalories.module.css';

const foodConfirmedList = [
  {food: 'Молоко', calories: '22ккал'},
  {food: 'Огурец', calories: '22ккал'},
  {food: 'Банан', calories: '88ккал'},
  {food: 'Хлеб', calories: '22ккал'},
  {food: 'Сыр', calories: '222ккал'},
  {food: 'Печенье', calories: '212ккал'},
  {food: 'Киви', calories: '22ккал'},
  {food: 'Свёкла', calories: '22ккал'},
  {food: 'Творог', calories: '22ккал'},
  {food: 'Говядина', calories: '132ккал'},
  {food: 'Свинина', calories: '167ккал'}
]

type themeFoodCaloriesType = {
  theme: boolean
}

export function FoodCalories(props: themeFoodCaloriesType) {
  return (
    <div className={props.theme ? style.scrollBlock : style.scrollBlockDark}>
      {foodConfirmedList.map((f) => {
        return (
          <div className={props.theme ? style.title : style.titleDark}>
            <div className={style.spanBlock}>
              <span>{f.food}</span>
              <div className={style.caloriesCalumn}>
                <span>{f.calories}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}