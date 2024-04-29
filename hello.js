const correctInput = {"correct":undefined, "args":undefined};

if (Object.keys(correctInput).toString() !== Object.keys(input.input).toString()) {
  throw new Error(`Function called with incorrect arguments '${Object.keys(input.input)}'. Correct arguments are '${Object.keys(correctInput)}'`);
}

return "hello Ply!";
