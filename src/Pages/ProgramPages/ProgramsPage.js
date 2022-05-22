import { Fragment, useState } from "react";
import { usePrograms } from "../../components/Program/hooks/use-programs";
import classes from "./ProgramsPage.module.css";
import ProgramCard from "../../components/Program/ProgramCard";
import Banner from "../../components/Layout/Banner";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import DeleteProgram from "../../components/AdminComponents/Program/DeleteProgram";

const ProgramsPage = () => {
  const [deleteProgramIsShown, setDeleteProgramIsShown] = useState(false);
  const [programDetails, setProgramDetails] = useState({
    id: 0,
    title: "Unknown",
  });

  const { data } = usePrograms();

  const admin = true;

  const deleteProgramHandler = () => {
    console.log(
      `Delete program ${programDetails.title} with ID: ${programDetails.id}`
    );
    setDeleteProgramIsShown(false);
  };

  const showDeleteProgramHandler = (program) => {
    setDeleteProgramIsShown(true);
    setProgramDetails(program);
  };

  const hideDeleteProgramHandler = () => {
    setDeleteProgramIsShown(false);
  };

  return (
    <Fragment>
      {deleteProgramIsShown && (
        <DeleteProgram
          program={programDetails}
          onClose={hideDeleteProgramHandler}
          onDelete={deleteProgramHandler}
        />
      )}
      {!admin && <Banner title="Our Programs" />}
      {admin && <AdminBanner programs={true} />}
      <div className={classes.gridContainer}>
        <div className={classes.programCardGrid}>
          {data.map((program) => {
            return (
              <ProgramCard
                key={program.id}
                id={program.id}
                title={program.program_title}
                image={program.photo_url}
                description={program.program_description}
                admin={admin}
                onDelete={() => showDeleteProgramHandler(program)}
                onUpdate={true}
                onClose={true}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ProgramsPage;
