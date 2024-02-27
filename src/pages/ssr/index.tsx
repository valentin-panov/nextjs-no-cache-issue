type SsrProps = {
  serverTime: string;
};
export default function Index({ serverTime }: SsrProps) {
  return (
    <div>
      <p>getServerSideProps: {serverTime}</p>
      <p>
        Server time <span>{new Date(serverTime).toLocaleTimeString()}</span>
      </p>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { serverTime: new Date().toISOString() },
  };
}
