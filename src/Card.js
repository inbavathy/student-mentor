import React, { useRef } from "react";

export default function Card({ user, connected }) {
  const ref = useRef(null);

  return (
    <div className="uk-card uk-card-default uk-card-small">
      <div className="uk-card-header uk-flex uk-flex-middle">
        <img
          ref={ref}
          className="uk-border-circle"
          src={user.photo}
          alt={user.name}
          style={{ width: 40 }}
          onError={(e) => {
            ref.current.src =
              "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png";
          }}
        />
        <div className="uk-margin-small-left uk-text-bold">{user.name}</div>
      </div>
      <div className="uk-card-body">{user.description}</div>
      {connected === false && (
        <div className="uk-card-footer">
          <button
            type="button"
            className="uk-button uk-button-small uk-button-text"
          >
            mentor
          </button>
          <button
            type="button"
            className="uk-margin-small-left uk-button uk-button-small uk-button-text"
          >
            mentee
          </button>
        </div>
      )}
      {connected === true && (
        <div className="uk-card-footer">
          <a
            href="https://calendly.com/samiezkay/15min"
            className="uk-button uk-button-small uk-button-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule
          </a>
          <a
            href={`sms:${user.phone}`}
            className="uk-margin-small-left uk-button uk-button-small uk-button-text"
          >
            text
          </a>
          <a
            href={`tel:${user.phone}`}
            className="uk-margin-small-left uk-button uk-button-small uk-button-text"
          >
            call
          </a>
        </div>
      )}
    </div>
  );
}
