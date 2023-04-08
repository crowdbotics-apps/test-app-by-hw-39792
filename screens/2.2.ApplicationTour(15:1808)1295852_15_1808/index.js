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
      <View style={styles.View_15_1809} />
      <View style={styles.View_15_1816}>
        <Text style={styles.Text_15_1816}>Discover our App</Text>
      </View>
      <View style={styles.View_15_1817}>
        <View style={styles.View_15_1818}>
          <View style={styles.View_I15_1818_7_553}>
            <Text style={styles.Text_I15_1818_7_553}>Start using the App</Text>
          </View>
        </View>
        <View style={styles.View_15_1819}>
          <View style={styles.View_15_1820}>
            <Text style={styles.Text_15_1820}>Already have an account? </Text>
          </View>
          <View style={styles.View_15_1821}>
            <Text style={styles.Text_15_1821}> Login</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_1822}>
        <Text style={styles.Text_15_1822}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_15_1823}>
        <View style={styles.View_I15_1823_15_1088} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63309da0-85c1-466f-bac0-0fc63f086014"
          }}
          style={styles.ImageBackground_I15_1823_15_1089}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fec93b93-4a9b-4d32-a67c-7583c860cdd4"
          }}
          style={styles.ImageBackground_I15_1823_15_1090}
        />
      </View>
      <View style={styles.View_15_3403}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9089af6b-949e-4e2e-b9f3-2f8771555cb9"
          }}
          style={styles.ImageBackground_15_3404}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/054033b0-2116-42a2-95dd-1b3a7fc5564b"
          }}
          style={styles.ImageBackground_15_3406}
        />
        <View style={styles.View_15_3408}>
          <View style={styles.View_15_3409}>
            <View style={styles.View_15_3410}>
              <View style={styles.View_15_3411}>
                <View style={styles.View_15_3412}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00e7cb59-df3c-45a4-87e8-650f69816bc1"
                    }}
                    style={styles.ImageBackground_15_3413}
                  />
                  <View style={styles.View_15_3415}>
                    <View style={styles.View_15_3416}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6468c0d0-45a2-4902-9277-599b16f0b138"
                        }}
                        style={styles.ImageBackground_15_3417}
                      />
                    </View>
                    <View style={styles.View_15_3419}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38e53bed-caa1-4ca8-b6b3-df0bd7231929"
                        }}
                        style={styles.ImageBackground_15_3420}
                      />
                    </View>
                    <View style={styles.View_15_3422}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af3c1022-7d33-442b-a37c-1f454f05567e"
                        }}
                        style={styles.ImageBackground_15_3423}
                      />
                    </View>
                    <View style={styles.View_15_3425}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9326c453-a061-4542-a4b6-acc1bad0d1c8"
                        }}
                        style={styles.ImageBackground_15_3426}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d113691-61e3-4a21-83d0-0cafaa71dcf1"
                      }}
                      style={styles.ImageBackground_15_3428}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/371b70e1-f9d4-4fa7-9962-346fc6209677"
                      }}
                      style={styles.ImageBackground_15_3430}
                    />
                    <View style={styles.View_15_3432}>
                      <View style={styles.View_15_3433}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb778319-b748-4f5f-8fb6-cb7cd5c8ad47"
                          }}
                          style={styles.ImageBackground_15_3434}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/955df170-bf53-4880-9be7-8f4f94e25074"
                        }}
                        style={styles.ImageBackground_15_3436}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/287913ff-17bd-4513-8125-21880b1a7568"
                        }}
                        style={styles.ImageBackground_15_3438}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/184ed84f-f593-4314-b7da-10129d20a186"
                        }}
                        style={styles.ImageBackground_15_3439}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab7202c4-9b97-4cec-845b-eec4b855e625"
                        }}
                        style={styles.ImageBackground_15_3440}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70d58826-53de-43e3-be07-bcd6ed332230"
                        }}
                        style={styles.ImageBackground_15_3441}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8021b01b-2d10-401c-aa30-993d0394e887"
                        }}
                        style={styles.ImageBackground_15_3442}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/635c160f-555f-4fcf-9045-d58e5ccc44c3"
                        }}
                        style={styles.ImageBackground_15_3443}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc85a085-36aa-473e-925a-6f22a0550e9c"
                        }}
                        style={styles.ImageBackground_15_3444}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc622f07-2ece-4ac0-a441-692856b1b11a"
                        }}
                        style={styles.ImageBackground_15_3445}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4a7238d-d81a-4eb5-a9ff-ef33d6c84ac4"
                        }}
                        style={styles.ImageBackground_15_3447}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c902827-8063-4eda-9045-7dc479d1e6e1"
                        }}
                        style={styles.ImageBackground_15_3448}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1df712d-36f7-4e6f-854f-228920432fd9"
                        }}
                        style={styles.ImageBackground_15_3450}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3505a204-bfa9-4086-8e9b-a84498130c81"
                        }}
                        style={styles.ImageBackground_15_3452}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36aa0ff2-5997-467c-b9a6-98045905e9f8"
                        }}
                        style={styles.ImageBackground_15_3454}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea5b4d68-0f7f-4681-8486-f94aa2acffbd"
                        }}
                        style={styles.ImageBackground_15_3455}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/001e75ad-abf0-4e3e-bfeb-42fc5a32c9e3"
                        }}
                        style={styles.ImageBackground_15_3456}
                      />
                    </View>
                    <View style={styles.View_15_3457}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3735ee6-b8fa-4fdc-af0d-1d3112806a07"
                        }}
                        style={styles.ImageBackground_15_3458}
                      />
                    </View>
                    <View style={styles.View_15_3460}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95a874b8-66bc-42bc-ac66-70ac9013f1e4"
                        }}
                        style={styles.ImageBackground_15_3461}
                      />
                    </View>
                    <View style={styles.View_15_3463}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77f16f58-e11a-45d0-bbe3-e38566929ebd"
                        }}
                        style={styles.ImageBackground_15_3464}
                      />
                    </View>
                    <View style={styles.View_15_3466}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/983e8f6a-daa5-4159-906b-664f1cd53548"
                        }}
                        style={styles.ImageBackground_15_3467}
                      />
                      <View style={styles.View_15_3469}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f68742d-ccfb-4a31-af9c-9cafb9afe623"
                          }}
                          style={styles.ImageBackground_15_3470}
                        />
                      </View>
                      <View style={styles.View_15_3472}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0be64238-b082-41fa-a2ee-8be34fb62559"
                          }}
                          style={styles.ImageBackground_15_3473}
                        />
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1620c387-8f4a-4f4b-95e3-458c3adb3eb0"
                      }}
                      style={styles.ImageBackground_15_3475}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_15_3477}>
                <View style={styles.View_15_3478}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5cc2324-6dbb-4c01-9bc8-3393c1f14e7f"
                    }}
                    style={styles.ImageBackground_15_3479}
                  />
                  <View style={styles.View_15_3481}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5ac35fa-b483-452c-9460-2fd1e30e67ad"
                      }}
                      style={styles.ImageBackground_15_3482}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39dbaeb7-8744-46b3-bcf7-489685d1d8f4"
                      }}
                      style={styles.ImageBackground_15_3484}
                    />
                    <View style={styles.View_15_3486}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/797a0252-236c-4448-926d-268e04415656"
                        }}
                        style={styles.ImageBackground_15_3487}
                      />
                      <View style={styles.View_15_3489}>
                        <View style={styles.View_15_3490}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef1b465b-7265-4ec9-a510-5a4781c61c4b"
                            }}
                            style={styles.ImageBackground_15_3491}
                          />
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a59f3f5e-5cb7-40bf-b23b-36e9fecb40ca"
                        }}
                        style={styles.ImageBackground_15_3493}
                      />
                      <View style={styles.View_15_3495}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/210bd579-bca6-4a9e-b303-8862512a1c19"
                          }}
                          style={styles.ImageBackground_15_3496}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63cfc9b5-fcce-4692-af21-80b7944ec9d7"
                          }}
                          style={styles.ImageBackground_15_3498}
                        />
                      </View>
                      <View style={styles.View_15_3500}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3c17d4a-5ffd-4b0b-bb2e-40d3e25f1921"
                          }}
                          style={styles.ImageBackground_15_3501}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b650533-f16c-4889-b77b-82afe9c43a18"
                          }}
                          style={styles.ImageBackground_15_3503}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50eb1afc-07f5-44f2-85d4-24a58c2eb34f"
                        }}
                        style={styles.ImageBackground_15_3505}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8caa5e4b-847d-4e74-95b2-0658e713a683"
                        }}
                        style={styles.ImageBackground_15_3506}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d89b3700-fb71-4e5c-b813-1c663c92e127"
                        }}
                        style={styles.ImageBackground_15_3507}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd3bb9f3-4e55-404c-9a2a-8ae7f7cf23ef"
                        }}
                        style={styles.ImageBackground_15_3508}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60ad1b55-e3a9-4325-9f48-884b533568bb"
                        }}
                        style={styles.ImageBackground_15_3509}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c8b3039-5a5a-4b61-9a09-2eba2355bed3"
                        }}
                        style={styles.ImageBackground_15_3510}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0291083e-0ca7-4918-ba82-7ad5c0df75f9"
                        }}
                        style={styles.ImageBackground_15_3511}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85ededd3-c261-47ca-804c-bfd1906db1d8"
                        }}
                        style={styles.ImageBackground_15_3512}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cfab126-8917-4b69-9740-25d5f5786076"
                        }}
                        style={styles.ImageBackground_15_3514}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/090b8165-9f40-4769-9388-4537d293abde"
                        }}
                        style={styles.ImageBackground_15_3518}
                      />
                    </View>
                    <View style={styles.View_15_3519}>
                      <View style={styles.View_15_3520}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3d8c271-ab25-4b20-ad10-e61c0b2572b1"
                          }}
                          style={styles.ImageBackground_15_3521}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92a40370-0d90-468a-bf46-78416eadcdb8"
                          }}
                          style={styles.ImageBackground_15_3523}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03defc16-97b5-4d67-8b78-d9ae2358a553"
                          }}
                          style={styles.ImageBackground_15_3525}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/818d39e4-10d9-4166-995f-57b01754c586"
                          }}
                          style={styles.ImageBackground_15_3526}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1d3616f-e43d-4702-9a30-18d045cfb701"
                          }}
                          style={styles.ImageBackground_15_3528}
                        />
                        <View style={styles.View_15_3529}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bfba007-b0b5-4773-b180-c81ef56ba57c"
                            }}
                            style={styles.ImageBackground_15_3530}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/208ecc99-31bf-48c5-a6d5-b31b1bd92375"
                            }}
                            style={styles.ImageBackground_15_3531}
                          />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c27a9bb-a5b6-48cf-808e-7bebc4c23570"
                          }}
                          style={styles.ImageBackground_15_3533}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84210dbd-69b5-4197-aea4-020dcbeb39d1"
                          }}
                          style={styles.ImageBackground_15_3534}
                        />
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d19bed3-e33e-46d8-adc2-b0a1cda6c4ec"
                      }}
                      style={styles.ImageBackground_15_3535}
                    />
                    <View style={styles.View_15_3537}>
                      <View style={styles.View_15_3538}>
                        <View style={styles.View_15_3539}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fcd2a3c-44d8-409e-a03b-fe0d284aff47"
                            }}
                            style={styles.ImageBackground_15_3540}
                          />
                        </View>
                        <View style={styles.View_15_3542}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f6eb0aa-ec58-4496-a0ee-3584c11c468e"
                            }}
                            style={styles.ImageBackground_15_3543}
                          />
                        </View>
                      </View>
                      <View style={styles.View_15_3545}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abd7d8bd-a474-480f-936e-8bedf8e33bc1"
                          }}
                          style={styles.ImageBackground_15_3546}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_15_3548}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5037a9bf-02d7-4731-8ff0-dc811aab7a48"
                  }}
                  style={styles.ImageBackground_15_3549}
                />
                <View style={styles.View_15_3551}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38a46f1d-460a-4c8a-bc38-478b3f616e43"
                    }}
                    style={styles.ImageBackground_15_3552}
                  />
                </View>
              </View>
              <View style={styles.View_15_3554}>
                <View style={styles.View_15_3555}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0676a6d0-8d39-4979-bc81-3a9309248a6a"
                    }}
                    style={styles.ImageBackground_15_3556}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59ee5128-b9d6-4572-addc-74d5c73cda0a"
                  }}
                  style={styles.ImageBackground_15_3558}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/336869bf-7d91-4614-a4a2-639fa9eedec3"
                  }}
                  style={styles.ImageBackground_15_3560}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71138bf2-a3c6-4b23-8b30-9e8aa1505f89"
                  }}
                  style={styles.ImageBackground_15_3562}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4048d821-b896-4b88-aed9-7047ded7d4f7"
              }}
              style={styles.ImageBackground_15_3564}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/273d87c6-25f3-4a42-8e9b-6c403c69f651"
          }}
          style={styles.ImageBackground_15_3566}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33625b4a-47cc-4b62-8d58-24cef0047ca1"
          }}
          style={styles.ImageBackground_15_3568}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf8acd81-e38b-4d0a-98b1-0da8dad2ae99"
          }}
          style={styles.ImageBackground_15_3570}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb576510-2f1e-42b3-ad28-c669f3f62d9c"
          }}
          style={styles.ImageBackground_15_3572}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b81f3a3e-c0f4-4925-b622-b867963570ec"
          }}
          style={styles.ImageBackground_15_3574}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47462400-6fdf-4da2-a15e-9ef4111f14e1"
          }}
          style={styles.ImageBackground_15_3576}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a569db79-2324-4374-a8ae-4cbdd6d26b77"
          }}
          style={styles.ImageBackground_15_3578}
        />
      </View>
      <View style={styles.View_15_3760}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3ef2d68-6749-4318-839f-d5ba2eb0cd93"
          }}
          style={styles.ImageBackground_I15_3760_10_3014}
        />
      </View>
      <View style={styles.View_45_12801}>
        <View style={styles.View_45_12802}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/744f0d8b-c935-4213-97bc-bd950bd77ec0"
            }}
            style={styles.ImageBackground_45_12803}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e47f74d-3392-4e5c-99ae-6f4627e62f21"
          }}
          style={styles.ImageBackground_45_12809}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_15_1809: {
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
  View_15_1816: {
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
  Text_15_1816: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1817: {
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
  View_15_1818: {
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
  View_I15_1818_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I15_1818_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1819: {
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
  View_15_1820: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_1820: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1821: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_1821: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1822: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_15_1822: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_1823: {
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
  View_I15_1823_15_1088: {
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
  ImageBackground_I15_1823_15_1089: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I15_1823_15_1090: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_15_3403: {
    width: wp("32%"),
    height: hp("62%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_3404: {
    width: wp("10%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_15_3406: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_15_3408: {
    width: wp("29%"),
    height: hp("58%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3409: {
    width: wp("29%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3410: {
    width: wp("29%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3411: {
    width: wp("20%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3412: {
    width: wp("20%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3413: {
    width: wp("20%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3415: {
    width: wp("20%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3416: {
    width: wp("12%"),
    height: hp("19%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_3417: {
    width: wp("12%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3419: {
    width: wp("7%"),
    height: hp("47%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_3420: {
    width: wp("7%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3422: {
    width: wp("3%"),
    height: hp("22%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_15_3423: {
    width: wp("3%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3425: {
    width: wp("8%"),
    height: hp("47%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3426: {
    width: wp("8%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3428: {
    width: wp("14%"),
    height: hp("42%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3430: {
    width: wp("8%"),
    height: hp("19%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_3432: {
    width: wp("5%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_15_3433: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3434: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3436: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3438: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3439: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3440: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3441: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3442: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3443: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3444: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3445: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3447: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3448: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3450: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_3452: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_3454: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3455: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_3456: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_15_3457: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3458: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3460: {
    width: wp("3%"),
    height: hp("11%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_15_3461: {
    width: wp("3%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3463: {
    width: wp("13%"),
    height: hp("3%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3464: {
    width: wp("13%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3466: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3467: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3469: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3470: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3472: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_3473: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3475: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_15_3477: {
    width: wp("19%"),
    height: hp("54%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_15_3478: {
    width: wp("19%"),
    height: hp("54%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3479: {
    width: wp("19%"),
    height: hp("54%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3481: {
    width: wp("19%"),
    height: hp("54%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3482: {
    width: wp("19%"),
    height: hp("70%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3484: {
    width: wp("18%"),
    height: hp("68%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_15_3486: {
    width: wp("16%"),
    height: hp("27%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3487: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_3489: {
    width: wp("10%"),
    height: hp("20%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_15_3490: {
    width: wp("10%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3491: {
    width: wp("10%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3493: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_15_3495: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_15_3496: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3498: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3500: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3501: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3503: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3505: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_3506: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_3507: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_3508: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_15_3509: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3510: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3511: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3512: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3514: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3518: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_15_3519: {
    width: wp("17%"),
    height: hp("38%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_15_3520: {
    width: wp("17%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3521: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_15_3523: {
    width: wp("3%"),
    height: hp("14%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_15_3525: {
    width: wp("14%"),
    height: hp("21%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3526: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3528: {
    width: wp("8%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_15_3529: {
    width: wp("7%"),
    height: hp("21%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_3530: {
    width: wp("7%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3531: {
    width: wp("7%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3533: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_15_3534: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_15_3535: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_15_3537: {
    width: wp("14%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_15_3538: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_15_3539: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3540: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3542: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3543: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3545: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3546: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3548: {
    width: wp("15%"),
    height: hp("20%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3549: {
    width: wp("8%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_15_3551: {
    width: wp("12%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3552: {
    width: wp("12%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3554: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_15_3555: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3556: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_15_3558: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3560: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_15_3562: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_15_3564: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_15_3566: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_15_3568: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_15_3570: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_15_3572: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_15_3574: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_15_3576: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_15_3578: {
    width: wp("29%"),
    height: hp("0%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_15_3760: {
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
  ImageBackground_I15_3760_10_3014: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_45_12801: {
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
  View_45_12802: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12803: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12809: {
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
