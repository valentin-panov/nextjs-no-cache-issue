import { GetStaticProps } from "next";
import * as console from "console";

type HomeProps = {
  renderDate: string;
  context: GetStaticProps;
};
export default function Home({ renderDate, context }: HomeProps) {
  console.log(context);
  return (
    <div>
      <h1>HOME (getStaticProps)</h1>
      <p>
        Page was rendered at{" "}
        <span>{new Date(renderDate).toLocaleTimeString()}</span>
      </p>
    </div>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  return {
    props: { renderDate: new Date().toISOString(), context },
  };
}
