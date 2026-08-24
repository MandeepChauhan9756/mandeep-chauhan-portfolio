export const backendProjects = [
  {
    name: 'Inventory Management System',
    tagline: 'Full-Stack REST API',
    category: 'Backend',
    stack: ['Flask', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    description:
      'Architected a full-stack inventory tracking application with a Flask REST API backend, JWT authentication, and a normalized PostgreSQL schema; containerized the stack with Docker for repeatable deployment.',
    highlights: [
      'Flask REST API backend',
      'JWT authentication',
      'Normalized PostgreSQL schema',
      'Dockerized for repeatable deployment',
    ],
    github: 'https://github.com/MandeepChauhan9756/inventory-management-system',
    demo: '',
  },
  {
    name: 'E-Commerce Platform Backend',
    tagline: 'DRF REST API',
    category: 'Backend',
    stack: ['Django', 'DRF', 'MySQL', 'Redis', 'Razorpay'],
    description:
      'Engineered a DRF-based REST API handling product/category management, shopping cart, and order processing logic, secured end-to-end with JWT authentication.',
    highlights: [
      'Product & category management',
      'Shopping cart and order processing',
      'JWT-secured endpoints',
      'Razorpay payment integration',
      'Redis caching on product listing queries',
    ],
    github: 'https://github.com/MandeepChauhan9756/chikara-enterprises',
    demo: '',
  },
  {
    name: 'CRM Automation & Notification System',
    tagline: 'Event-driven backend service',
    category: 'Backend',
    stack: ['Python', 'FastAPI', 'Redis', 'WhatsApp Business API'],
    description:
      'Designed and built an event-driven notification system automating multi-channel sales communication via the WhatsApp Business API, cutting manual follow-up effort.',
    highlights: [
      'Event-driven notification system',
      'Multi-channel sales communication',
      'WhatsApp Business API integration',
      'Reduced manual follow-up effort',
    ],
    github: '',
    demo: '',
  },
  {
    name: 'Django REST Authentication & CRUD Platform',
    tagline: 'Reusable auth + CRUD backend',
    category: 'Backend',
    stack: ['Python', 'Django', 'DRF', 'MySQL', 'Swagger/OpenAPI'],
    description:
      'Built a reusable authentication and CRUD backend with JWT-based login and role-based access control (RBAC), documenting and testing REST endpoints via Swagger/OpenAPI and Postman.',
    highlights: [
      'JWT-based login',
      'Role-based access control (RBAC)',
      'CRUD REST endpoints',
      'Documented with Swagger/OpenAPI',
      'Tested with Postman',
    ],
    github: '',
    demo: '',
  },
]

export const dataScienceProjects = [
  {
    name: 'Employee Salary Prediction',
    tagline: 'End-to-end ML pipeline',
    category: 'Data Science / ML',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'XGBoost', 'Streamlit'],
    description:
      'Built an end-to-end machine learning pipeline to predict employee salaries — from data cleaning through model comparison to a deployed Streamlit app.',
    highlights: [
      'Data cleaning, missing-value imputation, duplicate removal, outlier detection',
      'EDA with Pandas, NumPy, Matplotlib, Seaborn',
      'Feature engineering: label encoding, one-hot encoding, ColumnTransformer, feature scaling',
      'Trained and compared 6 regression models: Linear Regression, Decision Tree, Random Forest, Gradient Boosting, Extra Trees, XGBoost',
      'Evaluated with MAE, RMSE, and R² Score',
      'Best model: Extra Trees Regressor, R² ≈ 0.68',
      'Deployed as an interactive Streamlit web app for real-time predictions',
    ],
    github: 'https://github.com/MandeepChauhan9756/Employee-Salary-Prediction',
    demo: 'https://employee-salary-analytics.streamlit.app/',
  },
  {
    name: 'Netflix Data Analysis',
    tagline: 'Exploratory data analysis',
    category: 'Data Science / ML',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    description:
      'Performed end-to-end exploratory data analysis on the Netflix Movies and TV Shows dataset, cleaning and standardizing raw data to uncover content trends.',
    highlights: [
      'Data cleaning and standardization',
      'Trends across content type, release year, ratings, and genres',
      'Country-wise content distribution analysis',
      'Visualizations communicating business insights',
      "Insight into the platform's shifting focus between Movies and TV Shows",
    ],
    github: 'https://github.com/MandeepChauhan9756/Netflix-Data-Analysis',
    demo: '',
  },
]
