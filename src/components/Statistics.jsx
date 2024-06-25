import React from "react";

const Statistics = () =>{
    return(
        <>
            <section class="section stats" aria-label="stats" style={{zIndex: "2", position: "relative"}}>
        <div class="container">

          <ul class="grid-list">

            <li>
              <div class="stats-card" style={{backgroundColor: "#e8f7f5"}}>
                <h3 class="card-title">29.3k</h3>

                <p class="card-text">Student Enrolled</p>
              </div>
            </li>

            <li>
              <div class="stats-card" style={{backgroundColor: "rgb(238 73 98 / 41%)"}}>
                <h3 class="card-title">32.4K</h3>

                <p class="card-text">Class Completed</p>
              </div>
            </li>

            <li>
              <div class="stats-card" style={{backgroundColor: "rgb(143 87 255 / 40%)"}}>
                <h3 class="card-title">100%</h3>

                <p class="card-text">Satisfaction Rate</p>
              </div>
            </li>

            <li>
              <div class="stats-card" style={{backgroundColor: "rgb(248 183 32 / 50%)"}}>
                <h3 class="card-title">354+</h3>

                <p class="card-text">Top Instructors</p>
              </div>
            </li>

          </ul>

        </div>
      </section>
        </>
    )
}
export default Statistics