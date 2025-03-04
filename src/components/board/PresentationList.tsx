import "@/styles/board/PresentationList.css";
import { useNavigate } from "react-router-dom";
import data from "@/database/chailx.json";
import { PresentationReq } from "@/types/presentation";

export default function PresentationList() {
  const navigate = useNavigate();

  const storedData = localStorage.getItem("presentations");
  const list = storedData ? JSON.parse(storedData) : data.list;
  const sortedList = [...list].sort((a, b) => b.brd_idx - a.brd_idx);

  return (
    <div className="board-page-inner">
      {/* 논문 등록 버튼 */}
      <button onClick={() => navigate("/presentation/create")}>논문 등록</button>

      {/* 컬럼명 */}
      <div className="board-page-content-cols">
        <div className="board-page-1st">번호</div>
        <div className="board-page-2nd pc-only">학술대회명</div>
        <div className="board-page-2nd">논문명</div>
        <div className="board-page-3rd pc-only">날짜</div>
        <div className="board-page-3rd pc-only">비고(국내/해외)</div>
      </div>

      {/* 목록 */}
      <div className="board-page-content-wrap">
        <ul className="board-page-content-inner">
          {sortedList.map((item: PresentationReq) => (
            <li
              key={item.brd_idx}
              className="board-page-content-items"
              onClick={() => navigate(`/presentation/${item.brd_idx}`)}
            >
              <div className="board-page-content-1st">{item.brd_idx}</div>
              <div className="board-page-content-2nd pc-only">{item.brd_ext2}</div>
              <div className="board-page-content-2nd">{item.brd_title}</div>
              <div className="board-page-content-3rd pc-only">
                {item.reg_datetime ? item.reg_datetime.toString().split("T")[0] : "-"}
              </div>
              <div className="board-page-content-3rd pc-only">{item.brd_ext1}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
