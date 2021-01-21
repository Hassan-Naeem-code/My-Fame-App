import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const uploadRbSheet = () => {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        openDuration={250}
        height={400}
        dragFromTopOnly={true}
        customStyles={{
          container: {
            borderRadius: 22,
          },
          wrapper: {
            backgroundColor: '#00000050',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
       <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 5}}>
              <Text style={{color: 'gray', fontSize: 25, textAlign: 'center'}}>
                Queries....
              </Text>
              <FontAwesome
                name={'remove'}
                size={16}
                style={{color: 'white', textAlign: 'center'}}
              />
              <ScrollView>
                <Text style={{fontSize: 15}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </Text>
              </ScrollView>
            </View>
            <View style={{flex: 1}}></View>
          </View>
          <View style={{flex: 1}}></View>
        </View>

        {/* <YourOwnComponent /> */}
      </RBSheet>
    </View>
  );
};

export default uploadRbSheet;
