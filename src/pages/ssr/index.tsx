type SsrProps = {
  serverTime: string;
};
export default function Index({ serverTime }: SsrProps) {
  return (
    <div>
      <h1>SSR (getServerSideProps)</h1>
      <p>
        Page was rendered at{" "}
        <span>{new Date(serverTime).toLocaleTimeString()}</span>
      </p>
      <link rel={"prefetch"} href={"/"} />
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { serverTime: new Date().toISOString() },
  };
}
