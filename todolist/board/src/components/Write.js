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
    setList([...list, input]);
    id.current++;
    setInput({ name: "", title: "", content: "" });
    console.log(list);
    console.log(id.current);
    GO("/Board");
  };

  return (
    <div>
      {" "}
      <input
        type="text"
        name="name"
        onChange={handleInput}
        value={input.name || ""}
      />
      <input
        type="text"
        name="title"
        onChange={handleInput}
        value={input.title || ""}
      />
      <textarea
        name="content"
        onChange={handleInput}
        value={input.content || ""}
      />
      <button onClick={registerTodo}>WRITE</button>
    </div>
  );
};

export default Write;
