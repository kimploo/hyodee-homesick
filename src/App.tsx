import { GlobalStyle } from './GlobalStyle';
import { CalendarAndContact } from './Pages/CalendarAndContact';
import { HappyMoment } from './Pages/HappyMoment';
import { Main } from './Pages/Main';
import { Notice } from './Pages/Notice';
import { Location } from './Pages/Location';
import Account from './Pages/Account';

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
      <Notice />
      <CalendarAndContact />
      <HappyMoment />
      <Location />
      <Account />
    </div>
  );
};
