import { ReactNode } from 'react';
import './App.css';
import { useDoorsOfDurin } from './context/moria/feature/doors-of-durin/ui/hook/useDoorsOfDurin';
import { DoorsOfDurinPage } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin';
import { DoorsOfDurinViewState } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin/DoorsOfDurinViewState';
import { WelcomeToMoriaViewState } from './context/moria/feature/doors-of-durin/ui/pages/WelcomeToMoria/WelcomeToMoriaViewState';
import { WelcomeToMoria } from './context/moria/feature/doors-of-durin/ui/pages/WelcomeToMoria';
import { AppLayout } from './shared/layout/ui/components/appLayout';

function App() {
  const { viewState, changeForm, enter } = useDoorsOfDurin();

  const content = (): ReactNode => {
    if (viewState instanceof DoorsOfDurinViewState) {
      return (
        <DoorsOfDurinPage
          viewState={viewState}
          changeForm={changeForm}
          enter={enter}
        />
      );
    } else if (viewState instanceof WelcomeToMoriaViewState) {
      return <WelcomeToMoria viewState={viewState} />;
    }
  };

  return (
    <AppLayout>
      {content()}
    </AppLayout>
  );
}

export default App;
