import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { setFieldValue, validate } from "../modules/formSlice";
import { useNavigate } from "react-router-dom";

import { AddressSuggestions } from "react-dadata";

function Home() {
  const navigate = useNavigate();
  const fields = useSelector((state) => state.form.fields);
  const errors = useSelector((state) => state.form.errors);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Ф.И.О.</Form.Label>
          <Form.Control
            value={fields.name}
            onChange={(event) => {
              dispatch(
                setFieldValue({ name: "name", value: event.target.value })
              );
            }}
            onBlur={() => {
              dispatch(validate());
            }}
            placeholder="Введите ваше имя"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ваш возраст</Form.Label>
          <Form.Control
            value={fields.age}
            onChange={(event) => {
              dispatch(
                setFieldValue({ name: "age", value: event.target.value })
              );
            }}
            onBlur={() => {
              dispatch(validate());
            }}
            type="number"
            placeholder="Введите ваш возраст"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={fields.email}
            onChange={(event) => {
              dispatch(
                setFieldValue({ name: "email", value: event.target.value })
              );
            }}
            onBlur={() => {
              dispatch(validate());
            }}
            type="email"
            placeholder="Введите email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Дата записи</Form.Label>
          <Form.Control
            value={fields.date}
            onChange={(event) => {
              dispatch(
                setFieldValue({ name: "date", value: event.target.value })
              );
            }}
            onBlur={() => {
              dispatch(validate());
            }}
            type="date"
            placeholder="Выберете дату посещения"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ваш адрес</Form.Label>
          <AddressSuggestions
            token="541abc59eb2146dab1c3e64fe4d528190fec45e9"
            value={fields.address}
            onChange={(event) => {
              console.log("строка", event);
              dispatch(setFieldValue({ name: "address", value: event.value }));
            }}
          />
        </Form.Group>
        <div></div>
        <Form.Select
          value={fields.time}
          onChange={(event) => {
            dispatch(
              setFieldValue({ name: "time", value: event.target.value })
            );
          }}
        >
          <option>Выбере время</option>
          {[...new Array(23)]
            .map((el, i) => (
              <option value={i}>
                {i + ":00"} - {i + 1 + ":00"}
              </option>
            ))
            .slice(7, 19)}
        </Form.Select>
        <div>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              if (Object.keys(errors).length === 0) {
                navigate("/result");
              }
            }}
          >
            Записаться
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
