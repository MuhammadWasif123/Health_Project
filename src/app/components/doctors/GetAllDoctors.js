import DoctorCard from "./DoctorCard";
import { aboutDoctor } from "./doctorCardData";

export default function GetAllDoctors() {
  return (
    <>
      {aboutDoctor.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          id={doctor.id}
          name={doctor.name}
          img={doctor.img}
          experience={doctor.experience}
          reviews={doctor.reviews}
          speciality={doctor.speciality}
          pmcVerified={doctor.pmcVerified}
        />
      ))}
    </>
  );
}
