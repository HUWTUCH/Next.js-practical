import ActiveLabel from '@/app/components/active-label';
import NotActiveLabel from '@/app/components/not-active-label';

export default function Home() {
  return (
    <div>
      <p>Hello</p>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </div>
  );
}
