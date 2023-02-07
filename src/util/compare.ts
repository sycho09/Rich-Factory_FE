export default function compare(a: any, b: any) {
  return a._id > b._id ? -1 : 1;
}
