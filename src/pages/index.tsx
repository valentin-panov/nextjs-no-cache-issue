import { GetStaticProps } from "next";

type HomeProps = {
  renderDate: string;
};
export default function Home({ renderDate }: HomeProps) {
  return (
    <div>
      <h1>HOME (getStaticProps)</h1>
      <p>
        Page was rendered at{" "}
        <span>{new Date(renderDate).toLocaleTimeString()}</span>
      </p>
      <link rel={"prefetch"} href={"/ssr"} />
    </div>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  return {
    props: { renderDate: new Date().toISOString() },
  };
}
