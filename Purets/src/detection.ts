function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

// WHAT NARROWING THE TYPES LOOK LIKE:

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }

  id.toLowerCase();
}
