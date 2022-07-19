import React from 'react';

function Home() {
  return (
    <div className="header">
      <h1>설레는 여행의 시작</h1>
      <h2>네이버 항공권!</h2>
      <div className="main">
        <fieldset>
          <legend>왕복 / 편도 / 다구간</legend>
          <span>출발</span>
          <input type="text" />
          <span>도착</span>
          <input type="text" />
          <button id="search-btn">항공권 검색</button>
        </fieldset>
        <div className="table">
          <div className="row-header">
            <div class="col">출발</div>
            <div class="col">도착</div>
            <div class="col">출발시간</div>
            <div class="col">도착시간</div>
            <div class="col">가격순</div>
            <div class="col">예약하기</div>
          </div>
          <div className="row">
            <div class="col">🛫 ICN</div>
            <div class="col">🛬 KIX</div>
            <div class="col">08:00</div>
            <div class="col">09:40</div>
            <div class="col">왕복 447,100원~</div>
            <div class="col">
              <button onClick={() => setComp(About)}>예약하기</button>
            </div>
          </div>

          <div className="row">
            <div class="col">🛫 ICN</div>
            <div class="col">🛬 KIX</div>
            <div class="col">08:00</div>
            <div class="col">09:40</div>
            <div class="col">왕복 447,100원~</div>
            <div class="col">
              <button>예약하기</button>
            </div>
          </div>

          <div className="row">
            <div class="col">🛫 ICN</div>
            <div class="col">🛬 KIX</div>
            <div class="col">08:00</div>
            <div class="col">09:40</div>
            <div class="col">왕복 447,100원~</div>
            <div class="col">
              <button>예약하기</button>
            </div>
          </div>

          <div className="row">
            <div class="col">🛫 ICN</div>
            <div class="col">🛬 KIX</div>
            <div class="col">08:00</div>
            <div class="col">09:40</div>
            <div class="col">왕복 447,100원~</div>
            <div class="col">
              <button>예약하기</button>
            </div>
          </div>

          <div className="row">
            <div class="col">🛫 ICN</div>
            <div class="col">🛬 KIX</div>
            <div class="col">08:00</div>
            <div class="col">09:40</div>
            <div class="col">왕복 447,100원~</div>
            <div class="col">
              <button>예약하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
