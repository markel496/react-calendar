import { FC, useState } from 'react'
import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { IUser } from '../models/IUser'
import { rules } from '../utils/rules'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment'
import { useTypedSelector } from '../hooks/useTypedSelector'

//В данном случае я не получаю гостей из состояния, а принимаю пропсом для того, чтобы эту форму мб переиспользовать, если, например, в другом месте приложения был бы другой список пользователей.
interface EventFormProps {
  guests: IUser[]
  submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const { user } = useTypedSelector((state) => state.auth)
  const [event, setEvent] = useState<IEvent>({
    autor: '',
    guest: '',
    date: '',
    description: '',
  })

  const selectDate = (date: Moment | null, dateString: string) => {
    setEvent({ ...event, date: dateString })
    return dateString
  }

  const submitForm = () => {
    submit({ ...event, autor: user.username })
  }

  return (
    <Form onFinish={submitForm} labelCol={{ span: 5 }}>
      <Form.Item
        label="Description"
        name="descr"
        rules={[rules.required(), rules.max()]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[rules.required(), rules.isDateAfter()]}
      >
        <DatePicker format="DD.MM.YYYY" onChange={selectDate} />
      </Form.Item>
      <Form.Item label="Guest" name="guest" rules={[rules.required()]}>
        <Select
          placeholder="Select a guest"
          style={{ width: 140 }}
          onChange={(guest: string) => setEvent({ ...event, guest })}
        >
          {guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item style={{ marginBottom: '0px' }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm
