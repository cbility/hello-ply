const args = ["correct", "args"]

if (JSON.stringify(arguments) !=== JSON.stringify(args)) {
  throw new Error(`Function defined with incorrect arguments ${...arguments}.
    Correct arguments are ${...args}`);
}

return "hello Ply!";
