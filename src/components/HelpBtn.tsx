import { Modal } from 'antd'
import { useState } from 'react'
import { ReactComponent as ToolTipIcon } from '../assets/img/tooltip-icon.svg'

const HelpBtn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className="tooltip">
      <button className="tooltip__btn" onClick={() => setIsModalVisible(true)}>
        <ToolTipIcon />
      </button>
      <Modal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        closable={false}
        footer={null}
      >
        <p>
          В приложении есть форма логина. После ввода данных осуществляется
          переход на главную страницу, где есть календарь, кнопка, чтобы
          добавить событие на какую-либо дату, навигационная панель, на которой
          отображается имя пользователя и кнопка для выхода.
        </p>
        <p>
          На главной странице, при нажатии на кнопку "Add an event", всплывает
          модальное окно, где нужно ввести название события, выбрать дату и
          гостя.
        </p>
        <p>
          Гость, которого выбрали, после того, как заходит в приложение, должен
          видеть то событие, которое для него было добавлено.
        </p>
        <p>
          Все события отображаются в календаре и на одну дату их может быть
          несколько.
        </p>

        <b>Данные для входа:</b>

        <p>
          <i className="i">username: Vanya</i>
          <i className="i">password: 123</i>
        </p>
        <p>
          <i className="i">username: Markel</i>
          <i className="i">password: 123</i>
        </p>
        <p>
          <i className="i">username: Masha</i>
          <i className="i">password: 123</i>
        </p>
      </Modal>
    </div>
  )
}

export default HelpBtn
