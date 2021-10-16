import React from 'react';

import { FlatList } from 'react-native';

import { ProviderItem } from '../ProviderItem';

export function Providers({ categoryId, providers, navigation }) {
    const handleClickProvider = provider => navigation.navigate('ProviderDetails', {
        providerId: provider.item.id
    });

    const renderProvider = provider => {
        return provider.item.categoryId === categoryId
        && <ProviderItem
            provider={provider.item}
            handleClickProvider={() => handleClickProvider(provider)} />
    }

    return (
        <FlatList data={providers}
            renderItem={renderProvider}
            keyExtractor={provider => provider._id} />
    );
}