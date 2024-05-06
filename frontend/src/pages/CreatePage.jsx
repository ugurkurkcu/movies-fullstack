import axios from "axios";
import CreateInput from "../components/CreateInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const newObj = Object.fromEntries(form.entries());

    console.log(newObj);

    axios
      .post("http://127.0.0.1:5001/api/movies", newObj)
      .then((res) => {
        toast.success("Film başarı ile oluşturuldu");
        navigate("/");
      })
      .catch((err) => toast.error("Film oluşturma başarısız"));
  };
  return (
    <div className="bg-orange-400 grid place-items-center h-[calc(100vh-106px)]">
      <div className="bg-white rounded-md p-10 shadow-lg shadow-orange-800">
        <form onSubmit={handleSubmit} className="mt-3 gap-7 flex flex-col">
          <h1 className=" text-3xl font-bold">Yeni Film Oluştur</h1>

          <CreateInput label={"Başlık"} type={"text"} name={"title"} />
          <CreateInput label={"Kategori"} type={"text"} name={"genre"} />
          <CreateInput label={"Puan"} type={"number"} name={"rating"} />
          <CreateInput label={"Yıl"} type={"number"} name={"year"} />

          <button
            type="submit"
            className="bg-orange-500 p-2 rounded-md hover:bg-orange-400 text-white font-bold text-lg"
          >
            Oluştur
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
