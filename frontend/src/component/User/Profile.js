import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { Avatar } from "@material-ui/core";
import { updateAvatar } from "../../actions/userAction";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const history = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      history("/login");
    }
  }, [history, isAuthenticated]);
  useEffect(() => {
    if (user) {
      setAvatarPreview(user.avatar.url);
    }
  }, [user]);
  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <Avatar
                src={avatarPreview}
                style={{
                  width: "150px",
                  height: "150px",
                  margin: "10px auto",
                }}
              />
              <div
                style={{
                  border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "10px auto",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <label htmlFor="customFile" style={{ cursor: "pointer" }}>
                  Update Avatar
                </label>
                <input
                  type="file"
                  id="customFile"
                  accept="image/*"
                  style={{
                    padding: "10px",
                    width: "100%",
                    border: "none",
                    background: "#f0f0f0",
                    display: "none",
                  }}
                  onChange={updateProfileDataChange}
                />
              </div>
              <button
                style={{
                  border: "1px solid #ccc",
                  margin: "10px auto",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100px",
                }}
                onClick={() => {
                  dispatch(updateAvatar(avatar));
                }}
              >
                Save
              </button>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/me/update">Edit Profile</Link>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
