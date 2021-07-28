import { 
  MenuOutlined
} from '@ant-design/icons'; 
import "../style/NavButton.css";

const NavButton = () => {
  return (
    <>
      <div className="icon">
        <MenuOutlined className="iconPosition"/>
      </div>
    </>
  );
}

export default NavButton;