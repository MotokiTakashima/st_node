// data fetching
const inputTextDOM = document.getElementById("inputTitle");
const inputContentDOM = document.getElementById("inputContent");
//formDomを追加する。
const formDOM = document.querySelector(".form-section");
const threadSectionDOM = document.querySelector(".thread-section");

let inputText = "";
let contentText = "";

// 最初はthreadの全てを取得
const getAllThreads = async () => {
  try {
    let allThreads = await axios.get("/api/v1/threads");
    console.log(allThreads);
    let { data } = allThreads;
    console.log(data);

    allThreads = data
      .map((thread) => {
        const { title, content } = thread;
        console.log(title, content);
        return `
      <div class="single-thread">
          <h3>${title}</h3>
          <p>${content}</p>
        </div>
      `;
      })
      .join("");
    threadSectionDOM.innerHTML = allThreads;
  } catch (error) {
    console.log(error);
  }
};

getAllThreads();

// postメソッド
inputTextDOM.addEventListener("change", (e) => {
  inputText = e.target.value;
  console.log(inputText);
});
inputContentDOM.addEventListener("change", (e) => {
  contentText = e.target.value;
});

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (inputText && contentText) {
    console.log("add data");
    try {
      await axios.post("/api/v1/thread", {
        title: inputText,
        content: contentText,
      });
      getAllThreads();
    } catch (error) {
      console.log(error);
    }
  }
});
