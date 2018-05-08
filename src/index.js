import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import GooglePicker from "react-google-picker";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <GooglePicker
      clientId={
        "494108629284-shkei20vsodr8er4pqfl013ps6c0988u.apps.googleusercontent.com"
      }
      developerKey={"AIzaSyAws1TtwaL_sSFKkMvJzOOQT2-1NBZUS4Y"}
      scope={["https://www.googleapis.com/auth/drive.readonly"]}
      onChange={data => console.log("on change:", data)}
      multiselect={true}
      navHidden={true}
      authImmediate={false}
      mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
      viewId={"DOCS"}
    />
  </div>
);

render(<App />, document.getElementById("root"));
