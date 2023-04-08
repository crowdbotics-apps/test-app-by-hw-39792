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
      <View style={styles.View_47_11715}>
        <View style={styles.View_I47_11715_17_10131}>
          <View style={styles.View_I47_11715_68_30924}>
            <View style={styles.View_I47_11715_68_30925}>
              <View style={styles.View_I47_11715_68_30926}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79bae6c7-bc52-4d9f-a598-8870e452c998"
                  }}
                  style={styles.ImageBackground_I47_11715_68_30927}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03ba5af8-2644-4bb3-81ae-c3f231e1ea49"
                }}
                style={styles.ImageBackground_I47_11715_68_30933}
              />
            </View>
            <View style={styles.View_I47_11715_68_30941}>
              <Text style={styles.Text_I47_11715_68_30941}>BUSINESS NAME</Text>
            </View>
          </View>
          <View style={styles.View_I47_11715_17_10138}>
            <View style={styles.View_I47_11715_17_10139}>
              <View style={styles.View_I47_11715_17_10140}>
                <View style={styles.View_I47_11715_17_10141}>
                  <View style={styles.View_I47_11715_17_10141_11_8840}>
                    <Text style={styles.Text_I47_11715_17_10141_11_8840}>
                      Home
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_17_10141_11_8841}>
                    <View style={styles.View_I47_11715_17_10141_11_8842} />
                    <View style={styles.View_I47_11715_17_10141_11_8884}>
                      <View
                        style={styles.View_I47_11715_17_10141_11_8884_10_3159}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30d8e12f-17aa-4c9d-9086-673d2cd2a667"
                          }}
                          style={
                            styles.ImageBackground_I47_11715_17_10141_11_8884_10_3160
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I47_11715_25_4406}>
                  <View style={styles.View_I47_11715_25_4406_11_8840}>
                    <Text style={styles.Text_I47_11715_25_4406_11_8840}>
                      Geofence
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_25_4406_11_8841}>
                    <View style={styles.View_I47_11715_25_4406_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30032a0c-4ad7-41dc-a7f6-843d8a81dfdb"
                      }}
                      style={styles.ImageBackground_I47_11715_25_4406_11_8884}
                    />
                  </View>
                </View>
                <View style={styles.View_I47_11715_68_15853}>
                  <View style={styles.View_I47_11715_68_15853_11_8840}>
                    <Text style={styles.Text_I47_11715_68_15853_11_8840}>
                      Reports
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_68_15853_11_8841}>
                    <View style={styles.View_I47_11715_68_15853_11_8842} />
                    <View style={styles.View_I47_11715_68_15853_11_8884}>
                      <View
                        style={styles.View_I47_11715_68_15853_11_8884_68_14372}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/248a00b2-59f6-482c-bade-579b789ba567"
                          }}
                          style={
                            styles.ImageBackground_I47_11715_68_15853_11_8884_68_14373
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I47_11715_68_15854}>
                  <View style={styles.View_I47_11715_68_15854_11_8840}>
                    <Text style={styles.Text_I47_11715_68_15854_11_8840}>
                      Metrics
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_68_15854_11_8841}>
                    <View style={styles.View_I47_11715_68_15854_11_8842} />
                    <View style={styles.View_I47_11715_68_15854_11_8884}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6b094a8-c773-4626-a503-17538c6308a3"
                        }}
                        style={
                          styles.ImageBackground_I47_11715_68_15854_11_8884_68_12046
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I47_11715_17_10144}>
                <Text style={styles.Text_I47_11715_17_10144}>GENERAL</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4b81e4f-1c0e-41fb-8d0c-f69c7f93d66a"
              }}
              style={styles.ImageBackground_I47_11715_17_10145}
            />
            <View style={styles.View_I47_11715_17_10146}>
              <View style={styles.View_I47_11715_17_10147}>
                <View style={styles.View_I47_11715_17_10150}>
                  <View style={styles.View_I47_11715_17_10150_11_8846}>
                    <Text style={styles.Text_I47_11715_17_10150_11_8846}>
                      Scheduling
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_17_10150_11_8847}>
                    <View style={styles.View_I47_11715_17_10150_11_8848} />
                    <View style={styles.View_I47_11715_17_10150_11_8857}>
                      <View
                        style={styles.View_I47_11715_17_10150_11_8857_10_3152}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c2ccb40-16c9-4512-9f72-ddb312201912"
                          }}
                          style={
                            styles.ImageBackground_I47_11715_17_10150_11_8857_10_3153
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I47_11715_17_10151}>
                  <View style={styles.View_I47_11715_17_10151_11_8840}>
                    <Text style={styles.Text_I47_11715_17_10151_11_8840}>
                      Coupon Restriction
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_17_10151_11_8841}>
                    <View style={styles.View_I47_11715_17_10151_11_8842} />
                    <View style={styles.View_I47_11715_17_10151_11_8884}>
                      <View
                        style={styles.View_I47_11715_17_10151_11_8884_16_994}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10be50d0-32a4-4745-9516-e4bdcfdf1ff1"
                          }}
                          style={
                            styles.ImageBackground_I47_11715_17_10151_11_8884_16_995
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I47_11715_17_10153}>
                  <View style={styles.View_I47_11715_17_10153_11_8840}>
                    <Text style={styles.Text_I47_11715_17_10153_11_8840}>
                      Preference
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_17_10153_11_8841}>
                    <View style={styles.View_I47_11715_17_10153_11_8842} />
                    <View style={styles.View_I47_11715_17_10153_11_8884}>
                      <View
                        style={styles.View_I47_11715_17_10153_11_8884_16_1089}
                      >
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4da5fef5-f813-49f9-abd9-0c325ae3fa60"
                          }}
                          style={
                            styles.ImageBackground_I47_11715_17_10153_11_8884_16_1090
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_I47_11715_17_10154}>
                <Text style={styles.Text_I47_11715_17_10154}>ADS</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/449824f9-44c8-411f-972f-ccde67b977e9"
              }}
              style={styles.ImageBackground_I47_11715_17_10155}
            />
            <View style={styles.View_I47_11715_68_24588}>
              <View style={styles.View_I47_11715_68_24589}>
                <View style={styles.View_I47_11715_68_24590}>
                  <View style={styles.View_I47_11715_68_24590_11_8840}>
                    <Text style={styles.Text_I47_11715_68_24590_11_8840}>
                      Qr Code
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_68_24590_11_8841}>
                    <View style={styles.View_I47_11715_68_24590_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a3789c0-850d-4111-97af-a47a330addc2"
                      }}
                      style={styles.ImageBackground_I47_11715_68_24590_11_8884}
                    />
                  </View>
                </View>
                <View style={styles.View_I47_11715_68_24591}>
                  <View style={styles.View_I47_11715_68_24591_11_8840}>
                    <Text style={styles.Text_I47_11715_68_24591_11_8840}>
                      Referral Link
                    </Text>
                  </View>
                  <View style={styles.View_I47_11715_68_24591_11_8841}>
                    <View style={styles.View_I47_11715_68_24591_11_8842} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abfdd081-6249-4fd1-8270-359bdd38c16c"
                      }}
                      style={styles.ImageBackground_I47_11715_68_24591_11_8884}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I47_11715_68_24592}>
                <Text style={styles.Text_I47_11715_68_24592}>MARKETING</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I47_11715_17_10156}>
          <View style={styles.View_I47_11715_17_10156_11_8840}>
            <Text style={styles.Text_I47_11715_17_10156_11_8840}>Settings</Text>
          </View>
          <View style={styles.View_I47_11715_17_10156_11_8841}>
            <View style={styles.View_I47_11715_17_10156_11_8842} />
            <View style={styles.View_I47_11715_17_10156_11_8884}>
              <View style={styles.View_I47_11715_17_10156_11_8884_16_1438}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac00a482-cf9c-43bd-84cb-993b91b5c616"
                  }}
                  style={
                    styles.ImageBackground_I47_11715_17_10156_11_8884_16_1439
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_47_11716}>
        <View style={styles.View_I47_11716_11_9235}>
          <View style={styles.View_I47_11716_11_9235_451_6700}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b063ca9-5648-40de-9849-b04e1f01b584"
              }}
              style={styles.ImageBackground_I47_11716_11_9235_451_6701}
            />
          </View>
        </View>
        <View style={styles.View_I47_11716_11_9236}>
          <Text style={styles.Text_I47_11716_11_9236}>Search</Text>
        </View>
      </View>
      <View style={styles.View_47_11717}>
        <Text style={styles.Text_47_11717}>Ad Scheduling</Text>
      </View>
      <View style={styles.View_47_11718}>
        <View style={styles.View_47_11719}>
          <View style={styles.View_47_11720}>
            <View style={styles.View_I47_11720_11_3270}>
              <Text style={styles.Text_I47_11720_11_3270}>Ad Title</Text>
            </View>
            <View style={styles.View_I47_11720_11_3271}>
              <View style={styles.View_I47_11720_11_3272}>
                <Text style={styles.Text_I47_11720_11_3272}>
                  Input ad title
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_47_11721}>
            <View style={styles.View_I47_11721_11_3270}>
              <Text style={styles.Text_I47_11721_11_3270}>Link</Text>
            </View>
            <View style={styles.View_I47_11721_11_3271}>
              <View style={styles.View_I47_11721_11_3272}>
                <Text style={styles.Text_I47_11721_11_3272}>
                  Copy link here
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_47_11722}>
          <View style={styles.View_I47_11722_17_11952}>
            <Text style={styles.Text_I47_11722_17_11952}>Description</Text>
          </View>
          <View style={styles.View_I47_11722_17_11953}>
            <View style={styles.View_I47_11722_17_11954}>
              <Text style={styles.Text_I47_11722_17_11954}>
                Input description...
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_47_11723}>
          <View style={styles.View_47_11724}>
            <View style={styles.View_I47_11724_19_12706}>
              <Text style={styles.Text_I47_11724_19_12706}>Start Date</Text>
            </View>
            <View style={styles.View_I47_11724_19_12707}>
              <View style={styles.View_I47_11724_19_12708}>
                <View style={styles.View_I47_11724_19_12708_451_5656}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00665e4d-4888-438a-8027-8b0bb3242b05"
                    }}
                    style={styles.ImageBackground_I47_11724_19_12708_451_5657}
                  />
                </View>
              </View>
              <View style={styles.View_I47_11724_19_12709}>
                <Text style={styles.Text_I47_11724_19_12709}>12/12/2000</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_47_11725}>
            <View style={styles.View_I47_11725_19_12706}>
              <Text style={styles.Text_I47_11725_19_12706}>End Date</Text>
            </View>
            <View style={styles.View_I47_11725_19_12707}>
              <View style={styles.View_I47_11725_19_12708}>
                <View style={styles.View_I47_11725_19_12708_451_5656}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7af8a07-9c9a-4d1f-a864-a1b13fa2c4e5"
                    }}
                    style={styles.ImageBackground_I47_11725_19_12708_451_5657}
                  />
                </View>
              </View>
              <View style={styles.View_I47_11725_19_12709}>
                <Text style={styles.Text_I47_11725_19_12709}>12/12/2000</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_47_11726}>
            <View style={styles.View_I47_11726_19_12706}>
              <Text style={styles.Text_I47_11726_19_12706}>Time</Text>
            </View>
            <View style={styles.View_I47_11726_19_12707}>
              <View style={styles.View_I47_11726_19_12708}>
                <View style={styles.View_I47_11726_19_12708_10_3085}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c68ab00-f77a-4618-8b41-48f6f10dd738"
                    }}
                    style={styles.ImageBackground_I47_11726_19_12708_10_3086}
                  />
                </View>
              </View>
              <View style={styles.View_I47_11726_19_12709}>
                <Text style={styles.Text_I47_11726_19_12709}>10:00 AM</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_47_11727}>
          <View style={styles.View_47_11728}>
            <Text style={styles.Text_47_11728}>Days of the Week</Text>
          </View>
          <View style={styles.View_47_11729}>
            <View style={styles.View_47_11730}>
              <View style={styles.View_47_11731}>
                <View style={styles.View_I47_11731_8_5308} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7c321d1-a179-404c-8ea3-8c92dad164c4"
                  }}
                  style={styles.ImageBackground_I47_11731_8_5309}
                />
              </View>
              <View style={styles.View_47_11732}>
                <Text style={styles.Text_47_11732}>Monday</Text>
              </View>
            </View>
            <View style={styles.View_47_11733}>
              <View style={styles.View_47_11734}>
                <View style={styles.View_I47_11734_8_5311} />
              </View>
              <View style={styles.View_47_11735}>
                <Text style={styles.Text_47_11735}>Tuesday</Text>
              </View>
            </View>
            <View style={styles.View_47_11736}>
              <View style={styles.View_47_11737}>
                <View style={styles.View_I47_11737_8_5311} />
              </View>
              <View style={styles.View_47_11738}>
                <Text style={styles.Text_47_11738}>Wednesday</Text>
              </View>
            </View>
            <View style={styles.View_47_11739}>
              <View style={styles.View_47_11740}>
                <View style={styles.View_I47_11740_8_5311} />
              </View>
              <View style={styles.View_47_11741}>
                <Text style={styles.Text_47_11741}>Thursday</Text>
              </View>
            </View>
            <View style={styles.View_47_11742}>
              <View style={styles.View_47_11743}>
                <View style={styles.View_I47_11743_8_5311} />
              </View>
              <View style={styles.View_47_11744}>
                <Text style={styles.Text_47_11744}>Friday</Text>
              </View>
            </View>
            <View style={styles.View_47_11745}>
              <View style={styles.View_47_11746}>
                <View style={styles.View_I47_11746_8_5311} />
              </View>
              <View style={styles.View_47_11747}>
                <Text style={styles.Text_47_11747}>Saturday</Text>
              </View>
            </View>
            <View style={styles.View_47_11748}>
              <View style={styles.View_47_11749}>
                <View style={styles.View_I47_11749_8_5311} />
              </View>
              <View style={styles.View_47_11750}>
                <Text style={styles.Text_47_11750}>Sunday</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_47_11751}>
          <View style={styles.View_47_11752}>
            <View style={styles.View_47_11753}>
              <View style={styles.View_I47_11753_8_5317} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b98e711-47a9-41d5-9576-d1876435adba"
                }}
                style={styles.ImageBackground_I47_11753_8_5318}
              />
            </View>
            <View style={styles.View_47_11754}>
              <Text style={styles.Text_47_11754}>Show logo as image.</Text>
            </View>
          </View>
          <View style={styles.View_47_11755}>
            <View style={styles.View_47_11756}>
              <View style={styles.View_I47_11756_15_5047} />
              <View style={styles.View_I47_11756_15_5048}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e53cb35-5feb-45f3-83e4-e96ac0df247d"
                  }}
                  style={styles.ImageBackground_I47_11756_15_5048_10_3040}
                />
              </View>
            </View>
            <View style={styles.View_47_11757}>
              <Text style={styles.Text_47_11757}>Preview Ad</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_47_11758}>
        <View style={styles.View_47_11759}>
          <View style={styles.View_47_11760}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e82b402-d39e-432b-802a-2cfa0641b3e6"
              }}
              style={styles.ImageBackground_47_11761}
            />
            <View style={styles.View_47_11762}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62ceeabb-dbd7-447c-85f5-d2ea66f0cb1e"
                }}
                style={styles.ImageBackground_47_11763}
              />
              <View style={styles.View_47_11764} />
              <View style={styles.View_47_11765} />
              <View style={styles.View_47_11766} />
            </View>
          </View>
          <View style={styles.View_47_11767}>
            <Text style={styles.Text_47_11767}>Business Name</Text>
          </View>
        </View>
        <View style={styles.View_47_11768}>
          <View style={styles.View_I47_11768_15_5047} />
          <View style={styles.View_I47_11768_15_5048}>
            <View style={styles.View_I47_11768_15_5048_15_4065}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3308a283-62ed-4195-b714-15c49f73b1ba"
                }}
                style={styles.ImageBackground_I47_11768_15_5048_15_4066}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_47_11769}>
        <View style={styles.View_47_11770}>
          <View style={styles.View_I47_11770_7_553}>
            <Text style={styles.Text_I47_11770_7_553}>Schedule</Text>
          </View>
        </View>
        <View style={styles.View_47_11771}>
          <View style={styles.View_I47_11771_7_557}>
            <Text style={styles.Text_I47_11771_7_557}>Save</Text>
          </View>
        </View>
        <View style={styles.View_47_11772}>
          <View style={styles.View_I47_11772_7_581}>
            <Text style={styles.Text_I47_11772_7_581}>Cancel</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_47_11715: {
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
  View_I47_11715_17_10131: {
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
  View_I47_11715_68_30924: {
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
  View_I47_11715_68_30925: {
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
  View_I47_11715_68_30926: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I47_11715_68_30927: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I47_11715_68_30933: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I47_11715_68_30941: {
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
  Text_I47_11715_68_30941: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_I47_11715_17_10138: {
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
  View_I47_11715_17_10139: {
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
  View_I47_11715_17_10140: {
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
  View_I47_11715_17_10141: {
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
  View_I47_11715_17_10141_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_17_10141_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_17_10141_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_17_10141_11_8842: {
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
  View_I47_11715_17_10141_11_8884: {
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
  View_I47_11715_17_10141_11_8884_10_3159: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11715_17_10141_11_8884_10_3160: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11715_25_4406: {
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
  View_I47_11715_25_4406_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_25_4406_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_25_4406_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_25_4406_11_8842: {
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
  ImageBackground_I47_11715_25_4406_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I47_11715_68_15853: {
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
  View_I47_11715_68_15853_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_68_15853_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_68_15853_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_68_15853_11_8842: {
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
  View_I47_11715_68_15853_11_8884: {
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
  View_I47_11715_68_15853_11_8884_68_14372: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11715_68_15853_11_8884_68_14373: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11715_68_15854: {
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
  View_I47_11715_68_15854_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_68_15854_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_68_15854_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_68_15854_11_8842: {
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
  View_I47_11715_68_15854_11_8884: {
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
  ImageBackground_I47_11715_68_15854_11_8884_68_12046: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_17_10144: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_17_10144: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_I47_11715_17_10145: {
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
  View_I47_11715_17_10146: {
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
  View_I47_11715_17_10147: {
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
  View_I47_11715_17_10150: {
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
  View_I47_11715_17_10150_11_8846: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_17_10150_11_8846: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_17_10150_11_8847: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_17_10150_11_8848: {
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
  View_I47_11715_17_10150_11_8857: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11715_17_10150_11_8857_10_3152: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11715_17_10150_11_8857_10_3153: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11715_17_10151: {
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
  View_I47_11715_17_10151_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_17_10151_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_17_10151_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_17_10151_11_8842: {
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
  View_I47_11715_17_10151_11_8884: {
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
  View_I47_11715_17_10151_11_8884_16_994: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11715_17_10151_11_8884_16_995: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11715_17_10153: {
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
  View_I47_11715_17_10153_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_17_10153_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_17_10153_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_17_10153_11_8842: {
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
  View_I47_11715_17_10153_11_8884: {
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
  View_I47_11715_17_10153_11_8884_16_1089: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11715_17_10153_11_8884_16_1090: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11715_17_10154: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_17_10154: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_I47_11715_17_10155: {
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
  View_I47_11715_68_24588: {
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
  View_I47_11715_68_24589: {
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
  View_I47_11715_68_24590: {
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
  View_I47_11715_68_24590_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_68_24590_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_68_24590_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_68_24590_11_8842: {
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
  ImageBackground_I47_11715_68_24590_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I47_11715_68_24591: {
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
  View_I47_11715_68_24591_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_68_24591_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_68_24591_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_68_24591_11_8842: {
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
  ImageBackground_I47_11715_68_24591_11_8884: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I47_11715_68_24592: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_68_24592: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_I47_11715_17_10156: {
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
  View_I47_11715_17_10156_11_8840: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I47_11715_17_10156_11_8840: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10.999999046325684,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_I47_11715_17_10156_11_8841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_11715_17_10156_11_8842: {
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
  View_I47_11715_17_10156_11_8884: {
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
  View_I47_11715_17_10156_11_8884_16_1438: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11715_17_10156_11_8884_16_1439: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_11716: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11716_11_9235: {
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
  View_I47_11716_11_9235_451_6700: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11716_11_9235_451_6701: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11716_11_9236: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11716_11_9236: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11717: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_47_11717: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11718: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11719: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11720: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11720_11_3270: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11720_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_11720_11_3271: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11720_11_3272: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11720_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11721: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11721_11_3270: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11721_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_11721_11_3271: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11721_11_3272: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11721_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11722: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11722_17_11952: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11722_17_11952: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_11722_17_11953: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11722_17_11954: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11722_17_11954: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11723: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11724: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11724_19_12706: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11724_19_12706: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_11724_19_12707: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11724_19_12708: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11724_19_12708_451_5656: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11724_19_12708_451_5657: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11724_19_12709: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11724_19_12709: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11725: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11725_19_12706: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11725_19_12706: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_11725_19_12707: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11725_19_12708: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11725_19_12708_451_5656: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11725_19_12708_451_5657: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11725_19_12709: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11725_19_12709: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11726: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11726_19_12706: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_11726_19_12706: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_11726_19_12707: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11726_19_12708: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11726_19_12708_10_3085: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11726_19_12708_10_3086: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I47_11726_19_12709: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11726_19_12709: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11727: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11728: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_11728: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11729: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11730: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11731: {
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
  View_I47_11731_8_5308: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(58, 176, 73, 1)",
    borderWidth: 1
  },
  ImageBackground_I47_11731_8_5309: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_11732: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_47_11732: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11733: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11734: {
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
  View_I47_11734_8_5311: {
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
  View_47_11735: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_47_11735: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11736: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11737: {
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
  View_I47_11737_8_5311: {
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
  View_47_11738: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_47_11738: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11739: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11740: {
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
  View_I47_11740_8_5311: {
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
  View_47_11741: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_47_11741: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11742: {
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
  View_47_11743: {
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
  View_I47_11743_8_5311: {
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
  View_47_11744: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_47_11744: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11745: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11746: {
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
  View_I47_11746_8_5311: {
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
  View_47_11747: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_47_11747: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11748: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11749: {
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
  View_I47_11749_8_5311: {
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
  View_47_11750: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_47_11750: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11751: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11752: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11753: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11753_8_5317: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  ImageBackground_I47_11753_8_5318: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_47_11754: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_47_11754: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11755: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11756: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11756_15_5047: {
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
  View_I47_11756_15_5048: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I47_11756_15_5048_10_3040: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_47_11757: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_47_11757: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11758: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11759: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11760: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_11761: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_11762: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_47_11763: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_11764: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 102, 66, 1)"
  },
  View_47_11765: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(25, 102, 37, 1)"
  },
  View_47_11766: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_47_11767: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_47_11767: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_47_11768: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11768_15_5047: {
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
  View_I47_11768_15_5048: {
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
  View_I47_11768_15_5048_15_4065: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_11768_15_5048_15_4066: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_47_11769: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_11770: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I47_11770_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11770_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11771: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11771_7_557: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11771_7_557: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_11772: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_11772_7_581: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_11772_7_581: {
    color: "rgba(226, 102, 66, 1)",
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
