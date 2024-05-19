import { HashLoader } from "react-spinners";

export const Loader = ({
  loading = false,
  size = 150,
  className,
}: {
  loading: boolean;
  size: number;
  className?: string;
}) => {
  return (
    <HashLoader
      className={className}
      color={"#A388EE"}
      loading={loading}
      size={size}
    />
  );
};
