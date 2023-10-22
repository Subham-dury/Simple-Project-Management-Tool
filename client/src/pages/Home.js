import AddClientModal from "../components/AddClientModal";
import Clients from '../components/Client'
import Project from "../components/Project";

export default function Home() {
    return (
      <>
        <div className='d-flex gap-3 mb-4'>
          <AddClientModal />
        </div>
        <Project/>
        <hr />
        <Clients />
      </>
    );
  }