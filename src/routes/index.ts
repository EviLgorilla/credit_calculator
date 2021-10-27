import { BankPage } from "../pages/bank-page";
import { CreditPage } from "../pages/credit-page";

type route = {
    id: number,
    component: any,
    navigation: string,
    path: string
}

const routes: Array<route> = [
    {
        id: 1,
        component: BankPage,
        navigation: "Bank",
        path: "/"
    },
    {
        id: 2,
        component: CreditPage,
        navigation: "Credit calculator",
        path: "/credit"
    }
];

export { routes };
