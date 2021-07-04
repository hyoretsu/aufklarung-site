import { StyledButton } from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
 return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
