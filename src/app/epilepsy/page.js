"use client"
import Image from 'next/image'
import Carousel from '../components/Carousel'

const page = () => {
  return (
    <>
      <div>
        <Carousel />

        {/* Our Mission */}

        <div className="w-full p-6 md:flex md:p-16 bg-[#fedada] items-center relative">
          <div className="md:w-1/2  shadow-sm">
            <h2 className="text-5xl  mt-4 font-bold text-[#c30404] mb-4">
              Our Mission
            </h2>
            <ul className=" text-base mb-5">
              <li>
                - To help children and parents fight the challenges of living
                with epilepsy in Pakistan
              </li>
              <li>- To optimize therapy and stop seizures</li>
              <li>
                - To offer timely referrals, counter the social stigma and save
                lives
              </li>
              <li className="mt-5">
                Seeing a child seize is extremely frightening. It is common for
                parents to feel anxious as another seizure may occur causing
                permanent harm and even death to their child. Shifaam Childhood
                epilepsy helpline aims to provide:
              </li>
              <li className="mt-4">- Guidance to parents & caregivers</li>
              <li> - Appropriate medical care</li>
              <li> - Urgent referrals</li>

              <li className="mt-5">
                At Shifaam Childhood epilepsy helpline, calls are answered 7
                days a week in Urdu and English. The helpline does not provide
                medical services, diagnosis, treatment recommendations or
                laboratory test analysis. Our representatives provide
                information based upon culturally modified, published materials
                adopted from the epilepsy foundation and CDC as per Alliance of
                Information and Referral Systems guidelines.
              </li>

              <li className="mt-4">
                - Providing information regarding seizure first aid
              </li>
              <li>- Ensuring compliance of the medications</li>
              <li>
                - Providing awareness regarding the basics of childhood epilepsy
              </li>
              <li>
                - Answering to questions about epilepsy and seizures in children
              </li>
              <li>- Linking parents to resources in the community</li>
              <li>- Arranging referrals when needed</li>
              <li>
                - Getting help paying for medicines for the non-affording
                patients
              </li>
              <li>
                - Finding mental health resources and connecting parents to the
                psychologists to help them with the stress
              </li>
              <li>
                - Help with the management of children living with epilepsy so
                they can lead a normal life
              </li>
            </ul>
          </div>
          <div className=" hidden md:w-1/2 lg:block ">
            <Image width={500} height={500} className=" relative left-[61px] w-full object-contain " src="/hand2.png" alt="img" />
          </div>
        </div>

        {/* drop down */}

        <div className="w-full md:flex">
          <div className="md:w-1/2 mt-4 px-6 md:px-12">
            <h2 className="text-4xl  mt-4 font-bold text-[#c30404] mb-4">
              Frequently asked Question
            </h2>
            <section className="w-full divide-y rounded divide-slate-200 ">
              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  What is Epilepsy?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  A seizure is a sudden, uncontrolled electrical disturbance in
                  the brain. Seizures are the main sign of epilepsy. Some
                  seizures can look like staring spells. Other seizures cause a
                  person to fall, shake, and lose awareness of what’s going on
                  around them.
                </p>
              </details>

              <details className="p-4 group" >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  What is Seizure?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  A seizure is a sudden, uncontrolled electrical disturbance in
                  the brain. Seizures are the main sign of epilepsy. Some
                  seizures can look like staring spells. Other seizures cause a
                  person to fall, shake, and lose awareness of what’s going on
                  around them.
                </p>
              </details>

              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  What are the difference seizure and epilepsy?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  Seizure is a symptom while epilepsy is a disease. Anyone can
                  potentially have a seizure but it does not spontaneously mean
                  that they could have epilepsy. Epilepsy is a brain disorder
                  associated with increased susceptibility to seizures.
                </p>
              </details>

              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  What are the main causes of epliepsy?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  For 2 in 3 people, the cause of epilepsy is unknown. This type
                  of epilepsy is called cryptogenic or idiopathic epilepsy.
                  However, some of the known causes for epilepsy are stroke,
                  brain infections, traumatic brain injury (during birth or
                  later in life), hypoxia at birth, brain malformations, brain
                  tumors, genetic disorders (such as Down’s syndrome), and
                  neurologic disorders (such as Alzheimer’s disease)
                </p>
              </details>

              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  How long do seizures usually last?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  A seizure might last from a few seconds to a few minutes
                  (usually not more than 5 minutes). It depends on the type of
                  seizure.
                </p>
              </details>

              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  What can trigger an epileptic Seizure?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  There are a number of different things that can trigger a
                  seizure, such as mental stress, lack of sleep, poor nutrition,
                  high-grade fever, flickering/flashing lights, etc. The
                  triggers are different from person to person therefore it is
                  important that a person knows what can trigger their seizure.
                </p>
              </details>

              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  Who is the risk?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  Anyone can develop epilepsy. Epilepsy affects people of all
                  ages, races, gender, and ethnic backgrounds.
                </p>
              </details>

              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  How is epilepsy dianosed?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  When a person has two or more unprovoked seizures, they are
                  considered to have epilepsy. A doctor’s first tool in
                  diagnosing epilepsy is a careful medical history, followed by
                  thorough examination and few investigations that may or may
                  not include an EEG (electroencephalograph), blood tests, and
                  radiological imaging such as an MRI (magnetic resonance
                  imaging) and/or CT (computerized tomography).{" "}
                </p>
              </details>
              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  Which docter diagnose and treat epilepsy?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  Different specialties can diagnose and treat epilepsy. In the
                  pediatric age group, epilepsy is usually diagnosed and treated
                  by a pediatric epileptologist, pediatric neurologist, or
                  pediatrician. In adults, neurologist and family physician
                  usually diagnoses and treats epilepsy.
                </p>
              </details>

              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  How epilepsy treareted?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  The most common treatment for epilepsy is medication. There
                  are a number of medications that control different types of
                  seizures. Epilepsy may also be treated with special devices
                  such as a Vagus Nerve Stimulator (VNS), a special diet, and
                  sometimes brain surgery..
                </p>
              </details>

              <details className="p-4 group " >
                <summary className="relative cursor-pointer list-none pr-8 font-bold text-red-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-red-900  [&::-webkit-details-marker]:hidden">
                  What can I do to manage my epilepsy?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-500">
                  Self-management is what you do to take care of yourself. You
                  can learn how to manage seizures and keep an active and full
                  life. Begin by lowering stress, getting enough sleep, taking
                  your medication on time, keeping a seizure record, recognizing
                  your seizure triggers, and talking with your doctor when you
                  have questions.
                </p>
              </details>
            </section>
          </div>
          <div className="md:w-1/2 mt-48">

            <img className="" src="/mind.jpg" alt="img" />

          </div>





        </div>
      </div>
    </>
  );
};

export default page;