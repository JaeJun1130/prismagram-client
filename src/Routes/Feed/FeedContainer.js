import { useQuery } from "@apollo/client";
import React from "react";
import { FEED_QUERY } from "./FeedMutation";
import FeedPresenter from "./FeedPresenter";

const FeedContainer = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  return <FeedPresenter data={data} loading={loading} />;
};

export default FeedContainer;
