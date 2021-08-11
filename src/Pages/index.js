import React from "react";

import { createUser, updateUser } from "../Storage/actions";

import Input from "../Components/Form/Input/index";
import Notification from "../Components/Notification/index";
import Button from "../Components/buttons/index";
class Home extends React.Component {
  state = {
    notification: false,
    form: {
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
    },
  };

  componentDidMount() {
    const { location } = this.props;
    if (location.state) {
      this.setState((prevState) => ({
        ...prevState,
        form: location.state.data,
      }));
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { location } = this.props;
    const { form } = this.state;
    form.cpf = form.cpf.replace(/[^\d]/g, "");
    form.telefone = form.telefone.replace(/[^0-9]+/g, "");

    if (location.state?.data) {
      updateUser(form);
    } else {
      createUser(form);
    }

    this.setState((prevState) => ({
      ...prevState,
      notification: true,
    }));
    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        notification: false,
      }));
    }, 5000);
  };

  render() {
    const { location } = this.props;
    const { notification, form } = this.state;
    const { nome, cpf, email, telefone } = form;

    return (
      <>
        {notification && (
          <Notification
            title="Sucesso!"
            description={`Usuário ${
              location.state?.data ? "salvo" : "cadastrado"
            } com sucesso.`}
            typeNotification="success"
          />
        )}
        <div className="pb-separate-base">
          <div className="container">
            <h2 className="text-center text-semibold uppercase pt-separate-base">
              {location.state?.data ? "Editar usuário" : "Criar novo usuário"}
            </h2>
            <p className="text-center">
              Use o formulário abaixo para criar um novo usuário. Os campos
              marcados com * são de preenchimento obrigatório.
            </p>

            <form
              className="row pt-separate-base"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <div className="md-8">
                <Input
                  label="Nome completo*"
                  type="nome"
                  required
                  value={nome}
                  onChange={this.handleChange}
                  name="nome"
                />
              </div>
              <div className="md-4">
                <Input
                  mask="999.999.999-99"
                  label="CPF*"
                  type="text"
                  required
                  value={cpf}
                  onChange={this.handleChange}
                  name="cpf"
                  pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                  title="Digite um CPF no formato: xxx.xxx.xxx-xx"
                />
              </div>
              <div className="md-8">
                <Input
                  label="E-mail*"
                  type="email"
                  required
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="md-4">
                <Input
                  mask="(99)9999-9999"
                  label="Telefone*"
                  type="tel"
                  required
                  value={telefone}
                  onChange={this.handleChange}
                  name="telefone"
                />
              </div>
              <div className="md-12 pt-small-separate">
                <Button
                  color="primary"
                  label={location.state?.data ? "Salvar" : "Cadastrar"}
                  className="btn-primary bg-primary text-white "
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
