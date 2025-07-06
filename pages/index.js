import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sainath Papudipu | Portfolio</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8 text-gray-800 font-sans">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Sainath Papudipu</h1>
          <p className="text-lg text-gray-600">Software Engineer 1 | React | Redux Toolkit | Tailwind CSS</p>
          <div className="mt-2 space-x-4 text-blue-600">
            <a href="mailto:sainathpapudipu@gmail.com">Email</a>
            <a href="https://linkedin.com/in/sainath-papudipu" target="_blank">LinkedIn</a>
            <a href="https://github.com/sainathp98" target="_blank">GitHub</a>
          </div>
        </header>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
          <p>
            Results-oriented Software Engineer with 3.5 years of experience in building responsive and scalable web apps using React.js,
            TypeScript, and modern CSS frameworks. Skilled in performance optimization, user-centric design, and Agile collaboration.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Core:</strong> React, TypeScript, JavaScript, HTML5, Next.js</li>
            <li><strong>State Management:</strong> Redux, Redux Toolkit</li>
            <li><strong>Styling:</strong> Tailwind CSS, Material UI, CSS3</li>
            <li><strong>Tools:</strong> Axios, Git, GitHub, React Hook Form, Postman, Figma</li>
            <li><strong>Deployment:</strong> Netlify, Vercel</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Experience</h2>
          <h3 className="text-lg font-bold text-gray-700">Software Engineer 1 – Upgrad (Hyderabad) | Aug 2022 – Present</h3>
          <p className="mt-2 font-semibold">Project 1: Website & Platform</p>
          <ul className="list-disc list-inside ml-4">
            <li>Developed Home, Course, Category, and Payment Success pages using React, TypeScript, Tailwind</li>
            <li>Implemented SEO and userEvents tracking</li>
            <li>Built reusable UI component libraries</li>
          </ul>
          <p className="mt-2 font-semibold">Project 2: Learn Platform</p>
          <ul className="list-disc list-inside ml-4">
            <li>Timezone-aware scheduling & 1:1 session flows</li>
            <li>Live session hierarchy with role-based permissions</li>
            <li>Used Material UI and Redux Toolkit for feature control</li>
            <li>Pricing and content gating integrated via APIs</li>
          </ul>
          <h3 className="mt-4 text-lg font-bold text-gray-700">Associate Software Engineer – Intern, Upgrad | Feb 2022 – Aug 2022</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Built responsive UI components using React + Material UI</li>
            <li>Worked with QA teams to debug and release features</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
          <p>B.Tech in Civil Engineering – Yogi Vemana University (2016 – 2020)</p>
        </section>
      </main>
    </>
  );
}
