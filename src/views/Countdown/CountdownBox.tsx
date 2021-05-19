import React, { FC } from 'react'
import styled from 'styled-components'

interface CountdownBoxProps {
  left: number | string
  divideBy: number
  label: string
}

const StyleOutSideCircle = styled.circle`
  stroke: ${({ theme }) => (theme.isDark ? '#ffc862' : '#6c43bb')};
`

const StyleInSideCircle = styled.circle`
  stroke: ${({ theme }) => (theme.isDark ? '#6c43bb' : '#ffc862')};
`

const CountdownBox: FC<CountdownBoxProps> = ({ left, divideBy, label }) => (
  <Wrapper>
    <BoxCircles>
      <svg height="200" width="200">
        <StyleOutSideCircle stroke="#ed9740" strokeWidth="9" r="65" cx="74" cy="74" />
        <StyleInSideCircle
          stroke="#b46342"
          strokeDashoffset={-((+left / divideBy) * 65 * 2 * Math.PI) + 65 * 2 * Math.PI}
          strokeDasharray={65 * 2 * Math.PI}
          strokeWidth="3"
          r="65"
          cx="74"
          cy="74"
        />
      </svg>
      <BoxLeft>{left} {label}</BoxLeft>
    </BoxCircles>
    
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  svg {
    position: relative;

    circle {
      transform: rotate(-90deg);
      transform-origin: center;
      fill: transparent;
    }
  }

  &_circles {
    position: relative;
  }

  &_left {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    font-size: 20px;
  }

  &_label {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
  }
`

const BoxCircles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

  svg {
    position: relative;

    circle {
      transform: rotate(-90deg);
      transform-origin: center;
      fill: transparent;
    }
  }
`

const BoxLeft = styled.div`
white-space:pre-wrap;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: 63%;
  left: 37%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => (theme.isDark ? '#FFFFFF' : '#000000')};

  svg {
    position: relative;

    circle {
      transform: rotate(-90deg);
      transform-origin: center;
      fill: transparent;
    }
  }
`
const BoxLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => (theme.isDark ? '#FFFFFF' : '#000000')};

  svg {
    position: relative;

    circle {
      transform: rotate(-90deg);
      transform-origin: center;
      fill: transparent;
    }
  }
`

export default CountdownBox