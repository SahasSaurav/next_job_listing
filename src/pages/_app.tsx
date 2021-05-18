import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import JobProvider from "../context/JobContext";
import "../styles/tailwind.css";

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
