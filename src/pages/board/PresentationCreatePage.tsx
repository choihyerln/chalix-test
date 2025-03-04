import "@/styles/board/PresentationCreate.css";
import data from "@/database/chailx.json";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PresentationReq } from "@/types/presentation";
import { format } from "date-fns";

export default function PresentationCreatePage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PresentationReq>();

  const storedData = localStorage.getItem("presentations");
  const existingList = storedData ? JSON.parse(storedData) : data.list;
  const today = format(new Date(), "yyyy-MM-dd");

  const onSubmit = (newData: PresentationReq) => {
    const maxBrdIdx =
      existingList.length > 0 ? Math.max(...existingList.map((item: { brd_idx: number }) => item.brd_idx)) : 0;

    const newPaper = {
      brd_idx: maxBrdIdx + 1,
      brd_title: newData.brd_title,
      brd_ext2: newData.brd_ext2,
      reg_datetime: newData.reg_datetime,
      brd_ext1: newData.brd_ext1,
    };

    const updatedList = [...existingList, newPaper];
    localStorage.setItem("presentations", JSON.stringify(updatedList));

    reset();
    navigate("/presentation");
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
          <label>날짜</label>
          <input
            type="date"
            {...register("reg_datetime", { required: "날짜를 선택해주세요." })}
            max={today}
            onFocus={(e) => (e.target as HTMLInputElement).showPicker()}
            onClick={(e) => (e.target as HTMLInputElement).showPicker()}
          />
          {errors.reg_datetime && <p className="error-message">{errors.reg_datetime.message}</p>}
        </div>

        <div className="form-group">
          <label>비고 (국내/해외)</label>
          <select {...register("brd_ext1")}>
            <option value="국내">국내</option>
            <option value="해외">해외</option>
          </select>
        </div>

        <div className="button-container">
          <button type="button" className="cancel-btn" onClick={() => navigate("/presentation")}>
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
