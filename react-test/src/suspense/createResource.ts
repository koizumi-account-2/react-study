const createResource = <T>(promise: Promise<T>) => {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read(): T {
      if (status === "pending") {
        throw suspender; // Suspenseに処理を委譲
      } else if (status === "error") {
        throw result;
      } else {
        return result;
      }
    },
  };
};

export default createResource;