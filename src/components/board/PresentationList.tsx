import "@/styles/board/PresentationList.css";
import data from "@/database/chailx.json";

export default function PresentationList() {
  const list = data.list;

  return (
    <div className="board-page-inner">
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
          {list.map((item) => (
            <li key={item.brd_idx} className="board-page-content-items">
              <div className="board-page-content-1st">{item.brd_idx}</div>
              <div className="board-page-content-2nd pc-only">{item.brd_ext2}</div>
              <div className="board-page-content-2nd">{item.brd_title}</div>
              <div className="board-page-content-3rd pc-only">
                {item.reg_datetime ? item.reg_datetime.split("T")[0] : "-"}
              </div>
              <div className="board-page-content-3rd pc-only">{item.brd_ext1}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
