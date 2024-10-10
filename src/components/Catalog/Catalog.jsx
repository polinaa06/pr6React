import s from './Catalog.module.css'
import { Item } from '../Item/Item'
import { tovars } from '../../data/data'

export function Catalog() {
    return(
        <div className={s.catalog}>
            <div className={s.content}>
                <h2>Каталог товаров</h2>

                <div className={s.categories}>
                    <p>Категории:</p>
                    <div className={s.categories_btn}>
                        <button className={s.btn_active}>Все товары</button>
                        <button className={s.btn}>Шины/колеса</button>
                        <button className={s.btn}>Масла</button>
                        <button className={s.btn}>Ароматизаторы</button>
                    </div>
                </div>

                <div className={s.items}>
                    {
                        tovars.map((tovar)=>{
                            return(
                                <Item id={tovar.id} image={tovar.image} name={tovar.name} price={tovar.price} />
                            )
                        })
                    }
                </div>

                <div className={s.catalog_button}>
                    <button className={s.catalog_btn}>Загрузить еще товары</button>
                </div>
            </div>
        </div>
    )
}