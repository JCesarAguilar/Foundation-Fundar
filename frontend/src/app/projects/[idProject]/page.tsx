"use client";

import Image from "next/image";
import PaymentModal from "@/components/projects/PaymentModal";
import BackButton from "@/components/common/BackButton";
import Loading from "@/components/common/Loading";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProject } from "@/interfaces/IProject";
import { H2, P1, TitleProject } from "@/components/common/Typography";
import { GoArrowRight } from "react-icons/go";
import { getProjectById } from "@/services/project.services";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/helpers/NavItems";
import ProjectGoalProgress from "@/components/projects/ProjectGoalProgress";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.idProject as string;
  const router = useRouter();
  const { dataUser } = useAuth();

  const [projectData, setProjectData] = useState<IProject | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const handleDonate = () => {
    if (!dataUser) {
      router.push(PATHROUTES.LOGIN);
      return;
    }
    setSelectedProjectId(projectId);
  };

  useEffect(() => {
    const fetchProjectById = async () => {
      try {
        setIsLoading(true);
        const project = await getProjectById(projectId as string);
        if (!project) return notFound();
        setProjectData(project);
      } catch (err) {
        console.error("Error obterniendo el producto", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjectById();
  }, [projectId]);

  if (isLoading) return <Loading />;

  if (!projectData) {
    return <p className="text-center py-20">Cargando proyecto...</p>;
  }

  const [lastWord, ...rest] = projectData.title.split(" ").reverse();
  const firstPart = rest.reverse().join(" ");

  return (
    <section className="relative bg-gray-soft lg:pt-20 lg:pb-30 px-5 lg:px-30 ">
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <div className="relative z-10">
        <BackButton />
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-30 lg:py-15 py-6">
          <div className="lg:w-1/2">
            <Image
              src={projectData.imageUrls[0]}
              alt={`Imagen de ${projectData.title}`}
              width={1400}
              height={1400}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between lg:gap-6 gap-3 lg:w-1/2 ">
            <TitleProject className="text-center lg:text-left">
              {firstPart}
              <br />
              <span>{lastWord}</span>
            </TitleProject>
            <P1 className="pb-5 lg:pb-3">{`${projectData.resume}`}</P1>

            <button
              type="button"
              onClick={handleDonate}
              className="btn-primary lg:self-start"
            >
              DONATE
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:pt-15 lg:pb-30 pb-15 lg:gap-30 gap-10 py-5">
          <div className=" flex flex-col lg:gap-7 lg:w-1/2 gap-3">
            <H2 className="text-center lg:text-left">DESCRIPTION</H2>
            <P1 className="text-justify">{projectData.description}</P1>
          </div>

          <div className="flex flex-col lg:gap-7 gap-5 justify-start lg:w-1/2 ">
            <H2 className="text-center lg:text-left">PROJECT DETAILS</H2>
            <ProjectGoalProgress
              goal={projectData.goalAmount}
              raised={projectData?.currentAmount ?? 0}
            />
            <div className="flex gap-2 items-center pt-2">
              <GoArrowRight className="text-blue-strong font-extrabold text-3xl" />
              <P1>
                <span className="font-semibold">Country:</span>{" "}
                {projectData.country}
              </P1>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 pb-15 lg:pb-0">
          <div className="flex flex-col gap-5">
            <Image
              src={projectData.imageUrls[1]}
              alt={`Imagen de ${projectData.title}`}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full "
            />
            <Image
              src={projectData.imageUrls[2]}
              alt={`Imagen de ${projectData.title}`}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full "
            />
          </div>

          <div>
            <Image
              src={projectData.imageUrls[3]}
              alt={`Imagen de ${projectData.title}`}
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {selectedProjectId && (
        <PaymentModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </section>
  );
}
