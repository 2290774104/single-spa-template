import './index.css';
import { Button, Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  const toNextPage = () => {
    navigate('/nextPage');
  };

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <>
      <h1>
        这里是React应用 <Button onClick={toNextPage}>前往下一个页面</Button>
      </h1>
      <div>
        <Calendar onPanelChange={onPanelChange} />;
      </div>
    </>
  );
}

export default Root;
