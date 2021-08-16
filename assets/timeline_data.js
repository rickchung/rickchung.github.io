const data_achieve = [
	['2022-05', 'Achievement', '(Expected) Ph.D. in Computer Science', 'Arizona State University, Tempe, AZ, U.S.A.', 'Education', '', ''],
	['2021-08', 'Achievement', 'M.S. in Computer Science', 'Arizona State University, Tempe, AZ, U.S.A.', 'Education', '', ''],
	['2016-07', 'Achievement', 'B.S. in Management Information Systems', 'National Sun Yat-Sun University, Kaohsiung, Taiwan', 'Education', '', ''],
	['2021-05', 'Achievement', 'Awarded CIDSE Outstanding Computer Science Teaching Assistant Award', 'ASU, Tempe, AZ', 'Award', '', ''],
	['2018-05', 'Achievement', 'Awarded CIDSE Outstanding Computer Science Teaching Assistant Award', 'ASU, Tempe, AZ', 'Award', '', ''],
	['2018-08', 'Achievement', 'Virtual Reality Innovation Challenge Finalists', 'ASU, Tempe, AZ', 'Award', '', '']
];
const data_proj = [
	['2020-05', 'Project', 'Developed and Analyzed a Bigtable Database', 'ASU CSE510 Database Management Sys Implementation', 'Featured Project', 'java,sql,relational database,big data,project management', ''],
	['2020-05', 'Project', 'Conducted Spatial Data Analysis for a Taxi Service in Spark', 'ASU CSE511 Data Processing at Scale', 'Course Project', 'spark,scala,big data,scale,sql', ''],
	['2019-12', 'Project', 'Participated in Various Software Security Projects: Reverse Engineering in Ghidra, Simulated CTFs', 'ASU CSE545 Software Security', 'Course Project', 'shell,c,security,ctf,software security,ghidra', ''],
	['2019-12', 'Project', 'Developed an ASP for Warehouse Delivery Logistics', 'ASU CSE579 Knowledge Representation', 'Course Project', 'clingo,answer set programming,python,artificial intelligence', ''],
	['2019-05', 'Project', 'Developed a Context-Aware Mobile App for Fall Detection ', 'ASU CSE535 Mobile Computing', 'Course Project', 'android,java,machine learning', ''],
	['2019-05', 'Project', 'Developed Topic Translation in Augmented Reality', 'ASU CSE578 Data Visualization', 'Course Project', 'python,c#,unity,augmented reality,natural language processing,data visualization,', ''],
	['2018-12', 'Project', 'Developed AI Agent Based on Deep Q-Learning Network in Pacman', 'ASU CSE571 Artificial Intelligence', 'Featured Project', 'python,artificial intelligence,deep learning,reinfircement learning,machine learning,q learning', ''],
	['2018-05', 'Project', 'Developed and Researched a Semi-Supervised Learning Approach for Spectral Waveforms', 'ASU CSE575 Statistical Machine Learning', 'Course Project', 'python,autoencoder,machine learning', ''],
	['2018-05', 'Project', 'Modeled the Dynamics of the Opioid Crisis through Twitter Arizona State University', 'ASU CSE576 Natural Language Processing', 'Course Project', 'python,natural language processing,svm,machine learning', ''],
	['2018-12', 'Project', 'Developed a Programmable, 3D-printed, Cyber-physical Robot', 'ASU CSE564 Software Design', 'Course Project', 'c,3d printer', ''],
	['2020-12', 'Project', 'Developed a Web-based Augmented Reality Template', 'ASU, Tempe, AZ', 'Research Project', 'a-frame,arjs,augmented reality,html/css,javascript', ''],
	['2020-10', 'Project', 'Developed a Mobile SEIR Data Visualization', 'ASU, Tempe, AZ', 'Side Project', 'seir,data visualization,python,c#,unity', ''],
	['2016-03', 'Project', 'Designed a Tutorial - Introduction to Python Programming', 'NSYSU, TW', 'Side Project', 'python,tutorial', ''],
	['2015-08', 'Project', 'Engineered a Personal Emotion Assistant based on Biosensors', 'NSYSU, TW', 'Featured Project', 'python,django,php,html/css,javascript,android,java,arduino,sensors,sql,artificial intelligence', ''],
	['2016-01', 'Project', 'Conducted a Trend Analysis on a Discussion Forum', 'NSYSU E-Commerce', 'Course Project', 'python,scrapy', ''],
	['2013-05', 'Project', 'Developed a Game in Python - Space Invador', 'NSYSU Principles of Computing', 'Course Project', 'python,pygame', ''],
	['2014-12', 'Project', 'Engineered a C Shell for Operating Systems', 'NSYSU Operating Systems', 'Course Project', 'c,linux', ''],
	['2014-03', 'Project', 'Developed an Online Lottery Drawer', 'NSYSU Database Management', 'Side Project', 'html/css,javascript', ''],
	['2014-09', 'Project', 'Developed a Course Selection System', 'NSYSU, TW', 'Side Project', 'html/css,php,javascript,sql', ''],
	['2016-03', 'Project', 'Developoed a Multiplayer Bluetooth Android Game', 'NSYSU Business Comm & Network', 'Course Project', 'java,android,bluetooth,network programming', ''],
	['2016-04', 'Project', 'Joined a Hackathon and Developed a Fishing Information System on Mobile', 'TW', 'Side Project', 'java,android,python,django', ''],
	['2016-07', 'Project', 'Developed Android Wallpaper Generator', 'NSYSU, TW', 'Course Project', 'java,android', ''],
	['2019-12', 'Project', 'Developed a Prototype for Collaborative Problem Solving in Augmented Reality', 'ASU, Tempe, AZ', 'Featured Project', 'c#,unity,augmented reality,network programming', ''],
	['2018-04', 'Project', 'Developed a Prototype for Embodiment and Debugging Practice in Augmented Reality', 'ASU, Tempe, AZ', 'Research Project', 'c#,unity,augmented reality,embodied learning', ''],
	['2017-12', 'Project', 'Developed a Prototype for Learning Abstraction in Computing via Augmented Reality', 'ASU, Tempe, AZ', 'Research Project', 'c#,unity,augmented reality,embodied learning', '']
];
const data_pub = [
	['2021-07', 'Publication', 'Augmented Reality in a Collaborative Programming Task', "IEEE ICALT '21", 'Conference', '', ''],
	['2021-07', 'Publication', 'Modeling Distributed Practice by Multiresolution Signal Analysis', "EDM '21", 'Conference', '', ''],
	['2021-09', 'Publication', 'Examining the Effect of Self-Explanations in Distributed Self-Assessment', "EC-TEL '21", 'Conference', '', ''],
	['2020-03', 'Publication', 'Investigating Patterns of Study Persistence on Self-Assessment Platform', "SIGCSE '20", 'Conference', '', ''],
	['2020-03', 'Publication', 'Using Augmented Reality to Support Collaborative Problem-Solving in Debugging ', "SIGCSE '20", 'Conference', '', ''],
	['2020-07', 'Publication', 'A Longitudinal Study on Student Persistence in Programming Self-assessments', "CSEDM '20", 'Conference', '', ''],
	['2020-06', 'Publication', 'An Investigation of Collaborative Debugging Practices', "iLRN '20", 'Conference', '', ''],
	['2019-03', 'Publication', 'Self-Regulated Learning: Effects of Study Persistence and Regularity', "FIE '19", 'Conference', '', ''],
	['2019-10', 'Publication', 'Chronological Semantics Modeling: A Topic Evolution Approach', "SBP-BRiMS '19", 'Conference', '', ''],
	['2019-03', 'Publication', 'A Longitudinal Study on Student Persistence in Programming Self-assessments', "LAK '19", 'Conference', '', ''],
	['2019-03', 'Publication', 'An Exploratory Study of Augmented Embodiment for Computational Thinking', "IUI '19", 'Conference', '', ''],
	['2020', 'Publication', 'Multimodal Analytics of Collaborative Programming Problem-Solving in Augmented Reality', 'Submitted', 'Journal', '', ''],
	['2021', 'Publication', 'Interactive CovidCampus Simulation Game: Genesis, Design, and Outcomes', 'Front. Commun', 'Collaboration', '', '']
];
const data_work = [
	['2017-08', 'Work', 'Researched and developed a content recommendar by TensorFlow', 'Data Science Intern at Dcard, Taipei, Taiwan', 'Paid Work', 'python,machine learning,tensorflow,recommendation systems', ''],
	['2017-02', 'Work', 'Developed an Online 3D Model Viewer', 'TW', 'Paid Work', 'javascript,3d models,html/css', ''],
	['2017', 'Work', 'TA - CSE572 Data Mining', 'ASU, Tempe, AZ', 'Paid Work', '', ''],
	['2017', 'Work', 'TA - CSE110 Principles of Programming (Java)', 'ASU, Tempe, AZ', 'Paid Work', 'java', ''],
	['2018', 'Work', 'TA - CSE110 Principles of Programming (Java)', 'ASU, Tempe, AZ', 'Paid Work', 'java', ''],
	['2018', 'Work', 'TA/Instructor - CSE180 Computer Literacy', 'ASU, Tempe, AZ', 'Paid Work', '', ''],
	['2019', 'Work', 'TA - CSE110 Principles of Programming (Java)', 'ASU, Tempe, AZ', 'Paid Work', 'java', ''],
	['2019', 'Work', 'TA - CPI101 Introduction to Informatics', 'ASU, Tempe, AZ', 'Paid Work', '', ''],
	['2020', 'Work', 'TA - CSE110 Principles of Programming (Java)', 'ASU, Tempe, AZ', 'Paid Work', 'java', ''],
	['2020', 'Work', 'TA/Instructor - CSE578 Data Visualization', 'ASU, Tempe, AZ', 'Paid Work', '', ''],
	['2021', 'Work', 'TA - CSE205 Object-Oriented Program & Data (Java)', 'ASU, Tempe, AZ', 'Paid Work', 'java', ''],
	['2021', 'Work', 'TA - CSE579 Knowledge Representation and Reasoning', 'ASU, Tempe, AZ', 'Paid Work', 'artifical intelligence', ''],
	['2021', 'Work', 'TA - CSE578 Data Visualization (Mandarin/English Bilingual)', 'ASU, Tempe, AZ', 'Paid Work', '', '']
];
const data_other = [
	['2021-07', 'Other', 'Publication/Proceedings Chair', "EDM '21", 'Service', '', ''],
	['2019-03', 'Other', 'Proceeding Editor', "LAK '19", 'Service', '', ''],
	['2021-07', 'Other', 'Reviewer', "EDM '21", 'Service', '', ''],
	['2021-07', 'Other', 'Reviewer', "TAICHI '21", 'Service', '', ''],
	['2021-06', 'Other', 'Reviewer', "AIED '21", 'Service', '', ''],
	['2021-04', 'Other', 'Reviewer', "LAK '21", 'Service', '', ''],
	['2019-03', 'Other', 'Reviewer', "LAK '19", 'Service', '', ''],
	['2019-07', 'Other', 'Reviewer', "EDM '19", 'Service', '', ''],
	['2018-06', 'Other', 'Reviewer', 'AIED 18"', 'Service', '', ''],
	['2018', 'Other', 'Reviewer', 'CTE 18"', 'Service', '', ''],
	['2017-07', 'Other', 'Reviewer', 'AIED 17"', 'Service', '', '']
];
