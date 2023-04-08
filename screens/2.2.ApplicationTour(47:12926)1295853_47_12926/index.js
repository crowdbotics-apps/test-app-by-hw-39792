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
      <View style={styles.View_47_12927} />
      <View style={styles.View_47_12928}>
        <Text style={styles.Text_47_12928}>Discover our App</Text>
      </View>
      <View style={styles.View_47_12929}>
        <View style={styles.View_47_12930}>
          <View style={styles.View_I47_12930_7_553}>
            <Text style={styles.Text_I47_12930_7_553}>Start using the App</Text>
          </View>
        </View>
        <View style={styles.View_47_12931}>
          <View style={styles.View_47_12932}>
            <Text style={styles.Text_47_12932}>Already have an account? </Text>
          </View>
          <View style={styles.View_47_12933}>
            <Text style={styles.Text_47_12933}> Login</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_12934}>
        <Text style={styles.Text_47_12934}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_47_12935}>
        <View style={styles.View_I47_12935_15_1088} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5253c210-27ea-4c54-a312-6f50ad28a823"
          }}
          style={styles.ImageBackground_I47_12935_15_1089}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d8354b9-3625-4658-8447-1e899c6debac"
          }}
          style={styles.ImageBackground_I47_12935_15_1090}
        />
      </View>
      <View style={styles.View_47_13113}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90338d13-9841-4e5b-ab3b-d6a722c0c312"
          }}
          style={styles.ImageBackground_I47_13113_10_3014}
        />
      </View>
      <View style={styles.View_47_13114}>
        <View style={styles.View_47_13115}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94101d86-3d5b-4a90-9c3c-b2edbf004260"
            }}
            style={styles.ImageBackground_47_13116}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a0eaf43-d041-4e51-9d59-45584c8f0d5a"
          }}
          style={styles.ImageBackground_47_13122}
        />
      </View>
      <View style={styles.View_47_13599}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c617498-ea40-4bf6-9cc7-5ce21f638f02"
          }}
          style={styles.ImageBackground_47_13600}
        />
        <View style={styles.View_47_13602}>
          <View style={styles.View_47_13603}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0137ad63-deed-40a7-bdcf-26655948c84f"
              }}
              style={styles.ImageBackground_47_13604}
            />
            <View style={styles.View_47_13606}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44635ab9-2999-42ed-8a09-373a0290e3a3"
                }}
                style={styles.ImageBackground_47_13607}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fbb6f48-f9ae-44a1-9628-84deab0de4bf"
                }}
                style={styles.ImageBackground_47_13609}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a229f987-92eb-491c-995a-d30186e0352a"
                }}
                style={styles.ImageBackground_47_13611}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4f4b51e-0103-4f5c-b5c4-2b4886ac2cb8"
                }}
                style={styles.ImageBackground_47_13613}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a2de879-2ee9-4782-a2d1-c5c832b0ad6d"
                }}
                style={styles.ImageBackground_47_13615}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61854a14-d962-4d79-84ef-854ea6143cb0"
                }}
                style={styles.ImageBackground_47_13617}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af7389a7-7db4-4fca-9d0e-6f0e87873ddd"
                }}
                style={styles.ImageBackground_47_13619}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a516fad6-e5ef-4f7c-8783-68c742ffecc4"
                }}
                style={styles.ImageBackground_47_13621}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53c0f8e0-a92a-409e-8da6-dc55d773c672"
                }}
                style={styles.ImageBackground_47_13623}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/754dd527-ea46-4357-b200-0ed19c8ac2a3"
                }}
                style={styles.ImageBackground_47_13625}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e1b7d41-b2af-4336-852e-c979333fd35b"
                }}
                style={styles.ImageBackground_47_13627}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45fa1d29-96c5-4021-9c6e-736059dd2bd8"
                }}
                style={styles.ImageBackground_47_13629}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82f6d96e-f7bb-4cc7-a7bd-cd40f34ab80a"
                }}
                style={styles.ImageBackground_47_13631}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fdc1c6c-cb11-4a87-8db2-567214a5b658"
          }}
          style={styles.ImageBackground_47_13633}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ba913bf-b142-407a-94bb-c962efdc5f08"
          }}
          style={styles.ImageBackground_47_13635}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e4f5593-fcf6-4ddd-b3f8-a6347dcd4aeb"
          }}
          style={styles.ImageBackground_47_13637}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ccc3d41-9082-4ff9-aced-e365e60b20dd"
          }}
          style={styles.ImageBackground_47_13639}
        />
        <View style={styles.View_47_13641}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1d55bc8-4986-4269-b027-6993d30a317a"
            }}
            style={styles.ImageBackground_47_13642}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15bb1a4e-1b31-4217-8cd1-a0c209bd98de"
            }}
            style={styles.ImageBackground_47_13644}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bc2dddf-27d0-43e0-af9f-496953c43a92"
            }}
            style={styles.ImageBackground_47_13646}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c819f79-8af2-46b3-a518-4dbe18fcdcdd"
            }}
            style={styles.ImageBackground_47_13648}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dbf4bd0-0503-4e66-8440-8c2276322bc6"
            }}
            style={styles.ImageBackground_47_13650}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/197df928-f9c7-4a5e-855d-a2cca49a8994"
            }}
            style={styles.ImageBackground_47_13652}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67e0108f-c990-4aad-b270-8c820fdb580f"
            }}
            style={styles.ImageBackground_47_13654}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfc2b04d-a132-479c-a3fc-228649536746"
            }}
            style={styles.ImageBackground_47_13656}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd7c319d-b73c-405a-9b5e-4591ebdbe333"
            }}
            style={styles.ImageBackground_47_13658}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c07f809-0f9e-4549-944c-3c9b11ec01f6"
            }}
            style={styles.ImageBackground_47_13660}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2847ef1-9fe5-4863-8ce0-2aa1a3f8896a"
            }}
            style={styles.ImageBackground_47_13662}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7be5d75e-f2b8-4140-b6de-0af75673227f"
            }}
            style={styles.ImageBackground_47_13664}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a2d7f94-d1e4-425a-b7a1-6655295caa4c"
          }}
          style={styles.ImageBackground_47_13666}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e983105e-2378-4201-a6ed-88811697476c"
          }}
          style={styles.ImageBackground_47_13668}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79ffe47e-47c5-4b0f-824a-8aa277d16633"
          }}
          style={styles.ImageBackground_47_13670}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/853398a2-c275-4831-bfd7-31ad45461634"
          }}
          style={styles.ImageBackground_47_13672}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1054b721-3efe-4bab-a73d-e66aff9f25ce"
          }}
          style={styles.ImageBackground_47_13674}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbc6e4d7-1d92-4607-8678-9facf7d2abba"
          }}
          style={styles.ImageBackground_47_13676}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83beb6a6-9022-4840-9e76-23db7a7e80e5"
          }}
          style={styles.ImageBackground_47_13678}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/941b84c7-8fa0-4552-a2c4-33240a93c6bc"
          }}
          style={styles.ImageBackground_47_13680}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cfe33db-5b60-4dd4-b3f3-3c491903cee6"
          }}
          style={styles.ImageBackground_47_13682}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3c1dc1f-eeac-4441-bcfb-b8654205a4be"
          }}
          style={styles.ImageBackground_47_13684}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52e82b0a-1148-403a-948b-9dc64556ac7e"
          }}
          style={styles.ImageBackground_47_13686}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1d14feb-6b74-4fec-b1bf-434fdf82c601"
          }}
          style={styles.ImageBackground_47_13688}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d382f2f-cf91-4c5e-9fe3-4faae060a790"
          }}
          style={styles.ImageBackground_47_13690}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72033d49-051b-43ed-9766-6e087c68ab4c"
          }}
          style={styles.ImageBackground_47_13692}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfa8d0ba-087f-409d-915d-ce92d974edc6"
          }}
          style={styles.ImageBackground_47_13694}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31541cb4-5e87-48f8-99a3-2c3209a7360b"
          }}
          style={styles.ImageBackground_47_13696}
        />
        <View style={styles.View_47_13698}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5deeaf2-81c6-46e6-a381-b9713fc4d8cd"
            }}
            style={styles.ImageBackground_47_13699}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/512ba533-74e4-4b20-8fc4-a8c7af103c00"
            }}
            style={styles.ImageBackground_47_13701}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9afa34bb-44ab-42b2-9a59-27415600edfe"
          }}
          style={styles.ImageBackground_47_13703}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bc8222b-187c-4234-9f9f-c5b87116c37f"
          }}
          style={styles.ImageBackground_47_13705}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e17591f6-4e10-479e-a94a-84e0b8326693"
          }}
          style={styles.ImageBackground_47_13707}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ac14350-dd98-4d75-9be0-00ffe0db1ccd"
          }}
          style={styles.ImageBackground_47_13709}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f26d9d20-3127-4ce1-823b-e5acc60a8275"
          }}
          style={styles.ImageBackground_47_13711}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40cec482-2a75-4afd-adb0-b0dfbf3404b6"
          }}
          style={styles.ImageBackground_47_13713}
        />
        <View style={styles.View_47_13715}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c699dd61-8004-444f-9f1e-c9d302fc3fb6"
            }}
            style={styles.ImageBackground_47_13716}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f65ea881-a251-467a-a008-ac2f1bcc4ce9"
            }}
            style={styles.ImageBackground_47_13718}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01dffef3-2a02-49a8-8021-61a132d805c5"
            }}
            style={styles.ImageBackground_47_13720}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8e4082e-bdc5-44a0-921a-e79bb19c6e57"
          }}
          style={styles.ImageBackground_47_13722}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6a7a159-df47-4677-8dd8-17a26bcd7ca7"
          }}
          style={styles.ImageBackground_47_13724}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5657ad27-4a70-4dd7-8116-eabeddf8abef"
          }}
          style={styles.ImageBackground_47_13726}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b16d7c3-c62f-4b82-a802-5b2b7b02d31e"
          }}
          style={styles.ImageBackground_47_13728}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ef05ebc-e691-419d-9db5-6b23218a94d8"
          }}
          style={styles.ImageBackground_47_13730}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06b21394-527a-4916-8e84-252954a7d563"
          }}
          style={styles.ImageBackground_47_13732}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91511195-4782-4435-94cb-34d6f935c41c"
          }}
          style={styles.ImageBackground_47_13734}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1b0c01f-8576-4d44-bf2e-d037f64cdcbf"
          }}
          style={styles.ImageBackground_47_13736}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7196235-31d6-41bb-a81b-ef8a65fda0f2"
          }}
          style={styles.ImageBackground_47_13738}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f4316e7-8424-4307-a5f3-b207526f6099"
          }}
          style={styles.ImageBackground_47_13740}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1eb1310e-94fd-4201-878d-bd1a55332b48"
          }}
          style={styles.ImageBackground_47_13742}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_47_12927: {
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
  View_47_12928: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    justifyContent: "center"
  },
  Text_47_12928: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12929: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("68%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_12930: {
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
  View_I47_12930_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_12930_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12931: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_12932: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_12932: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12933: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_12933: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12934: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_47_12934: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12935: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_12935_15_1088: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I47_12935_15_1089: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_12935_15_1090: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_47_13113: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I47_13113_10_3014: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_47_13114: {
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
  View_47_13115: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13116: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13122: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_47_13599: {
    width: wp("45%"),
    height: hp("89%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_47_13600: {
    width: wp("16%"),
    height: hp("34%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_47_13602: {
    width: wp("16%"),
    height: hp("34%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_47_13603: {
    width: wp("16%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13604: {
    width: wp("16%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_13606: {
    width: wp("16%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13607: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13609: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_47_13611: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_47_13613: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_47_13615: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_47_13617: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_47_13619: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13621: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_47_13623: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_47_13625: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_47_13627: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_47_13629: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_47_13631: {
    width: wp("1%"),
    height: hp("43%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_47_13633: {
    width: wp("8%"),
    height: hp("7%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_47_13635: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_47_13637: {
    width: wp("36%"),
    height: hp("54%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_47_13639: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_47_13641: {
    width: wp("16%"),
    height: hp("27%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_47_13642: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_47_13644: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_47_13646: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_47_13648: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_47_13650: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_47_13652: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_47_13654: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_47_13656: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_47_13658: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13660: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_47_13662: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13664: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_47_13666: {
    width: wp("21%"),
    height: hp("28%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_47_13668: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_47_13670: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_47_13672: {
    width: wp("3%"),
    height: hp("20%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13674: {
    width: wp("14%"),
    height: hp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13676: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_47_13678: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_47_13680: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_47_13682: {
    width: wp("11%"),
    height: hp("17%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_47_13684: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13686: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_47_13688: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_47_13690: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_47_13692: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_47_13694: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_47_13696: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_47_13698: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_47_13699: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13701: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13703: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13705: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_47_13707: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_47_13709: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13711: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13713: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_47_13715: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_47_13716: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_47_13718: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13720: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13722: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13724: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13726: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13728: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_47_13730: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_47_13732: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_47_13734: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_47_13736: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_47_13738: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_47_13740: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_47_13742: {
    width: wp("2%"),
    height: hp("18%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
