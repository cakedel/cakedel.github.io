import { useNavigate } from "react-router-dom";

const Write = ({ input, setInput, list, setList, id }) => {
  const GO = useNavigate();
  const handleInput = (e) => {
    // const { name, value, date } = e.target;
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleDateString(),
      id: id.current,
    });
    // object.name = object[name]
    // object.name='xxx'(X)
    // object.[name] = 'xxx' (O)
  };
  const registerTodo = () => {
    if (!input.title) {
      alert("내용을 입력해주세요.");
      return;
      // 검증하고 registerTodo 함수를 끝내버리기
    }
    if (
      input.name.length < 5 ||
      input.title.length < 5 ||
      input.content.length < 5
    ) {
      alert("글자 수가 모자랍니다.");
      return;
      // 검증하고 registerTodo 함수를 끝내버리기
    }
    setList([...list, input]);
    id.current++;
    setInput({ name: "", title: "", content: "" });
    console.log(list);
    console.log(id.current);
    GO("/Board");
  };

  return (
    <div className="BoardList">
      <table className="BoardTable">
        <thead>
          <tr>
            <td colSpan={2}>
              <h3>글쓰기</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NAME</td>
            <td className="title">
              <input
                type="text"
                name="name"
                onChange={handleInput}
                value={input.name || ""}
              />
            </td>
            <td>TITLE</td>
            <td className="title">
              <input
                type="text"
                name="title"
                onChange={handleInput}
                value={input.title || ""}
              />
            </td>
            <td className="content">CONTENT</td>
            <td>
              {" "}
              <textarea
                name="content"
                onChange={handleInput}
                value={input.content || ""}
              />
            </td>
          </tr>
        </tbody>
        <div className="BtnGroup">
          <button onClick={registerTodo}>글쓰기</button>
        </div>
      </table>
    </div>
  );
};

export default Write;
