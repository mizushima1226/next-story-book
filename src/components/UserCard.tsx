import { VFC } from "react";
import { Avatar, AvatarBadge, Wrap, WrapItem, Text, Flex } from "@chakra-ui/react"

export type Props = {
  image: string;
  name: string;
  login?: boolean | null;
}

export const UserCard: VFC<Props> = (props) => {
  const { image, name, login = null } = props;
  return (
    <Wrap>
      <WrapItem maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Flex alignItems="center" >
          <Avatar name={name} src={image} mr={2} border="teal">
            {login === null ? null : login ? <AvatarBadge boxSize="1em" bg="green.500" /> : <AvatarBadge boxSize="1.25em" bg="tomato" />}
          </Avatar>
          <Text>{name || "ゲストさん"}</Text>
        </Flex>
      </WrapItem>
    </Wrap>
  )
} 