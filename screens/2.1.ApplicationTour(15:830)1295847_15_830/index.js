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
      <View style={styles.View_15_831} />
      <View style={styles.View_15_838}>
        <Text style={styles.Text_15_838}>Discover our App</Text>
      </View>
      <View style={styles.View_15_839}>
        <View style={styles.View_15_1074}>
          <View style={styles.View_I15_1074_7_553}>
            <Text style={styles.Text_I15_1074_7_553}>Start using the App</Text>
          </View>
        </View>
        <View style={styles.View_15_1075}>
          <View style={styles.View_15_1076}>
            <Text style={styles.Text_15_1076}>Already have an account? </Text>
          </View>
          <View style={styles.View_15_1077}>
            <Text style={styles.Text_15_1077}> Login</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_1071}>
        <Text style={styles.Text_15_1071}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_15_1095}>
        <View style={styles.View_I15_1095_15_1084} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3665017-cba0-486b-9e9d-3ad183dca6fd"
          }}
          style={styles.ImageBackground_I15_1095_15_1085}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1deb2353-d78d-4e35-bec1-ab41ebcdb8fd"
          }}
          style={styles.ImageBackground_I15_1095_15_1086}
        />
      </View>
      <View style={styles.View_15_1828}>
        <View style={styles.View_15_1829}>
          <View style={styles.View_15_1830}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58dc742d-3999-4408-8274-6c77a9190782"
              }}
              style={styles.ImageBackground_15_1831}
            />
            <View style={styles.View_15_1833}>
              <View style={styles.View_15_1834}>
                <View style={styles.View_15_1835}>
                  <View style={styles.View_15_1836}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd4bb5c2-d5c7-4e16-b65a-1379524a8929"
                      }}
                      style={styles.ImageBackground_15_1837}
                    />
                    <View style={styles.View_15_1838}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed2582f0-86da-4b8f-98c8-70c5e543a961"
                        }}
                        style={styles.ImageBackground_15_1839}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f81f5356-cf81-47d1-ad20-8542c0e38c85"
                        }}
                        style={styles.ImageBackground_15_1840}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39a2be47-3f41-4ae3-a294-ec96257d42a5"
                        }}
                        style={styles.ImageBackground_15_1842}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/226e92f3-e99f-436a-9842-e6c3479f4a55"
                        }}
                        style={styles.ImageBackground_15_1843}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d020d2f-78c4-4634-812c-5f11d0a3b3bd"
                        }}
                        style={styles.ImageBackground_15_1845}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba236118-d130-42cc-a67b-bf26003f5524"
                        }}
                        style={styles.ImageBackground_15_1847}
                      />
                    </View>
                  </View>
                  <View style={styles.View_15_1849}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/408a22dd-e837-4d6f-9c68-9d782cbd6109"
                      }}
                      style={styles.ImageBackground_15_1850}
                    />
                    <View style={styles.View_15_1851}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f2dc340-99da-44d9-9e9c-f17fe5077c4c"
                        }}
                        style={styles.ImageBackground_15_1852}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d45f8f11-2bd9-416c-a2fe-14fcdcb07303"
                        }}
                        style={styles.ImageBackground_15_1853}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88ef714e-b8e5-4452-9dee-b6083ef60894"
                        }}
                        style={styles.ImageBackground_15_1855}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/007145fd-c1af-4b32-8538-69b31fc0dd17"
                        }}
                        style={styles.ImageBackground_15_1856}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9753840d-f829-4cd8-b368-9b4181ae4957"
                        }}
                        style={styles.ImageBackground_15_1858}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43eda4ef-158e-4009-be43-9d12d0011f99"
                        }}
                        style={styles.ImageBackground_15_1860}
                      />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e2b8698-1463-4e91-a019-615db0929466"
                    }}
                    style={styles.ImageBackground_15_1862}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35863053-29fa-42a5-a8e7-79ac7e51556f"
                    }}
                    style={styles.ImageBackground_15_1863}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb51eeac-0bd8-4766-8b08-3dc0074d6e32"
                    }}
                    style={styles.ImageBackground_15_1864}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f61c27cd-862d-479a-816f-0fe0547326a7"
                    }}
                    style={styles.ImageBackground_15_1866}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71df9fe9-6161-4d63-b644-8be9bafac53a"
                    }}
                    style={styles.ImageBackground_15_1868}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03d5daa6-f240-4621-b1c2-c4ae7897e8ff"
                    }}
                    style={styles.ImageBackground_15_1870}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bf2acea-8604-4a10-b87a-c77f333a476e"
                    }}
                    style={styles.ImageBackground_15_1872}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9378acbc-3951-46a0-ae1d-4f4dc156f75c"
                    }}
                    style={styles.ImageBackground_15_1874}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90f5697d-8276-4606-bfaf-e34b71ab7243"
                    }}
                    style={styles.ImageBackground_15_1876}
                  />
                  <View style={styles.View_15_1877}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c3193c3-4b7a-47cd-8d08-4fe95c6f6a8d"
                      }}
                      style={styles.ImageBackground_15_1878}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2734f54-0c3b-479f-8d8b-d5e1e5e47ed9"
                      }}
                      style={styles.ImageBackground_15_1879}
                    />
                  </View>
                  <View style={styles.View_15_1881}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/333a929e-1973-4854-9a8f-c249b452bde9"
                      }}
                      style={styles.ImageBackground_15_1882}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7f32c06-3610-4138-8334-2c4ea668144e"
                      }}
                      style={styles.ImageBackground_15_1883}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e447892-96e2-44dc-8660-e5a2ed19ab7a"
                    }}
                    style={styles.ImageBackground_15_1885}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fff73e6-8385-4ca0-b099-c6cd4adff0a8"
                    }}
                    style={styles.ImageBackground_15_1886}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e384123c-425e-40ce-9fba-c98e03b3212e"
                    }}
                    style={styles.ImageBackground_15_1888}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43b158be-105a-45c5-bde3-822f90f7061e"
                    }}
                    style={styles.ImageBackground_15_1889}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9b5c13d-c2e6-4479-a7ba-53a1bde8e3ee"
                    }}
                    style={styles.ImageBackground_15_1890}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f39d224-0d2d-4a81-a2da-2c429187ac56"
                    }}
                    style={styles.ImageBackground_15_1891}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc8480bd-8fb7-4fae-9a65-6743966299b4"
                    }}
                    style={styles.ImageBackground_15_1892}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4913ded7-1b22-4b70-9ada-a6ed795e35f3"
                    }}
                    style={styles.ImageBackground_15_1893}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7984cc9-fa87-4433-b1b8-b1e58251e3e3"
                    }}
                    style={styles.ImageBackground_15_1900}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac780bee-e1e8-47fe-993e-5017edfa475c"
                    }}
                    style={styles.ImageBackground_15_1902}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e25dbad-f4b0-4426-bec5-865c1b1ba161"
                    }}
                    style={styles.ImageBackground_15_1904}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13806c7f-616d-4eca-85ae-d7317c61829f"
                    }}
                    style={styles.ImageBackground_15_1908}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0942499d-bfb0-4aae-98b4-1f07c2a6d2ca"
                    }}
                    style={styles.ImageBackground_15_1909}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f73b2d37-8bd1-4764-8e36-47cd31d38f2b"
                    }}
                    style={styles.ImageBackground_15_1911}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71076399-fc82-440a-9641-1107c5e0858d"
                    }}
                    style={styles.ImageBackground_15_1912}
                  />
                  <View style={styles.View_15_1914}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2f1529b-3789-467e-a882-d9c8488517b4"
                      }}
                      style={styles.ImageBackground_15_1915}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1075e70-9610-4731-ab1c-985707e55712"
                      }}
                      style={styles.ImageBackground_15_1917}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1a42898-d1b9-4044-8022-3310fb66aa25"
                      }}
                      style={styles.ImageBackground_15_1919}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d199aaa4-6a02-47c9-b7dc-da08859c57a8"
                    }}
                    style={styles.ImageBackground_15_1921}
                  />
                </View>
                <View style={styles.View_15_1923}>
                  <View style={styles.View_15_1924}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0fa32c7-e41e-4726-ab74-c36abbf3c6d7"
                      }}
                      style={styles.ImageBackground_15_1925}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/929ca7ee-d30c-4d2a-bd7a-8fa91dcbbacc"
                      }}
                      style={styles.ImageBackground_15_1926}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd0dd72b-361d-408e-80a0-81249ae5215d"
                      }}
                      style={styles.ImageBackground_15_1928}
                    />
                  </View>
                  <View style={styles.View_15_1929}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d5a7dc0-771e-401e-a83b-48f8dfab199e"
                      }}
                      style={styles.ImageBackground_15_1930}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f0515ab-3f43-40d8-b853-17920b93e86c"
                      }}
                      style={styles.ImageBackground_15_1931}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/895a835b-e597-45bb-b3f1-f017ba5c9332"
                      }}
                      style={styles.ImageBackground_15_1932}
                    />
                    <View style={styles.View_15_1933}>
                      <View style={styles.View_15_1934}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7578a5b3-8f76-4839-84de-4f5e2814a42f"
                          }}
                          style={styles.ImageBackground_15_1935}
                        />
                        <View style={styles.View_15_1937}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62165503-b6f5-4f5c-b613-88622d3dde07"
                            }}
                            style={styles.ImageBackground_15_1938}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa3a1681-5c3d-4b76-a9a2-cb206d3c05e5"
                            }}
                            style={styles.ImageBackground_15_1940}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0766e89f-6a56-4317-8265-6bb9cb686ec1"
                            }}
                            style={styles.ImageBackground_15_1942}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82361f26-2bc2-4858-82be-b42b72210534"
                            }}
                            style={styles.ImageBackground_15_1943}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e03f703c-0483-4984-b89c-102b6696e53d"
                            }}
                            style={styles.ImageBackground_15_1945}
                          />
                          <View style={styles.View_15_1946}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad44890e-a2cc-40cb-8c41-dbed2730ccd5"
                              }}
                              style={styles.ImageBackground_15_1947}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd566ac9-7330-4647-a483-4bcd4780a4db"
                              }}
                              style={styles.ImageBackground_15_1948}
                            />
                          </View>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1902be1c-b524-4d1a-bcfe-af78fed28bcc"
                            }}
                            style={styles.ImageBackground_15_1950}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60e05ec9-dd89-41dc-8f15-9185dadc51f4"
                            }}
                            style={styles.ImageBackground_15_1951}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc7b0d18-d079-41c9-8e61-b09135b67b1a"
                            }}
                            style={styles.ImageBackground_15_1952}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32e3b73a-9ca1-43cb-ad47-d938baf88279"
                            }}
                            style={styles.ImageBackground_15_1954}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ab0324f-d973-4aea-aed4-52befe440da6"
                            }}
                            style={styles.ImageBackground_15_1956}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58de8188-4de4-453c-8696-20be89e34dd8"
                            }}
                            style={styles.ImageBackground_15_1958}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3982996d-6252-4b05-99e2-a307e55d1389"
                            }}
                            style={styles.ImageBackground_15_1960}
                          />
                        </View>
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ba3af95-0a0c-4a40-aab7-40af234dbb17"
                      }}
                      style={styles.ImageBackground_15_1962}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51b87432-2ad3-40c6-8c1c-1e39ab6a97ed"
                    }}
                    style={styles.ImageBackground_15_1963}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54d0a6ca-66fe-4c8c-ab2f-1f990d9b5c11"
                }}
                style={styles.ImageBackground_15_1968}
              />
              <View style={styles.View_15_1970}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf7c36d4-06eb-47c0-b40c-fe255d452beb"
                  }}
                  style={styles.ImageBackground_15_1971}
                />
                <View style={styles.View_15_1974}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cc0249f-43e0-4e23-88b1-f7be1de5bf43"
                    }}
                    style={styles.ImageBackground_15_1975}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c41eb5d4-aaea-4512-81e2-39e3f9902c7a"
                  }}
                  style={styles.ImageBackground_15_1979}
                />
                <View style={styles.View_15_1981}>
                  <View style={styles.View_15_1982}>
                    <View style={styles.View_15_1983}>
                      <View style={styles.View_15_1984}>
                        <View style={styles.View_15_1985}>
                          <View style={styles.View_15_1986}>
                            <View style={styles.View_15_1987}>
                              <View style={styles.View_15_1988}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97dee442-92c1-475a-a53b-29a8a65a41e4"
                                  }}
                                  style={styles.ImageBackground_15_1989}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_15_1991}>
                          <View style={styles.View_15_1992}>
                            <View style={styles.View_15_1993}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/128e398a-0798-4d35-a2ef-f07d0f2d6437"
                                }}
                                style={styles.ImageBackground_15_1994}
                              />
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_15_1996}>
                          <View style={styles.View_15_1997}>
                            <View style={styles.View_15_1998}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed5186e6-e655-4896-b80c-e559d912fa35"
                                }}
                                style={styles.ImageBackground_15_1999}
                              />
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_15_2001}>
                          <View style={styles.View_15_2002}>
                            <View style={styles.View_15_2003}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6472833e-4cf5-488b-92c1-dd6198f69a03"
                                }}
                                style={styles.ImageBackground_15_2004}
                              />
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_15_2006}>
                          <View style={styles.View_15_2007}>
                            <View style={styles.View_15_2008}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80e67254-34eb-4c32-b3b1-7abc40166c5f"
                                }}
                                style={styles.ImageBackground_15_2009}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_15_2011}>
                      <View style={styles.View_15_2012}>
                        <View style={styles.View_15_2013}>
                          <View style={styles.View_15_2014}>
                            <View style={styles.View_15_2015}>
                              <View style={styles.View_15_2016}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7808ca3b-39cb-4d15-bbc1-0a39f25bf77f"
                                  }}
                                  style={styles.ImageBackground_15_2017}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_15_2019}>
                          <View style={styles.View_15_2020}>
                            <View style={styles.View_15_2021}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f61145e9-54ee-4da5-8b8a-7b02632b75d3"
                                }}
                                style={styles.ImageBackground_15_2022}
                              />
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_15_2024}>
                          <View style={styles.View_15_2025}>
                            <View style={styles.View_15_2026}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be5b1126-7d21-43c9-8e01-f99d79cfaac0"
                                }}
                                style={styles.ImageBackground_15_2027}
                              />
                            </View>
                          </View>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfdd1f44-4e2c-43f7-bd96-12ebec7bf519"
                          }}
                          style={styles.ImageBackground_15_2029}
                        />
                        <View style={styles.View_15_2031}>
                          <View style={styles.View_15_2032}>
                            <View style={styles.View_15_2033}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e27f902d-0791-43f2-af36-1c40ab43c92f"
                                }}
                                style={styles.ImageBackground_15_2034}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbf9b8c8-b354-48d2-9c83-3903639881f0"
                    }}
                    style={styles.ImageBackground_15_2036}
                  />
                </View>
              </View>
              <View style={styles.View_15_2043}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e207b43-4d13-4c67-b84e-4c5d43b721c4"
                  }}
                  style={styles.ImageBackground_15_2044}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e95e37df-4b5d-4786-bdb4-0c2a8c175dcf"
                  }}
                  style={styles.ImageBackground_15_2050}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6eba2f79-e110-4e86-a9f3-7d15e4f8e77e"
                  }}
                  style={styles.ImageBackground_15_2052}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4a0b8a0-ab00-4726-bb47-795ad796c4ef"
                  }}
                  style={styles.ImageBackground_15_2054}
                />
              </View>
              <View style={styles.View_15_2056}>
                <View style={styles.View_15_2057}>
                  <View style={styles.View_15_2058}>
                    <View style={styles.View_15_2059}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef411a4c-623c-47f6-8628-0fa4106a19be"
                        }}
                        style={styles.ImageBackground_15_2060}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_15_2062}>
                  <View style={styles.View_15_2063}>
                    <View style={styles.View_15_2064}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f924090f-c8bd-4c54-96ec-5f4595ff29a6"
                        }}
                        style={styles.ImageBackground_15_2065}
                      />
                    </View>
                  </View>
                  <View style={styles.View_15_2067}>
                    <View style={styles.View_15_2068}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c65a9c4a-a01d-4717-b560-e4bda9edc04d"
                        }}
                        style={styles.ImageBackground_15_2069}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc0fe490-0917-4b06-8abd-b25ace2bc116"
          }}
          style={styles.ImageBackground_15_2071}
        />
      </View>
      <View style={styles.View_15_3757}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d986ed82-9b5c-48b5-a3ff-2eb5ce55c203"
          }}
          style={styles.ImageBackground_I15_3757_10_3014}
        />
      </View>
      <View style={styles.View_45_12897}>
        <View style={styles.View_45_12898}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24fa4ac1-8ee8-4fe6-aba1-8061fadc7bce"
            }}
            style={styles.ImageBackground_45_12899}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f567fb0e-08fb-4c4e-9b59-91d7d0b281c1"
          }}
          style={styles.ImageBackground_45_12905}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_15_831: {
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
  View_15_838: {
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
  Text_15_838: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_839: {
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
  View_15_1074: {
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
  View_I15_1074_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I15_1074_7_553: {
    color: "rgba(238, 238, 238, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1075: {
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
  View_15_1076: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_1076: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1077: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_1077: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1071: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_15_1071: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1095: {
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
  View_I15_1095_15_1084: {
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
  ImageBackground_I15_1095_15_1085: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I15_1095_15_1086: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_15_1828: {
    width: wp("35%"),
    height: hp("61%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_15_1829: {
    width: wp("35%"),
    height: hp("60%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1830: {
    width: wp("35%"),
    height: hp("60%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1831: {
    width: wp("35%"),
    height: hp("60%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1833: {
    width: wp("35%"),
    height: hp("60%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1834: {
    width: wp("32%"),
    height: hp("98%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_1835: {
    width: wp("20%"),
    height: hp("81%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1836: {
    width: wp("7%"),
    height: hp("12%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_1837: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1838: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1839: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1840: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1842: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1843: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_1845: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_1847: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_1849: {
    width: wp("7%"),
    height: hp("12%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1850: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_15_1851: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1852: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1853: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_1855: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1856: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_1858: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_1860: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_1862: {
    width: wp("6%"),
    height: hp("55%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_1863: {
    width: wp("8%"),
    height: hp("53%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_1864: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_1866: {
    width: wp("1%"),
    height: hp("12%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_15_1868: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_15_1870: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_1872: {
    width: wp("1%"),
    height: hp("12%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_1874: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_1876: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_15_1877: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_1878: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1879: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1881: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_15_1882: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1883: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1885: {
    width: wp("10%"),
    height: hp("27%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_1886: {
    width: wp("1%"),
    height: hp("13%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_1888: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1889: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1890: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1891: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1892: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1893: {
    width: wp("1%"),
    height: hp("22%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1900: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_1902: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_1904: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_1908: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_1909: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_15_1911: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_15_1912: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_15_1914: {
    width: wp("1%"),
    height: hp("20%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_15_1915: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1917: {
    width: wp("0%"),
    height: hp("18%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1919: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1921: {
    width: wp("1%"),
    height: hp("17%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_15_1923: {
    width: wp("25%"),
    height: hp("50%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_15_1924: {
    width: wp("4%"),
    height: hp("22%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_1925: {
    width: wp("4%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1926: {
    width: wp("2%"),
    height: hp("8%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1928: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_1929: {
    width: wp("24%"),
    height: hp("50%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1930: {
    width: wp("17%"),
    height: hp("41%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1931: {
    width: wp("16%"),
    height: hp("39%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1932: {
    width: wp("16%"),
    height: hp("38%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_15_1933: {
    width: wp("24%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1934: {
    width: wp("24%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1935: {
    width: wp("24%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1937: {
    width: wp("24%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1938: {
    width: wp("8%"),
    height: hp("16%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1940: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_15_1942: {
    width: wp("13%"),
    height: hp("23%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_1943: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_15_1945: {
    width: wp("8%"),
    height: hp("19%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_15_1946: {
    width: wp("7%"),
    height: hp("18%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_1947: {
    width: wp("7%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1948: {
    width: wp("7%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1950: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1951: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_1952: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_1954: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_1956: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1958: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_15_1960: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_15_1962: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_15_1963: {
    width: wp("6%"),
    height: hp("27%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_15_1968: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_15_1970: {
    width: wp("15%"),
    height: hp("23%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1971: {
    width: wp("15%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1974: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_15_1975: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1979: {
    width: wp("11%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_15_1981: {
    width: wp("14%"),
    height: hp("16%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1982: {
    width: wp("14%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1983: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1984: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1985: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1986: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1987: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1988: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1989: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1991: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_15_1992: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1993: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1994: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1996: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_15_1997: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_1998: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_1999: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2001: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_2002: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2003: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2004: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2006: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_15_2007: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2008: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2009: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2011: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2012: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2013: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2014: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2015: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2016: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2017: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2019: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_15_2020: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2021: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2022: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2024: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_15_2025: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2026: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2027: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2029: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_15_2031: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_15_2032: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2033: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2034: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2036: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_15_2043: {
    width: wp("13%"),
    height: hp("14%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_2044: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_2050: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2052: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_2054: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_15_2056: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_15_2057: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2058: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2059: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2060: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2062: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_2063: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_15_2064: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2065: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2067: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_2068: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2069: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_2071: {
    width: wp("26%"),
    height: hp("0%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_3757: {
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
  ImageBackground_I15_3757_10_3014: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_45_12897: {
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
  View_45_12898: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12899: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12905: {
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
