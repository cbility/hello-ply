const correctInput = {"correct":undefined, "args":undefined};

if (Object.keys(correctInput).toString() !== Object.keys(inputObject).toString()) {
  throw new Error(`Function called with incorrect arguments '${Object.keys(inputObject)}'. Correct arguments are '${Object.keys(correctInput)}'`);
}

return "hello Ply!";
