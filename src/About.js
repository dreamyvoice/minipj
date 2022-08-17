import React from 'react';

function About() {
  return (
    <>
      <fieldset>
        <span className="header1">ICN(서울)🛫KIX(오사카)</span>

        <span className="header2">08.09화 ~08.10 수 / 성인 1명, 일반석</span>
      </fieldset>

      <fieldset>
        <span>flight code</span>

        <p>
          <input
            type="text"
            name="airline"
            placeholder="항공사를 입력하세요"
          ></input>
        </p>
        <p>
          <textarea
            type="text"
            name="
            Starting point"
            placeholder="출발지를 입력하세요"
          ></textarea>
        </p>
        <p>
          <textarea
            type="text"
            name="planning time"
            placeholder="계획시간을 입력하세요"
          ></textarea>
        </p>
        <p>
          <textarea
            type="text"
            name="Estimated time"
            placeholder="에상시간을 입력하세요"
          ></textarea>
        </p>
        <p>
          <textarea
            type="text"
            name="arrival"
            placeholder="도착시간을 입력하세요"
          ></textarea>
        </p>
        <p>
          <textarea
            type="text"
            name="division"
            placeholder="화물/승객을 입력하세요"
          ></textarea>
        </p>
        <p>
          <textarea
            type="text"
            name="Status"
            placeholder="도착/지연을 입력하세요"
          ></textarea>
        </p>

        <p>
          <input type="submit" value="생성하기"></input>
        </p>
      </fieldset>
    </>
  );
}

export default About;
