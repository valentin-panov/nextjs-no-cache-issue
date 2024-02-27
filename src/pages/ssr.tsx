type SsrProps = {
  serverTime: string;
}
export default function Ssr({ serverTime }: SsrProps) {

  return (
    <div>
      <h1>getServerSideProps</h1>
      <p>props: {serverTime}</p>
      <p>Server time <span>{new Date(serverTime).toLocaleTimeString()}</span></p>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { serverTime: new Date().toISOString() }
  };
}