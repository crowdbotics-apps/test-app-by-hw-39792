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
      <View style={styles.View_47_12655} />
      <View style={styles.View_47_12656}>
        <Text style={styles.Text_47_12656}>Discover our App</Text>
      </View>
      <View style={styles.View_47_12657}>
        <View style={styles.View_47_12658}>
          <View style={styles.View_I47_12658_7_553}>
            <Text style={styles.Text_I47_12658_7_553}>Start using the App</Text>
          </View>
        </View>
        <View style={styles.View_47_12659}>
          <View style={styles.View_47_12660}>
            <Text style={styles.Text_47_12660}>Already have an account? </Text>
          </View>
          <View style={styles.View_47_12661}>
            <Text style={styles.Text_47_12661}> Login</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_12662}>
        <Text style={styles.Text_47_12662}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_47_12663}>
        <View style={styles.View_I47_12663_15_1084} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bda8ce5-742a-4aa8-9dec-8fa467d642c3"
          }}
          style={styles.ImageBackground_I47_12663_15_1085}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0187df1b-f669-4370-96c7-0bf29e81014c"
          }}
          style={styles.ImageBackground_I47_12663_15_1086}
        />
      </View>
      <View style={styles.View_47_12909}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1c56265-f356-4ca0-aedd-7a96ee4f7d66"
          }}
          style={styles.ImageBackground_I47_12909_10_3014}
        />
      </View>
      <View style={styles.View_47_12910}>
        <View style={styles.View_47_12911}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b50f2c5c-803d-4492-95c0-ec875fd674be"
            }}
            style={styles.ImageBackground_47_12912}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4c6f281-acf2-4113-8eda-1ae675dbd3ab"
          }}
          style={styles.ImageBackground_47_12918}
        />
      </View>
      <View style={styles.View_47_13596}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1c78eee-14d2-41b0-85a0-ffe74bdc8adf"
          }}
          style={styles.ImageBackground_47_13415}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/008707c2-a2fa-4fcf-815e-9a5679ce8aa5"
          }}
          style={styles.ImageBackground_47_13417}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8dfb448-91d3-431b-a556-0e4c026e5810"
          }}
          style={styles.ImageBackground_47_13419}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c4b96e6-1c97-46bf-86c1-3d95c0253e92"
          }}
          style={styles.ImageBackground_47_13421}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6aaf5dd1-9ab6-42ae-991f-a92327b160c2"
          }}
          style={styles.ImageBackground_47_13423}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b883cbe9-6432-4312-aad3-bda29667391c"
          }}
          style={styles.ImageBackground_47_13425}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fea5a4c-1b30-4eb7-b3c6-f1bb9bce921e"
          }}
          style={styles.ImageBackground_47_13427}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44c198be-f458-46b3-8759-bd54b1ba6d90"
          }}
          style={styles.ImageBackground_47_13429}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faf1f2ce-f743-42dd-9359-3f36fa1a6ef3"
          }}
          style={styles.ImageBackground_47_13431}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3839aac-5452-4577-9a3e-c7b3fb0b2b48"
          }}
          style={styles.ImageBackground_47_13433}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af81fc52-8e29-4126-ab65-8448bf68a845"
          }}
          style={styles.ImageBackground_47_13435}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e59283b-3877-4928-ac97-6f25c25428ea"
          }}
          style={styles.ImageBackground_47_13437}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f14457b-9431-442d-b339-03a79bd190f1"
          }}
          style={styles.ImageBackground_47_13439}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8978bb7-24fc-4b57-9564-158fbf082986"
          }}
          style={styles.ImageBackground_47_13441}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85729b2d-4f0d-4819-983a-6c9f7eddde11"
          }}
          style={styles.ImageBackground_47_13445}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/168a1443-f7a9-431b-b1e3-8175b296bf36"
          }}
          style={styles.ImageBackground_47_13447}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68ef57de-8474-43f3-b904-52671b592377"
          }}
          style={styles.ImageBackground_47_13449}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47e83048-daca-448f-b47b-6bdbd9912b07"
          }}
          style={styles.ImageBackground_47_13453}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72d7fe32-2c21-49a7-8714-71dd46b4beda"
          }}
          style={styles.ImageBackground_47_13455}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d79c5dd3-c50e-41a2-9a16-28e930249d32"
          }}
          style={styles.ImageBackground_47_13457}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da2e2abe-c8a6-4169-b047-6f38921cc628"
          }}
          style={styles.ImageBackground_47_13459}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/967e67c4-4960-4c0c-b147-755965c17384"
          }}
          style={styles.ImageBackground_47_13461}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddd50738-a85f-424e-aad2-3273a9cd5ed9"
          }}
          style={styles.ImageBackground_47_13463}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de16e2f9-5f21-48ab-825f-fb99a5cc2e73"
          }}
          style={styles.ImageBackground_47_13465}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d07abadf-9d70-49d7-b1ca-4c6d1a87794a"
          }}
          style={styles.ImageBackground_47_13467}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45dadf54-ed45-4453-8f6a-a454e746e99e"
          }}
          style={styles.ImageBackground_47_13469}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/793fc7ac-964b-4aa4-8cda-e5ce201a68e9"
          }}
          style={styles.ImageBackground_47_13471}
        />
        <View style={styles.View_47_13473}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f1f29e2-2d2b-42ad-a6f4-c98905275f2a"
            }}
            style={styles.ImageBackground_47_13474}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05a51495-2cd9-4515-ba50-e3fece1ec399"
            }}
            style={styles.ImageBackground_47_13476}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f794dacc-94b8-4e57-b1be-940d20946ee5"
            }}
            style={styles.ImageBackground_47_13478}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/901bfbed-a16f-4ff3-946c-c3ffcc0b9e33"
          }}
          style={styles.ImageBackground_47_13480}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30c0663a-3e8d-416a-836c-32c5bc596ab9"
          }}
          style={styles.ImageBackground_47_13482}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc2decda-15ea-4902-ad0a-6c0795612af3"
          }}
          style={styles.ImageBackground_47_13484}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b91f578a-532a-413e-ae99-f95d64068712"
          }}
          style={styles.ImageBackground_47_13488}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13a9f8a4-402a-4d18-a415-453cdeb4e033"
          }}
          style={styles.ImageBackground_47_13490}
        />
        <View style={styles.View_47_13492}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f4f2cea-90d9-4693-94cf-d2e9bb1407a2"
            }}
            style={styles.ImageBackground_47_13493}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bac5f55-2ab8-44f7-8bbb-d3e89fbb020e"
            }}
            style={styles.ImageBackground_47_13495}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20ceb615-1964-4dd7-9927-3fd052970eb6"
            }}
            style={styles.ImageBackground_47_13497}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe6f833a-0294-42ac-bd53-328400036d74"
          }}
          style={styles.ImageBackground_47_13499}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d01ad34-f402-416e-9cf6-fa5cc1cef7d2"
          }}
          style={styles.ImageBackground_47_13501}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/027c3479-4c67-431c-851b-9cc27a012ad6"
          }}
          style={styles.ImageBackground_47_13503}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6fc8654-cc5d-49fd-8ba2-0eb7db3f15e6"
          }}
          style={styles.ImageBackground_47_13505}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/832fc207-2201-4622-a389-8ad2d254ba5e"
          }}
          style={styles.ImageBackground_47_13507}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f05146a5-26cb-4e6b-8522-6187076e35c2"
          }}
          style={styles.ImageBackground_47_13509}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ba8400f-1898-481e-bc19-a0f27fc4b1b1"
          }}
          style={styles.ImageBackground_47_13511}
        />
        <View style={styles.View_47_13530}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcad7f10-8bb0-4822-a672-469c582d25b4"
            }}
            style={styles.ImageBackground_47_13531}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3503d701-52c9-44ee-9f48-ab4dd2560bcb"
            }}
            style={styles.ImageBackground_47_13533}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e181b365-9f74-439e-a904-052fe98d0ea4"
            }}
            style={styles.ImageBackground_47_13535}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e632874b-ed1f-46c1-a238-f65f238c9626"
          }}
          style={styles.ImageBackground_47_13537}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/457a5239-bd8d-425e-85ed-c3bf3b066ad7"
          }}
          style={styles.ImageBackground_47_13539}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76b35a54-e248-4bb3-95c2-7576e79e12b6"
          }}
          style={styles.ImageBackground_47_13576}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8def8070-912b-4740-921a-f311f8afc19b"
          }}
          style={styles.ImageBackground_47_13578}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/202d63d3-db5c-4406-aedf-f6991eafb30f"
          }}
          style={styles.ImageBackground_47_13580}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f82fba82-27f9-4079-a3d2-8b771c3408c9"
          }}
          style={styles.ImageBackground_47_13582}
        />
        <View style={styles.View_47_13597}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6f11364-108f-41b2-9044-fec8dc10aba4"
            }}
            style={styles.ImageBackground_47_13391}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c300c771-fd58-4779-b2d2-9d7234f55571"
            }}
            style={styles.ImageBackground_47_13393}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/636b956d-c0a8-4a03-9cd0-9b578026adf1"
            }}
            style={styles.ImageBackground_47_13395}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b6fa8d0-9dec-4664-a345-ee7f0f746203"
            }}
            style={styles.ImageBackground_47_13397}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1119c68d-fd0d-4d8f-b649-0d77921449ec"
            }}
            style={styles.ImageBackground_47_13399}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67827a39-8627-48c0-b9fa-4a127c03cc8b"
            }}
            style={styles.ImageBackground_47_13401}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c5bf399-25e4-4c6a-998c-6e0dbe897c93"
            }}
            style={styles.ImageBackground_47_13403}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0beca8b-ca45-4e1f-abe9-dc1ebff2aac8"
            }}
            style={styles.ImageBackground_47_13405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf99ef22-f39c-4aed-90d5-db4e8654c054"
            }}
            style={styles.ImageBackground_47_13407}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20960abe-14c4-4527-afee-d4419550e466"
            }}
            style={styles.ImageBackground_47_13409}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df3f786d-6fa3-45b3-9f9d-0eac5b021447"
            }}
            style={styles.ImageBackground_47_13411}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6e4a8d4-0847-4201-8007-11ebfa3318fc"
            }}
            style={styles.ImageBackground_47_13413}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b8bd64e-0b14-479a-882d-db4aa5f41ed8"
            }}
            style={styles.ImageBackground_47_13513}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35634c23-05a0-4250-b852-3d762c0482eb"
            }}
            style={styles.ImageBackground_47_13515}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1630d228-b898-44b0-8318-b1b1a7ed2221"
            }}
            style={styles.ImageBackground_47_13517}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0207b037-ce9f-4ae7-afcd-c36f4dcd1e06"
            }}
            style={styles.ImageBackground_47_13574}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b56d3514-fbbf-4bb2-a94c-4394c89e30da"
            }}
            style={styles.ImageBackground_47_13584}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecda43ee-961f-4cc9-826a-77823f4e06e5"
            }}
            style={styles.ImageBackground_47_13586}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61daa32a-0d21-4503-ba52-dc61c24471da"
            }}
            style={styles.ImageBackground_47_13588}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bed997e-e650-40c9-a089-304582751427"
            }}
            style={styles.ImageBackground_47_13590}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/916c854c-9055-43ed-a330-99409da615e8"
          }}
          style={styles.ImageBackground_47_13592}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d17b0c00-980f-4c20-a11f-faede4bf4955"
          }}
          style={styles.ImageBackground_47_13594}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_47_12655: {
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
  View_47_12656: {
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
  Text_47_12656: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12657: {
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
  View_47_12658: {
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
  View_I47_12658_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_12658_7_553: {
    color: "rgba(238, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12659: {
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
  View_47_12660: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_12660: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12661: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_12661: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12662: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_47_12662: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_12663: {
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
  View_I47_12663_15_1084: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I47_12663_15_1085: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I47_12663_15_1086: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_47_12909: {
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
  ImageBackground_I47_12909_10_3014: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_47_12910: {
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
  View_47_12911: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_12912: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_12918: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_47_13596: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7%"),
    top: hp("46%")
  },
  ImageBackground_47_13415: {
    width: wp("8%"),
    height: hp("24%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_47_13417: {
    width: wp("6%"),
    height: hp("20%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_47_13419: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_47_13421: {
    width: wp("2%"),
    height: hp("8%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13423: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13425: {
    width: wp("6%"),
    height: hp("16%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_47_13427: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13429: {
    width: wp("10%"),
    height: hp("14%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_47_13431: {
    width: wp("10%"),
    height: hp("9%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_47_13433: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_47_13435: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_47_13437: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_47_13439: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_47_13441: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_47_13445: {
    width: wp("28%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_47_13447: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_47_13449: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_47_13453: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_47_13455: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_47_13457: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_47_13459: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_47_13461: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_47_13463: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_47_13465: {
    width: wp("5%"),
    height: hp("16%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_47_13467: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_47_13469: {
    width: wp("18%"),
    height: hp("76%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_47_13471: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_47_13473: {
    width: wp("7%"),
    height: hp("66%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_47_13474: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13476: {
    width: wp("6%"),
    height: hp("62%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13478: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13480: {
    width: wp("3%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_47_13482: {
    width: wp("7%"),
    height: hp("7%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_47_13484: {
    width: wp("5%"),
    height: hp("12%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13488: {
    width: wp("10%"),
    height: hp("21%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_47_13490: {
    width: wp("5%"),
    height: hp("18%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_47_13492: {
    width: wp("23%"),
    height: hp("57%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_47_13493: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13495: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_47_13497: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_47_13499: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13501: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_47_13503: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_47_13505: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13507: {
    width: wp("2%"),
    height: hp("10%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_47_13509: {
    width: wp("5%"),
    height: hp("15%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_47_13511: {
    width: wp("1%"),
    height: hp("13%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_47_13530: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_47_13531: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13533: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_47_13535: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_47_13537: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13539: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_47_13576: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_47_13578: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_47_13580: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13582: {
    width: wp("26%"),
    height: hp("0%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_47_13597: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("43%")
  },
  ImageBackground_47_13391: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_47_13393: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_47_13395: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_47_13397: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_47_13399: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_47_13401: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_47_13403: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_47_13405: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_47_13407: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_47_13409: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_47_13411: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_47_13413: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_47_13513: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_47_13515: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_47_13517: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13574: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_47_13584: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_47_13586: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_47_13588: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_47_13590: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_47_13592: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_47_13594: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
