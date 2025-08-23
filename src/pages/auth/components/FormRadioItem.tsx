import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';

type FormSelectItemProps = {
  role: string;
  setRole: (role: string) => void;
};

const FormRadioItem = ({ role, setRole }: FormSelectItemProps) => {
  return (
    <Container>
      <Typography variant='subtitle1' weight='medium' as='label'>
        사용자 유형
      </Typography>
      <RadioWrapper>
        <RadioLabel selected={role === 'ROLE_CUSTOMER'}>
          <input
            type='radio'
            name='role'
            value='ROLE_CUSTOMER'
            checked={role === 'ROLE_CUSTOMER'}
            onChange={(e) => setRole(e.target.value)}
          />
          손님
        </RadioLabel>
        <RadioLabel selected={role === 'ROLE_OWNER'}>
          <input
            type='radio'
            name='role'
            value='ROLE_OWNER'
            checked={role === 'ROLE_OWNER'}
            onChange={(e) => setRole(e.target.value)}
          />
          사장님
        </RadioLabel>
      </RadioWrapper>
    </Container>
  );
};

export default FormRadioItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const RadioWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const RadioLabel = styled.label<{ selected: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[70]};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  font-weight: ${({ theme, selected }) =>
    selected
      ? theme.typography.fontWeight.medium
      : theme.typography.fontWeight.regular};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.text.white : theme.colors.text.default};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.owner.main : theme.colors.gray[0]};
`;
