

import React,{ useState} from "react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { AiFillCloseCircle } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NepaliDateConverter from 'nepali-date-converter';
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";

function CustomDatePicker(props) {
  const [date,setDate] = useState("");
  const [date1, setDate1] = useState("");
  const [selectedDate, setSelectedDate] = useState();


  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
    console.log(convertToADDate(date))
    props.setValue(convertToADDate(date))
  //   console.log(convertToEnglishDate(date))
   setDate1(convertToEnglishDate(convertToADDate(date)));
  
  
  };
  const handleDateChange1 = (value) => {
    setDate1(value);
    props.setValue(englishToDevanagari(value))
    // console.log(value)
    // console.log(convertToDate(value))
    setSelectedDate(convertToDate1(convertToDate(value)))
   
  };

 
  function convertToDate1(dateString) {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date;
  }
 
  function convertToDate(bsDate) {
    const [year, month, day] = bsDate.split('-').map(Number);
    const adYear = year - 57;
    const adMonth = month+3;
    const adDay = day+15;
    const adDate = new Date(adYear, adMonth -1, adDay);
    return adDate.toISOString().split('T')[0];
  }
  function convertToEnglishDate(bsDate) {
    if (typeof bsDate !== 'string') {
      bsDate = bsDate.toString(); // or handle the error accordingly
    }
    const [year, month, day] = bsDate.split('-').map(Number);
    const adYear = year + 57;
    const adMonth = month-3;
    const adDay = day-13;
    const adDate = new Date(adYear, adMonth -1, adDay);
    return adDate.toISOString().split('T')[0];
  }
  
  function convertToADDate(bsDate) {
    const date = new Date(bsDate);
    const adYear = date.getFullYear() ;
    const adMonth = date.getMonth() + 1;
    const adDay = date.getDate()+1;
    const adDate = new Date(adYear, adMonth - 1, adDay).toISOString().split('T')[0];
    return adDate;
  }
  function englishToDevanagari(number) {
          const digits = {
            '0': '०',
            '1': '१',
            '2': '२',
            '3': '३',
            '4': '४',
            '5': '५',
            '6': '६',
            '7': '७',
            '8': '८',
            '9': '९',
            '-':'-',
          };
        
          let devanagariNumber = '';
          for (const digit of String(number)) {
            if (digit in digits) {
              devanagariNumber += digits[digit];
            } else {
              devanagariNumber += digit;
            }
          }
          return devanagariNumber;
        }
        

  // function convertToBSDate(dateString) {
  //   const adDate = new Date(dateString);
  //   const bsDate = NepaliDateConverter.AD2BS(adDate);
  //   const [year, month, day] = bsDate.split('-');
  //   const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  //   return formattedDate;
  // }
  
  function handleClose(){
props.pop(false);
  }
 
 
  
    return (
      <>
      <div style={{display:"flex"}}>
      <h1>Nepali and English Date Picker </h1> <AiFillCloseCircle onClick={handleClose}/></div>
      <div style={{padding:'50px' ,display:"flex",alignItems:"center"}}>
      <div style={{padding:"10px"}}>
        <NepaliDatePicker
        
        inputClassName="form-control"
        className=""
        value={date1}
        onChange={handleDateChange1}
        options={{ calenderLocale: "ne", valueLocale: "en" }}
      />
      </div>
        {/* <Calendar onChange={handleDate} /> */}
        <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="YYY-MM-dd" // Format for English date (day/month/year)
    />
    </div>
      </div>
      </>
    );
}

export default CustomDatePicker;