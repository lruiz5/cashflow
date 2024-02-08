import React from "react";
import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Card, List, Text, Layout } from "@ui-kitten/components";

const data = [
  {
    id: 1,
    name: "Income",
  },
  {
    id: 2,
    name: "Giving",
  },
  {
    id: 3,
    name: "Household",
  },
  {
    id: 4,
    name: "Food",
  },
];

export const TableList = (): React.ReactElement => {
  const renderItem = (
    info: ListRenderItemInfo<{ id: number; name: string }>
  ): React.ReactElement => (
    <Layout
      key={info.item.id}
      pointerEvents="none"
      style={styles.tableContainter}
      level="2"
    >
      <Card style={styles.tablecard}>
        <Text category="s2" appearance="hint">
          {info.item.name}
        </Text>
      </Card>
    </Layout>
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 900,
  },
  contentContainer: {},
  item: {
    marginVertical: 4,
  },
  tableContainter: {
    flex: 1,
  },
  tablecard: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    margin: 9,
    borderWidth: 0,
  },
});
