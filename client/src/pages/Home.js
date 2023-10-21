import AddClientModal from "../components/AddClientModal";
import Clients from '../components/Client'

export default function Home() {
    return (
      <>
        <div className='d-flex gap-3 mb-4'>
          <AddClientModal />
        </div>
        <hr />
        <Clients />
      </>
    );
  }