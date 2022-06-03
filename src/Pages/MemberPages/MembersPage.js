import { Fragment, useEffect, useState } from "react";

import LoadingSpinnerLarge from "../../components/UI/LoadingSpinnerLarge";
import { useGetMembers } from "../../components/AdminComponents/Members/hooks/use-members";
import Modal from "../../components/UI/Modal";
import MembersList from "../../components/AdminComponents/Members/MembersList";
import classes from "./MembersPage.module.css";
import AdminBanner from "../../components/AdminComponents/Layout/AdminBanner";
import Sort from "../../components/AdminComponents/Members/Sort";

const MembersPage = () => {
  const [searchParam, setSearchParam] = useState("");
  const [programId, setProgramId] = useState(null);
  const [addMemebersList, setAddMembersList] = useState([]);

  const getSearchParamHandler = (data) => {
    setSearchParam(data);
  };

  const getAddUserProgramId = (data) => {
    setProgramId(data);
  };

  const fetchAddMembersListHandler = (data) => {
    setAddMembersList(data);
  };

  // Write a warning modal that fires if admin has not added users.
  // write a confrimation modal that shows list of users that have been added to the program.
  // Get a list of user names and program name.

  useEffect(() => {
    console.log(addMemebersList);

    if (programId != null) {
      console.log(programId);
      if (addMemebersList.length != 0) {
        console.log("Add Users to Program")
        setProgramId(null);
      } else {
        console.log("Please select user before adding to program")
        setProgramId(null);
      }
    }
  }, [addMemebersList, programId])

  // Write add members to program handler
  // On click of add button retreive the members array from the MembersList component

  // create hook to get all members
  const { data: membersData, isLoading, refetch: refetchMembers } = useGetMembers(searchParam);

  useEffect(() => {
    refetchMembers();
  }, [searchParam]) 

  // render loading
  if (isLoading) return <LoadingSpinnerLarge />;

  return (
    <Fragment>
      <AdminBanner
        members={true}
        searchBar={true}
        searchParam={getSearchParamHandler}
        addUserProgramId={getAddUserProgramId}
      />
      <div className={classes.container}>
        <Sort />
        <MembersList members={membersData} programId={programId} fetchAddMembersList={fetchAddMembersListHandler}/>
      </div>
    </Fragment>
  );
};

export default MembersPage;
