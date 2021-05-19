import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import CountdownBox from './CountdownBox'
import daysInYear from './helpers/daysInYear'

interface CountdownProps {
  date: string
}

const Countdown: FC<CountdownProps> = ({ date }) => {
  const TranslateString = useI18n()

  let interval: ReturnType<typeof setInterval>
  const now = new Date()
  const selectedDate = new Date(date)
  const millisecondsLeft = selectedDate.getTime() - now.getTime()
  const dLeft = Math.floor(millisecondsLeft / (1000 * 60 * 60 * 24))
  const daysInSelectedYear = daysInYear(selectedDate.getFullYear())

  const yearsLeft = Math.floor(dLeft / daysInSelectedYear)
  const daysLeft = dLeft <= 0 ? 0 : dLeft - yearsLeft * daysInSelectedYear
  const hoursLeft = Math.floor((millisecondsLeft / (1000 * 60 * 60)) % 24)
  const minutesLeft = Math.floor((millisecondsLeft / (1000 * 60)) % 60)
  const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60)

  const yearsLeftOutput = yearsLeft < 10 ? `0${yearsLeft}` : yearsLeft
  const daysLeftOutput = daysLeft < 10 ? `0${daysLeft}` : daysLeft
  const hoursLeftOutput = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft
  const minutesLeftOutput = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft
  const secondsLeftOutput = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft

  const [completed, setCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    years: yearsLeft > 0 ? yearsLeftOutput : '00',
    days: daysLeft > 0 ? daysLeftOutput : '00',
    hours: hoursLeft > 0 ? hoursLeftOutput : '50',
    minutes: minutesLeft > 0 ? minutesLeftOutput : '00',
    seconds: secondsLeft > 0 ? secondsLeftOutput : '00',
  })

  useEffect(() => {
    if (completed) {
      clearInterval(interval)
    }
  }, [completed, interval])

  useEffect(() => {
    if (!completed) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        if (millisecondsLeft > 0) {
          setTimeLeft({
            years: yearsLeftOutput,
            days: daysLeftOutput,
            hours: hoursLeftOutput,
            minutes: minutesLeftOutput,
            seconds: secondsLeftOutput,
          })
        } else {
          setTimeLeft({
            years: '00',
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
          })
          setCompleted(true)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    selectedDate,
    now,
    completed,
    yearsLeft,
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
    millisecondsLeft,
    yearsLeftOutput,
    daysLeftOutput,
    hoursLeftOutput,
    minutesLeftOutput,
    secondsLeftOutput,
  ])

  return (
    <CountdownWrapper>
      <CountdownBox left={timeLeft.days} divideBy={daysInSelectedYear} label={TranslateString(10007, "Days")} />
      <CountdownBox left={timeLeft.hours} divideBy={24} label={TranslateString(10008, "Hours")} />
      <CountdownBox left={timeLeft.minutes} divideBy={60} label={TranslateString(10009, "Minutes")} />
      <CountdownBox left={timeLeft.seconds} divideBy={60} label={TranslateString(10010, "Seconds")} />
    </CountdownWrapper>
  )
}

const CountdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 40px;
`

export default Countdown