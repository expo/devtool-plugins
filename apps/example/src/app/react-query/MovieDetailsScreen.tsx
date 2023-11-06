import * as React from 'react';
import { View, RefreshControl, StyleSheet, ScrollView } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import { LoadingIndicator } from '@/react-query/components/LoadingIndicator';
import { ErrorMessage } from '@/react-query/components/ErrorMessage';
import { useRefreshByUser } from '@/react-query/hooks/useRefreshByUser';
import { fetchMovie, MovieDetails } from '@/react-query/lib/api';
import type { MoviesStackNavigator } from '@/react-query/types';

type MoviesDetailsScreenNavigationProp = NativeStackNavigationProp<
  MoviesStackNavigator,
  'MovieDetails'
>;

type Props = {
  navigation: MoviesDetailsScreenNavigationProp;
  route: RouteProp<MoviesStackNavigator, 'MovieDetails'>;
};

export default function MovieDetailsScreen({ route }: Props) {
  const { isPending, error, data, refetch } = useQuery<MovieDetails, Error>({
    queryKey: ['movie', route.params.movie.title],
    queryFn: () => fetchMovie(route.params.movie.title),
    initialData: route.params.movie as MovieDetails,
  });

  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

  if (isPending) return <LoadingIndicator />;
  if (error) return <ErrorMessage message={error.message}></ErrorMessage>;
  if (!data) return null;

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={isRefetchingByUser} onRefresh={refetchByUser} />}>
      <View style={styles.titleRow}>
        <Title>
          {data.title} ({data.year})
        </Title>
      </View>
      {data.info ? (
        <>
          <View style={styles.infoRow}>
            <Paragraph>{data.info.plot}</Paragraph>
          </View>
          <View style={styles.actorsRow}>
            <Paragraph>
              {data.info.actors.slice(0, -1).join(', ') + ' or ' + data.info.actors.slice(-1)}
            </Paragraph>
          </View>
        </>
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    margin: 20,
  },
  infoRow: {
    flexDirection: 'row',
    margin: 20,
  },
  actorsRow: {
    flexDirection: 'column',
    margin: 20,
    marginTop: 10,
  },
});
