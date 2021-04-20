import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
  return (
    <header className='header'>
      <h1>
        <Icon icon={locationIcon} /> Wildfire Tracker (Powered by NASA)
      </h1>
      {/* <button className=''>Fires</button> */}
      {/* <button>Storms</button> */}
    </header>
  );
};

export default Header;
