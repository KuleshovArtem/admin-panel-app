import {actions, selectors} from '..//..//data';
import { connect } from 'react-redux';

import './Form.css'


export function FormPure (props) {
  const {
      orderId,
      orderDate,
      orderStatus,
      // orderPosition,
      orderSum,
      fullNameUser,
      saveClick,
      closeClick,
  } = props

  

  return(
      <form className='form'>
            <div className='formHeader'>
              <input value={orderId}
              /> 
              <div>
                <button type='button' onClick={closeClick}>X</button>
              </div>
            </div>
            <div className='formBody'>
              <label className='formBody__items' >
                Дата и время заказа
                <input
                  value={orderDate}
                  />
              </label>
              <label className='formBody__items'>
                  ФИО покупателя 
                  <input 
                  value={fullNameUser}
                  // onChange={(event) => nameChange(event.currentTarget.value)}
                  />
              </label>
              <div className='formBody__compositionOrder'>
                состав заказа
              </div>
              <label className='formBody__items'>
                  Итоговая сумма:
                  <input
                      value={orderSum}

                      // onChange={(event) => ssChange(event.currentTarget.value)}
                  />
              </label>
              <label className='formBody__items'>
                  Уровень лояльности
                  <input value='Новичок'/>
              </label>
              <label className='formBody__items'>
                  Статус заказ
                  <input value={orderStatus}/>
              </label>
              <div>
                <button type='button' onClick={saveClick}>Сохранить</button>
              </div>
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
      saveClick: (updatedUser) => dispatch(actions.OrderListEditFormSeveClickAction(updatedUser)),
      closeClick: () => dispatch(actions.OrderListEditFormCloseClickAction()),
    }
  }

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormPure);
