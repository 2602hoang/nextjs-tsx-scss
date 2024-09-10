/* eslint-disable @next/next/no-img-element */
import { useAuth } from "@/contexts/AuthContext";
import exp from "constants";
import React from "react";

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    id_user?: string;
    username?: string;
    phone?: string;
    avatar?: string;
    status?: boolean;
  };
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, data }) => {
  const { logout } = useAuth();
  // If the modal is closed, return nothing
  if (!isOpen) return null;

  // If the modal is open, render the content below
  return (
    <div onClick={onClose} className="modal-user">
      <div className="modal__user-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button">
          &times;
        </button>
        <div className="content-image">
          <img
            src={data.avatar}
            alt={data.username}
            width="60px"
            height="60px"
          />
        </div>
        <div className="content-text">
          <p className="text-name">Username: {data.username}</p>
          <p className="text-phone">Phone: {data.phone}</p>
          <p
            className={`text-status ${
              data.status === false ? "text-active" : "text-inactive"
            }`}
          >
            Status: {data.status === false ? "Active" : "Inactive"}
          </p>
          <button className="header__button-btn" onClick={logout}>
            Log Out{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="#FF8A65"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M17.44 14.62L20 12.06 17.44 9.5M9.76 12.06h10.17M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
