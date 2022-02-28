import { Layout } from "@components/Layout";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster
          position="top-center"
          reverseOrder={true}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 3000,
            style: {
              background: "#fff",
              color: "#363636",
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
            error: {
              duration: 3000,
              theme: {
                primary: "red",
                secondary: "black",
              },
            },
          }}
        />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
