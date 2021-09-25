import style from './FoodConfirmedList.module.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const foodConfirmedList = [
  'Молоко',
  'Огурец',
  'Банан',
  'Хлеб',
  'Сыр',
  'Печенье',
  'Киви',
  'Свёкла',
  'Творог',
  'Говядина',
  'Свинина'
]

type themeFoodConfirmedListType = {
  theme: boolean
}

export function FoodConfirmedList(props: themeFoodConfirmedListType) {
  return (
    <div className={style.scrollBlock}>
      {foodConfirmedList.map((f) => {
        return (
          <div className={props.theme ? style.title : style.titleDark}>
            {f}
            <DehazeIcon className={props.theme ? style.dehazeIcon : style.dehazeIconDark}/>
            <RemoveCircleOutlineIcon className={style.removeIcon}/>
          </div>
        )
      })}
    </div>
  )
}