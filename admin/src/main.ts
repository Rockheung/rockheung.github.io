// import Stackedit from "stackedit-js";
import kramed from "kramed";

function main() {
  const body = document.querySelector("body");
  const ta = document.querySelector("textarea");
  ta?.addEventListener("input", function (e: Event) {
    const _target = e.target as HTMLInputElement;
    const _divEle = document.createElement("div");
    ta.nextSibling?.remove();
    _divEle.innerHTML = kramed(_target.value);
    if (_divEle.firstChild) {
      body?.insertBefore(_divEle, ta.nextSibling);
    }
  });
}

main();
