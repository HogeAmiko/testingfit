import style from './FoodList.module.css';

const foodList = [
  'Молоко',
  'Огурец',
  'Банан',
  'Хлеб',
  'Сыр',
  'Печенье',
  'Киви',
  'Спаржа'
]

type themeFoodListType = {
  theme: boolean
}

export function FoodList(props: themeFoodListType) {
  return (
    <div className={style.scrollBlock}>
      {foodList.map((f) => {
        return (
          <div className={props.theme ? style.foodTitle : style.foodTitleDark}>{f}</div>
        )
      })}
    </div>
  )
}
