import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { store } from "../store/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
};

export default MyApp;
