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
      <View style={styles.View_47_17664}>
        <View style={styles.View_I47_17664_25_7013}>
          <View style={styles.View_I47_17664_68_31442}>
            <View style={styles.View_I47_17664_68_31443}>
              <View style={styles.View_I47_17664_68_31444}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09221a49-4c00-4600-a76d-4303a455aa79"
                  }}
                  style={styles.ImageBackground_I47_17664_68_31445}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8bc822d-24c0-4b22-8881-5f7a1ccb5bb7"
                }}
                style={styles.ImageBackground_I47_17664_68_31451}
              />
            </View>
            <View style={styles.View_I47_17664_68_31459}>
              <Text style={styles.Text_I47_17664_68_31459}>BUSINESS NAME</Text>
            </View>
          </View>
          <View style={styles.View_I47_17664_25_7020}>
            <View style={styles.View_I47_17664_25_7021}>
              <View style={styles.View_I47_17664_25_7022}>
                <View style={styles.View_I47_17664_25_7023}>
                  <View style={styles.View_I47_17664_25_7023_11_8840}>
                    <Text style={styles.Text_I47_17664_25_7023_11_8840}>
                      Home
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_25_7023_11_8841}>
                    <View style={styles.View_I47_17664_25_7023_11_8842} />
                    <View style={styles.View_I47_17664_25_7023_11_8884}>
                      <View
                        style={styles.View_I47_17664_25_7023_11_8884_10_3159}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4066fd05-5b7e-4b93-99a1-70d873c8a76e"
                          }}
                          style={
                            styles.ImageBackground_I47_17664_25_7023_11_8884_10_3160
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I47_17664_25_7024}>
                  <View style={styles.View_I47_17664_25_7024_11_8840}>
                    <Text style={styles.Text_I47_17664_25_7024_11_8840}>
                      Geofence
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_25_7024_11_8841}>
                    <View style={styles.View_I47_17664_25_7024_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3a3e259-53c7-425d-a6e9-3d22953d9c06"
                      }}
                      style={styles.ImageBackground_I47_17664_25_7024_11_8884}
                    />
                  </View>
                </View>
                <View style={styles.View_I47_17664_68_16069}>
                  <View style={styles.View_I47_17664_68_16069_11_8840}>
                    <Text style={styles.Text_I47_17664_68_16069_11_8840}>
                      Reports
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_68_16069_11_8841}>
                    <View style={styles.View_I47_17664_68_16069_11_8842} />
                    <View style={styles.View_I47_17664_68_16069_11_8884}>
                      <View
                        style={styles.View_I47_17664_68_16069_11_8884_68_14372}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78e54f8a-d3a8-4736-9508-0ca7bde49c89"
                          }}
                          style={
                            styles.ImageBackground_I47_17664_68_16069_11_8884_68_14373
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I47_17664_68_21277}>
                  <View style={styles.View_I47_17664_68_21277_11_8840}>
                    <Text style={styles.Text_I47_17664_68_21277_11_8840}>
                      Metrics
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_68_21277_11_8841}>
                    <View style={styles.View_I47_17664_68_21277_11_8842} />
                    <View style={styles.View_I47_17664_68_21277_11_8884}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c15bea4-dc08-40c4-aa7e-476cef5c544f"
                        }}
                        style={
                          styles.ImageBackground_I47_17664_68_21277_11_8884_68_12046
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I47_17664_25_7026}>
                <Text style={styles.Text_I47_17664_25_7026}>GENERAL</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d732cb7-bc19-4ddb-8669-9510d3646827"
              }}
              style={styles.ImageBackground_I47_17664_25_7027}
            />
            <View style={styles.View_I47_17664_25_7028}>
              <View style={styles.View_I47_17664_25_7029}>
                <View style={styles.View_I47_17664_25_7031}>
                  <View style={styles.View_I47_17664_25_7031_11_8840}>
                    <Text style={styles.Text_I47_17664_25_7031_11_8840}>
                      Scheduling
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_25_7031_11_8841}>
                    <View style={styles.View_I47_17664_25_7031_11_8842} />
                    <View style={styles.View_I47_17664_25_7031_11_8884}>
                      <View
                        style={styles.View_I47_17664_25_7031_11_8884_10_3138}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0b39042-39ea-4643-9314-3ed21bfabf0c"
                          }}
                          style={
                            styles.ImageBackground_I47_17664_25_7031_11_8884_10_3139
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I47_17664_25_7032}>
                  <View style={styles.View_I47_17664_25_7032_11_8840}>
                    <Text style={styles.Text_I47_17664_25_7032_11_8840}>
                      Coupon Restriction
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_25_7032_11_8841}>
                    <View style={styles.View_I47_17664_25_7032_11_8842} />
                    <View style={styles.View_I47_17664_25_7032_11_8884}>
                      <View
                        style={styles.View_I47_17664_25_7032_11_8884_16_994}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95918b1b-b458-428f-86c8-e5e515fd49a8"
                          }}
                          style={
                            styles.ImageBackground_I47_17664_25_7032_11_8884_16_995
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I47_17664_25_7034}>
                  <View style={styles.View_I47_17664_25_7034_11_8840}>
                    <Text style={styles.Text_I47_17664_25_7034_11_8840}>
                      Preference
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_25_7034_11_8841}>
                    <View style={styles.View_I47_17664_25_7034_11_8842} />
                    <View style={styles.View_I47_17664_25_7034_11_8884}>
                      <View
                        style={styles.View_I47_17664_25_7034_11_8884_16_1089}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4eee689f-25fe-439f-ba0f-5704a5ac2efa"
                          }}
                          style={
                            styles.ImageBackground_I47_17664_25_7034_11_8884_16_1090
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I47_17664_25_7035}>
                <Text style={styles.Text_I47_17664_25_7035}>ADS</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a07caeb7-33e6-4562-9713-ceb2c84eda72"
              }}
              style={styles.ImageBackground_I47_17664_25_7036}
            />
            <View style={styles.View_I47_17664_68_24603}>
              <View style={styles.View_I47_17664_68_24604}>
                <View style={styles.View_I47_17664_68_24605}>
                  <View style={styles.View_I47_17664_68_24605_11_8840}>
                    <Text style={styles.Text_I47_17664_68_24605_11_8840}>
                      Qr Code
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_68_24605_11_8841}>
                    <View style={styles.View_I47_17664_68_24605_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad7d43b7-4e51-4a15-90bd-9b49c8907a4a"
                      }}
                      style={styles.ImageBackground_I47_17664_68_24605_11_8884}
                    />
                  </View>
                </View>
                <View style={styles.View_I47_17664_68_24606}>
                  <View style={styles.View_I47_17664_68_24606_11_8840}>
                    <Text style={styles.Text_I47_17664_68_24606_11_8840}>
                      Referral Link
                    </Text>
                  </View>
                  <View style={styles.View_I47_17664_68_24606_11_8841}>
                    <View style={styles.View_I47_17664_68_24606_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3467de28-f640-4434-ac84-eec61c5f2292"
                      }}
                      style={styles.ImageBackground_I47_17664_68_24606_11_8884}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I47_17664_68_24607}>
                <Text style={styles.Text_I47_17664_68_24607}>MARKETING</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I47_17664_25_7037}>
          <View style={styles.View_I47_17664_25_7037_11_8846}>
            <Text style={styles.Text_I47_17664_25_7037_11_8846}>Settings</Text>
          </View>
          <View style={styles.View_I47_17664_25_7037_11_8847}>
            <View style={styles.View_I47_17664_25_7037_11_8848} />
            <View style={styles.View_I47_17664_25_7037_11_8857}>
              <View style={styles.View_I47_17664_25_7037_11_8857_16_1433}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6851151e-7672-4284-9e56-b46efa7a3cdb"
                  }}
                  style={
                    styles.ImageBackground_I47_17664_25_7037_11_8857_16_1434
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_47_17678}>
        <View style={styles.View_47_17679}>
          <View style={styles.View_47_17680}>
            <Text style={styles.Text_47_17680}>Account</Text>
          </View>
        </View>
        <View style={styles.View_47_17681}>
          <View style={styles.View_47_17682}>
            <Text style={styles.Text_47_17682}>Subscription</Text>
          </View>
          <View style={styles.View_47_17683} />
        </View>
        <View style={styles.View_47_17684}>
          <View style={styles.View_47_17685}>
            <Text style={styles.Text_47_17685}>Payments</Text>
          </View>
        </View>
        <View style={styles.View_47_17686}>
          <View style={styles.View_47_17687}>
            <Text style={styles.Text_47_17687}>Change Password</Text>
          </View>
        </View>
        <View style={styles.View_47_17688}>
          <View style={styles.View_47_17689}>
            <Text style={styles.Text_47_17689}>Invite Friends</Text>
          </View>
        </View>
        <View style={styles.View_47_17690}>
          <View style={styles.View_47_17691}>
            <Text style={styles.Text_47_17691}>Send Feedback</Text>
          </View>
        </View>
        <View style={styles.View_47_17692}>
          <View style={styles.View_47_17693}>
            <Text style={styles.Text_47_17693}>Privacy Policy</Text>
          </View>
        </View>
        <View style={styles.View_47_17694}>
          <View style={styles.View_47_17695}>
            <Text style={styles.Text_47_17695}>Terms &amp; Conditions</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_47_17973}>
        <View style={styles.View_47_17974}>
          <View style={styles.View_47_19231}>
            <Text style={styles.Text_47_19231}>Your Plan</Text>
          </View>
          <View style={styles.View_47_17976}>
            <Text style={styles.Text_47_17976}>Annual Membership</Text>
          </View>
        </View>
        <View style={styles.View_47_17977}>
          <View style={styles.View_47_17990}>
            <View style={styles.View_I47_17990_7_581}>
              <Text style={styles.Text_I47_17990_7_581}>Cancel Plan</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_47_17907}>
        <View style={styles.View_47_19232}>
          <Text style={styles.Text_47_19232}>Billing Info</Text>
        </View>
        <View style={styles.View_47_19739}>
          <View style={styles.View_47_19233}>
            <View style={styles.View_47_19678}>
              <View style={styles.View_47_19234}>
                <Text style={styles.Text_47_19234}>Jon Doe</Text>
              </View>
              <View style={styles.View_47_19241}>
                <View style={styles.View_47_19629}>
                  <View style={styles.View_47_19630}>
                    <View style={styles.View_I47_19630_17_4266}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3505326-bedf-412c-b0d6-193ada57683b"
                        }}
                        style={styles.ImageBackground_I47_19630_17_4267}
                      />
                    </View>
                  </View>
                  <View style={styles.View_47_19631}>
                    <Text style={styles.Text_47_19631}>Delete</Text>
                  </View>
                </View>
                <View style={styles.View_47_19637}>
                  <View style={styles.View_47_19638}>
                    <View style={styles.View_I47_19638_17_4275}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d247e52f-ff4d-41e4-a9b9-0e3776546349"
                        }}
                        style={styles.ImageBackground_I47_19638_17_4276}
                      />
                    </View>
                  </View>
                  <View style={styles.View_47_19639}>
                    <Text style={styles.Text_47_19639}>Edit</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_47_19235}>
              <View style={styles.View_47_19236}>
                <Text style={styles.Text_47_19236}>Address: </Text>
              </View>
              <View style={styles.View_47_19237}>
                <Text style={styles.Text_47_19237}>
                  2 Forest St. Santa Monica, CA 90403
                </Text>
              </View>
            </View>
            <View style={styles.View_47_19238}>
              <View style={styles.View_47_19239}>
                <Text style={styles.Text_47_19239}>Phone: </Text>
              </View>
              <View style={styles.View_47_19240}>
                <Text style={styles.Text_47_19240}>(406) 555-0120</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_47_19709}>
            <View style={styles.View_47_19710}>
              <View style={styles.View_47_19711}>
                <Text style={styles.Text_47_19711}>Jon Doe</Text>
              </View>
              <View style={styles.View_47_19712}>
                <View style={styles.View_47_19713}>
                  <View style={styles.View_47_19714}>
                    <View style={styles.View_I47_19714_17_4266}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6debe8de-fa21-4e1f-9676-670c925d0bf0"
                        }}
                        style={styles.ImageBackground_I47_19714_17_4267}
                      />
                    </View>
                  </View>
                  <View style={styles.View_47_19715}>
                    <Text style={styles.Text_47_19715}>Delete</Text>
                  </View>
                </View>
                <View style={styles.View_47_19716}>
                  <View style={styles.View_47_19717}>
                    <View style={styles.View_I47_19717_17_4275}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1df718f1-0aa0-43d9-8dd3-6fa79cd2321e"
                        }}
                        style={styles.ImageBackground_I47_19717_17_4276}
                      />
                    </View>
                  </View>
                  <View style={styles.View_47_19718}>
                    <Text style={styles.Text_47_19718}>Edit</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_47_19719}>
              <View style={styles.View_47_19720}>
                <Text style={styles.Text_47_19720}>Address: </Text>
              </View>
              <View style={styles.View_47_19721}>
                <Text style={styles.Text_47_19721}>
                  2 Forest St. Santa Monica, CA 90403
                </Text>
              </View>
            </View>
            <View style={styles.View_47_19722}>
              <View style={styles.View_47_19723}>
                <Text style={styles.Text_47_19723}>Phone: </Text>
              </View>
              <View style={styles.View_47_19724}>
                <Text style={styles.Text_47_19724}>(406) 555-0120</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_47_19740}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ab152cd-1842-4a8a-baf8-963fcb9fc538"
            }}
            style={styles.ImageBackground_47_19741}
          />
          <View style={styles.View_47_19742}>
            <Text style={styles.Text_47_19742}>Add New Address</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_68_11591}>
        <View style={styles.View_68_11592}>
          <View style={styles.View_I68_11592_11_9235}>
            <View style={styles.View_I68_11592_11_9235_451_6700}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1933ca4d-a873-4bc9-abe9-17f94caa02f7"
                }}
                style={styles.ImageBackground_I68_11592_11_9235_451_6701}
              />
            </View>
          </View>
          <View style={styles.View_I68_11592_11_9236}>
            <Text style={styles.Text_I68_11592_11_9236}>Search</Text>
          </View>
        </View>
        <View style={styles.View_68_11593}>
          <Text style={styles.Text_68_11593}>Settings</Text>
        </View>
        <View style={styles.View_68_11594}>
          <View style={styles.View_I68_11594_15_5047} />
          <View style={styles.View_I68_11594_15_5048}>
            <View style={styles.View_I68_11594_15_5048_15_4065}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cc16b79-af9d-409a-81cb-ead46eb58738"
                }}
                style={styles.ImageBackground_I68_11594_15_5048_15_4066}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_47_17664: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I47_17664_25_7013: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_68_31442: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_68_31443: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_68_31444: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I47_17664_68_31445: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I47_17664_68_31451: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I47_17664_68_31459: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_68_31459: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_I47_17664_25_7020: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7021: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_25_7022: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7023: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7023_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_25_7023_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_25_7023_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_25_7023_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  View_I47_17664_25_7023_11_8884: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7023_11_8884_10_3159: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_17664_25_7023_11_8884_10_3160: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_17664_25_7024: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7024_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_25_7024_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_25_7024_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_25_7024_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  ImageBackground_I47_17664_25_7024_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I47_17664_68_16069: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_68_16069_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_68_16069_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_68_16069_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_68_16069_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  View_I47_17664_68_16069_11_8884: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_68_16069_11_8884_68_14372: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_17664_68_16069_11_8884_68_14373: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_17664_68_21277: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_68_21277_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_68_21277_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_68_21277_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_68_21277_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  View_I47_17664_68_21277_11_8884: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I47_17664_68_21277_11_8884_68_12046: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_25_7026: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_25_7026: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_I47_17664_25_7027: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%")
  },
  View_I47_17664_25_7028: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46%")
  },
  View_I47_17664_25_7029: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7031: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7031_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_25_7031_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_25_7031_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_25_7031_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  View_I47_17664_25_7031_11_8884: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7031_11_8884_10_3138: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_17664_25_7031_11_8884_10_3139: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_17664_25_7032: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7032_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_25_7032_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_25_7032_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_25_7032_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  View_I47_17664_25_7032_11_8884: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7032_11_8884_16_994: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_17664_25_7032_11_8884_16_995: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_17664_25_7034: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7034_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_25_7034_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_25_7034_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_25_7034_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  View_I47_17664_25_7034_11_8884: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7034_11_8884_16_1089: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_17664_25_7034_11_8884_16_1090: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_17664_25_7035: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_25_7035: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_I47_17664_25_7036: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%")
  },
  View_I47_17664_68_24603: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84%")
  },
  View_I47_17664_68_24604: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_68_24605: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_68_24605_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_68_24605_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_68_24605_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_68_24605_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  ImageBackground_I47_17664_68_24605_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I47_17664_68_24606: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_68_24606_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_68_24606_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_68_24606_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_68_24606_11_8842: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 68, 61, 1)"
  },
  ImageBackground_I47_17664_68_24606_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I47_17664_68_24607: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_68_24607: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_I47_17664_25_7037: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("130%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7037_11_8846: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17664_25_7037_11_8846: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_17664_25_7037_11_8847: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_17664_25_7037_11_8848: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I47_17664_25_7037_11_8857: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17664_25_7037_11_8857_16_1433: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_17664_25_7037_11_8857_16_1434: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_17678: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17679: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17680: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_17680: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17681: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17682: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_17682: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17683: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_47_17684: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17685: {
    flexGrow: 1,
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_17685: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17686: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17687: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_17687: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17688: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17689: {
    flexGrow: 1,
    width: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_17689: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17690: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17691: {
    flexGrow: 1,
    width: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_17691: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17692: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17693: {
    flexGrow: 1,
    width: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_17693: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17694: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17695: {
    flexGrow: 1,
    width: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_17695: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17973: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("28%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_17974: {
    width: wp("16%"),
    height: hp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19231: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19231: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17976: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_47_17976: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17977: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17990: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_17990_7_581: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_17990_7_581: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_17907: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_19232: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_47_19232: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19739: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19233: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 238, 238, 0.5)"
  },
  View_47_19678: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19234: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19234: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19241: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19629: {
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19630: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_19630_17_4266: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_19630_17_4267: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_19631: {
    flexGrow: 1,
    width: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_47_19631: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19637: {
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19638: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_19638_17_4275: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_19638_17_4276: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_19639: {
    flexGrow: 1,
    width: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_47_19639: {
    color: "rgba(0, 171, 85, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19235: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19236: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19236: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19237: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19237: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19238: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19239: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19239: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19240: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19240: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19709: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 238, 238, 0.5)"
  },
  View_47_19710: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19711: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19711: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19712: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19713: {
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19714: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_19714_17_4266: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_19714_17_4267: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_19715: {
    flexGrow: 1,
    width: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_47_19715: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19716: {
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19717: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_19717_17_4275: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_19717_17_4276: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_19718: {
    flexGrow: 1,
    width: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_47_19718: {
    color: "rgba(0, 171, 85, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19719: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19720: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19720: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19721: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19721: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19722: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_19723: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19723: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19724: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_19724: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_19740: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_19741: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_19742: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_47_19742: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_11591: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%")
  },
  View_68_11592: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_11592_11_9235: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_11592_11_9235_451_6700: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_11592_11_9235_451_6701: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_11592_11_9236: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I68_11592_11_9236: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_11593: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_68_11593: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_11594: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_11594_15_5047: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I68_11594_15_5048: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_11594_15_5048_15_4065: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_11594_15_5048_15_4066: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
