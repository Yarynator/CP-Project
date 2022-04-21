import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Week = styled.div`
`;

const DayContainer = styled.div`
    position: relative;
    width: calc(100% / 7);
    display: inline-block;
    margin: 0;
    box-sizing: border-box;
    text-align: center;
    
`;

const Day = styled.div`
  padding: .5rem;
  height: 44px;
  background-color: white;
  cursor: pointer;
`;

const Selected = styled.div`
  background-color: #EA614A;
  height: 44px;
  padding: .5rem;
  cursor: pointer;
`;

const Today = styled.div`
    background-color: #CDD3D6;
    padding: .5rem;
    height: 44px;
    cursor: pointer;
`;

const Before = styled.div`
    background-color: white;
    color: #c1c1c1;
    padding: .5rem;
    height: 44px;
    cursor: pointer;
`;

const Header = styled.div`
    padding: .5rem;
    background-color: #BDD4DF;
    display: flex;
    justify-content: space-around;
`;

const DayNames = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-bottom: solid 1px black;
    height: 44px;
`;

const Arrow = styled.div`
    cursor: pointer;
`;

//background-color: #EA614A; - selected
//background-color: #CDD3D6; - today
//color: #c1c1c1; background-color: white; - before
//border: solid 1px #c3c3c3; - border

export const Kalendar = () => {
    const [value, setValue] = useState(moment());
    const [calendar, setCalendar] = useState([] as Array<Array<moment.Moment>>);

    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");

    useEffect(() => {
        const day = startDay.clone().subtract(1, "day");
        const a : any = [];
        
        while(day.isBefore(endDay, "day"))
        {
            a.push(
              Array(7).fill(0).map(() => day.add(1, "day").clone())
            );
        }
        setCalendar(a);
    }, [value])

    const currentMonthName = () => {
        return value.format("MMMM")
    }

    const currentYear = () => {
        return value.format("YYYY");
    }

    const prevMonth = () => {
        return value.clone().subtract(1, "month");
    }

    const nextMonth = () => {
      return value.clone().add(1, "month");
    }

    const thisMonth = () => {
        return value.isSame(new Date(), "month");
    }

    return <div>
        <Header>
            <Arrow onClick={() => !thisMonth() && setValue(prevMonth())}>{!thisMonth() ? String.fromCharCode(171) : null}</Arrow>
            <div>
                {currentMonthName()} {currentYear()}
            </div>
            <Arrow onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</Arrow>
        </Header>
        <div>
            <DayNames>
              {["Ne", "Po", "Út", "St", "Čt", "Pá", "So"].map((d) => (
                  <div>{d}</div>
              ))}
            </DayNames>
            {calendar.map(week => <Week>
            {
                week.map(day => (<DayContainer onClick={() => setValue(day)}>
                    {value.isSame(day, "day") ? <Selected>{day.format("D").toString()}</Selected> : day.isSame(new Date(), "day") ? <Today>{day.format("D").toString()}</Today> : day.isBefore(new Date(), "day") ? <Before>{day.format("D").toString()}</Before> : <Day>{day.format("D").toString()}</Day>}
                </DayContainer>))
            }
            </Week>)}
        </div>
      </div>
};