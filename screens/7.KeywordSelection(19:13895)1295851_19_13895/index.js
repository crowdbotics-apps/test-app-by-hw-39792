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
      <View style={styles.View_19_13905}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a3e95f2-14f2-4091-904c-d22c27f7ab3b"
          }}
          style={styles.ImageBackground_I19_13905_10_3014}
        />
      </View>
      <View style={styles.View_19_13906}>
        <View style={styles.View_19_13907}>
          <View style={styles.View_19_13908}>
            <Text style={styles.Text_19_13908}>Keyword Selection</Text>
          </View>
          <View style={styles.View_19_13909}>
            <Text style={styles.Text_19_13909}>
              Select keywords that best describe your business
            </Text>
          </View>
        </View>
        <View style={styles.View_19_13915}>
          <View style={styles.View_19_13916}>
            <View style={styles.View_I19_13916_11_3270}>
              <Text style={styles.Text_I19_13916_11_3270}>Keyword</Text>
            </View>
            <View style={styles.View_I19_13916_11_3271}>
              <View style={styles.View_I19_13916_11_3272}>
                <Text style={styles.Text_I19_13916_11_3272}>
                  Input your keyword
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_19_13946}>
            <View style={styles.View_I19_13946_7_555}>
              <Text style={styles.Text_I19_13946_7_555}>Add Keyword</Text>
            </View>
          </View>
          <View style={styles.View_19_14956}>
            <View style={styles.View_19_14922}>
              <View style={styles.View_19_14909}>
                <View style={styles.View_I19_14909_19_14880}>
                  <Text style={styles.Text_I19_14909_19_14880}>Keyword</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2c0c8db-5503-4068-9558-c44a367090e9"
                  }}
                  style={styles.ImageBackground_I19_14909_19_14902}
                />
              </View>
              <View style={styles.View_19_14923}>
                <View style={styles.View_I19_14923_19_14880}>
                  <Text style={styles.Text_I19_14923_19_14880}>Keyword</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a904e854-8efb-451a-8dce-57836deabdde"
                  }}
                  style={styles.ImageBackground_I19_14923_19_14902}
                />
              </View>
              <View style={styles.View_19_14929}>
                <View style={styles.View_I19_14929_19_14880}>
                  <Text style={styles.Text_I19_14929_19_14880}>Keyword</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ad27160-a61b-493c-b310-adf02047d764"
                  }}
                  style={styles.ImageBackground_I19_14929_19_14902}
                />
              </View>
            </View>
            <View style={styles.View_19_14953}>
              <View style={styles.View_19_14954}>
                <Text style={styles.Text_19_14954}>
                  Maximum number of keywords
                </Text>
              </View>
              <View style={styles.View_19_14955}>
                <Text style={styles.Text_19_14955}> 00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_19_14940}>
          <View style={styles.View_19_14941}>
            <View style={styles.View_I19_14941_7_555}>
              <Text style={styles.Text_I19_14941_7_555}>Continue</Text>
            </View>
          </View>
          <View style={styles.View_19_14942}>
            <View style={styles.View_I19_14942_7_553}>
              <Text style={styles.Text_I19_14942_7_553}>Skip</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_19_14180} />
      <View style={styles.View_19_14181}>
        <Text style={styles.Text_19_14181}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_21_2140}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40b0be0b-702f-4b1b-af27-6081235dcb96"
          }}
          style={styles.ImageBackground_21_1899}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba3c5516-69e0-4017-ae54-0530ba450d94"
          }}
          style={styles.ImageBackground_21_1902}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a603bdc7-c5e1-440f-be60-6b6d4dde6bbd"
          }}
          style={styles.ImageBackground_21_1996}
        />
        <View style={styles.View_21_1998}>
          <View style={styles.View_21_1999}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/635d9460-baa7-4a42-9b50-7b1d0fc5d5ad"
              }}
              style={styles.ImageBackground_21_2000}
            />
            <View style={styles.View_21_2002}>
              <View style={styles.View_21_2003}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5758ec0-7572-4979-85ec-a4c9e6871b79"
                  }}
                  style={styles.ImageBackground_21_2004}
                />
              </View>
              <View style={styles.View_21_2006}>
                <View style={styles.View_21_2007}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7678736a-745d-4210-b51a-12b9e05ffb51"
                    }}
                    style={styles.ImageBackground_21_2008}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15511681-9885-40a2-9706-2290782e98ab"
                  }}
                  style={styles.ImageBackground_21_2010}
                />
                <View style={styles.View_21_2012}>
                  <View style={styles.View_21_2013}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f7705ee-075d-4729-9d4b-b8906fe85241"
                      }}
                      style={styles.ImageBackground_21_2014}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc52a04c-8423-4fcd-ad92-d81805bc0d5f"
                      }}
                      style={styles.ImageBackground_21_2017}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29f7ef3f-4ef9-4b69-b1e6-42d7246ec2da"
                      }}
                      style={styles.ImageBackground_21_2019}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/232438e8-218d-4949-809d-81c8a2762c2a"
                    }}
                    style={styles.ImageBackground_21_2021}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b4b5385-7fb0-45d6-acfc-9b9b24e8a02f"
                    }}
                    style={styles.ImageBackground_21_2024}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f7a09af-8cc2-4a23-8b87-4b81862730ba"
                    }}
                    style={styles.ImageBackground_21_2026}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a32c1547-0a2f-4fe2-95c7-1332725812ed"
                    }}
                    style={styles.ImageBackground_21_2028}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1a7eeaa-4be3-4868-b433-2ca7a03202b1"
                    }}
                    style={styles.ImageBackground_21_2030}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5818d03c-7fb9-4163-a97a-aea7b622b951"
                  }}
                  style={styles.ImageBackground_21_2032}
                />
                <View style={styles.View_21_2034}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cf4dc1a-b302-49ad-b007-41e9b7d4632a"
                    }}
                    style={styles.ImageBackground_21_2035}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ba27d94-596f-455f-8fd9-a7dae5df855a"
                  }}
                  style={styles.ImageBackground_21_2037}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de09b84d-ef3a-4c96-b519-5c490410533d"
                  }}
                  style={styles.ImageBackground_21_2039}
                />
                <View style={styles.View_21_2041}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/948391dd-50d1-4f9b-9318-71d3109e8281"
                    }}
                    style={styles.ImageBackground_21_2042}
                  />
                </View>
                <View style={styles.View_21_2044}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/582766f9-2a5e-4149-8e45-b9c79437de2f"
                    }}
                    style={styles.ImageBackground_21_2045}
                  />
                </View>
                <View style={styles.View_21_2047}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6db1a10-1e33-4026-8502-1093b6d69910"
                    }}
                    style={styles.ImageBackground_21_2048}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a88d78f-171c-42ae-b74f-52d51764ecc4"
                    }}
                    style={styles.ImageBackground_21_2049}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da03c3fd-9f73-4451-9414-8d269fdcd2ba"
                    }}
                    style={styles.ImageBackground_21_2050}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e92c85f-9265-4c0d-8056-5c6d874ca1aa"
                    }}
                    style={styles.ImageBackground_21_2051}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b47a2e08-6fdc-4d82-8510-f82e0867754a"
                    }}
                    style={styles.ImageBackground_21_2052}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c08fd2cf-c95e-485b-ab53-a3f36379bb6d"
                    }}
                    style={styles.ImageBackground_21_2054}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59b58df5-1825-4129-a878-473a6963df06"
                    }}
                    style={styles.ImageBackground_21_2055}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5d0a703-cf0f-49c1-9531-3bf94734ecca"
                    }}
                    style={styles.ImageBackground_21_2056}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44b43e1d-66a5-4125-9286-810d5486df0c"
                    }}
                    style={styles.ImageBackground_21_2057}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8062a47-ab42-4fc3-a9f9-0c09247b059b"
                    }}
                    style={styles.ImageBackground_21_2059}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/223c62fd-35cb-4461-9c4e-61291d9ad74e"
                    }}
                    style={styles.ImageBackground_21_2060}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c31eb6aa-0e91-43e6-99a0-5cc22538b3af"
                    }}
                    style={styles.ImageBackground_21_2062}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a506f5de-8d2a-4c97-a23d-fde1f71ba23a"
                    }}
                    style={styles.ImageBackground_21_2064}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43fc7bd5-05d5-4bc0-b88a-82c7109ad58c"
                    }}
                    style={styles.ImageBackground_21_2066}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2033690-4c33-4081-89e9-13c3aded34df"
                    }}
                    style={styles.ImageBackground_21_2067}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebf0ec47-9c46-4a5a-abce-cc454fb76739"
                    }}
                    style={styles.ImageBackground_21_2068}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a728442-0e87-4f23-b854-a7cbb4cad324"
                    }}
                    style={styles.ImageBackground_21_2069}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c16ce59d-60d2-40e1-aee8-dcde009bf7f8"
                    }}
                    style={styles.ImageBackground_21_2071}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92e5e67c-6589-4f54-972c-47dc6df09578"
                    }}
                    style={styles.ImageBackground_21_2073}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18d42dab-8eb6-4016-bf02-5e4a8e32047d"
                  }}
                  style={styles.ImageBackground_21_2075}
                />
                <View style={styles.View_21_2077}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cbfacfe-45c3-4491-85a7-2e643d3ddb81"
                    }}
                    style={styles.ImageBackground_21_2078}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ad6e26a-6123-4ca3-bcf0-f8eb6b5f7e1c"
                    }}
                    style={styles.ImageBackground_21_2080}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf99604c-b0ef-43ce-8abb-ea892dfed90d"
                    }}
                    style={styles.ImageBackground_21_2082}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f175a86-ddbb-4699-8e86-baddd8c03193"
                    }}
                    style={styles.ImageBackground_21_2084}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2de0bf2-8856-499c-a28b-ad164551063b"
                }}
                style={styles.ImageBackground_21_2086}
              />
              <View style={styles.View_21_2087}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cf426c3-6958-45d3-b932-4f87b35dfaa9"
                  }}
                  style={styles.ImageBackground_21_2088}
                />
                <View style={styles.View_21_2091}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/288f094f-be46-4a39-816c-fc29ec150116"
                    }}
                    style={styles.ImageBackground_21_2092}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47ce0d5d-3c8a-47d1-9583-774d01852e46"
                    }}
                    style={styles.ImageBackground_21_2095}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e0c48d2-ac16-40fc-a6f1-49b009a4164b"
                    }}
                    style={styles.ImageBackground_21_2097}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d2e9a55-7805-49aa-8aa0-56c62825f263"
                    }}
                    style={styles.ImageBackground_21_2098}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dce7eb0a-d339-4b8c-a5b4-59834b3e0e46"
                    }}
                    style={styles.ImageBackground_21_2100}
                  />
                </View>
              </View>
              <View style={styles.View_21_2102}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60042370-c799-4483-bedc-e27c7efa86b4"
                  }}
                  style={styles.ImageBackground_21_2103}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbdfb879-012c-4ca6-83fc-8396c825f42d"
                  }}
                  style={styles.ImageBackground_21_2104}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f12cb8af-d670-4df1-8902-572069726f9d"
                  }}
                  style={styles.ImageBackground_21_2106}
                />
              </View>
              <View style={styles.View_21_2108}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12f4b30d-ed7d-412c-a8dd-cb977d50a722"
                  }}
                  style={styles.ImageBackground_21_2109}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f85c5c7f-14d6-420d-8904-d18a031bedb6"
                  }}
                  style={styles.ImageBackground_21_2110}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edbe3105-c5f3-48ab-905a-1c81e0d02d08"
                  }}
                  style={styles.ImageBackground_21_2121}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81228c4a-a487-48db-a784-30b313d8e325"
                  }}
                  style={styles.ImageBackground_21_2129}
                />
                <View style={styles.View_21_2130}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edc9b2a3-30ec-429a-a21c-c3dd6a94fce8"
                    }}
                    style={styles.ImageBackground_21_2131}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24b57a49-f691-46d0-aaff-0cb88f33109e"
                    }}
                    style={styles.ImageBackground_21_2134}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00a72499-f696-4d09-9786-b2fcb3e6eb11"
                  }}
                  style={styles.ImageBackground_21_2135}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67f43dc3-2a57-4e84-b0bb-f2784e0caf78"
                  }}
                  style={styles.ImageBackground_21_2136}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/178b2e46-7425-45cb-a08b-eb612b4952d4"
                  }}
                  style={styles.ImageBackground_21_2138}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_45_12865}>
        <View style={styles.View_45_12866}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6220ff79-f691-43cf-a4cd-a6521048aa98"
            }}
            style={styles.ImageBackground_45_12867}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71a32c0f-2e9b-4e9b-803b-3f825b9ff31a"
          }}
          style={styles.ImageBackground_45_12873}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_19_13905: {
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
  ImageBackground_I19_13905_10_3014: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_19_13906: {
    width: wp("33%"),
    height: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_13907: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_19_13908: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_13908: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13909: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_19_13909: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13915: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_13916: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_13916_11_3270: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_13916_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_13916_11_3271: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_13916_11_3272: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_13916_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13946: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I19_13946_7_555: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_13946_7_555: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_14956: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_14922: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_14909: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 187, 66, 1)"
  },
  View_I19_14909_19_14880: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_14909_19_14880: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I19_14909_19_14902: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_19_14923: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 187, 66, 1)"
  },
  View_I19_14923_19_14880: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_14923_19_14880: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I19_14923_19_14902: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_19_14929: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 187, 66, 1)"
  },
  View_I19_14929_19_14880: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_14929_19_14880: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I19_14929_19_14902: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_19_14953: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_14954: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_14954: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_14955: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_14955: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_14940: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_14941: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I19_14941_7_555: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_14941_7_555: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_14942: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_14942_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_14942_7_553: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_14180: {
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
  View_19_14181: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_19_14181: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_2140: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("52%")
  },
  ImageBackground_21_1899: {
    width: wp("11%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_21_1902: {
    width: wp("9%"),
    height: hp("26%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_21_1996: {
    width: wp("28%"),
    height: hp("0%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_21_1998: {
    width: wp("29%"),
    height: hp("44%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_1999: {
    width: wp("29%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2000: {
    width: wp("29%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_2002: {
    width: wp("29%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_2003: {
    width: wp("15%"),
    height: hp("20%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_21_2004: {
    width: wp("15%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_2006: {
    width: wp("22%"),
    height: hp("71%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_2007: {
    width: wp("15%"),
    height: hp("15%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_21_2008: {
    width: wp("15%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2010: {
    width: wp("10%"),
    height: hp("25%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_21_2012: {
    width: wp("14%"),
    height: hp("24%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_21_2013: {
    width: wp("11%"),
    height: hp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_21_2014: {
    width: wp("11%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2017: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_21_2019: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_21_2021: {
    width: wp("5%"),
    height: hp("15%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_21_2024: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_21_2026: {
    width: wp("6%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_21_2028: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_21_2030: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2032: {
    width: wp("13%"),
    height: hp("39%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_21_2034: {
    width: wp("1%"),
    height: hp("15%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_21_2035: {
    width: wp("1%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2037: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_21_2039: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_21_2041: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_21_2042: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_2044: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_21_2045: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_2047: {
    width: wp("5%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_21_2048: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2049: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2050: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2051: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_21_2052: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_21_2054: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_21_2055: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2056: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_21_2057: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_21_2059: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2060: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_21_2062: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_21_2064: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_21_2066: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_21_2067: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_21_2068: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_21_2069: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_21_2071: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_21_2073: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_21_2075: {
    width: wp("3%"),
    height: hp("23%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_21_2077: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2078: {
    width: wp("11%"),
    height: hp("16%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2080: {
    width: wp("7%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2082: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_21_2084: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_21_2086: {
    width: wp("8%"),
    height: hp("17%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_21_2087: {
    width: wp("8%"),
    height: hp("19%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_21_2088: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_21_2091: {
    width: wp("7%"),
    height: hp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2092: {
    width: wp("7%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2095: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_21_2097: {
    width: wp("7%"),
    height: hp("10%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2098: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_21_2100: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_21_2102: {
    width: wp("13%"),
    height: hp("24%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_21_2103: {
    width: wp("13%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2104: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_21_2106: {
    width: wp("8%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_2108: {
    width: wp("18%"),
    height: hp("27%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_21_2109: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2110: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_21_2121: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_21_2129: {
    width: wp("1%"),
    height: hp("17%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_21_2130: {
    width: wp("11%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_21_2131: {
    width: wp("11%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2134: {
    width: wp("11%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2135: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_21_2136: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_21_2138: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_45_12865: {
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
  View_45_12866: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12867: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12873: {
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
