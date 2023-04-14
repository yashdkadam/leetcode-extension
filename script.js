{
  if (localStorage.getItem("company-wise") === "true") {
    function loadScript(src) {
      return new Promise(function (resolve) {
        const script = document.createElement("script");
        script.src = src;
        script.onload = function () {
          resolve(true);
        };
        script.onerror = function () {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    }
    function loadStyle(src) {
      return new Promise(function (resolve) {
        const style = document.createElement("link");
        style.href = src;
        style.type = "text/css";
        style.rel = "stylesheet";
        style.integrity =
          "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ";
        style.crossorigin = "anonymous";
        style.onload = function () {
          resolve(true);
        };
        style.onerror = function () {
          resolve(false);
        };
        document.head.appendChild(style);
      });
    }

    document.getElementsByTagName("head")[0].innerHTML = "";

    document.getElementsByTagName("head")[0].innerHTML += `
  <style type="text/css">
  .float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#0C9;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}
  a:hover{
  text-decoration: underline;
}
  .row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
.list-group {
  --bs-list-group-color: #212529;
  --bs-list-group-bg: #fff;
  --bs-list-group-border-color: rgba(0, 0, 0, 0.125);
  --bs-list-group-border-width: 1px;
  --bs-list-group-border-radius: 0.375rem;
  --bs-list-group-item-padding-x: 1rem;
  --bs-list-group-item-padding-y: 0.5rem;
  --bs-list-group-action-color: #495057;
  --bs-list-group-action-hover-color: #495057;
  --bs-list-group-action-hover-bg: #f8f9fa;
  --bs-list-group-action-active-color: #212529;
  --bs-list-group-action-active-bg: #e9ecef;
  --bs-list-group-disabled-color: #6c757d;
  --bs-list-group-disabled-bg: #fff;
  --bs-list-group-active-color: #fff;
  --bs-list-group-active-bg: #0d6efd;
  --bs-list-group-active-border-color: #0d6efd;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--bs-list-group-border-radius);
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > .list-group-item::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: var(--bs-list-group-action-color);
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: var(--bs-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--bs-list-group-action-hover-bg);
}
.list-group-item-action:active {
  color: var(--bs-list-group-action-active-color);
  background-color: var(--bs-list-group-action-active-bg);
}

.list-group-item {
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  text-decoration: none;
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}
.list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(-1 * var(--bs-list-group-border-width));
  border-top-width: var(--bs-list-group-border-width);
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 var(--bs-list-group-border-width);
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}

.list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}

.list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}
.d-flex {
  display: flex !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.align-items-center{
  align-items: centerl
}
.badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-padding-y: 0.35em;
  --bs-badge-font-size: 0.75em;
  --bs-badge-font-weight: 700;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: 0.375rem;
  display: inline-block;
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  font-size: var(--bs-badge-font-size);
  font-weight: var(--bs-badge-font-weight);
  line-height: 1;
  color: var(--bs-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--bs-badge-border-radius);
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}
  </style>
  `;

    var html = "";
    document.getElementsByTagName("body")[0].innerHTML = "";
    document.title = "Leetcode";

    fetch("https://leetcode.com/api/problems/algorithms/")
      .then((response) => response.json())
      .then((data) => {
        var base = "https://curious-parka-yak.cyclic.app/api/questions/";
        var company = localStorage.getItem("company");
        fetch(base + "search/company/" + company)
          .then((res) => res.json())
          .then((data1) => {
            var questions = "";
            data1.map((item) => {
              var arr = data["stat_status_pairs"];
              var flag = true;

              var obj = arr.find(
                (i) => i["stat"]["frontend_question_id"] === item.qid
              );
              if (obj == undefined) flag = false;
              console.log(flag, "flag");
              questions += `
                  <a
                  href='https://leetcode.com/problems/${item.titleSlug}'
                  target="_blank"
                  rel="noopener noreferrer"
                  style="text-decoration: none; color: black;"
                  >
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                      ${
                        flag === true && obj["status"] === "ac"
                          ? '<svg xmlns="http://www.w3.org/2000/svg" style="color: rgb(44 187 93); transform: scale(1.2); margin-bottom: -3px;" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path fill-rule="evenodd" d="M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>'
                          : flag === true && obj["status"] === "notac"
                          ? '<span style="font-weight: 700; color: #08c;">&nbsp;?&nbsp;</span>'
                          : "&nbsp;&nbsp;&nbsp;&nbsp;"
                      }
                      <span>${item["qid"]}. ${item["title"]}</span>
                      ${
                        item["isPaidOnly"]
                          ? "<span>&nbsp; &nbsp; &#128274; </span>"
                          : ""
                      }
                    </span>

                    <span>
                      <span class='badge badge-pill ${
                        item["difficulty"]
                      }' style="background:">
                        ${item["difficulty"]}
                      </span>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span class="badge badge-primary badge-pill occurance">
                        ${item["companyTags"][0]["num_occur"]}
                      </span>
                    </span>
                  </li>
                </a>`;
            });
            html = `<div style="display: grid; grid-template-columns: 2fr 1fr;">
          <div className="row">
          <h1>${localStorage.getItem("company")}</h1>
        <div className="col-8" style="flex: 0 0 auto;
  width: 90%;">
          <ul className="list-group" style="list-style-type: none;">
            ${questions}
          </ul>
          </div>
          </div>`;

            fetch(base + "companies/")
              .then((res) => res.json())
              .then((data2) => {
                var companies = "";
                data2.map((item) => {
                  companies += `
                  <li class="companies" style="cursor: pointer;" onclick="localStorage.setItem('company', '${item}'); window.location.reload();"> ${item} </li>`;
                });
                html += `<div>
      <div className="row" id="temp">
        <div className=" style="flex: 1 0 0%;">
          <ul className="list-group" style="list-style-type: none;">
            ${companies}
          </ul>
          </div>
          </div>`;
                html += `
          <a style="cursor: pointer; background: black; display: flex; justify-content: center; align-items:center;" onclick="localStorage.setItem('company-wise', !(localStorage.getItem('company-wise'))); window.location.reload();" class="float">
          <img style="width: 30px; height: 35px;" src="https://i.im.ge/2023/04/14/Ls6vtq.temp.png" alt="temp" border="0">
          </a>
          `;

                document.getElementsByTagName("body")[0].innerHTML = html;

                const links = document.querySelectorAll("a li span span");
                for (let i = 0; i < links.length; i++) {
                  links[i].addEventListener("mouseover", function () {
                    this.style.textDecoration = "underline";
                  });
                  links[i].addEventListener("mouseout", function () {
                    this.style.textDecoration = "none";
                  });
                }
                const company = document.querySelectorAll(".companies");
                for (let i = 0; i < company.length; i++) {
                  company[i].addEventListener("mouseover", function () {
                    this.style.textDecoration = "underline";
                  });
                  company[i].addEventListener("mouseout", function () {
                    this.style.textDecoration = "none";
                  });
                }
                const easy = document.querySelectorAll(".Easy");
                for (let i = 0; i < easy.length; i++) {
                  easy[i].style.background = "#00b8a3";
                }
                const medium = document.querySelectorAll(".Medium");
                for (let i = 0; i < medium.length; i++) {
                  medium[i].style.background = "#ffc01e";
                }
                const hard = document.querySelectorAll(".Hard");
                for (let i = 0; i < hard.length; i++) {
                  hard[i].style.background = "#ff375f";
                }
                document.querySelectorAll("li").forEach((li) => {
                  li.style.padding = "10px";
                  li.style.border = "1px solid lightgrey";
                  li.style.display = "flex";
                  li.style.justifyContent = "space-between";
                });
                document.querySelectorAll("*").forEach(function (element) {
                  element.style.fontFamily =
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
                });
                document
                  .querySelectorAll(".occurance")
                  .forEach(function (element) {
                    element.style.background = "#0d6efd";
                  });
              });
          });
      });
  } else {
    function temp() {
      document.body.innerHTML += `<a style="cursor: pointer; background-color: black; display: flex; justify-content: center; align-items:center;position:fixed; width:60px; height:60px; bottom:40px; right:40px; color:#FFF; border-radius:50px; text-align:center; box-shadow: 2px 2px 3px #999;" onclick="localStorage.setItem('company-wise', 'true'); window.location.reload();" class="float">
      <img style="width: 30px; height: 35px;" src="https://i.im.ge/2023/04/14/Ls6vtq.temp.png" alt="temp" border="0">
      </a>`;
    }
    if (document.readyState === "ready" || document.readyState === "complete") {
      temp();
    } else {
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          temp();
        }
      };
    }
  }
}
