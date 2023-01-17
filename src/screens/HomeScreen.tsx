import React from 'react'
import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components';
import { usePokemonPaginated } from '../hooks';
import { styles } from '../theme'

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
        <Image 
          source={ require('../assets/pokebola.png') }
          style={ styles.pokebolaBG }
        />
        <View style={{ alignItems: 'center' }}>
        <FlatList 
          data={ simplePokemonList }
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={ false }
          numColumns={ 2 }
          // Header
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10
            }}>
              Pokedex
            </Text>
          )}
          renderItem={ ({ item }) => (
            <PokemonCard pokemon={ item } />
          )}
          onEndReached={ loadPokemons }
          onEndReachedThreshold={ 0.4 }
          ListFooterComponent={(
            <ActivityIndicator 
              style={{ height: 100 }} 
              size={ 20 }
              color='grey'
            />
          )}
        />
        </View>

        {/* <Text style={{
          ...styles.title,
          ...styles.globalMargin,
          top: top + 20
          }}>Pokedex</Text> */}
    </>
  )
}