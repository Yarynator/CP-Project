export const Kalendar = () => {

    const dateNow = new Date(Date.now());
    const month = dateNow.getMonth();
    const date = new Date(`${month} 21, 1983 01:15:00`)

    return <>
    
    <div>
      {date.toDateString()}  
      {
          
      }
    </div>

    </>
};