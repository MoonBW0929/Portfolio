import './page_styles.css'

export default function Skills() {

  const colors = [
    ["#F8C8C8", "#F6D7B0", "#F9F1C7", "#D7EAD3", "#D6E4F0"],
    ["#E6D9F2", "#E8E0D5", "#CFE8E5"],
    ["#F7D6E0", "#FBE3C2", "#F3E7A1"],
    ["#CFE7D9", "#CFE0F7"],
    ["#DDD6F5", "#E3D5CA"],
    ["#D6F0EE"]
  ];
  const techTitle = [
    "Language", "Frontend", "Backend", "Database", "AI / ML", "Desktop"
  ];
  const techs = [
    ["C", "C++", "Python", "JavaScript", "Java"],
    ["React", "React-native", "Vite"],
    ["Flask", "FastAPI", "Node.js"],
    ["OracleDB", "MongoDB"],
    ["Azure AI", "Pytorch"],
    ["Qt"]
  ];

  return (
    <section id="skills" className="section">
      <div className="container sectionInner">
        <h1 className="sectionTitle">Skills</h1>

        <div className="skillsBox">
          
          {
            techTitle.map((title, i) => (
              <div className='skillRow'>
                <span className='title'>{title}</span>
                <div className='tags'>
                  {
                    techs[i].map((tech, j) => (
                      <span className="skillTag" style={{backgroundColor : colors[i][j]}}>{tech}</span>
                    ))
                  }
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}