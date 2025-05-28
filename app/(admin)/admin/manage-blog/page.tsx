import ManageBlog from "@/client_component/ManageBlog";
import { Suspense } from 'react'
const Manage = () => {


  return (
    <Suspense>
      <ManageBlog />
    </Suspense>
  );
};

export default Manage;
