import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

const onOk = (value) => {
  console.log('onOk: ', value);
}

const DateTimeWidget = (props) => {
  const { value, onChange } = props;
  return (
    <DatePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
  );
}

// if (process.env.NODE_ENV !== "production") {
//   DateTimeWidget.propTypes = {
//     value: PropTypes.string,
//   };
// }

export default DateTimeWidget;