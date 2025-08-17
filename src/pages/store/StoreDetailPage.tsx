import { useParams } from 'react-router-dom';

export default function StoreDetailPage() {
  const { id } = useParams<{ id: string }>(); // "/store/:id"
  // id로 데이터 로딩/표시
  return <div>Store #{id}</div>;
}
