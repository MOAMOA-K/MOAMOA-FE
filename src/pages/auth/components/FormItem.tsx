import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';

type FormItemProps = {
  value: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormItem = ({
  value,
  label,
  type,
  placeholder,
  onChange,
}: FormItemProps) => {
  return (
    <Container>
      <Typography variant='subtitle1' weight='medium' as='label'>
        {label}
      </Typography>
      <Input
        id={type}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default FormItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.gray[70]};
  border-radius: 12px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.gray[0]};

  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;
