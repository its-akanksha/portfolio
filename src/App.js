import './App.css';
import girlImage from './girl.png';
import linkedin from './icons8-linkedin.svg';
import github from './icons8-github.svg';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <div className="header">
          <div className="portfolio">PORTFOL<div className="o-port">IO</div></div>
          <div className="download">
            <a href="#">
              Download Resume
            </a>
          </div>
        </div>
        <div className="main-about-technical">
          <div className="left">
            <div>
              <div className="about-me">About <div className="o-port">Me</div></div>
              <div className="about-me-content">Hello, I am Akanksha Raj, a Machine Learning developer and a Software Developer from Jharkhand, India</div>
              <div className="about-me-paragraph">Akanksha Raj, with 1 year of internship experience, specializes in Machine Learning, NLP, and Data Science. Proficient in Python, C++, Angular, React, and MongoDB, she holds certifications in Deep Learning and Boomi Integration Development. She won 1st prize in the Precision Care Challenge 2024 and co-authored a paper on ChatGPT applications. At Westernacher, she developed ML models, migrated React to Angular, and integrated ChatGPT into websites. Her projects include HandSyncTube, a gesture-recognition model, and Amazon Reviews Sentiment Analysis, achieving 93% accuracy. Akanksha holds an Integrated M.Tech in Computer Science & AI/ML from VIT Bhopal (GPA: 8.5).</div>
            </div>
            <div className="experience-achievement">
              <div className="left-left">
                <div className="achievement">Achievement</div>
                <div className="achievement-paragraph">These are some of my proud achievements listed below!</div>
                <div className="achievement-wrap">
                  <div className="achievement-title">
                    1st Prize in Precision Care Challenge
                  </div>
                  <div className="achievement-description">
                    GE Healthcare, Bangalore
                  </div>
                  <div className="achievement-date">
                    June, 2024
                  </div>
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">
                    Team Rank 52 in Amazon ML Challenge
                  </div>
                  <div className="achievement-description">
                    Amazon, India
                  </div>
                  <div className="achievement-date">
                    May, 2023
                  </div>
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">
                    Co-authored paper: ”Modern Applications with a Focus on Training ChatGPT”
                  </div>
                  <div className="achievement-description">
                    Springer Publications
                  </div>
                  <div className="achievement-date">
                    December, 2024
                  </div>
                </div>
                <div className="achievement">Certifications</div>
                <div className="achievement-paragraph">Certifications are a great representation of your dedication to learning!</div>
                <div className="achievement-wrap">
                  <div className="achievement-title">
                  Boomi Professional Integration Developer
                  </div>
                  <div className="achivement-description">
                    Dell Boomi
                  </div>
                  <div className="achievement-date">
                    December, 2024
                  </div>
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">
                  Boomi Associate Integration Developer
                  </div>
                  <div className="achivement-description">
                    Dell Boomi
                  </div>
                  <div className="achievement-date">
                    November, 2024
                  </div>
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">
                  Improving Deep Neural Networks
                  </div>
                  <div className="achievement-description">DeepLearning.ai</div>
                  <div className="achievement-date">
                    January, 2023
                  </div>
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">
                  Convolutional Neural Networks
                  </div>
                  <div className="achievement-description">DeepLearning.ai</div>
                  <div className="achievement-date">
                    June, 2023
                  </div>
                </div>
              </div>
              <div className="left-right">
                <div className="achievement">Experience</div>
                <div className="achievement-paragraph">
                  I have worked as a software developer Intern and machine learning trainee throughout my college
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">Westernacher Consulting Pvt. Ltd.</div>
                  <div className="achievement-description">Software Developer Intern</div>
                  <div className="achievement-date">February, 2024 - Ongoing</div>
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">Amazon ML Summer School</div>
                  <div className="achievement-description">Machine Learning Trainee</div>
                  <div className="achievement-date">September - November, 2023</div>
                </div>

                <div className="achievement">Education</div>
                <div className="achievement-paragraph">
                  My highest degree is Integrated M.tech with specialization in Artificial Intelligence and Machine learning
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">Vellore Institute of Technology</div>
                  <div className="achievement-description">Bhopal, India</div>
                  <div className="achievement-date">CGPA: 8.5/10</div>
                </div>
                <div className="achievement-wrap">
                  <div className="achievement-title">DAV Public School</div>
                  <div className="achievement-description">Ranchi, India</div>
                  <div className="achievement-date">Percentage: 87%</div>
                </div>
              </div>
            </div>

          </div>

          <div className="right">
            <a href="https://www.flaticon.com/free-icons/coder" title="coder icons">
              <img src={girlImage} alt="Coder Icons Created by Darius Dan" width="300" height="250" />
            </a>
            <div className="skills-wrap">
            <div className="skills-title">Technical Skills I Possess</div>
              <div className="skills-block">
                <div className="skills-tile">Python</div>
                <div className="skills-tile">C++</div>
                <div className="skills-tile">R</div>
                <div className="skills-tile">Angular</div>
                <div className="skills-tile">React</div>
                <div className="skills-tile">Javascript</div>
                <div className="skills-tile">Node.js</div>
                <div className="skills-tile">SQL</div>
                <div className="skills-tile">HTML</div>
                <div className="skills-tile">CSS</div>
                <div className="skills-tile">MongoDB</div>
              </div>
              </div>
              <div className="skills-wrap">
              <div className="skills-title">Frameworks I Have Knowledge Of</div>
              <div className="skills-block">
                <div className="skills-tile">Scikit-Learn</div>
                <div className="skills-tile">Flask</div>
                <div className="skills-tile">Mediapipe</div>
                <div className="skills-tile">Boomi Cloud Integration</div>
                <div className="skills-tile">PyTorch</div>
                <div className="skills-tile">NLP</div>
              </div>
              </div>
              <div className="skills-wrap">
              <div className="skills-title">Tools I Have Knowledge Of</div>
              <div className="skills-block">
                <div className="skills-tile">Tableau</div>
                <div className="skills-tile">Visual Studio Code</div>
                <div className="skills-tile">Github</div>
                <div className="skills-tile">Boomi Platform</div>
              </div>
              </div>

              <div className="skills-wrap">
              <div className="skills-title">Domain Expertise</div>
              <div className="skills-block">
                <div className="skills-tile">Machine Learning</div>
                <div className="skills-tile">Software Development</div>
                <div className="skills-tile">Data Science</div>
              </div>
            </div>

          </div>
        </div>
        <div className="footer">
          <div className="icon-tile">
          <img src={linkedin} alt="Icon" width="48" height="48"/>
          </div>
          <div className="icon-tile">
          <img src={github} alt="Icon" width="48" height="48"/>
          </div>
        </div>
      </div>
</div>
  );
}

export default App;
