import React, { useState } from 'react';

export default function List(props) {
  const [totalCheck, setTotalCheck] = useState(0);
  const [checkedValue, setCheckedValue] = useState(false);
  const [checkDictionary, setCheckDictionary] = useState({});
  const handleClick = (event) => {
    const checked = event.target.checked;
    const id = event.target.id;
    const updateCheck = { ...checkDictionary, [id]: checked };
    setCheckedValue(!checkedValue);
    setCheckDictionary(updateCheck);
    const totalFilteredCheck = Object.values(updateCheck).filter(item => item);
    setTotalCheck(totalFilteredCheck.length);
  }

  return (
    <nav className="panel">
      <p className="panel-heading">
        Keeping in Track
            </p>
      <div className="checklist" >
        {
          props.list.map((item, i) => {
            return (
              <div className="panel-block" href="#" key={i} >
                <label className="checkbox">
                  <input maxLength="20" id={`item-${i}`} type="checkbox"
                    checked={!!checkDictionary[`item-${i}`]}
                    onChange={() => { }}
                    onClick={handleClick}
                  />
                  {item}
                </label>
              </div>
            );
          })
        }
      </div>
      {
        props.list.length > 0 &&
        <div className="panel-block total">
          <span className="is-outlined is-fullwidth">
            Completed:
                    </span>
          <span id="total">
            {totalCheck}
          </span>
          <span>
            {`/${props.list.length}`}
          </span>
        </div>
      }
    </nav>
  )
}