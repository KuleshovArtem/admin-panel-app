import { Button } from "../../components/Button/Button"

export const TableFooterBunchActions = () => {
    return(
        <div className="table__footer-bunch-actions">
            <div className="table__footer-text">Выбрано записей: 5</div>
            <div className="button__change-status">
                <Button/>
                <Button/>
            </div>
        </div>
    )
}