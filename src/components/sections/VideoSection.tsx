"use client";

const VideoSection = () => {
  const videos = ["wKVQe7numrY", "sXvb7QBR4y4", "6kNi4J7z9TY", "8Va89MMNbSo"];

  return (
    <section className="mt-24 lg:mt-32" aria-labelledby="video-section-title">
      <h2
        id="video-section-title"
        className="text-[38px]/13 lg:text-[43px]/17 font-bold text-blue-950"
      >
        <span className="text-amber-300">Обучение проходит</span> в игровой
        форме
      </h2>

      <p className="font-medium text-lg max-w-115 my-5">
        Каждое занятие выстраивается индивидуально с учетом интересов и
        возможностей ребёнка.
      </p>

      <ul className="mt-9 lg:mt-15 grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-6">
        {videos.map((id) => (
          <li key={id}>
            <article>
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
                title="Видео логопеда"
              ></iframe>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VideoSection;
