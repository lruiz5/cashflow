import React from "react";
import { StyleSheet, RefreshControl, ScrollView } from "react-native";
import { Card, Layout, Text } from "@ui-kitten/components";
import { NavigationProp } from "@react-navigation/native";
import { TableList } from "../components/TableList";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen = ({ navigation }: RouterProps) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <>
      <Layout style={styles.topContainer} level="2">
        <Card style={styles.card}>
          <Text category="s2">Planned Income</Text>
          <Text category="c1">with a circle chart</Text>
          <Text category="c1">$5,000</Text>
        </Card>

        <Card style={styles.card}>
          <Text category="s2">Paycheck Planner</Text>
          <Text category="c1">with a circle chart</Text>
        </Card>
      </Layout>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TableList />
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  topContainer: {
    paddingTop: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableContainter: {
    flex: 1,
    minHeight: 100,
  },
  card: {
    flex: 1,
    margin: 9,
    borderWidth: 0,
  },
  tablecard: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    margin: 9,
  },
});
