import Stackedit from "stackedit-js";

function main() {
  const ta = document.querySelector("textarea");
  const stackedit = new Stackedit();

  stackedit.openFile({
    name: "TestFileName", // with an optional filename
    content: {
      text: ta?.value, // and the Markdown content.
    },
  });

  // Listen to StackEdit events and apply the changes to the textarea.
  stackedit.on("fileChange", (file: any) => {
    if (ta) {
      ta.value = file.content.text;
    }
  });
}

main();
