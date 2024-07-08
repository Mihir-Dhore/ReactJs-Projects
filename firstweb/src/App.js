import logo from "./logo.svg"; //To import external image
import "./App.css"; //To import external CSS file
import Header from "./Header";
import { Footer } from "./Footer";
import { blog } from "./Data/blog";
import { tabs } from "./Data/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faWheatAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FAQs } from "./Data/FAQs";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { ToDoList } from "./ToDoList";

function App() {
  let name = "Mihir Dhore!..";
  let arr = [1, 2, 3, 4, 5];
  let obj = {
    name: "Mihir Dhore",
    age: 21,
    address: "Pune",
  };
  let status = true;

  let propsObject = {
    email: "mihirrrdhore@gmail.com",
    phone: "1234567890",
  };

  // useState for show Password
  let [showPassword, setShowPassword] = useState(false);
  // useState for responsive menu
  let [menu, setMenu] = useState(false);

  {
    /* Create Arrow function for showNotification */
  }
  let showNotification = (type, title, message) => {
    NotificationManager.warning("Warning message", "Close after 3000ms", 3000);
  };

  //useState for FAQs
  let [showAns, setShowAns] = useState(FAQs[0].id);
  //useState for active button
  let [activeTab, setActiveTab] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0]);
  // arrow functioon for changeData
  let changeData = (index) => {
    setActiveTab(index);
    setActiveContent(tabs[index]);
  };

  return (
    <div>
      {/* To do List - start */}
      <ToDoList />
      {/* To do List - end */}

      {/* Tabbing System - Start */}
      <div>
        <div className="tabOuter">
          <h1 style={{ textAlign: "left" }}>Tabbing System</h1>
          <ul>
            {tabs.map((tabItems, index) => {
              return (
                <li>
                  <button
                    onClick={() => changeData(index)}
                    className={activeTab == index ? "activeButton" : ""}
                  >
                    {tabItems.title}
                  </button>
                </li>
              );
            })}
          </ul>
          {<p>{activeContent.description}</p>}
        </div>
      </div>
      {/* Tabbing System - End */}

      {/* NOTIFICATION COMPONENT -Start */}
      <NotificationContainer />
      <button onClick={showNotification}>Show Notification</button>
      {/* NOTIFICATION COMPONENT -Start */}

      {/* FAQs - Start */}
      <div>
        {FAQs.map((item) => {
          return (
            <div className="faqItems">
              <h2 onClick={() => setShowAns(item.id)}>{item.title}</h2>
              <p className={showAns == item.id ? "activeAns" : ""}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      {/* FAQs - End */}

      <div className="flex justify-end">
        <button onClick={() => setMenu(!menu)}>
          {menu ? <span>&times;</span> : <span>&#9776;</span>}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-yellow-400 transform transition-transform-1000 ease-in-out ${
          menu ? "visible" : "invisible"
        }`}
      >
        <h3>Responsive Menu:</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Show And Hide Password - Start */}
      <div className="py-3 px-64 space-x-3">
        <>Show Hide Password</> <br></br>
        <input
          placeholder="Enter Password"
          type={showPassword ? "text" : "password"}
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {/* Show And Hide Password - End*/}

      {/* Show Modal - Start */}

      <div></div>
      {/* Show Modal - End */}
      <div className="main">
        <h1>Welcome to Web-App</h1>
        <FontAwesomeIcon
          icon={faWheatAlt}
          className="text-danger"
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
        <i>{name}</i>
        {/* Access Array */}
        <div>{arr.map((item) => item)}</div>
        {/* Access Object */}
        <div>Name: {obj.name}</div>
        <div>Age: {obj.age}</div>
        <div>Address: {obj.address}</div>
        {/* Add ternary on status */}
        {/* Add style to below ternary */}
        <h1 style={{ backgroundColor: "yellow" }}>
          {status ? "Welcome" : "Sorry"}
        </h1>
        <Header propsObject={propsObject} headerName="Ka re poraa..!"></Header>
        {/* here used bootstrap class -- text-danger*/}
        <h1 className="text-danger">Hello...</h1> <Footer></Footer>
        <div className="row">
          {/* <Boxes></Boxes>
        <Boxes></Boxes>
        <Boxes></Boxes>
        <Boxes></Boxes>
        <Boxes></Boxes>
        <Boxes></Boxes>
        <Boxes></Boxes>
        <Boxes></Boxes> */}
        </div>
        {/* Apply map on blog to get title and description */}
        {blog.map((item, value) => {
          return (
            <DynamicProjectItems
              productItems={item}
              key={value}
            ></DynamicProjectItems>
          );
        })}
      </div>
    </div>
  );
}

function Boxes() {
  return <div className="box"></div>;
}

function eventHandling() {
  // alert("Welcome Mihir!");
  // console.log(n);
}
function Addition(a, b) {
  alert(a + b);
}

function DynamicProjectItems({ productItems }) {
  return (
    <div className="box">
      <div>
        <h3 className="text-[25px] text-red-600 font-bold">
          {productItems.title}
        </h3>
        <p>{productItems.description}</p>
        <button
          onClick={() => Addition(100, 20)}
          className="bg-blue-500 p-2 text-white rounded-sm"
        >
          Add
        </button>

        <button
          onClick={eventHandling}
          className="bg-blue-500 p-2 text-white rounded-sm ml-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
