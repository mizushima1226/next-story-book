import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

export type Props = {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { children, loading = false, disabled = false } = props
  return (
    <Button disabled={disabled} isLoading={loading} color="white" bg="teal" _hover={{ opacity: "0.8" }}>{children}</Button>
  );
};