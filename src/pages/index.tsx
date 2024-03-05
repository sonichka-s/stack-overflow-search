import { Inter } from "next/font/google";
import QuestionList from "@/components/questions-list/questions-list";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <Provider store={store}>
      <QuestionList />
    </Provider>
  );
}
