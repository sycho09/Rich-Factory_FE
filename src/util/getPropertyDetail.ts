interface getPropertyDetailProps {
  [key: string]: any;
}
export function getPropertyDetail(
  item: getPropertyDetailProps,
  data: getPropertyDetailProps
) {
  return Object.keys(item).reduce((acc, pre) => {
    return { ...acc, [item[pre] as keyof getPropertyDetailProps]: data[pre] };
  }, {});
}
