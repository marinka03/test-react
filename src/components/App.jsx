// import Counter from "./Counter/Counter";
// import Dropdown from "./Dropdown/Dropdown";
import ColorPicker from "./ColorPicker/ColorPicker";

const ColorPickerOptions = [
  {label: 'red', color: '#FF3030'},
  {label: 'green', color: '#98FF30'},
  {label: 'blue', color: '#30CDFF'},
  {label: 'grey', color: '#8E888D'},
  {label: 'pinck', color: '#F454B4'},
  {label: 'orange', color: '#FF9830'},
]


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // color: '#010101'
      }}
    >

      {/* <Counter initialValue={0}/> */}
      <ColorPicker options={ColorPickerOptions}/>
      {/* <Dropdown /> */}
      
    </div>
  );
};
