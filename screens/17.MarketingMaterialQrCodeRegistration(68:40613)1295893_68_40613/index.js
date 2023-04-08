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
      <View style={styles.View_68_40614}>
        <View style={styles.View_I68_40614_17_10383}>
          <View style={styles.View_I68_40614_68_31258}>
            <View style={styles.View_I68_40614_68_31259}>
              <View style={styles.View_I68_40614_68_31260}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95cb4115-3fa1-4920-a1de-ed45eb63030c"
                  }}
                  style={styles.ImageBackground_I68_40614_68_31261}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b2233db-0c28-40ab-aeea-615529ea8057"
                }}
                style={styles.ImageBackground_I68_40614_68_31267}
              />
            </View>
            <View style={styles.View_I68_40614_68_31275}>
              <Text style={styles.Text_I68_40614_68_31275}>BUSINESS NAME</Text>
            </View>
          </View>
          <View style={styles.View_I68_40614_17_10390}>
            <View style={styles.View_I68_40614_17_10391}>
              <View style={styles.View_I68_40614_17_10392}>
                <View style={styles.View_I68_40614_17_10393}>
                  <View style={styles.View_I68_40614_17_10393_11_8840}>
                    <Text style={styles.Text_I68_40614_17_10393_11_8840}>
                      Home
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_17_10393_11_8841}>
                    <View style={styles.View_I68_40614_17_10393_11_8842} />
                    <View style={styles.View_I68_40614_17_10393_11_8884}>
                      <View
                        style={styles.View_I68_40614_17_10393_11_8884_10_3159}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a387854-1930-4105-a75a-d6c5978f1568"
                          }}
                          style={
                            styles.ImageBackground_I68_40614_17_10393_11_8884_10_3160
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I68_40614_25_4460}>
                  <View style={styles.View_I68_40614_25_4460_11_8840}>
                    <Text style={styles.Text_I68_40614_25_4460_11_8840}>
                      Geofence
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_25_4460_11_8841}>
                    <View style={styles.View_I68_40614_25_4460_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9c463b0-9ce3-48be-bf60-9caab1ad9aba"
                      }}
                      style={styles.ImageBackground_I68_40614_25_4460_11_8884}
                    />
                  </View>
                </View>
                <View style={styles.View_I68_40614_68_16067}>
                  <View style={styles.View_I68_40614_68_16067_11_8840}>
                    <Text style={styles.Text_I68_40614_68_16067_11_8840}>
                      Reports
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_68_16067_11_8841}>
                    <View style={styles.View_I68_40614_68_16067_11_8842} />
                    <View style={styles.View_I68_40614_68_16067_11_8884}>
                      <View
                        style={styles.View_I68_40614_68_16067_11_8884_68_14372}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42490132-f404-4431-a7da-48230e6e81ee"
                          }}
                          style={
                            styles.ImageBackground_I68_40614_68_16067_11_8884_68_14373
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I68_40614_68_16073}>
                  <View style={styles.View_I68_40614_68_16073_11_8840}>
                    <Text style={styles.Text_I68_40614_68_16073_11_8840}>
                      Metrics
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_68_16073_11_8841}>
                    <View style={styles.View_I68_40614_68_16073_11_8842} />
                    <View style={styles.View_I68_40614_68_16073_11_8884}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9b18610-5035-4865-98ee-60d91616db0f"
                        }}
                        style={
                          styles.ImageBackground_I68_40614_68_16073_11_8884_68_12046
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I68_40614_17_10396}>
                <Text style={styles.Text_I68_40614_17_10396}>GENERAL</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61d30692-58ac-4a03-8d2f-3e2167a26864"
              }}
              style={styles.ImageBackground_I68_40614_17_10397}
            />
            <View style={styles.View_I68_40614_17_10398}>
              <View style={styles.View_I68_40614_17_10399}>
                <View style={styles.View_I68_40614_17_10402}>
                  <View style={styles.View_I68_40614_17_10402_11_8840}>
                    <Text style={styles.Text_I68_40614_17_10402_11_8840}>
                      Scheduling
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_17_10402_11_8841}>
                    <View style={styles.View_I68_40614_17_10402_11_8842} />
                    <View style={styles.View_I68_40614_17_10402_11_8884}>
                      <View
                        style={styles.View_I68_40614_17_10402_11_8884_10_3138}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5704337d-0936-48ae-ad32-da5bf7d38358"
                          }}
                          style={
                            styles.ImageBackground_I68_40614_17_10402_11_8884_10_3139
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I68_40614_17_10403}>
                  <View style={styles.View_I68_40614_17_10403_11_8840}>
                    <Text style={styles.Text_I68_40614_17_10403_11_8840}>
                      Coupon Restriction
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_17_10403_11_8841}>
                    <View style={styles.View_I68_40614_17_10403_11_8842} />
                    <View style={styles.View_I68_40614_17_10403_11_8884}>
                      <View
                        style={styles.View_I68_40614_17_10403_11_8884_16_994}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ad8fe23-7f80-4422-b84a-ba5f2e0cadba"
                          }}
                          style={
                            styles.ImageBackground_I68_40614_17_10403_11_8884_16_995
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I68_40614_17_10405}>
                  <View style={styles.View_I68_40614_17_10405_11_8840}>
                    <Text style={styles.Text_I68_40614_17_10405_11_8840}>
                      Preference
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_17_10405_11_8841}>
                    <View style={styles.View_I68_40614_17_10405_11_8842} />
                    <View style={styles.View_I68_40614_17_10405_11_8884}>
                      <View
                        style={styles.View_I68_40614_17_10405_11_8884_16_1089}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e54609ab-67af-48dd-9daf-28c066fa2eec"
                          }}
                          style={
                            styles.ImageBackground_I68_40614_17_10405_11_8884_16_1090
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I68_40614_17_10406}>
                <Text style={styles.Text_I68_40614_17_10406}>ADS</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6a5c053-111f-4d31-938e-821b2c622943"
              }}
              style={styles.ImageBackground_I68_40614_17_10407}
            />
            <View style={styles.View_I68_40614_68_24583}>
              <View style={styles.View_I68_40614_68_24584}>
                <View style={styles.View_I68_40614_68_28174}>
                  <View style={styles.View_I68_40614_68_28174_11_8846}>
                    <Text style={styles.Text_I68_40614_68_28174_11_8846}>
                      Qr Code
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_68_28174_11_8847}>
                    <View style={styles.View_I68_40614_68_28174_11_8848} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e50750a8-3422-401a-aff8-d244ab5f21fa"
                      }}
                      style={styles.ImageBackground_I68_40614_68_28174_11_8857}
                    />
                  </View>
                </View>
                <View style={styles.View_I68_40614_68_24586}>
                  <View style={styles.View_I68_40614_68_24586_11_8840}>
                    <Text style={styles.Text_I68_40614_68_24586_11_8840}>
                      Referral Link
                    </Text>
                  </View>
                  <View style={styles.View_I68_40614_68_24586_11_8841}>
                    <View style={styles.View_I68_40614_68_24586_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df56db1f-4bfa-43ab-abcb-50f411cd7a83"
                      }}
                      style={styles.ImageBackground_I68_40614_68_24586_11_8884}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I68_40614_68_24587}>
                <Text style={styles.Text_I68_40614_68_24587}>MARKETING</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I68_40614_17_10408}>
          <View style={styles.View_I68_40614_17_10408_11_8840}>
            <Text style={styles.Text_I68_40614_17_10408_11_8840}>Settings</Text>
          </View>
          <View style={styles.View_I68_40614_17_10408_11_8841}>
            <View style={styles.View_I68_40614_17_10408_11_8842} />
            <View style={styles.View_I68_40614_17_10408_11_8884}>
              <View style={styles.View_I68_40614_17_10408_11_8884_16_1438}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbfd029e-5e3b-4c67-bb28-78f25dc36cee"
                  }}
                  style={
                    styles.ImageBackground_I68_40614_17_10408_11_8884_16_1439
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_68_40616}>
        <View style={styles.View_I68_40616_15_5047} />
        <View style={styles.View_I68_40616_15_5048}>
          <View style={styles.View_I68_40616_15_5048_15_4065}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca61683e-7dfb-42cf-a5f5-8156491cb8b0"
              }}
              style={styles.ImageBackground_I68_40616_15_5048_15_4066}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_68_40617}>
        <Text style={styles.Text_68_40617}>
          Marketing Material QR Code Registration
        </Text>
      </View>
      <View style={styles.View_68_45082}>
        <View style={styles.View_I68_45082_11_9235}>
          <View style={styles.View_I68_45082_11_9235_451_6700}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b589de01-64ba-4c4a-82dc-4bfc047c25e3"
              }}
              style={styles.ImageBackground_I68_45082_11_9235_451_6701}
            />
          </View>
        </View>
        <View style={styles.View_I68_45082_11_9236}>
          <Text style={styles.Text_I68_45082_11_9236}>Search</Text>
        </View>
      </View>
      <View style={styles.View_68_45090}>
        <View style={styles.View_68_45091}>
          <Text style={styles.Text_68_45091}>
            Create Marketing Material and QR Code
          </Text>
        </View>
        <View style={styles.View_68_45092}>
          <View style={styles.View_68_45094}>
            <View style={styles.View_I68_45094_11_3270}>
              <Text style={styles.Text_I68_45094_11_3270}>Name</Text>
            </View>
            <View style={styles.View_I68_45094_11_3271}>
              <View style={styles.View_I68_45094_11_3272}>
                <Text style={styles.Text_I68_45094_11_3272}>
                  Input marketing material name
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_68_45096}>
            <View style={styles.View_I68_45096_17_11952}>
              <Text style={styles.Text_I68_45096_17_11952}>Description</Text>
            </View>
            <View style={styles.View_I68_45096_17_11953}>
              <View style={styles.View_I68_45096_17_11954}>
                <Text style={styles.Text_I68_45096_17_11954}>
                  Input description...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_68_48726}>
            <View style={styles.View_68_48729}>
              <View style={styles.View_68_48730}>
                <Text style={styles.Text_68_48730}>Select files</Text>
              </View>
              <View style={styles.View_68_48731}>
                <Text style={styles.Text_68_48731}>
                  Drop files here or click browse thorough your machine
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_68_45132}>
          <View style={styles.View_68_48859}>
            <View style={styles.View_I68_48859_7_561}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8014b63b-c17b-410c-aaa2-399bc21d04e8"
                }}
                style={styles.ImageBackground_I68_48859_7_562}
              />
              <View style={styles.View_I68_48859_7_563}>
                <Text style={styles.Text_I68_48859_7_563}>
                  Generate QR Code
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_68_48925}>
            <View style={styles.View_I68_48925_7_561}>
              <View style={styles.View_I68_48925_7_562}>
                <View style={styles.View_I68_48925_7_562_10_3327}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86df98fa-7f3c-4867-bfa6-e7b33656c448"
                    }}
                    style={styles.ImageBackground_I68_48925_7_562_10_3328}
                  />
                </View>
              </View>
              <View style={styles.View_I68_48925_7_563}>
                <Text style={styles.Text_I68_48925_7_563}>
                  Share Referral Link
                </Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3669767-10bb-47b8-8a79-cba10c862c74"
          }}
          style={styles.ImageBackground_68_48994}
        />
        <View style={styles.View_68_48970}>
          <View style={styles.View_68_48971}>
            <View style={styles.View_I68_48971_7_553}>
              <Text style={styles.Text_I68_48971_7_553}>Save</Text>
            </View>
          </View>
          <View style={styles.View_68_48972}>
            <View style={styles.View_I68_48972_7_557}>
              <Text style={styles.Text_I68_48972_7_557}>View</Text>
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
  View_68_40614: {
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
  View_I68_40614_17_10383: {
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
  View_I68_40614_68_31258: {
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
  View_I68_40614_68_31259: {
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
  View_I68_40614_68_31260: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I68_40614_68_31261: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I68_40614_68_31267: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I68_40614_68_31275: {
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
  Text_I68_40614_68_31275: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_I68_40614_17_10390: {
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
  View_I68_40614_17_10391: {
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
  View_I68_40614_17_10392: {
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
  View_I68_40614_17_10393: {
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
  View_I68_40614_17_10393_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_17_10393_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_17_10393_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_17_10393_11_8842: {
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
  View_I68_40614_17_10393_11_8884: {
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
  View_I68_40614_17_10393_11_8884_10_3159: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_40614_17_10393_11_8884_10_3160: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_40614_25_4460: {
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
  View_I68_40614_25_4460_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_25_4460_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_25_4460_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_25_4460_11_8842: {
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
  ImageBackground_I68_40614_25_4460_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I68_40614_68_16067: {
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
  View_I68_40614_68_16067_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_68_16067_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_68_16067_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_68_16067_11_8842: {
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
  View_I68_40614_68_16067_11_8884: {
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
  View_I68_40614_68_16067_11_8884_68_14372: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_40614_68_16067_11_8884_68_14373: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_40614_68_16073: {
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
  View_I68_40614_68_16073_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_68_16073_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_68_16073_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_68_16073_11_8842: {
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
  View_I68_40614_68_16073_11_8884: {
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
  ImageBackground_I68_40614_68_16073_11_8884_68_12046: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_17_10396: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_17_10396: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_I68_40614_17_10397: {
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
  View_I68_40614_17_10398: {
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
  View_I68_40614_17_10399: {
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
  View_I68_40614_17_10402: {
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
  View_I68_40614_17_10402_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_17_10402_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_17_10402_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_17_10402_11_8842: {
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
  View_I68_40614_17_10402_11_8884: {
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
  View_I68_40614_17_10402_11_8884_10_3138: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_40614_17_10402_11_8884_10_3139: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_40614_17_10403: {
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
  View_I68_40614_17_10403_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_17_10403_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_17_10403_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_17_10403_11_8842: {
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
  View_I68_40614_17_10403_11_8884: {
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
  View_I68_40614_17_10403_11_8884_16_994: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_40614_17_10403_11_8884_16_995: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_40614_17_10405: {
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
  View_I68_40614_17_10405_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_17_10405_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_17_10405_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_17_10405_11_8842: {
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
  View_I68_40614_17_10405_11_8884: {
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
  View_I68_40614_17_10405_11_8884_16_1089: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_40614_17_10405_11_8884_16_1090: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_40614_17_10406: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_17_10406: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_I68_40614_17_10407: {
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
  View_I68_40614_68_24583: {
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
  View_I68_40614_68_24584: {
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
  View_I68_40614_68_28174: {
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
  View_I68_40614_68_28174_11_8846: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_68_28174_11_8846: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_68_28174_11_8847: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_68_28174_11_8848: {
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
  ImageBackground_I68_40614_68_28174_11_8857: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I68_40614_68_24586: {
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
  View_I68_40614_68_24586_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_68_24586_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_68_24586_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_68_24586_11_8842: {
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
  ImageBackground_I68_40614_68_24586_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I68_40614_68_24587: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_68_24587: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_I68_40614_17_10408: {
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
  View_I68_40614_17_10408_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I68_40614_17_10408_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I68_40614_17_10408_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I68_40614_17_10408_11_8842: {
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
  View_I68_40614_17_10408_11_8884: {
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
  View_I68_40614_17_10408_11_8884_16_1438: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_40614_17_10408_11_8884_16_1439: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_40616: {
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
  View_I68_40616_15_5047: {
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
  View_I68_40616_15_5048: {
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
  View_I68_40616_15_5048_15_4065: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_40616_15_5048_15_4066: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_40617: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_68_40617: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_45082: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_45082_11_9235: {
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
  View_I68_45082_11_9235_451_6700: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_45082_11_9235_451_6701: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_45082_11_9236: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I68_45082_11_9236: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_45090: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("97%"),
    minHeight: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_68_45091: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_68_45091: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_45092: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_68_45094: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_45094_11_3270: {
    flexGrow: 1,
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_45094_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I68_45094_11_3271: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_45094_11_3272: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I68_45094_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_45096: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_45096_17_11952: {
    flexGrow: 1,
    width: wp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_45096_17_11952: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I68_45096_17_11953: {
    flexGrow: 1,
    width: wp("76%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_45096_17_11954: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I68_45096_17_11954: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_48726: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_68_48729: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_68_48730: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_68_48730: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_48731: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_68_48731: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_45132: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_68_48859: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I68_48859_7_561: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I68_48859_7_562: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_48859_7_563: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_48859_7_563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_48925: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I68_48925_7_561: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_48925_7_562: {
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
  View_I68_48925_7_562_10_3327: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I68_48925_7_562_10_3328: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_48925_7_563: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_48925_7_563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_68_48994: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("81%")
  },
  View_68_48970: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_68_48971: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I68_48971_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I68_48971_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_48972: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_48972_7_557: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I68_48972_7_557: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
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
