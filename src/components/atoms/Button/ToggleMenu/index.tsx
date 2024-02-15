import ToggleMenuSvg from '@/assets/icons/ToggleMenuSvg';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import useToggleMenu from '@/hooks/useToggleMenu';

export interface ToggleMenuProp {
  type: 'profile' | 'post' | 'records';
}

function ToggleMenu({ type }: ToggleMenuProp) {
  const { isOpen, toggleMenu, closeMenu } = useToggleMenu();
  return (
    <div role="presentation" onBlur={closeMenu}>
      <button type="button" onClick={toggleMenu}>
        <ToggleMenuSvg />
      </button>
      {isOpen && <ToggleItems type={type} />}
    </div>
  );
}

export default ToggleMenu;
