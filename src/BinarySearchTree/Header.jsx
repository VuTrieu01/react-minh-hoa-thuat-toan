import React from 'react';
import ExibeOrdem from './ExibeOrdem/indexx';
const Sidebar = ({ verify, text, array, searchNumber, pre_ordem, em_ordem, pos_ordem, current, setCurrent, insert, data }) => {
  return (

    <div className="sidebar-wrapper">
      <div>
        <input
          className="next-node-input fullwidth"
          type="number"
          name="current"
          value={current}
          onChange={e => setCurrent(e.target.value)}
          placeholder="Điền giá trị"
        />

        <button
          className="next-node-button fullwidth"
          disabled={!current || isNaN(current)}
          onClick={() => {
            insert(parseInt(current, 10));
            setCurrent('');
          }}
        >
          Thêm vào
        </button>

        <div style={{ paddingTop: 2 }}>
          <button
            className="next-node-button fullwidth"
            disabled={!current || isNaN(current)}
            onClick={() => searchNumber(parseInt(current, 10))}
          >
            Tìm kiếm
          </button>
        </div>
        <div style={{ paddingTop: 2 }}>
          <button
            className="next-node-button fullwidth"
            disabled={!data.root}
            onClick={() => em_ordem(data.root)}
          >
            Duyệt InOrder
          </button>
        </div>
        <div style={{ paddingTop: 2 }}>
          <button
            className="next-node-button fullwidth"
            disabled={!data.root}
            onClick={() => pre_ordem(data.root)}

          >
            Duyệt PreOrder
          </button>
        </div>
        <div style={{ paddingTop: 2 }}>
          <button
            className="next-node-button fullwidth"
            disabled={!data.root}
            onClick={() => pos_ordem(data.root)}
          >
            Duyệt PostOrder
          </button>
        </div>
      </div>
      <div className="container-div">
        {verify && <text style={{ fontSize: 15, color: "red", fontWeight: "bold" }}>{text}</text>}
        {array.length > 0 && <ExibeOrdem array={array} />}
      </div>
    </div>

  );
};

export default Sidebar;
