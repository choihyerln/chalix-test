import "@/styles/board/PresentationCreate.css";
import data from "@/database/chailx.json";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PresentationReq } from "@/types/presentation";
import { getKSTISOString } from "@/utils/dateUtils";

export default function PresentationCreatePage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PresentationReq>();

  const storedData = localStorage.getItem("presentations");
  const oldList = storedData ? JSON.parse(storedData) : data.list;

  const onSubmit = (newData: PresentationReq) => {
    const maxBrdIdx = oldList.length > 0 ? Math.max(...oldList.map((item: { brd_idx: number }) => item.brd_idx)) : 0;

    const nowKST = getKSTISOString(new Date());

    const newPaper = {
      brd_idx: maxBrdIdx + 1,
      brd_title: newData.brd_title,
      brd_ext2: newData.brd_ext2,
      reg_datetime: nowKST,
      upd_datetime: nowKST,
      brd_ext1: newData.brd_ext1,
    };

    const updatedList = [...oldList, newPaper];
    localStorage.setItem("presentations", JSON.stringify(updatedList));

    reset();
    navigate(`/presentation/${newPaper.brd_idx}`);
  };

  return (
    <div className="create-container">
      <h1>논문 등록</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="create-form">
        <div className="form-group">
          <label>학술대회명</label>
          <input {...register("brd_ext2", { required: "학술대회명을 입력해주세요." })} />
          {errors.brd_ext2 && <p className="error-message">{errors.brd_ext2.message}</p>}
        </div>

        <div className="form-group">
          <label>논문명</label>
          <input {...register("brd_title", { required: "논문명을 입력해주세요." })} />
          {errors.brd_title && <p className="error-message">{errors.brd_title.message}</p>}
        </div>

        <div className="form-group">
          <label>비고 (국내/해외)</label>
          <select {...register("brd_ext1")}>
            <option value="국내">국내</option>
            <option value="해외">해외</option>
          </select>
        </div>

        <div className="button-container">
          <button type="button" className="cancel-btn" onClick={() => navigate("/presentation?category=발표논문")}>
            취소
          </button>
          <button type="submit" className="submit-btn">
            등록
          </button>
        </div>
      </form>
    </div>
  );
}
