import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { getSubscribers, deleteSubscriber } from "../../actions/Subscriber";
import AdminNavBar from "../../components/AdminNavBar";
import SubscriberTable from "./subscriberTable";
import urls from "../../../utils/urls";
import styles from "./subscriber.module.css";

const Subscribers = (props) => {
  /**
   * When we perform delete, we do not perform page refresh currently
   * So we initialize a list of subscribers from props and modify this array
   * as required which will reflect the changes while rendering
   */
  const [mainSubscribersList, setMainSubscriberList] = React.useState(
    props.subscribers
  );

  // state to keep track of user input for filtering subscribers
  const [filterText, setFilterText] = React.useState("");

  const getSubscribersBySearchFilter = () => {
    if (filterText?.trim()) {
      return mainSubscribersList.filter((x) =>
        x.email.includes(filterText.trim())
      );
    } else {
      return mainSubscribersList; // return all subscribers if no filter text
    }
  };

  // Delete the subscriber from the database and table
  const removeSubscriber = (id) => {
    deleteSubscriber(id).then(() => {
      setMainSubscriberList(mainSubscribersList.filter((x) => x._id !== id));
      toast.success("Successfully deleted the subscriber", {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
      });
    });
  };

  return (
    <>
      <AdminNavBar
        loggedIn={true}
        currentRoute={urls.pages.admin.subscribers}
      />
      <div className={styles.subscriberPageContainer}>
        <h1>Subscribers</h1>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          {filterText && (
            <Button
              size="sm"
              variant="outline-danger"
              onClick={() => setFilterText("")}
            >
              X
            </Button>
          )}
        </div>
        <SubscriberTable
          subscribers={getSubscribersBySearchFilter()}
          removeSubscriber={removeSubscriber}
        />
      </div>
    </>
  );
};

Subscribers.getInitialProps = async () => {
  return getSubscribers()
    .then((subscribers) => {
      return { subscribers };
    })
    .catch((error) => {
      return { subscribers: [], error: error.message };
    });
};

Subscribers.propTypes = {
  subscribers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
};

export default Subscribers;
