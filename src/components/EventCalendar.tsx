import { FC } from 'react'
import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment'

interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Moment) => {
    const formatDate = value.format('DD.MM.YYYY')
    const currentDayEvents = events.filter((event) => event.date === formatDate)
    return (
      <ul className="ul">
        {currentDayEvents.map((event, i) => (
          <li className="li" title={event.description} key={i}>
            {event.description}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <Calendar style={{ marginBottom: 20 }} dateCellRender={dateCellRender} />
  )
}

export default EventCalendar
