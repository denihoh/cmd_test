import { useSelector } from "react-redux";
import CyrillicToTranslit from "cyrillic-to-translit-js";

const cyrillicToTranslit = new CyrillicToTranslit();

function Result() {
  const fields = useSelector((state) => state.form.fields);
  return (
    <div>
      <div>Ф.И.О.: {cyrillicToTranslit.transform(fields.name)}</div>
      <div>Возраст: {fields.age}</div>
      <div>email: {fields.email}</div>
      <div>Дата записи: {fields.date}</div>
      <div>
        Место жительства: {cyrillicToTranslit.transform(fields.address)}
      </div>
      <div>Время записи: {fields.time}</div>
    </div>
  );
}
export default Result;
