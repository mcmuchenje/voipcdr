import Head from 'next/head'

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/voice`)
  const data = await res.json()

  return { props: { data } }
}

export default function dashboard({ data }) {
  return (

<section className="section">
      <div className="columns">
        <div className="column is-4-tablet is-3-desktop is-2-widescreen">
          <nav className="menu">
            <p className="menu-label">
              Menu
            </p>
            <ul className="menu-list">
              <li>
                <a className="is-active" href="/voice">
                  <span className="icon">
                    <i className="fa fa-tachometer"></i>
                  </span>
                  Dashboard
                  </a>
              </li>
              <li>
                <a href="voice/extensions">
                  <span className="icon">
                    <i className="fa fa-address-book"></i>
                  </span>
                  Extensions
                </a>
              </li>
              <li>
                <a href="voice/calls/1">
                  <span className="icon">
                    <i className="fa fa-phone"></i>
                  </span>
                  Calls
                </a>
              </li>
	      <li>
                <a href="/voice/recordings/1">
                  <span className="icon">
                    <i className="fa fa-volume-up"></i>
                  </span>
                  Recordings
                </a>
              </li>

              <li>
                <a href="http://192.168.1.210:4321">
                  <span className="icon">
                    <i className="fa fa-bar-chart"></i>
                  </span>
                  Reports
                </a>
              </li>



            </ul>
          </nav>
        </div>

        <div className="column">
          <div className="level">
            <div className="level-left">
              <h1 className="subtitle is-3">
                <span className="has-text-grey-light">Hello</span> <strong></strong>
              </h1>
            </div>
            <div className="level-right">
              <div className="select">
                <select>
                  <option name="Today" selected>Today</option>
                  <option>Yesterday</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                  <option>All time</option>
                </select>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-12-tablet is-6-desktop is-3-widescreen">
              <div className="notification is-link has-text">
                <p className="title is-2">{data.incoming}</p>
                <p className="subtitle is-4">Incoming Calls</p>
              </div>
            </div>

            <div className="column is-12-tablet is-6-desktop is-3-widescreen">
              <div className="notification is-info has-text">
                <p className="title is-2">{data.outgoing}</p>
                <p className="subtitle is-4">Outgoing Calls</p>
              </div>
            </div>

            <div className="column is-12-tablet is-6-desktop is-3-widescreen">
              <div className="notification is-primary has-text">
                <p className="title is-2"></p>
                <p className="subtitle is-4">Total Cost (approx)</p>
              </div>
            </div>


            <div className="column is-12-tablet is-6-desktop is-4-fullhd">
              <div className="card">
                <div className="card-content">
                  <canvas id="myChart" width="400" height="400"></canvas>
                </div>
              </div>
            </div>

            <div className="column is-12-tablet is-6-desktop is-4-fullhd">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4">
                    Top 5 Users Today
                  </h2>

                            
				 <div className="media">
                    <div className="media-left is-marginless">
                      <p className="number"></p>
                    </div>
                    <div className="media-content">
                      <p className="title is-5 is-spaced is-marginless">
                        <strong></strong>
                      </p>
                      <p className="subtitle is-6">
                       
                      </p>
                    </div>
                  </div>
                 


                  <a className="button is-link is-outlined" href="/voice/calls/1">View all Calls</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  	)
}