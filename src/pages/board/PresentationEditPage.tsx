import "@/styles/board/PresentationEdit.css";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import data from "@/database/chailx.json";
import { useEffect } from "react";
import { PresentationReq } from "@/types/presentation";
import { getKSTISOString } from "@/utils/dateUtils";

export default function PresentationEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PresentationReq>();

  const storedData = localStorage.getItem("presentations");
  const list = storedData ? JSON.parse(storedData) : data.list;

  const paper = list.find((item: { brd_idx: number }) => item.brd_idx === Number(id));

  useEffect(() => {
    if (paper) {
      setValue("brd_ext2", paper.brd_ext2);
      setValue("brd_title", paper.brd_title);
      setValue("brd_ext1", paper.brd_ext1);
    }
  }, [paper, setValue]);

  if (!paper) return <p>논문을 찾을 수 없습니다.</p>;

  const onSubmit = (updatedData: PresentationReq) => {
    const nowKST = getKSTISOString(new Date());

    const updatedList = list.map((item: { brd_idx: number }) =>
      item.brd_idx === Number(id) ? { ...item, ...updatedData, upd_datetime: nowKST } : item
    );

    localStorage.setItem("presentations", JSON.stringify(updatedList)); // localStorage 업데이트
    navigate(`/presentation/${id}`);
  };

  return (
    <div className="edit-container">
      <h1>논문 수정</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="edit-form">
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
          <button type="button" className="cancel-btn" onClick={() => navigate("/presentation")}>
            취소
          </button>
          <button type="submit" className="submit-btn">
            수정
          </button>
        </div>
      </form>
    </div>
  );
}
