//-------------------------------------------------------Comparing Two JSON Objects-----------------------------------------
const oldJson = {
  id: "4a81bf6c-f3b5-40a8-8c07-f3e7b7f9acc7",
  // ... other properties
};
const newJson = {
  id: "4a81bf6c-f3b5-40a8-8c07-f3e7b7f9acc7",
  // ... updated properties
};
compareAndHighlight(oldJson, newJson);
console.log(newJson);

// This function compares two JSON objects and highlights the differences
function compareAndHighlight(original, updated) {
  // Loop through each key in the original object
  for (const key in original) {
    if (original.hasOwnProperty(key)) {
      // Check if the values are objects themselves
      if (typeof original[key] === 'object' && typeof updated[key] === 'object') {
        // Recursively call compareAndHighlight for nested objects
        compareAndHighlight(original[key], updated[key]);
      } else if (original[key] !== updated[key]) {
        // If the values are different, update the value with <b> tags
        updated[key] = `<b>${updated[key]}</b>`;
      }
    }
  }

  // Check for new keys in the updated object
  for (const key in updated) {
    if (updated.hasOwnProperty(key) && !original.hasOwnProperty(key)) {
      // If a key is only in the updated object, highlight the addition with <b> tags
      updated[key] = `<b>${updated[key]}</b>`;
    }
  }
  // No need to return anything as the 'updated' object is modified in place
  return updated;
}

//-------------------------------------------------------Long UTC timstamp to IST time -----------------------------------
// format pattern:  dd/MM/yyyy HH:MM:SS AM/PM
//  i/p          :  1698481284000               (UTC)
//  o/p          :  28/10/2023 01:51:24 PM      (dd/MM/YYY)

Convert the UTC timestamp of MySQl to IST
export const formatTimestamp = (timestamp) => {             // 1698481284000
    const dateInUTC = new Date(timestamp);
    const offsetIST = 5.5 * 60 * 60 * 1000;                 // Offset for Indian Standard Time (IST) in milliseconds
    const dateInIST = new Date(dateInUTC.getTime() + offsetIST);
    // Format the date in IST
    const day = String(dateInIST.getDate()).padStart(2, '0');
    const month = String(dateInIST.getMonth() + 1).padStart(2, '0');
    const year = dateInIST.getFullYear();
    const hours = String(dateInIST.getHours()).padStart(2, '0');
    const minutes = String(dateInIST.getMinutes()).padStart(2, '0');
    const seconds = String(dateInIST.getSeconds()).padStart(2, '0');
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;                 // 28/10/2023 01:00:24 PM  (but 5:30 hrs delay need to set Asia/Kolkotta timzone for IST)
};  

//=====correct (IST) with the "+05:30" offset in the UI,use moment-timezone library to handle time zone conversion.

export const formatTimestamp = (timestamp) => {           // 1698481284000
    // Convert the UTC timestamp to IST
    const dateInUTC = moment(timestamp).tz('Asia/Kolkata');      // 'Asia/Kolkata' is the timezone for IST
    const formattedDate = dateInUTC.format('DD/MM/YYYY hh:mm:ss A');
    return formattedDate;                                 // 28/10/2023 06:35:24 PM
};
//=======From BL also in server MySQL they can set timzone as below instead of setting & managing in UI as below
//MySql: setting timezone in mysql to IST instead server timezone  as below
  SET time_zone = '+05:30';

//-----------------------------------------------------------Regex--------------------------------------------------------------
var EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var EMAIL_REGEX1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
var MOBILE_NO_REGEX = /^[0-9_]{7,11}$/;

funtion testRegex(regexPattern,value){
  const regExp = regexPattern ? regexPattern : "^[a-zA-Z0-9_]*$";
  const pattern = new RegExp(regExp);
  return pattern.test(value);
}

testRegex(EMAIL_REGEX,"kranthi@.gmail.com");
testRegex(MOBILE_NO_REGEX,"8978084343");

//----------------------------------------------EVent Bus(subscribe,publish)-TO SHARE DATA-----------------------------------------------
//eventBus.js =====================>

const eventBus = {
    events: {},

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },

    publish(event, data) {
        if (this.events[event]) {
            this.events[event].forEach((callback) => callback(data));
        }
    },
};
export default eventBus;

//componentA.js ======================>
import eventBus from './eventBus';

export const ComponentA = () => {
  const handleChange = (event) => {
    const newData = event.target.value;
    eventBus.publish('dataUpdated',newData)                                 //publish
  }
  return (
  //.......
  )
}

//componentB.js ======================>
import eventBus from './eventBus';

export const ComponentB = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        const updateDataHandler = (newData) => {
            setData(newData);
        }
        eventBus.subscribe('dataUpdated', updateDataHandler);               //subscribe
        return () => {
            eventBus.unsubscribe('dataUpdated', updateDataHandler);
        };
    }, []);
  
  return (
  //.....
    {"subscribed Data: "+ data}
  )
}

//--------------------------------------Removing Undefined, null, empty value entries itself from object ---------------------------------------------------  

let customerDetails = {...}             // object entries key value pair
customerDetails = Object.fromEntries(Object.entries(customerDetails)?.filter(([key, value]) => {
    return value !== undefined && value !== 'undefined' && value !== null && value !== 'null' && value !== '';
}));

//---------------------------------------