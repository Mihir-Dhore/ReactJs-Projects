import React, { useState } from "react";
import "../userEnquiryForm/userEnquiryForm.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function UserEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    index: "",
  });

  let getValue = (event) => {
    let oldData = { ...formData };
    console.log("oldValue : ", oldData);
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    console.log("oldValuess : ", oldData);

    setFormData(oldData);
  };

  let [userData, setUserData] = useState([]);

  let handleSave = (event) => {
    event.preventDefault();

    let currentUserFormData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    if (formData.index === "") {
      // Add new entry
      let isDuplicate = userData.filter(
        (v) => v.email === formData.email || v.phone === formData.phone
      );

      if (isDuplicate.length > 0) {
        toast.error("Email or Phone already exist");
      } else {
        setUserData([...userData, currentUserFormData]);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          index: "",
        });
      }
    } else {
      // Update existing entry
      let updatedUserData = userData.map((item, idx) => {
        if (idx === formData.index) {
          return currentUserFormData;
        }
        return item;
      });

      //To check duplicate in other records.
      let isDuplicate = userData.filter(
        (v, i) =>
          (v.email === formData.email || v.phone === formData.phone) &&
          i != formData.index
      );
      if (isDuplicate.length == 0) {
        setUserData(updatedUserData);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          index: "",
        });
      } else {
        toast.error("Email or Phone already exist");
      }
    }
  };

  let deleteUserData = (index) => {
    let dataAfterDeletingRow = userData.filter((_, i) => i !== index);
    console.log("deleteUserData : ", dataAfterDeletingRow);
    toast.success("Deleted Successfully");
    setUserData(dataAfterDeletingRow);
  };

  let editRow = (indexNumber) => {
    let dataToEdit = userData[indexNumber];
    dataToEdit.index = indexNumber;
    console.log(dataToEdit);
    setFormData(dataToEdit);
  };

  return (
    <div>
      <ToastContainer />
      <div className="main">
        <div>
          <h1>Enquiry Form</h1>
          <div className="formAndShowData">
            <div>
              {/* {userData.length} */}
              <form onSubmit={handleSave}>
                <div className="input-container">
                  <label>Name</label>
                  <input
                    onChange={getValue}
                    type="text"
                    value={formData.name}
                    name="name"
                    required
                  />
                </div>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    onChange={getValue}
                    type="email"
                    value={formData.email}
                    name="email"
                    required
                  />
                </div>
                <div className="input-container">
                  <label>Phone</label>
                  <input
                    onChange={getValue}
                    type="text"
                    value={formData.phone}
                    name="phone"
                    required
                  />
                </div>
                <div className="input-container">
                  <label>Message</label>
                  <textarea
                    onChange={getValue}
                    name="message"
                    value={formData.message}
                    required
                  ></textarea>
                </div>
                <div className="button">
                  <button>{formData.index !== "" ? "Update" : "Save"}</button>
                </div>
              </form>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length > 0 ? (
                    userData.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.message}</td>
                        <td className="tableButtons">
                          <button onClick={() => editRow(index)}>Update</button>
                          <button onClick={() => deleteUserData(index)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>No Data Found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { UserEnquiryForm };
