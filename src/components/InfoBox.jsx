/* eslint-disable react/prop-types */
const InfoBox = ({ name, email, education, employment }) => {
  return (
    <div className="pt-5 grid grid-cols-2 gap-5">
      <div>
        <h1 className="font-okine font-bold text-brand-green">Name</h1>
        <p className="font-okine text-off-white">{name}</p>
      </div>
      <div>
        <h1 className="font-okine font-bold text-brand-green">Email</h1>
        <p className="font-okine text-off-white">{email}</p>
      </div>
      <div>
        <h1 className="font-okine font-bold text-brand-green">Education</h1>
        <p className="font-okine text-off-white">{education}</p>
      </div>
      <div>
        <h1 className="font-okine font-bold text-brand-green">Employment</h1>
        <p className="font-okine text-off-white">{employment}</p>
      </div>
    </div>
  );
};

export default InfoBox;
