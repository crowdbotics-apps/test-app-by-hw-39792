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
      <View style={styles.View_21_7025}>
        <View style={styles.View_I21_7025_11_9017}>
          <View style={styles.View_I21_7025_68_29233}>
            <View style={styles.View_I21_7025_68_29234}>
              <View style={styles.View_I21_7025_68_29235}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c68dc9f9-3fe6-4141-941b-a71a0e0bf199"
                  }}
                  style={styles.ImageBackground_I21_7025_68_29236}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21c10df1-f7c8-4110-861b-5e6fd97e6c71"
                }}
                style={styles.ImageBackground_I21_7025_68_29242}
              />
            </View>
            <View style={styles.View_I21_7025_68_29250}>
              <Text style={styles.Text_I21_7025_68_29250}>BUSINESS NAME</Text>
            </View>
          </View>
          <View style={styles.View_I21_7025_11_9024}>
            <View style={styles.View_I21_7025_11_9025}>
              <View style={styles.View_I21_7025_11_9026}>
                <View style={styles.View_I21_7025_11_9027}>
                  <View style={styles.View_I21_7025_11_9027_11_8846}>
                    <Text style={styles.Text_I21_7025_11_9027_11_8846}>
                      Home
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_11_9027_11_8847}>
                    <View style={styles.View_I21_7025_11_9027_11_8848} />
                    <View style={styles.View_I21_7025_11_9027_11_8857}>
                      <View
                        style={styles.View_I21_7025_11_9027_11_8857_10_3165}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f82c63fb-d21a-42c2-892b-79bbfbb208af"
                          }}
                          style={
                            styles.ImageBackground_I21_7025_11_9027_11_8857_10_3166
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I21_7025_25_4093}>
                  <View style={styles.View_I21_7025_25_4093_11_8840}>
                    <Text style={styles.Text_I21_7025_25_4093_11_8840}>
                      Geofence
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_25_4093_11_8841}>
                    <View style={styles.View_I21_7025_25_4093_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dae35b98-30b3-4f4c-b3ec-0c0ee74202d6"
                      }}
                      style={styles.ImageBackground_I21_7025_25_4093_11_8884}
                    />
                  </View>
                </View>
                <View style={styles.View_I21_7025_68_15186}>
                  <View style={styles.View_I21_7025_68_15186_11_8840}>
                    <Text style={styles.Text_I21_7025_68_15186_11_8840}>
                      Reports
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_68_15186_11_8841}>
                    <View style={styles.View_I21_7025_68_15186_11_8842} />
                    <View style={styles.View_I21_7025_68_15186_11_8884}>
                      <View
                        style={styles.View_I21_7025_68_15186_11_8884_68_14372}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6aabfddb-e6b7-43cf-9a4d-eb253ee70e73"
                          }}
                          style={
                            styles.ImageBackground_I21_7025_68_15186_11_8884_68_14373
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I21_7025_68_15187}>
                  <View style={styles.View_I21_7025_68_15187_11_8840}>
                    <Text style={styles.Text_I21_7025_68_15187_11_8840}>
                      Metrics
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_68_15187_11_8841}>
                    <View style={styles.View_I21_7025_68_15187_11_8842} />
                    <View style={styles.View_I21_7025_68_15187_11_8884}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f31f2c9-85fb-4f8b-b47d-e0dabf0e8f7d"
                        }}
                        style={
                          styles.ImageBackground_I21_7025_68_15187_11_8884_68_12046
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I21_7025_11_9032}>
                <Text style={styles.Text_I21_7025_11_9032}>GENERAL</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8587f8a6-ba57-4666-9e72-b29e7bc5de8a"
              }}
              style={styles.ImageBackground_I21_7025_11_9040}
            />
            <View style={styles.View_I21_7025_16_1105}>
              <View style={styles.View_I21_7025_16_1106}>
                <View style={styles.View_I21_7025_16_1109}>
                  <View style={styles.View_I21_7025_16_1109_11_8840}>
                    <Text style={styles.Text_I21_7025_16_1109_11_8840}>
                      Scheduling
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_16_1109_11_8841}>
                    <View style={styles.View_I21_7025_16_1109_11_8842} />
                    <View style={styles.View_I21_7025_16_1109_11_8884}>
                      <View
                        style={styles.View_I21_7025_16_1109_11_8884_10_3138}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e215b1d8-6198-4d11-992f-2295806aa2e5"
                          }}
                          style={
                            styles.ImageBackground_I21_7025_16_1109_11_8884_10_3139
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I21_7025_16_1110}>
                  <View style={styles.View_I21_7025_16_1110_11_8840}>
                    <Text style={styles.Text_I21_7025_16_1110_11_8840}>
                      Coupon Restriction
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_16_1110_11_8841}>
                    <View style={styles.View_I21_7025_16_1110_11_8842} />
                    <View style={styles.View_I21_7025_16_1110_11_8884}>
                      <View style={styles.View_I21_7025_16_1110_11_8884_16_994}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6e31047-d400-4be5-9126-767ea8bfcbd1"
                          }}
                          style={
                            styles.ImageBackground_I21_7025_16_1110_11_8884_16_995
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I21_7025_16_1112}>
                  <View style={styles.View_I21_7025_16_1112_11_8840}>
                    <Text style={styles.Text_I21_7025_16_1112_11_8840}>
                      Preference
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_16_1112_11_8841}>
                    <View style={styles.View_I21_7025_16_1112_11_8842} />
                    <View style={styles.View_I21_7025_16_1112_11_8884}>
                      <View
                        style={styles.View_I21_7025_16_1112_11_8884_16_1089}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc5bb548-be36-479f-a1bc-6eb85c2123d4"
                          }}
                          style={
                            styles.ImageBackground_I21_7025_16_1112_11_8884_16_1090
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I21_7025_16_1113}>
                <Text style={styles.Text_I21_7025_16_1113}>ADS</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f97f126a-bbdb-490f-93b7-7347b409d9f2"
              }}
              style={styles.ImageBackground_I21_7025_11_9041}
            />
            <View style={styles.View_I21_7025_68_23763}>
              <View style={styles.View_I21_7025_68_23764}>
                <View style={styles.View_I21_7025_68_23765}>
                  <View style={styles.View_I21_7025_68_23765_11_8840}>
                    <Text style={styles.Text_I21_7025_68_23765_11_8840}>
                      Qr Code
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_68_23765_11_8841}>
                    <View style={styles.View_I21_7025_68_23765_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51713041-f7e1-4485-a85b-636829070913"
                      }}
                      style={styles.ImageBackground_I21_7025_68_23765_11_8884}
                    />
                  </View>
                </View>
                <View style={styles.View_I21_7025_68_23766}>
                  <View style={styles.View_I21_7025_68_23766_11_8840}>
                    <Text style={styles.Text_I21_7025_68_23766_11_8840}>
                      Referral Link
                    </Text>
                  </View>
                  <View style={styles.View_I21_7025_68_23766_11_8841}>
                    <View style={styles.View_I21_7025_68_23766_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21d47267-c678-491f-ab8a-105a15fe4365"
                      }}
                      style={styles.ImageBackground_I21_7025_68_23766_11_8884}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I21_7025_68_23767}>
                <Text style={styles.Text_I21_7025_68_23767}>MARKETING</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I21_7025_11_9042}>
          <View style={styles.View_I21_7025_11_9042_11_8840}>
            <Text style={styles.Text_I21_7025_11_9042_11_8840}>Settings</Text>
          </View>
          <View style={styles.View_I21_7025_11_9042_11_8841}>
            <View style={styles.View_I21_7025_11_9042_11_8842} />
            <View style={styles.View_I21_7025_11_9042_11_8884}>
              <View style={styles.View_I21_7025_11_9042_11_8884_16_1438}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2215f3fe-6df0-4db5-9420-486a382540da"
                  }}
                  style={
                    styles.ImageBackground_I21_7025_11_9042_11_8884_16_1439
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_21_7026}>
        <View style={styles.View_I21_7026_11_9254}>
          <View style={styles.View_I21_7026_11_9254_451_6700}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf031aca-45bc-423a-b6ed-6b2a8934091a"
              }}
              style={styles.ImageBackground_I21_7026_11_9254_451_6701}
            />
          </View>
        </View>
        <View style={styles.View_I21_7026_11_9264}>
          <Text style={styles.Text_I21_7026_11_9264}>Searchtext| </Text>
        </View>
        <View style={styles.View_I21_7026_11_9256}>
          <View style={styles.View_I21_7026_11_9256_11_9266}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7561e8af-3f55-403a-8ebc-7cbd8fbe5508"
              }}
              style={styles.ImageBackground_I21_7026_11_9256_11_9267}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_21_7037}>
        <View style={styles.View_I21_7037_15_5047} />
        <View style={styles.View_I21_7037_15_5048}>
          <View style={styles.View_I21_7037_15_5048_15_4065}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ad51dbd-6860-46b4-a363-e0c8acf7364e"
              }}
              style={styles.ImageBackground_I21_7037_15_5048_15_4066}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_21_7167}>
        <View style={styles.View_21_7168}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43033bb8-deea-4dcb-a0bb-8e8f5600dfb4"
            }}
            style={styles.ImageBackground_I21_7168_10_3014}
          />
        </View>
        <View style={styles.View_21_7169}>
          <Text style={styles.Text_21_7169}>Search</Text>
        </View>
      </View>
      <View style={styles.View_68_44059}>
        <View style={styles.View_21_7624}>
          <View style={styles.View_21_7317}>
            <View style={styles.View_21_7318}>
              <View style={styles.View_21_7319}>
                <View style={styles.View_I21_7319_8_5311} />
              </View>
              <View style={styles.View_21_7320}>
                <Text style={styles.Text_21_7320}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7321}>
              <View style={styles.View_21_7322}>
                <View style={styles.View_I21_7322_8_5311} />
              </View>
              <View style={styles.View_21_7323}>
                <Text style={styles.Text_21_7323}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7324}>
              <View style={styles.View_21_7325}>
                <View style={styles.View_I21_7325_8_5311} />
              </View>
              <View style={styles.View_21_7326}>
                <Text style={styles.Text_21_7326}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7327}>
              <View style={styles.View_21_7328}>
                <View style={styles.View_I21_7328_8_5311} />
              </View>
              <View style={styles.View_21_7329}>
                <Text style={styles.Text_21_7329}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7330}>
              <View style={styles.View_21_7331}>
                <View style={styles.View_I21_7331_8_5311} />
              </View>
              <View style={styles.View_21_7332}>
                <Text style={styles.Text_21_7332}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7363}>
              <View style={styles.View_21_7364}>
                <View style={styles.View_I21_7364_8_5311} />
              </View>
              <View style={styles.View_21_7365}>
                <Text style={styles.Text_21_7365}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7367}>
              <View style={styles.View_21_7368}>
                <View style={styles.View_I21_7368_8_5311} />
              </View>
              <View style={styles.View_21_7369}>
                <Text style={styles.Text_21_7369}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7371}>
              <View style={styles.View_21_7372}>
                <View style={styles.View_I21_7372_8_5311} />
              </View>
              <View style={styles.View_21_7373}>
                <Text style={styles.Text_21_7373}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7375}>
              <View style={styles.View_21_7376}>
                <View style={styles.View_I21_7376_8_5311} />
              </View>
              <View style={styles.View_21_7377}>
                <Text style={styles.Text_21_7377}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7383}>
              <View style={styles.View_21_7384}>
                <View style={styles.View_I21_7384_8_5311} />
              </View>
              <View style={styles.View_21_7385}>
                <Text style={styles.Text_21_7385}>Keyword</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_21_7333}>
            <View style={styles.View_21_7334}>
              <View style={styles.View_21_7335}>
                <View style={styles.View_I21_7335_8_5311} />
              </View>
              <View style={styles.View_21_7336}>
                <Text style={styles.Text_21_7336}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7337}>
              <View style={styles.View_21_7338}>
                <View style={styles.View_I21_7338_8_5311} />
              </View>
              <View style={styles.View_21_7339}>
                <Text style={styles.Text_21_7339}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7340}>
              <View style={styles.View_21_7341}>
                <View style={styles.View_I21_7341_8_5311} />
              </View>
              <View style={styles.View_21_7342}>
                <Text style={styles.Text_21_7342}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7343}>
              <View style={styles.View_21_7344}>
                <View style={styles.View_I21_7344_8_5311} />
              </View>
              <View style={styles.View_21_7345}>
                <Text style={styles.Text_21_7345}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7346}>
              <View style={styles.View_21_7347}>
                <View style={styles.View_I21_7347_8_5311} />
              </View>
              <View style={styles.View_21_7348}>
                <Text style={styles.Text_21_7348}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7625}>
              <View style={styles.View_21_7626}>
                <View style={styles.View_I21_7626_8_5311} />
              </View>
              <View style={styles.View_21_7627}>
                <Text style={styles.Text_21_7627}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7629}>
              <View style={styles.View_21_7630}>
                <View style={styles.View_I21_7630_8_5311} />
              </View>
              <View style={styles.View_21_7631}>
                <Text style={styles.Text_21_7631}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7633}>
              <View style={styles.View_21_7634}>
                <View style={styles.View_I21_7634_8_5311} />
              </View>
              <View style={styles.View_21_7635}>
                <Text style={styles.Text_21_7635}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7637}>
              <View style={styles.View_21_7638}>
                <View style={styles.View_I21_7638_8_5311} />
              </View>
              <View style={styles.View_21_7639}>
                <Text style={styles.Text_21_7639}>Keyword</Text>
              </View>
            </View>
            <View style={styles.View_21_7641}>
              <View style={styles.View_21_7642}>
                <View style={styles.View_I21_7642_8_5311} />
              </View>
              <View style={styles.View_21_7643}>
                <Text style={styles.Text_21_7643}>Keyword</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_21_7390}>
          <View style={styles.View_I21_7390_7_553}>
            <Text style={styles.Text_I21_7390_7_553}>Apply Keywords</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09c44c91-2811-47da-9bbc-11248ca4722a"
          }}
          style={styles.ImageBackground_21_7620}
        />
      </View>
      <View style={styles.View_21_7623}>
        <Text style={styles.Text_21_7623}>Employment Keywords</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_21_7025: {
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
  View_I21_7025_11_9017: {
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
  View_I21_7025_68_29233: {
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
  View_I21_7025_68_29234: {
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
  View_I21_7025_68_29235: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I21_7025_68_29236: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I21_7025_68_29242: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I21_7025_68_29250: {
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
  Text_I21_7025_68_29250: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_I21_7025_11_9024: {
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
  View_I21_7025_11_9025: {
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
  View_I21_7025_11_9026: {
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
  View_I21_7025_11_9027: {
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
  View_I21_7025_11_9027_11_8846: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_11_9027_11_8846: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_11_9027_11_8847: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_11_9027_11_8848: {
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
  View_I21_7025_11_9027_11_8857: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7025_11_9027_11_8857_10_3165: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7025_11_9027_11_8857_10_3166: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I21_7025_25_4093: {
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
  View_I21_7025_25_4093_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_25_4093_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_25_4093_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_25_4093_11_8842: {
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
  ImageBackground_I21_7025_25_4093_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I21_7025_68_15186: {
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
  View_I21_7025_68_15186_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_68_15186_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_68_15186_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_68_15186_11_8842: {
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
  View_I21_7025_68_15186_11_8884: {
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
  View_I21_7025_68_15186_11_8884_68_14372: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7025_68_15186_11_8884_68_14373: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I21_7025_68_15187: {
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
  View_I21_7025_68_15187_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_68_15187_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_68_15187_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_68_15187_11_8842: {
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
  View_I21_7025_68_15187_11_8884: {
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
  ImageBackground_I21_7025_68_15187_11_8884_68_12046: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_11_9032: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_11_9032: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_I21_7025_11_9040: {
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
  View_I21_7025_16_1105: {
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
  View_I21_7025_16_1106: {
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
  View_I21_7025_16_1109: {
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
  View_I21_7025_16_1109_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_16_1109_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_16_1109_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_16_1109_11_8842: {
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
  View_I21_7025_16_1109_11_8884: {
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
  View_I21_7025_16_1109_11_8884_10_3138: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7025_16_1109_11_8884_10_3139: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I21_7025_16_1110: {
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
  View_I21_7025_16_1110_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_16_1110_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_16_1110_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_16_1110_11_8842: {
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
  View_I21_7025_16_1110_11_8884: {
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
  View_I21_7025_16_1110_11_8884_16_994: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7025_16_1110_11_8884_16_995: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I21_7025_16_1112: {
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
  View_I21_7025_16_1112_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_16_1112_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_16_1112_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_16_1112_11_8842: {
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
  View_I21_7025_16_1112_11_8884: {
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
  View_I21_7025_16_1112_11_8884_16_1089: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7025_16_1112_11_8884_16_1090: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I21_7025_16_1113: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_16_1113: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_I21_7025_11_9041: {
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
  View_I21_7025_68_23763: {
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
  View_I21_7025_68_23764: {
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
  View_I21_7025_68_23765: {
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
  View_I21_7025_68_23765_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_68_23765_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_68_23765_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_68_23765_11_8842: {
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
  ImageBackground_I21_7025_68_23765_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I21_7025_68_23766: {
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
  View_I21_7025_68_23766_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_68_23766_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_68_23766_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_68_23766_11_8842: {
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
  ImageBackground_I21_7025_68_23766_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I21_7025_68_23767: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_68_23767: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_I21_7025_11_9042: {
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
  View_I21_7025_11_9042_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I21_7025_11_9042_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I21_7025_11_9042_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_7025_11_9042_11_8842: {
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
  View_I21_7025_11_9042_11_8884: {
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
  View_I21_7025_11_9042_11_8884_16_1438: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7025_11_9042_11_8884_16_1439: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_7026: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7026_11_9254: {
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
  View_I21_7026_11_9254_451_6700: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7026_11_9254_451_6701: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I21_7026_11_9264: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I21_7026_11_9264: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I21_7026_11_9256: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7026_11_9256_11_9266: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7026_11_9256_11_9267: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_7037: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7037_15_5047: {
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
  View_I21_7037_15_5048: {
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
  View_I21_7037_15_5048_15_4065: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_7037_15_5048_15_4066: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_21_7167: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7168: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I21_7168_10_3014: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_21_7169: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_21_7169: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_44059: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("24%")
  },
  View_21_7624: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_21_7317: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7318: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7319: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7319_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7320: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7320: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7321: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7322: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7322_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7323: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7323: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7324: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7325: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7325_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7326: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7326: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7327: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7328: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7328_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7329: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7329: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7330: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7331: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7331_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7332: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7332: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7363: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7364: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7364_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7365: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7365: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7367: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7368: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7368_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7369: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7369: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7371: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7372: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7372_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7373: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7373: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7375: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7376: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7376_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7377: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7377: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7383: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7384: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7384_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7385: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7385: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7333: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7334: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7335: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7335_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7336: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7336: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7337: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7338: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7338_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7339: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7339: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7340: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7341: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7341_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7342: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7342: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7343: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7344: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7344_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7345: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7345: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7346: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7347: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7347_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7348: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7348: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7625: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7626: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7626_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7627: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7627: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7629: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7630: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7630_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7631: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7631: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7633: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7634: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7634_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7635: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7635: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7637: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7638: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7638_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7639: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7639: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7641: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_21_7642: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_7642_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_21_7643: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_21_7643: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_7390: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("11%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I21_7390_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I21_7390_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_7620: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  View_21_7623: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_21_7623: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
