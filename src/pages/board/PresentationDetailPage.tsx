import "@/styles/board/PresentationDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import data from "@/database/chailx.json";
import { formatDate } from "@/utils/dateUtils";

export default function PresentationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const storedData = localStorage.getItem("presentations");
  const list = storedData ? JSON.parse(storedData) : data.list;

  const paper = list.find((item: { brd_idx: number }) => item.brd_idx === Number(id));

  if (!paper) return <p>논문을 찾을 수 없습니다.</p>;

  const handleDelete = () => {
    const updatedList = list.filter((item: { brd_idx: number }) => item.brd_idx !== Number(id));
    localStorage.setItem("presentations", JSON.stringify(updatedList));
    navigate("/presentation?category=발표논문");
  };

  return (
    <div className="detail-container">
      <h1>논문 상세 정보</h1>

      <div className="detail-card">
        <div className="detail-item">
          <label>학술대회명</label>
          <span>{paper.brd_ext2}</span>
        </div>
        <div className="detail-item">
          <label>논문명</label>
          <span>{paper.brd_title}</span>
        </div>
        <div className="detail-item">
          <label>비고</label>
          <span>{paper.brd_ext1}</span>
        </div>
        <div className="detail-item">
          <label>등록일</label>
          <span>{paper.reg_datetime ? formatDate(paper.reg_datetime) : "-"}</span>
        </div>
        <div className="detail-item">
          <label>최종 수정일</label>
          <span>{paper.upd_datetime ? formatDate(paper.upd_datetime) : "-"}</span>
        </div>

        <div className="button-container">
          <button className="back-btn" onClick={() => navigate("/presentation?category=발표논문")}>
            목록으로
          </button>
          <div className="right-buttons">
            <button className="edit-btn" onClick={() => navigate(`/presentation/${id}/edit`)}>
              수정
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
