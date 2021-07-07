import I18n from "@dbenfouzari/i18n";
import { useContext } from "react";
import { I18nContext } from "../i18n-provider";

const useI18n = () => {
  const i18n = useContext(I18nContext);
};

export default useI18n;
