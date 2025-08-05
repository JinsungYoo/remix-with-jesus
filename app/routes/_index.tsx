import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "With Jesus Community" },
    { name: "description", content: "믿음으로 함께 걷는 여정에 초대합니다." },
  ];
};

export default function Index() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          예수님과 함께 걷는<br />조용한 동행의 시작
        </h1>
        <p className="mt-4 text-lg text-gray-600 italic">
          A quiet journey of walking with Jesus
        </p>

        <div className="mt-12 border-l-4 border-blue-400 pl-6 italic text-gray-700 text-sm sm:text-base">
          “But he knows the way that I take; when he has tested me, I will come forth as gold.”
          <br />
          <span className="block mt-2 text-gray-500">— Job 23:10</span>
        </div>
      </div>
    </section>
  );
}
