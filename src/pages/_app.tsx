import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import "../styles/tailwind.css";
import JobProvider from "../context/JobContext";

const queryClient=new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <JobProvider>
        <Component {...pageProps} />
        </JobProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
