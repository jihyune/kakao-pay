const ApprovalPage = () => {
  const urlParams = new URL(window.location.href).searchParams;

  const pgToken = urlParams.get("pg_token");

  return (
    <div>
      <p>approval</p>
      <p>pg token : {pgToken}</p>
    </div>
  );
};

export default ApprovalPage;
