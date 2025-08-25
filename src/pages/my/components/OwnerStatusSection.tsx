import Typography from '@/components/UI/Typography';
import styled from '@emotion/styled';
import { User } from 'lucide-react';
import useStoreMy from '@/pages/main/hooks/useStoreMy';
import useUser from '@/pages/main/hooks/useUser';
import StatusBox from './StatusBox';

const OwnerStatusSection = () => {
  const { userData, isLoading: userLoading } = useUser();
  const { store, isLoading } = useStoreMy();
  if (isLoading || !store || userLoading || !userData) {
    return null;
  }

  return (
    <Container>
      <Card>
        <Information>
          <IconBox>
            <User size={32} />
          </IconBox>
          <InformationBox>
            <Typography variant='title2' weight='bold'>
              {userData.nickname}
            </Typography>
            <Typography variant='body1'>{store.name}</Typography>
            <TypoBox>
              <Typography variant='body2'>{store.category}</Typography>
            </TypoBox>
          </InformationBox>
        </Information>
        <Line />
        <StatusBox storeId={store.id.toString()} />
      </Card>
    </Container>
  );
};

export default OwnerStatusSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 16px;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[8]}`};
  width: 100%;
  max-width: 450px;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[2]};
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.gray[30]};
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const TypoBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.tag.COMPLAINT};
`;

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.owner.main};
`;
