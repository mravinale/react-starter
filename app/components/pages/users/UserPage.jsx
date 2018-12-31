import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row, Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as usersActions from "../../../actions/usersActions";
import errorService from "../../../utils/errorService";
import UserForm from "./UserForm";
import MyModal from "../../common/modal/MyModal";
import "./UserPage.scss";

const EMPTY_USER = {
  name: "",
  email: "",
  phone: "",
  skype: ""
};

export class UserPage extends React.Component {
  static propTypes = {
    users: PropTypes.array,
    usersActions: PropTypes.object.isRequired
  };

  static defaultProps = {
    users: []
  };

  state = {
    selectedRow: [],
    user: { ...EMPTY_USER },
    isUserModalOpen: false,
    errors: {},
    actionType: null
  };

  componentDidMount() {
    this.props.usersActions.getUsers();
  }

  setSelectedRow = user => {
    this.setState({
      selectedRow: [user.id],
      user: {
        ...user
      }
    });
  };

  handleActionType = () => {
    const { usersActions: actions } = this.props;
    let action = () => {};
    switch (this.state.actionType) {
      case "Add":
        action = actions.createUser;
        break;
      case "Update":
        action = actions.updateUser;
        break;
      case "Delete":
        action = actions.deleteUser;
        break;
      default:
        errorService("Invalid User action Type", "UserPage.jsx");
    }
    this.toggleModal(null);
    return action(this.state.user);
  };

  updateUserState = event => {
    const { target } = event;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [target.name]: target.value
      }
    }));
  };

  cancel = () => {
    this.setState(
      {
        user: { ...EMPTY_USER },
        errors: {},
        selectedRow: []
      },
      this.toggleModal(null)
    );
  };

  toggleModal = actionType => {
    const user = actionType !== "Add" ? this.state.user : { ...EMPTY_USER };
    this.setState(prevState => ({
      isUserModalOpen: !prevState.isUserModalOpen,
      actionType,
      user
    }));
  };

  render() {
    const columns = [
      {
        dataField: "name",
        text: "Full Name"
      },
      {
        dataField: "email",
        text: "Email"
      },
      {
        dataField: "phone",
        text: "Phone Number"
      }
    ];

    const selectRow = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "#c8e6c9",
      selected: this.state.selectedRow,
      onSelect: this.setSelectedRow,
      hideSelectColumn: true
    };

    const pagination = paginationFactory();
    const isValidUser =
      Object.prototype.hasOwnProperty.call(this.state.user, "id") &&
      this.state.user.id !== "";

    return (
      <React.Fragment>
        <Row>
          <Col md="8">
            <h4>Users List</h4>
          </Col>
          <Col md="4">
            <div className="home-page--action-buttons">
              <div className="action-buttons">
                <Button
                  color="primary"
                  className="mr-1"
                  onClick={() => this.toggleModal("Add")}
                >
                  Add
                </Button>
                <Button
                  color="success"
                  className="mr-1"
                  disabled={!isValidUser}
                  onClick={() => this.toggleModal("Update")}
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  className="mr-1"
                  disabled={!isValidUser}
                  onClick={() => this.toggleModal("Delete")}
                >
                  Delete
                </Button>
              </div>
              <MyModal
                okButtonLabel={this.state.actionType || "Ok"}
                cancelButtonLabel="Cancel"
                isOpen={this.state.isUserModalOpen}
                okCallback={this.handleActionType}
                cancelCallback={this.cancel}
                modalTitle={`${this.state.actionType} User`}
              >
                <UserForm
                  onChange={this.updateUserState}
                  user={this.state.user}
                  errors={this.state.errors}
                  actionType={this.state.actionType}
                />
              </MyModal>
            </div>
          </Col>
        </Row>
        <div className="home-page--table">
          <BootstrapTable
            keyField="id"
            data={this.props.users}
            columns={columns}
            selectRow={selectRow}
            pagination={pagination}
          />
        </div>
      </React.Fragment>
    );
  }
}

export function mapStateToProps(state) {
  return {
    users: state.users.data
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    usersActions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
