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
      <View style={styles.View_15_2990} />
      <View style={styles.View_15_2997}>
        <Text style={styles.Text_15_2997}>Discover our App</Text>
      </View>
      <View style={styles.View_15_2998}>
        <View style={styles.View_15_2999}>
          <View style={styles.View_I15_2999_7_553}>
            <Text style={styles.Text_I15_2999_7_553}>Start using the App</Text>
          </View>
        </View>
        <View style={styles.View_15_3000}>
          <View style={styles.View_15_3001}>
            <Text style={styles.Text_15_3001}>Already have an account? </Text>
          </View>
          <View style={styles.View_15_3002}>
            <Text style={styles.Text_15_3002}> Login</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_3003}>
        <Text style={styles.Text_15_3003}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_15_3004}>
        <View style={styles.View_I15_3004_15_1092} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3b418bc-99dc-47ed-9616-ea6b429c5a7d"
          }}
          style={styles.ImageBackground_I15_3004_15_1093}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53520f51-a691-45ec-addc-ade2a4c291f7"
          }}
          style={styles.ImageBackground_I15_3004_15_1094}
        />
      </View>
      <View style={styles.View_15_3190}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fe2a09b-9396-45d3-8671-8ce3127ad93a"
          }}
          style={styles.ImageBackground_15_3191}
        />
        <View style={styles.View_15_3193}>
          <View style={styles.View_15_3194}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b97d2b4-3eb9-43a2-93ad-90ad4ea86ad7"
              }}
              style={styles.ImageBackground_15_3195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77052bc1-8e96-41ea-9a37-86de4bcfbe7e"
              }}
              style={styles.ImageBackground_15_3196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d024224-d3f5-4823-b3cc-f39ad42ca6d9"
              }}
              style={styles.ImageBackground_15_3197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3c7ac9c-a5bb-4ecc-862f-1d60b8680ca9"
              }}
              style={styles.ImageBackground_15_3198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2489c6cf-284d-4ae0-aaec-474b2f1a9e09"
              }}
              style={styles.ImageBackground_15_3200}
            />
            <View style={styles.View_15_3202}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0997ce9e-96fb-4d9e-a928-5c923154a8f9"
                }}
                style={styles.ImageBackground_15_3203}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aba3a457-a5ef-43c8-89d6-a416f7065cab"
              }}
              style={styles.ImageBackground_15_3205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac3396f8-b7e7-41f0-9f1a-182d6c744993"
              }}
              style={styles.ImageBackground_15_3207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/907e36d6-6048-4a2d-a843-3d69963c8d12"
              }}
              style={styles.ImageBackground_15_3209}
            />
          </View>
        </View>
        <View style={styles.View_15_3211}>
          <View style={styles.View_15_3212}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be8923bc-6ea1-4617-87ca-20c69ac7023a"
              }}
              style={styles.ImageBackground_15_3213}
            />
            <View style={styles.View_15_3215}>
              <View style={styles.View_15_3216}>
                <View style={styles.View_15_3217}>
                  <View style={styles.View_15_3218}>
                    <View style={styles.View_15_3219}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55cda905-d3e7-4f9b-b303-d98bb2b7163d"
                        }}
                        style={styles.ImageBackground_15_3220}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd122fd1-5a95-4682-bca4-026cd13eb508"
                        }}
                        style={styles.ImageBackground_15_3221}
                      />
                    </View>
                  </View>
                  <View style={styles.View_15_3223}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a7f49ae-e439-4137-91d3-c35069f1e24f"
                      }}
                      style={styles.ImageBackground_15_3224}
                    />
                  </View>
                  <View style={styles.View_15_3226}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88ad60e1-3c34-4769-9d37-5f041cd55341"
                      }}
                      style={styles.ImageBackground_15_3227}
                    />
                  </View>
                  <View style={styles.View_15_3229}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0726169-f712-4d88-9a60-7c48cf0d9293"
                      }}
                      style={styles.ImageBackground_15_3230}
                    />
                  </View>
                  <View style={styles.View_15_3232}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbaf1388-a9cd-4626-8cc0-ef4c87a3ec93"
                      }}
                      style={styles.ImageBackground_15_3233}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/398c5d6b-84a8-489a-8dd7-c06720a4cc19"
                    }}
                    style={styles.ImageBackground_15_3235}
                  />
                </View>
                <View style={styles.View_15_3237}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6793d30f-5d3f-4e31-a53e-738822091f5e"
                    }}
                    style={styles.ImageBackground_15_3238}
                  />
                  <View style={styles.View_15_3241}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2c12c1e-dab1-4d01-bfad-9633bee8989a"
                      }}
                      style={styles.ImageBackground_15_3242}
                    />
                  </View>
                  <View style={styles.View_15_3244}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99796b2b-6dff-44a0-a336-87dd68e2710a"
                      }}
                      style={styles.ImageBackground_15_3245}
                    />
                  </View>
                  <View style={styles.View_15_3247}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48ab46df-c3ef-4678-94e9-16e6fe7b6793"
                      }}
                      style={styles.ImageBackground_15_3248}
                    />
                  </View>
                  <View style={styles.View_15_3250}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1339d078-0271-4550-a579-cdf69e81581b"
                      }}
                      style={styles.ImageBackground_15_3251}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0514c7e5-4c11-4866-99a2-889512b11ecd"
                    }}
                    style={styles.ImageBackground_15_3253}
                  />
                </View>
                <View style={styles.View_15_3255}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0bae1cb-cbd7-47a7-be0d-2a956d76835b"
                    }}
                    style={styles.ImageBackground_15_3256}
                  />
                </View>
                <View style={styles.View_15_3258}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1e514e1-8c78-436c-8131-9122f7041214"
                    }}
                    style={styles.ImageBackground_15_3259}
                  />
                </View>
                <View style={styles.View_15_3261}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27cfdd75-90ca-4d7b-8722-dc593d76802c"
                    }}
                    style={styles.ImageBackground_15_3262}
                  />
                </View>
                <View style={styles.View_15_3264}>
                  <View style={styles.View_15_3265}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d1e32e2-787c-471a-91cc-1f5af6b47b9e"
                      }}
                      style={styles.ImageBackground_15_3266}
                    />
                  </View>
                  <View style={styles.View_15_3268}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47465b21-186d-454b-9710-35eebfef18ee"
                      }}
                      style={styles.ImageBackground_15_3269}
                    />
                  </View>
                  <View style={styles.View_15_3289}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/776ed96d-4b27-40a8-9de9-decdf5cb2136"
                      }}
                      style={styles.ImageBackground_15_3290}
                    />
                  </View>
                </View>
                <View style={styles.View_15_3292}>
                  <View style={styles.View_15_3293}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9af692d2-32f3-4ebe-a3ac-1e3163ea343c"
                      }}
                      style={styles.ImageBackground_15_3294}
                    />
                  </View>
                  <View style={styles.View_15_3296}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7199af3b-9812-4480-9f1e-79ac0baf884e"
                      }}
                      style={styles.ImageBackground_15_3297}
                    />
                  </View>
                  <View style={styles.View_15_3317}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06822481-3cf4-48f6-ba97-e150b46e7c06"
                      }}
                      style={styles.ImageBackground_15_3318}
                    />
                  </View>
                </View>
                <View style={styles.View_15_3320}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8dff7fb5-c7cb-4f36-bc6e-a9f85e4a705c"
                    }}
                    style={styles.ImageBackground_15_3321}
                  />
                </View>
                <View style={styles.View_15_3323}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e643d8f7-bb0b-443e-b83c-b830fb45f4c7"
                    }}
                    style={styles.ImageBackground_15_3324}
                  />
                </View>
              </View>
              <View style={styles.View_15_3326}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/386de20e-840a-4227-a497-cccb467748c9"
                  }}
                  style={styles.ImageBackground_15_3327}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb8e0691-34fa-4648-892a-560a64bed402"
                  }}
                  style={styles.ImageBackground_15_3329}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e421edc-0140-44ae-9a17-4056fa7d1d5b"
                  }}
                  style={styles.ImageBackground_15_3331}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06010e98-75e8-4380-a68a-696910fa7e15"
                  }}
                  style={styles.ImageBackground_15_3333}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10c463b9-a4bf-4b6f-88c4-82b4c0604d5e"
                  }}
                  style={styles.ImageBackground_15_3335}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acca0ac3-3a26-462f-888e-5f69e13006b2"
                }}
                style={styles.ImageBackground_15_3337}
              />
              <View style={styles.View_15_3339}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e422d08-1e67-4267-a117-94a7ff5024c9"
                  }}
                  style={styles.ImageBackground_15_3340}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3226d81e-3026-48fb-8bf2-f8f6b94394b5"
                }}
                style={styles.ImageBackground_15_3342}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dd1cb0b-6021-4cd4-ace8-78333f1c912a"
                }}
                style={styles.ImageBackground_15_3344}
              />
              <View style={styles.View_15_3346}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/360820e8-d22d-44ee-8414-351cb72891df"
                  }}
                  style={styles.ImageBackground_15_3347}
                />
              </View>
              <View style={styles.View_15_3349}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6997aeb5-9917-4d9f-8c41-edc67245a0df"
                  }}
                  style={styles.ImageBackground_15_3350}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42fa692d-4390-4a4e-af51-5c9227e7d372"
                }}
                style={styles.ImageBackground_15_3352}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c65ba83-e7bc-41d6-8717-7f17bbbea8b1"
                }}
                style={styles.ImageBackground_15_3354}
              />
              <View style={styles.View_15_3359}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8669787-57b3-4003-ac27-c6e84501eb0a"
                  }}
                  style={styles.ImageBackground_15_3360}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f45cfa6-a97c-4752-bb21-1efe5a8c399a"
                  }}
                  style={styles.ImageBackground_15_3362}
                />
                <View style={styles.View_15_3364}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c73627fd-7b78-4e0e-a170-67ed841095af"
                    }}
                    style={styles.ImageBackground_15_3365}
                  />
                </View>
                <View style={styles.View_15_3367}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bb76bb9-7328-4046-8d48-952db22319b9"
                    }}
                    style={styles.ImageBackground_15_3368}
                  />
                </View>
                <View style={styles.View_15_3370}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b96fb03-5f6e-4366-b81e-1bcb48c82bf8"
                    }}
                    style={styles.ImageBackground_15_3371}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2139e32e-7d14-4f80-9bd1-26b42e552c9e"
                  }}
                  style={styles.ImageBackground_15_3373}
                />
                <View style={styles.View_15_3375}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c83b1b74-fd56-490f-bcd3-ae5795b498e2"
                    }}
                    style={styles.ImageBackground_15_3376}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9539ace-58ea-46a9-9fb6-020e83ce936b"
                  }}
                  style={styles.ImageBackground_15_3378}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d9b7473-03bc-4198-8099-558568bcb27d"
                  }}
                  style={styles.ImageBackground_15_3380}
                />
              </View>
              <View style={styles.View_15_3382}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab28ee79-331b-43c4-9184-529639d78a78"
                  }}
                  style={styles.ImageBackground_15_3383}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3b88114-6c14-4ef8-aa2f-4f0a952e588b"
                  }}
                  style={styles.ImageBackground_15_3385}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6587ba58-8a4c-48f7-82ce-314169885fdd"
                  }}
                  style={styles.ImageBackground_15_3387}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edf60b3d-ffe4-4c91-8564-bf8b9e03aea7"
                  }}
                  style={styles.ImageBackground_15_3389}
                />
              </View>
              <View style={styles.View_15_3391}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/381b5925-420d-4c11-9f63-e82df4eb8389"
                  }}
                  style={styles.ImageBackground_15_3392}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b6f6e52-1b43-47cf-8e8b-92006c1f3069"
                  }}
                  style={styles.ImageBackground_15_3394}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b3b5bb4-a3e4-435d-b970-78a8e3c980bf"
                  }}
                  style={styles.ImageBackground_15_3396}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df0a9bcb-237d-4fad-889b-4fa6a6fb5829"
                  }}
                  style={styles.ImageBackground_15_3398}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e07e4480-c3a0-4178-9e69-d83e5aceb18f"
                }}
                style={styles.ImageBackground_15_3400}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abe2c575-b17f-44d2-9bad-be01485fd010"
          }}
          style={styles.ImageBackground_15_3401}
        />
      </View>
      <View style={styles.View_15_3763}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c58812df-ffb1-4b16-8437-0488b41f5d8f"
          }}
          style={styles.ImageBackground_I15_3763_10_3014}
        />
      </View>
      <View style={styles.View_45_12849}>
        <View style={styles.View_45_12850}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aecac58d-28d3-4c4d-88bd-1780f239833f"
            }}
            style={styles.ImageBackground_45_12851}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78d98cdb-7e80-4349-8f82-7cc0ae21b47c"
          }}
          style={styles.ImageBackground_45_12857}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_15_2990: {
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
  View_15_2997: {
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
  Text_15_2997: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_2998: {
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
  View_15_2999: {
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
  View_I15_2999_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I15_2999_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_3000: {
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
  View_15_3001: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_3001: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_3002: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_3002: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_3003: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_15_3003: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_3004: {
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
  View_I15_3004_15_1092: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I15_3004_15_1093: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I15_3004_15_1094: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_15_3190: {
    width: wp("28%"),
    height: hp("66%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_3191: {
    width: wp("8%"),
    height: hp("34%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_15_3193: {
    width: wp("13%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3194: {
    width: wp("13%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3195: {
    width: wp("13%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3196: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_3197: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3198: {
    width: wp("6%"),
    height: hp("15%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3200: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_3202: {
    width: wp("5%"),
    height: hp("18%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3203: {
    width: wp("5%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3205: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_3207: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_3209: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_15_3211: {
    width: wp("17%"),
    height: hp("48%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_15_3212: {
    width: wp("17%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3213: {
    width: wp("17%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3215: {
    width: wp("17%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3216: {
    width: wp("15%"),
    height: hp("44%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_15_3217: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3218: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3219: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3220: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3221: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3223: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_3224: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3226: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3227: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3229: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3230: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3232: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3233: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3235: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3237: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_3238: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3241: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_3242: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3244: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3245: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3247: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_3248: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3250: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3251: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3253: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3255: {
    width: wp("6%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3256: {
    width: wp("6%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3258: {
    width: wp("3%"),
    height: hp("19%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_3259: {
    width: wp("3%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3261: {
    width: wp("6%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_3262: {
    width: wp("6%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3264: {
    width: wp("1%"),
    height: hp("28%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_15_3265: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3266: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3268: {
    width: wp("1%"),
    height: hp("26%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3269: {
    width: wp("1%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3289: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3290: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3292: {
    width: wp("1%"),
    height: hp("28%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_15_3293: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3294: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3296: {
    width: wp("1%"),
    height: hp("26%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3297: {
    width: wp("1%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3317: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3318: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3320: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_15_3321: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3323: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_3324: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3326: {
    width: wp("10%"),
    height: hp("24%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3327: {
    width: wp("4%"),
    height: hp("13%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3329: {
    width: wp("8%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3331: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3333: {
    width: wp("5%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3335: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_15_3337: {
    width: wp("12%"),
    height: hp("36%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_15_3339: {
    width: wp("1%"),
    height: hp("14%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_15_3340: {
    width: wp("1%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3342: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_3344: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_15_3346: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_3347: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3349: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_3350: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3352: {
    width: wp("3%"),
    height: hp("20%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_15_3354: {
    width: wp("5%"),
    height: hp("20%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3359: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_3360: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3362: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_15_3364: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3365: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3367: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_3368: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3370: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_3371: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3373: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3375: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3376: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3378: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3380: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_15_3382: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3383: {
    width: wp("10%"),
    height: hp("14%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3385: {
    width: wp("5%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_15_3387: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_3389: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_15_3391: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3392: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3394: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3396: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3398: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3400: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3401: {
    width: wp("28%"),
    height: hp("0%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3763: {
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
  ImageBackground_I15_3763_10_3014: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_45_12849: {
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
  View_45_12850: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12851: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12857: {
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
