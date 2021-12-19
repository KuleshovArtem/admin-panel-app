import {actions, selectors} from '..//..//data';
import { connect } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { Icons } from '../../components/Icons';
import './Form.css'

export function FormPure (props) {
  const {
      orderId,
      orderDate,
      orderStatus,
      orderPosition,
      orderSum,
      fullNameUser,
      saveClick,
      closeClick,
      nameChange,
      statusChange,
  } = props

   

  return(
      <form className="form" style={{right:orderId ? 0 : '-30rem'}}>
            <div className='formHeader'>
                <div className='formHeader__text'> {`Заявка #${orderId}`} </div>
                <button className='formHeader__button' type='button' onClick={closeClick}>
                  {Icons['iconXlarge']}
                </button>
            </div>
            <div className='formBody'>
              <label className='formBody__items' >
                Дата и время заказа
                <input 
                  className='formBody__dateArea'
                  value={orderDate}
                  readOnly
                  />
              </label>
              <label className='formBody__items'>
                  ФИО покупателя 
                  <input
                  className='formBody__dateArea' 
                  value={fullNameUser}
                  onChange={(event) => nameChange(event.currentTarget.value)}
                  />
              </label>
              <div className='formBody__compositionOrder'>
                состав заказа
              </div>
              <label className='formBody__items'>
                  Итоговая сумма:
                  <input
                      className='formBody__dateArea'
                      value={orderSum}
                      readOnly
                      // onChange={(event) => ssChange(event.currentTarget.value)}
                  />
              </label>
              <label className='formBody__items'>
                  Уровень лояльности
                  <input
                  className='formBody__dateArea' 
                  value='Новичок'
                  readOnly
                  />
              </label>
              <label className='formBody__items'>
                  Статус заказ
                  <input 
                  className='formBody__dateArea'
                  value={orderStatus}
                  onChange={(event)=> statusChange(event.currentTarget(event))}
                  />
              </label>
              <label className='formBody__items'>
                  Код подтверждения
                  <input 
                  className='formBody__dateArea'
                  value='000'
                  readOnly
                  />
              </label>
            </div>
            <div className='formFooter'>
                <div className='formFooter__text'>Ошибка или индикатор загрузки </div>
                <button
                className='formFooter__items'
                type='button' 
                onClick={() => saveClick({orderId,orderDate,orderStatus,orderPosition,orderSum,fullNameUser,})}
                >
                  Сохранить
                </button>
              </div> 
      </form>
  )
}

const mapStateToProps = (state) => {
  return {
    orderId: selectors.getOrderId(state),
    orderDate: selectors.getOrderDate(state),
    orderStatus: selectors.getOrderStatus(state),
    // orderPosition: selectors.getOrderPosition(state),
    orderSum: selectors.getOrderSum(state),
    fullNameUser: selectors.getFullNameUser(state),
      // isOpenForm: selectors.getUsersIsOpenEditForm(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      saveClick: (updetedOrder) => dispatch(actions.OrderListEditFormSeveClickAction(updetedOrder)),
      closeClick: () => dispatch(actions.OrderListEditFormCloseClickAction()),
      nameChange: (name) => dispatch(actions.OrderListEditFormNameChangeAction(name)),
      statusChange: (status) => dispatch(actions.OrderListEditFormStatusChangeAction(status)),
    }
  }

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormPure);

