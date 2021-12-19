import { Button } from "../../components/Button/Button"
import './TableFooterBunchActions.css'

export const TableFooterBunchActions = () => {
    return(
        <div className="table__footer-bunch-actions">
            <div className="table__footer-text">Выбрано записей: 5</div>
            <div className="button__change-status">
                <Button
                className='button_small_basic'
                icon='iconPencil'
                text='Изменить статус'/>
                <Button
                className='button_small_warning'
                icon='iconBin'
                text='Удалить'
                />
            </div>
        </div>
    )
}