import React from "react";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import { CSVLink } from "react-csv";

const renderHeader = () => {
  const headerElement = ["Subscribers", "action"];
  return headerElement.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

const SubscriberTable = ({ subscribers, removeSubscriber }) => {
  const emailList = subscribers.map((sub) => [sub.email]);
  return (
    <>
      <CSVLink data={emailList} className="btn btn-light my-3">
        Export All
      </CSVLink>
      <Table id="employee" className="mb-4">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
          {subscribers.map(({ _id, email }) => {
            return (
              <tr key={_id}>
                <td>{email}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removeSubscriber(_id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

SubscriberTable.propTypes = {
  subscribers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
  removeSubscriber: PropTypes.func.isRequired,
};

export default SubscriberTable;
