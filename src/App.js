import { useEffect, useState } from "react";
import axios from 'axios';

import { Header } from "./stories/Header";
import { Form } from './stories/Form';
import { Table } from './stories/Table'

function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vendorChoice, setVendorChoice] = useState('');
  const [displayData, setDisplayData] = useState([]);

  // API Call
  useEffect(() => {
    const apiUrl = "http://api.interview.staging.foodieorders.com/v3/orders/search";
    axios.post(apiUrl, {}).then((res) => {
      // formatting 
      res.data.data.map((el) => {
        // total: num -> str
        if (el.total === 0) {
          el.total = null;
        } else {
          el.total = '$' + el.total.toFixed(2);
        }

        // date: YYYY-MM-DD -> Mth. DD, YYYY
        if (el.deliveryDay === '') {
          el.deliveryDay = null;
        } else {
          el.deliveryDay = formatDate(el);
        }

        // adding classNames to element obj for background color
        if (el.orderBuyerStatus === 'Paid') {
          el.background = 'paid';
        } else if (el.orderBuyerStatus === 'Delivered') {
          el.background = 'delivered'
        } else if (el.orderBuyerStatus === 'In Shopping Cart') {
          el.background = 'cart'
        }

        // formatting vendor names (Whole River and Palette didn't render)
        el.vendorName = el.vendorName.trim();
      });

      setApiData(res.data.data);
      setDisplayData(res.data.data);
      setLoading(false);
    })
  }, []);

  // takes value of form select on change, stores to vendorChoice state
  const handleChange = (e) => {
    setVendorChoice(e.target.value);
  }

  // handles displayData state to be used by Table component
  const filterVendors = (val) => {
    if (val === "all") {
      setDisplayData(apiData)
    } else {
      const filtered = apiData.filter((entry) => {
        return val === entry.vendorName;
      })
      setDisplayData(filtered);
    }
  }

  const reset = (e) => {
    e.preventDefault();
    const element = document.getElementById('formVendorList');
    element.value = 'all';
    setVendorChoice(element.value);
    setDisplayData(apiData);
  }

  const formatDate = (el) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(el.deliveryDay)
    const formattedStr = months[date.getMonth()] + '. ' + date.getDate() + ', ' + date.getFullYear();
    return formattedStr;
  }



  return (
    <div className="App">
      <Header />
      <Form entries={apiData} handleChange={handleChange} filterVendors={filterVendors} reset={reset} />
      {
        loading ?
          <p>Loading...</p> :
          <Table displayData={displayData} vendorChoice={vendorChoice} />
      }
    </div>
  );
}

export default App;