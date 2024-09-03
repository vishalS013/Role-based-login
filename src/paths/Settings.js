import { Alert, Button, Tooltip } from "@mui/material";
import React from "react";

const Settings = () => {
  return (
    <>
      <div className="text-center">
        <p>Settings</p>
        <h1>This is authenticated only for admin</h1>
        <Alert severity="warning" onClose={() => {}}>
          This Alert displays the default close icon.
        </Alert>
        <Alert
          severity="success"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This Alert uses a Button component for its action.
        </Alert>

        <Tooltip
          title="Add"
          className="ring-offset-[0px]"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -20],
                  },
                },
              ],
            },
          }}
        >
          <Button>Offset</Button>
        </Tooltip>
      </div>
    </>
  );
};

export default Settings;
