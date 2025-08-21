import Typography from '@/components/UI/Typography';
import { ROUTE_PATH } from '@/routes/paths';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type TabNavigationProps = {
  selected: string;
};

const TabNavigation = ({ selected }: TabNavigationProps) => {
  return (
    <TabSection>
      <TabContainer>
        <TabItem
          to={ROUTE_PATH.FEEDBACK_ALL}
          isSelected={selected === ROUTE_PATH.FEEDBACK_ALL}
        >
          <Typography
            variant='subtitle2'
            color={selected === ROUTE_PATH.FEEDBACK_ALL ? 'white' : 'default'}
          >
            전체
          </Typography>
        </TabItem>
        <TabItem
          to={ROUTE_PATH.FEEDBACK_PENDING}
          isSelected={selected === ROUTE_PATH.FEEDBACK_PENDING}
        >
          <Typography
            variant='subtitle2'
            color={
              selected === ROUTE_PATH.FEEDBACK_PENDING ? 'white' : 'default'
            }
          >
            대기 중
          </Typography>
        </TabItem>
        <TabItem
          to={ROUTE_PATH.FEEDBACK_COMPLETED}
          isSelected={selected === ROUTE_PATH.FEEDBACK_COMPLETED}
        >
          <Typography
            variant='subtitle2'
            color={
              selected === ROUTE_PATH.FEEDBACK_COMPLETED ? 'white' : 'default'
            }
          >
            완료
          </Typography>
        </TabItem>
      </TabContainer>
    </TabSection>
  );
};

export default TabNavigation;

const TabSection = styled.section`
  display: flex;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[5]}`};
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing[2]};
  gap: ${({ theme }) => theme.spacing[3]};
`;

const TabItem = styled(Link)<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.owner.main : theme.colors.gray[40]};
  cursor: pointer;
`;
