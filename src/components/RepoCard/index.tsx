import React, { FC } from "react";
import moment from "moment";

import { Edges } from "../../dtos/RepositoriesDTO";

import {
  Container,
  Title,
  Description,
  CreateAt,
  RepoCardSeparator,
} from "./styles";

interface Props {
  data: Edges;
}

export const RepoCard: FC<Props> = (props) => {
  const { name, description, createdAt } = props.data.node;

  const formattedDate = moment(createdAt).format("DD/MM/YYYY");

  return (
    <Container>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <CreateAt>Criado em: {formattedDate}</CreateAt>
    </Container>
  );
};

export { RepoCardSeparator };
