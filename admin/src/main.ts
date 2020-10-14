// import Stackedit from "stackedit-js";
import kramed from "kramed";

function main() {
  const ta = document.querySelector("#text-editor");
  ta?.addEventListener("input", function (e: Event) {
    const _target = e.target as HTMLInputElement;
    const _divEle = document.querySelector("#converted-document");
    if (_divEle) {
      _divEle.innerHTML = kramed(_target.value);
    }
  });
}

main();
