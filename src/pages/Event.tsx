import { Button, Layout, Modal, Row } from 'antd'
import { useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'

const Event = () => {
  const { guests, events } = useTypedSelector((state) => state.event)
  const { user } = useTypedSelector((state) => state.auth)
  const { fetchGuests, fetchEvents, createEvent } = useActions()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const addNewEvent = (event: IEvent) => {
    createEvent(event)
    setIsModalVisible(false)
  }

  //Подгружаю список пользователей при первом рендере
  useEffect(() => {
    fetchEvents(user.username)
    fetchGuests()
  }, [])

  return (
    <Layout style={{ padding: '0 20px 20px', background: '#fff' }}>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={showModal}>Add an event</Button>
      </Row>
      <Modal
        title="Add an event"
        footer={null}
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  )
}

export default Event
