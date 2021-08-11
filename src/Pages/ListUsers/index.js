import React from "react";

import { Link } from "react-router-dom";

import { getUsers, deleteUser } from "../../Storage/actions";

import { formatCPF, formatPhone } from "../../Utils/format";

import SmallButton from "../../Components/SmallButton/index";
import Notification from "../../Components/Notification/index";

import style from "./style.module.scss";
class Ranking extends React.Component {
  state = {
    allUsers: [],
    loading: false,
    notification: false,
  };
  componentDidMount() {
    const data = getUsers();
    this.setState((prevState) => ({
      ...prevState,
      allUsers: data,
    }));
  }

  onDelete = (id) => {
    const response = deleteUser(id);
    this.setState((prevState) => ({
      ...prevState,
      allUsers: response,
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
    const { allUsers, notification } = this.state;
    return (
      <>
        {notification && (
          <Notification
            title="Sucesso!"
            description="Usuário deletado com sucesso."
            typeNotification="success"
          />
        )}
        <div className="pb-separate-base">
          <div className="container">
            <h2 className="text-center text-semibold uppercase pt-separate-base">
              Listagem de usuários
            </h2>
            {allUsers.length ? (
              <div className={style.containerResponsive}>
                <table className={style.customers}>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>CPF</th>
                      <th>Email</th>
                      <th>Telefone</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.map((item, index) => (
                      <tr key={index}>
                        <td>{item.nome}</td>
                        <td>{formatCPF(item.cpf)}</td>
                        <td>{item.email}</td>
                        <td>{formatPhone(item.telefone)}</td>
                        <td>
                          <SmallButton
                            onClick={() => this.onDelete(index)}
                            label="Deletar"
                            color="danger"
                          ></SmallButton>
                          <Link
                            to={{
                              pathname: "/",
                              state: { data: { ...item, id: index } },
                            }}
                          >
                            <SmallButton
                              label="Editar"
                              color="primary"
                            ></SmallButton>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className={style.notData}>
                Ops! No momento não há usuários cadastrados.
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Ranking;
