import { BookingWidget, Footer, Navbar } from '../JohnnyCutzPage';

export const dynamic = 'force-static';

export default function BookingPage() {
  return <main><Navbar/><div className="pt-16"><BookingWidget/></div><Footer/></main>;
}
