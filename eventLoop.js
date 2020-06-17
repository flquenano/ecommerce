// node myFile.js

const pendingTimers = [];
const pendingOSTask = [];
const pendingOperations = [];

// New timers, task, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending OS tasks? (Like server listening to port)
  // Check three: Any pending long running operations? ( Like fs Module)
  return (
    pendingOSTask.length || pendingTimers.length || pendingOperations.length
  );
}

while (shouldContinue) {}

// exit back to terminal
