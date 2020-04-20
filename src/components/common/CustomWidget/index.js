import { Widget } from "rasa-webchat";
import React from "react";
export const CustomWidget = () => {
  return (
    <Widget
      interval={2000}
      socketUrl="https://877c18e3.ngrok.io"
      socketPath="/socket.io/"
      title="Nora Covid-19"
      inputTextFieldHint="Type a message..."
      connectingText="Waiting for server..."
      openLauncherImage="logo-1.svg"
      profileAvatar="logo-white.svg"
      tooltipPayload="/greet"
      params={{
        storage: "local",
      }}
    />
  );
};
