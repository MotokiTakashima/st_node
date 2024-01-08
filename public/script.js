// 最初はthreadの全てを取得
const getAllThreads = async () => {
  try {
    let allThreads = await axios.get("/api/v1/threads");
    console.log(allThreads);
    let { data } = allThreads;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getAllThreads();
