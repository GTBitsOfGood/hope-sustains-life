import React from "react";
import AdminNavBar from "../../components/AdminNavBar";
import { Table, Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import urls from "../../../utils/urls";

const subscribers = () => {
  const subscribersList = [
    ["fakeemail@gmail.com"],
    ["fakeemail2@gmail.com"],
    ["anotheremail@gmail.com"],
  ];
  const renderHeader = () => {
    let headerElement = ["email", "delete"];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = (subscribersList) => {
    console.log(subscribersList);
    return subscribersList.map((email) => {
      return (
        <tr key={email}>
          <td>{email}</td>
          <td>
            <Button className="button">Delete</Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <AdminNavBar loggedIn={true} currentRoute={urls.pages.adminSubscribers} />
      <h1>Subscribers</h1>
      <CSVLink data={subscribersList}>Export All</CSVLink>
      <Table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody(subscribersList)}</tbody>
      </Table>
    </>
  );
};

export default subscribers;
