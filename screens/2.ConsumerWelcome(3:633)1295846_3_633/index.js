import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_8_704} />
      <View style={styles.View_7_823}>
        <Text style={styles.Text_7_823}>Welcome!</Text>
      </View>
      <View style={styles.View_7_831}>
        <View style={styles.View_7_824}>
          <View style={styles.View_I7_824_7_553}>
            <Text style={styles.Text_I7_824_7_553}>Get Started</Text>
          </View>
        </View>
        <View style={styles.View_7_826}>
          <View style={styles.View_I7_826_7_581}>
            <Text style={styles.Text_I7_826_7_581}>Log In</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_1061}>
        <View style={styles.View_7_1062}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bf0edd4-ff4c-40b1-ba13-7d6df5ea53c9"
            }}
            style={styles.ImageBackground_7_1063}
          />
          <View style={styles.View_7_1065}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/daa611d8-801d-4693-846f-141d6dd15926"
              }}
              style={styles.ImageBackground_7_1066}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d9d2dfd-b04a-4636-a6c9-1a2d25306408"
              }}
              style={styles.ImageBackground_7_1068}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7aa2401d-aaa8-46db-94eb-f99bff695577"
              }}
              style={styles.ImageBackground_7_1070}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a11628b-5cfa-4dd3-bf39-cd94127c6779"
              }}
              style={styles.ImageBackground_7_1072}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d4f8626-6068-4371-8dcb-4c7c4d8ff676"
              }}
              style={styles.ImageBackground_7_1074}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8d4d89f-5f56-41b6-9f40-423863aea855"
              }}
              style={styles.ImageBackground_7_1076}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8f9b6a0-4b54-4112-a94f-77c40c0fc80d"
              }}
              style={styles.ImageBackground_7_1078}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3ae0b2b-90e5-4d4d-b225-1430a510fbb8"
              }}
              style={styles.ImageBackground_7_1080}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af55c248-32fe-4e22-9e4d-fe78239ec2c2"
              }}
              style={styles.ImageBackground_7_1082}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15f92b4a-0471-4461-9104-9fd7a2a1d019"
              }}
              style={styles.ImageBackground_7_1084}
            />
          </View>
          <View style={styles.View_7_1086}>
            <View style={styles.View_7_1087}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bc25650-17fb-4903-8d30-54c3daa30d98"
                }}
                style={styles.ImageBackground_7_1088}
              />
              <View style={styles.View_7_1089}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e4df7a9-af7f-4f9e-bb07-91d21e351448"
                  }}
                  style={styles.ImageBackground_7_1090}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bc20b93-7cf0-4006-987c-6f7374fc7ed7"
                  }}
                  style={styles.ImageBackground_7_1091}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba577ea3-75be-4906-b4e6-8673d5098c28"
                  }}
                  style={styles.ImageBackground_7_1093}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b23917a2-5172-4f1d-8a65-8c2c77063ce2"
                  }}
                  style={styles.ImageBackground_7_1094}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a1c0d1f-7b83-48cb-8fe5-af85f5a99fca"
                  }}
                  style={styles.ImageBackground_7_1096}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0eb67fc2-ce61-429f-869d-f22c9a805210"
                  }}
                  style={styles.ImageBackground_7_1098}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c77084e1-0677-4d46-b4e8-74bfa2df6ee3"
              }}
              style={styles.ImageBackground_7_1100}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79cbd3e6-ef7b-4e4a-96f5-6caf3645b955"
              }}
              style={styles.ImageBackground_7_1101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c225980a-7ff5-4696-8a0d-df05c8d4b33a"
              }}
              style={styles.ImageBackground_7_1102}
            />
          </View>
          <View style={styles.View_7_1104}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b1dbbb2-1279-4c16-ac79-7809623e76e6"
              }}
              style={styles.ImageBackground_7_1105}
            />
            <View style={styles.View_7_1106}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da9c11c7-3c20-4f6f-b25c-30462f7e3985"
                }}
                style={styles.ImageBackground_7_1107}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b61cc84-239f-4944-afb9-896c3cd21268"
                }}
                style={styles.ImageBackground_7_1109}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/284704a6-e746-464c-a3d3-3da2ec590559"
              }}
              style={styles.ImageBackground_7_1111}
            />
          </View>
          <View style={styles.View_7_1113}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ede3f0ad-1a39-468f-aadd-dc3222820f1b"
              }}
              style={styles.ImageBackground_7_1114}
            />
            <View style={styles.View_7_1116}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c28f0c78-c95d-4a72-af02-add5d7211a2b"
                }}
                style={styles.ImageBackground_7_1117}
              />
              <View style={styles.View_7_1118}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8fda41c-a6ad-4595-a997-9a4cddbb17bb"
                  }}
                  style={styles.ImageBackground_7_1119}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c4bffbc-6761-4c56-9b98-ecca85302d91"
                  }}
                  style={styles.ImageBackground_7_1120}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3aa550aa-d97a-4475-9488-3cfcb519e8c6"
                  }}
                  style={styles.ImageBackground_7_1122}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18ab3a12-98e4-4c14-995e-8e2cef32115e"
                  }}
                  style={styles.ImageBackground_7_1123}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/746ef3a3-b9d3-4800-9de7-8abae5009d4c"
                  }}
                  style={styles.ImageBackground_7_1125}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a663d2e-0b17-4ea4-9616-b1b721b254ac"
                  }}
                  style={styles.ImageBackground_7_1127}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac328675-c9ea-4535-9c82-d11ced30500b"
              }}
              style={styles.ImageBackground_7_1129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d1158fc-9e60-4940-b63b-d7983c8b33d6"
              }}
              style={styles.ImageBackground_7_1130}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d91d1e6-55d0-4298-8166-6e5f45d1fecd"
            }}
            style={styles.ImageBackground_7_1132}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7a779ea-fd5f-4c1d-929d-5641267dec3a"
            }}
            style={styles.ImageBackground_7_1133}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0376e99a-9b26-4a58-afbd-c84c4f884b8b"
            }}
            style={styles.ImageBackground_7_1134}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/931d232d-3d17-4ed0-84cf-d2236da4ff2f"
            }}
            style={styles.ImageBackground_7_1135}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/818893f1-ba77-4cc6-a29a-becf7093d809"
            }}
            style={styles.ImageBackground_7_1136}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05783c7b-a76a-41d4-90f5-610f8b0fd68e"
            }}
            style={styles.ImageBackground_7_1138}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3557f285-a357-4bfb-9a5a-e15510267126"
            }}
            style={styles.ImageBackground_7_1139}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec0d1b80-68ac-4e19-8b2d-dead337d9978"
            }}
            style={styles.ImageBackground_7_1141}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3feca7bc-c58c-4b24-bdfe-c9d15626c950"
            }}
            style={styles.ImageBackground_7_1143}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98975b46-a3c6-440e-84a3-2ce9f5f0d1b2"
            }}
            style={styles.ImageBackground_7_1145}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edf23c7c-6954-420d-9926-bd373300e99f"
            }}
            style={styles.ImageBackground_7_1147}
          />
          <View style={styles.View_7_1148}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afb5e419-44a8-4cc2-8449-6bf0aabe28d6"
              }}
              style={styles.ImageBackground_7_1149}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/559a9a56-f259-4ab5-a7b9-0bedd4fa43b5"
            }}
            style={styles.ImageBackground_7_1151}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a71e8b92-0f58-4892-8283-ec44a8b3a089"
            }}
            style={styles.ImageBackground_7_1152}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf8d05bb-68dd-42be-8f4a-fcebe2966c6b"
            }}
            style={styles.ImageBackground_7_1153}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac1ea3d6-8145-4109-89d6-43cc02e448d9"
            }}
            style={styles.ImageBackground_7_1154}
          />
          <View style={styles.View_7_1156}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/915d81ee-0247-41be-a7ec-b58f9db842e4"
              }}
              style={styles.ImageBackground_7_1157}
            />
            <View style={styles.View_7_1159}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fda4f97a-fd83-4a86-9a4b-cc5df0316f16"
                }}
                style={styles.ImageBackground_7_1160}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70fd7311-778d-46fc-96c6-eb9bbb280ab4"
                }}
                style={styles.ImageBackground_7_1162}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbe0c40f-d3c0-4755-856f-c88931e3fd62"
                }}
                style={styles.ImageBackground_7_1163}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db698e93-e2ce-48d4-8f90-5d24fab2a12b"
                }}
                style={styles.ImageBackground_7_1164}
              />
            </View>
          </View>
          <View style={styles.View_7_1165}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/991f8c53-616e-4b8f-8054-9733bff2f39c"
              }}
              style={styles.ImageBackground_7_1166}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61de7c92-29b6-4fdd-871b-10407e8002b3"
              }}
              style={styles.ImageBackground_7_1168}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4fb4f25-016a-4c47-b33e-805e3febd986"
              }}
              style={styles.ImageBackground_7_1170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/925c3297-13a3-4c26-9ec4-f07471312f93"
              }}
              style={styles.ImageBackground_7_1172}
            />
          </View>
          <View style={styles.View_7_1174}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7e58d7b-590d-47f1-8a0a-d8a5a75f7d21"
              }}
              style={styles.ImageBackground_7_1175}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfa19fb6-66c9-40da-8cbb-201bc8a556cb"
              }}
              style={styles.ImageBackground_7_1177}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f341bd19-ffaa-4e45-9d56-9c8686d38991"
              }}
              style={styles.ImageBackground_7_1179}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71ca401c-024f-4d3b-adaa-c7d2b554a251"
              }}
              style={styles.ImageBackground_7_1181}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47742b3e-797f-4031-ab10-f83fb19c8b3e"
            }}
            style={styles.ImageBackground_7_1183}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b615d46c-2457-4bdb-9678-39989d49f7be"
            }}
            style={styles.ImageBackground_7_1184}
          />
          <View style={styles.View_7_1185}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aed80b3d-a48d-4df9-975e-5c48135658b7"
              }}
              style={styles.ImageBackground_7_1186}
            />
            <View style={styles.View_7_1188}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae08829e-5224-4fef-8712-ea838f2ead6f"
                }}
                style={styles.ImageBackground_7_1189}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bbb40ab-0513-4706-8729-7fee1e57a37b"
              }}
              style={styles.ImageBackground_7_1191}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30f85087-d0a9-4146-89c6-8db45313d7a7"
              }}
              style={styles.ImageBackground_7_1193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3245df54-ceab-4c01-972c-76fd2f4510d2"
              }}
              style={styles.ImageBackground_7_1195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a604d3e6-6a5b-404c-9a09-f553c9394c34"
              }}
              style={styles.ImageBackground_7_1197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4aee7258-d1f2-4ddc-a28b-02bdb3a61388"
              }}
              style={styles.ImageBackground_7_1199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/836855ce-6544-4131-aa78-51af933c23c3"
              }}
              style={styles.ImageBackground_7_1201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f47aff4d-36df-495d-b158-6a21876fb64d"
              }}
              style={styles.ImageBackground_7_1203}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fabdce62-32f6-48fd-8724-d526e1af76f6"
              }}
              style={styles.ImageBackground_7_1205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5824188-20d9-407e-adb2-2f2cfd270d50"
              }}
              style={styles.ImageBackground_7_1207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b0bfa01-c946-499b-b702-c752bf7cf497"
              }}
              style={styles.ImageBackground_7_1209}
            />
          </View>
          <View style={styles.View_7_1211}>
            <View style={styles.View_7_1212}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/904b051d-e153-4255-9adc-c97dc62c0969"
                }}
                style={styles.ImageBackground_7_1213}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8eaa1be-9c89-465f-a5d1-88866ae2f5c3"
              }}
              style={styles.ImageBackground_7_1215}
            />
            <View style={styles.View_7_1217}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09548887-94e1-4360-b4a4-9c5a6b0b99a2"
                }}
                style={styles.ImageBackground_7_1218}
              />
            </View>
          </View>
          <View style={styles.View_7_1220}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdd90c9b-3d4c-49ea-bac2-c9891e3e7124"
              }}
              style={styles.ImageBackground_7_1221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f98146fe-3fcc-4b10-abfe-3bfb37c27782"
              }}
              style={styles.ImageBackground_7_1222}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e246a40a-1fde-4be2-b7c9-a05bf0833eba"
            }}
            style={styles.ImageBackground_7_1224}
          />
          <View style={styles.View_7_1286}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3bc82bd-2ae0-4065-82af-6a9a5ad7cfbf"
              }}
              style={styles.ImageBackground_7_1287}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5e4518a-69cc-4e95-99f0-9572c45bc4e7"
              }}
              style={styles.ImageBackground_7_1289}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_8_692}>
        <Text style={styles.Text_8_692}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_45_12785}>
        <View style={styles.View_45_12786}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/823c544a-9b29-48c5-83ae-2d9d0c386e79"
            }}
            style={styles.ImageBackground_45_12787}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/086059e0-acd7-4b86-a01e-35f22ab5a3e9"
          }}
          style={styles.ImageBackground_45_12793}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_8_704: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0
  },
  View_7_823: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("46%"),
    justifyContent: "center"
  },
  Text_7_823: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_831: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("68%")
  },
  View_7_824: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I7_824_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I7_824_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_826: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_826_7_581: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I7_826_7_581: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_1061: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_7_1062: {
    width: wp("32%"),
    height: hp("68%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1063: {
    width: wp("29%"),
    height: hp("59%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_7_1065: {
    width: wp("32%"),
    height: hp("65%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1066: {
    width: wp("26%"),
    height: hp("51%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_7_1068: {
    width: wp("16%"),
    height: hp("31%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_7_1070: {
    width: wp("9%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_7_1072: {
    width: wp("9%"),
    height: hp("17%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_7_1074: {
    width: wp("4%"),
    height: hp("64%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_7_1076: {
    width: wp("9%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1078: {
    width: wp("9%"),
    height: hp("17%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1080: {
    width: wp("4%"),
    height: hp("64%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_7_1082: {
    width: wp("32%"),
    height: hp("5%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1084: {
    width: wp("32%"),
    height: hp("5%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1086: {
    width: wp("14%"),
    height: hp("19%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_7_1087: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_7_1088: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1089: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1090: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1091: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1093: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_7_1094: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1096: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_7_1098: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_7_1100: {
    width: wp("8%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1101: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1102: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_7_1104: {
    width: wp("7%"),
    height: hp("18%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_7_1105: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1106: {
    width: wp("3%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1107: {
    width: wp("2%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1109: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1111: {
    width: wp("7%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1113: {
    width: wp("11%"),
    height: hp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_7_1114: {
    width: wp("6%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1116: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_7_1117: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1118: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_7_1119: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1120: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1122: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_7_1123: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1125: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1127: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1129: {
    width: wp("7%"),
    height: hp("12%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1130: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1132: {
    width: wp("9%"),
    height: hp("24%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_7_1133: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_7_1134: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_7_1135: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_7_1136: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_7_1138: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_7_1139: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_7_1141: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_7_1143: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_7_1145: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_7_1147: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_7_1148: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_7_1149: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1151: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_7_1152: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_7_1153: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_7_1154: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_7_1156: {
    width: wp("6%"),
    height: hp("14%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_7_1157: {
    width: wp("5%"),
    height: hp("12%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1159: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_7_1160: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1162: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1163: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1164: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_7_1165: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_7_1166: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1168: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1170: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1172: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1174: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_7_1175: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1177: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1179: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1181: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1183: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_7_1184: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_7_1185: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_7_1186: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1188: {
    width: wp("7%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1189: {
    width: wp("7%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1191: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_7_1193: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1195: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_7_1197: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_7_1199: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_7_1201: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_7_1203: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_7_1205: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_7_1207: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_7_1209: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_7_1211: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_7_1212: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1213: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1215: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1217: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_7_1218: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_1220: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_7_1221: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1222: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1224: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_7_1286: {
    width: wp("14%"),
    height: hp("14%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_7_1287: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_7_1289: {
    width: wp("11%"),
    height: hp("12%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_692: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_8_692: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_12785: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("10%")
  },
  View_45_12786: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12787: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12793: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
