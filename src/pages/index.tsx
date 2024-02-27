import { GetStaticProps } from "next";

type HomeProps = {
  renderDate: string;
};
export default function Home({ renderDate }: HomeProps) {
  return (
    <div>
      <p>getStaticProps: {renderDate}</p>
      <p>
        I was rendered at{" "}
        <span>{new Date(renderDate).toLocaleTimeString()}</span>
      </p>
    </div>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  return {
    props: { renderDate: new Date().toISOString() },
  };
}
