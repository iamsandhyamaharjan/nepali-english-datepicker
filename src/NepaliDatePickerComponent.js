import React from 'react';

import React from 'react'
import { NepaliDate, EnglishDate } from 'nepali-date-react';
import { Datepicker } from 'nepali-date-react/dist/Datepicker';


export default function Mycomponent() {
    let nepalidate = NepaliDate();
    let englishdate = EnglishDate();
    console.log(nepalidate,englishdate);

    return (
        <div>
        <Datepicker/>
        </div>
    )
}