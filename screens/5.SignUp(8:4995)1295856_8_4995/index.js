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
      <View style={styles.View_8_4996} />
      <View style={styles.View_8_5236}>
        <Text style={styles.Text_8_5236}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_8_5247}>
        <View style={styles.View_8_5248}>
          <View style={styles.View_I8_5248_8_4782}>
            <Text style={styles.Text_I8_5248_8_4782}>Sign Up</Text>
          </View>
          <View style={styles.View_I8_5248_8_4783} />
        </View>
        <View style={styles.View_8_5249}>
          <View style={styles.View_I8_5249_8_4802}>
            <Text style={styles.Text_I8_5249_8_4802}>Sign In</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_8_5253}>
        <View style={styles.View_8_5254}>
          <View style={styles.View_8_5255}>
            <Text style={styles.Text_8_5255}>Sign Up</Text>
          </View>
          <View style={styles.View_8_5256}>
            <Text style={styles.Text_8_5256}>Lorem ipsum dolor sit amet.</Text>
          </View>
        </View>
        <View style={styles.View_8_5257}>
          <View style={styles.View_11_4498}>
            <View style={styles.View_I11_4498_11_3270}>
              <Text style={styles.Text_I11_4498_11_3270}>Email</Text>
            </View>
            <View style={styles.View_I11_4498_11_3271}>
              <View style={styles.View_I11_4498_11_3272}>
                <Text style={styles.Text_I11_4498_11_3272}>
                  Input your email
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_11_4512}>
            <View style={styles.View_11_4513}>
              <Text style={styles.Text_11_4513}>Password</Text>
            </View>
            <View style={styles.View_11_4514}>
              <View style={styles.View_11_4515}>
                <Text style={styles.Text_11_4515}>
                  Create a strong password
                </Text>
              </View>
              <View style={styles.View_11_4516}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e5d6654-d1ec-4b68-bb95-a61b066e0c6a"
                  }}
                  style={styles.ImageBackground_I11_4516_10_3043}
                />
              </View>
            </View>
            <View style={styles.View_11_4517}>
              <View style={styles.View_11_4518}>
                <View style={styles.View_11_4519}>
                  <Text style={styles.Text_11_4519}>
                    Must be more than 8 characters and contain at least one
                    capital letter, one number and one special character
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_11_4532}>
            <View style={styles.View_I11_4532_11_4523}>
              <Text style={styles.Text_I11_4532_11_4523}>Confirm Password</Text>
            </View>
            <View style={styles.View_I11_4532_11_4524}>
              <View style={styles.View_I11_4532_11_4525}>
                <Text style={styles.Text_I11_4532_11_4525}>
                  Confirm password
                </Text>
              </View>
              <View style={styles.View_I11_4532_11_4526}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5de90507-789a-4c70-8873-b039a5869e4f"
                  }}
                  style={styles.ImageBackground_I11_4532_11_4526_10_3043}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_11_4539}>
            <View style={styles.View_I11_4539_7_553}>
              <Text style={styles.Text_I11_4539_7_553}>Sign Up</Text>
            </View>
          </View>
          <View style={styles.View_8_5335}>
            <View style={styles.View_8_5336}>
              <View style={styles.View_I8_5336_8_5308} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56360470-7c71-4876-a5a3-73d8228b26f4"
                }}
                style={styles.ImageBackground_I8_5336_8_5309}
              />
            </View>
            <View style={styles.View_8_5337}>
              <Text style={styles.Text_8_5337}>
                I have read Terms &amp; Conditions and Privacy Policy
              </Text>
            </View>
          </View>
          <View style={styles.View_11_4541}>
            <View style={styles.View_11_4542}>
              <View style={styles.View_I11_4542_8_5311} />
            </View>
            <View style={styles.View_11_4543}>
              <Text style={styles.Text_11_4543}>Remember me</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_4855}>
        <View style={styles.View_11_4856}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/845b5f0c-1d21-44ae-953c-48dad506e76e"
            }}
            style={styles.ImageBackground_11_4857}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5f000ab-c133-4747-985d-98291233b920"
            }}
            style={styles.ImageBackground_11_4859}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd58d26a-2b8e-4c9c-9d68-127e662cfedd"
            }}
            style={styles.ImageBackground_11_4861}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1226cef4-bdc6-4516-a209-6611602a531b"
            }}
            style={styles.ImageBackground_11_4863}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00776c7c-adbf-41fc-9981-2dbf7c56d37e"
            }}
            style={styles.ImageBackground_11_4865}
          />
          <View style={styles.View_11_4867}>
            <View style={styles.View_11_4868}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b39620f7-3473-443b-bf54-a00168530a2e"
                }}
                style={styles.ImageBackground_11_4869}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c135917-2929-4940-80e0-2f2025905f43"
              }}
              style={styles.ImageBackground_11_4871}
            />
          </View>
        </View>
        <View style={styles.View_11_4873}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10265f13-07cd-4d5f-be1a-ceb193af038b"
            }}
            style={styles.ImageBackground_11_4874}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67a1f7f4-1ed1-4aa7-ac78-7f78ec73fad8"
            }}
            style={styles.ImageBackground_11_4876}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/531dfbca-b976-4ef0-a61c-5857d364961d"
            }}
            style={styles.ImageBackground_11_4878}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4654ec8c-9735-4e12-8882-7fdf02927e79"
            }}
            style={styles.ImageBackground_11_4880}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f9fb37c-d239-41f4-ab2e-cab8ac298720"
            }}
            style={styles.ImageBackground_11_4882}
          />
          <View style={styles.View_11_4884}>
            <View style={styles.View_11_4885}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9b66a18-e19f-46be-bd50-f2ba189906c1"
                }}
                style={styles.ImageBackground_11_4886}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5ff6031-f5f8-49c8-be98-e0a0064e81c3"
              }}
              style={styles.ImageBackground_11_4888}
            />
          </View>
        </View>
        <View style={styles.View_11_4890}>
          <View style={styles.View_11_4891}>
            <View style={styles.View_11_4892}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d6e2b2b-f500-4163-914c-328f307e1293"
                }}
                style={styles.ImageBackground_11_4893}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f59aa758-62e5-4255-9c23-bd9066d17c90"
                }}
                style={styles.ImageBackground_11_4894}
              />
            </View>
            <View style={styles.View_11_4896}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b0b5fa0-b9f9-4bff-9708-6fc25cbc2207"
                }}
                style={styles.ImageBackground_11_4897}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7b25f44-a104-4cfb-a3fe-ed4a05cb50b1"
              }}
              style={styles.ImageBackground_11_4901}
            />
          </View>
          <View style={styles.View_11_4903}>
            <View style={styles.View_11_4904}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a865de0b-a353-449f-8389-2dd6f5131ab2"
                }}
                style={styles.ImageBackground_11_4905}
              />
              <View style={styles.View_11_4907}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd92f7ae-5d1b-431b-b2e6-578b2dd28435"
                  }}
                  style={styles.ImageBackground_11_4908}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dee6b40-c55e-4c20-b12d-fc7bb6ce19ff"
                  }}
                  style={styles.ImageBackground_11_4910}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eae653eb-4c0e-4477-b181-43355cc3a72c"
                  }}
                  style={styles.ImageBackground_11_4912}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5a4f6d5-ce67-4a7b-a43f-52acd131405e"
                  }}
                  style={styles.ImageBackground_11_4913}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a965a76-2341-4986-995b-17a94472d6f7"
                  }}
                  style={styles.ImageBackground_11_4915}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/959822d6-f6bd-4555-9191-8d4810a26c95"
                  }}
                  style={styles.ImageBackground_11_4916}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f6b2144-81f8-48e9-96a1-dae0e2c08061"
                  }}
                  style={styles.ImageBackground_11_4919}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63e9bd3a-074e-4688-ac33-6c603dd1fec8"
                  }}
                  style={styles.ImageBackground_11_4920}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/995fddf7-9845-4b49-8318-acb463dab42f"
                  }}
                  style={styles.ImageBackground_11_4921}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/937fc149-7d9f-47e9-96c6-a795aea73fbf"
                  }}
                  style={styles.ImageBackground_11_4923}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89e9df14-03cc-4697-b180-9d811b692e30"
                  }}
                  style={styles.ImageBackground_11_4925}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60cb0558-53ce-4749-8a8d-198cc75914d6"
                  }}
                  style={styles.ImageBackground_11_4927}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_4929}>
          <View style={styles.View_11_4930}>
            <View style={styles.View_11_4931}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4afc304-1b1b-4067-914a-f484d4e5fd98"
                }}
                style={styles.ImageBackground_11_4932}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/506c7410-283a-4e3c-b450-703578ce565c"
                }}
                style={styles.ImageBackground_11_4933}
              />
            </View>
            <View style={styles.View_11_4935}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19b2738f-4c03-4ce7-9869-531dd282e8c7"
                }}
                style={styles.ImageBackground_11_4936}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58acd58c-1668-407b-be4d-b1fc2e886195"
              }}
              style={styles.ImageBackground_11_4940}
            />
          </View>
          <View style={styles.View_11_4942}>
            <View style={styles.View_11_4943}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53e6371c-0e1e-4135-8acd-da15874b140c"
                }}
                style={styles.ImageBackground_11_4944}
              />
              <View style={styles.View_11_4946}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4639f4d4-1e4f-4052-b79d-996af138a128"
                  }}
                  style={styles.ImageBackground_11_4947}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d84286d-f881-4d3f-97e8-8cca7be385a2"
                  }}
                  style={styles.ImageBackground_11_4949}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f96dab40-9ec1-43b6-ad0f-0ff548cf4013"
                  }}
                  style={styles.ImageBackground_11_4950}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f247e1f6-32c2-4a14-ae4c-65d7daa39611"
                  }}
                  style={styles.ImageBackground_11_4952}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9232df48-0570-43c6-b4e1-d9e7e5f92bd4"
                  }}
                  style={styles.ImageBackground_11_4953}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdfbb5be-d8e9-4759-90fc-6ceb746e2f13"
                  }}
                  style={styles.ImageBackground_11_4956}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b69c345e-8702-4262-be91-a0f874fe0440"
                  }}
                  style={styles.ImageBackground_11_4957}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51de1774-2954-4a9b-a877-555bdd3972f6"
                  }}
                  style={styles.ImageBackground_11_4958}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/263c95c7-943c-4b34-8082-4a189cdd17aa"
                  }}
                  style={styles.ImageBackground_11_4960}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45b156cb-8669-4a10-b6ff-76c1cb0c18e0"
                  }}
                  style={styles.ImageBackground_11_4962}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45739872-43d3-43a9-91c1-4eb3d2d2d6a6"
                  }}
                  style={styles.ImageBackground_11_4964}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_4966}>
          <View style={styles.View_11_4967}>
            <View style={styles.View_11_4968}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cbd0b9b-3bb2-4d65-9f05-64db59f440af"
                }}
                style={styles.ImageBackground_11_4969}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71b86e18-cc18-49ae-812c-13191a49b41b"
                }}
                style={styles.ImageBackground_11_4970}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15068610-c683-4a71-8f9a-a409b0fa54b3"
                }}
                style={styles.ImageBackground_11_4974}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bafb5fd-34f1-46a0-9d2d-e98b480ea1a2"
                }}
                style={styles.ImageBackground_11_4977}
              />
            </View>
            <View style={styles.View_11_4979}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8318292-7418-4874-97a0-84f2440b84a0"
                }}
                style={styles.ImageBackground_11_4980}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19816652-7b08-48c5-88bc-e56f280c114d"
                }}
                style={styles.ImageBackground_11_4981}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14735377-fba5-4f6d-a66b-220f33264073"
                }}
                style={styles.ImageBackground_11_4983}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b15b851-4434-43a6-8523-aa8ae5fba704"
                }}
                style={styles.ImageBackground_11_4984}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6137b031-6d63-4c2d-918f-f4307bcd0a31"
                }}
                style={styles.ImageBackground_11_4985}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2d45350-186f-47fd-9aff-ab443b9ac691"
                }}
                style={styles.ImageBackground_11_4986}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bc9532b-dd4b-4f5f-8c64-fb10f80e9110"
                }}
                style={styles.ImageBackground_11_4988}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96964f3a-b0f8-4a27-ac9f-87f72ebbeda3"
                }}
                style={styles.ImageBackground_11_4989}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/071b24df-6381-4006-b16c-8836e72671c3"
                }}
                style={styles.ImageBackground_11_4991}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cb6dd78-4c9e-4e80-9991-12dc876eaa8b"
                }}
                style={styles.ImageBackground_11_4993}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cde0f7f-693c-44a2-a37f-ea40b9037889"
                }}
                style={styles.ImageBackground_11_4994}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ae35580-ae2a-42bd-aeec-1b4442311f46"
                }}
                style={styles.ImageBackground_11_4995}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68dd4526-8e70-4f1d-88df-b4cc1bc2f06f"
                }}
                style={styles.ImageBackground_11_4996}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cf7ffad-40e2-45b6-80dd-2ba86ae3d536"
                }}
                style={styles.ImageBackground_11_4998}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6b7ae7f-34ff-4ed9-b69c-31d38cd4e3c8"
                }}
                style={styles.ImageBackground_11_4999}
              />
              <View style={styles.View_11_5000}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53ab154f-80b8-4a4e-9b98-1b3a8a8b842c"
                  }}
                  style={styles.ImageBackground_11_5001}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54f85473-bcd4-4e34-827b-2b804c9b75ff"
                  }}
                  style={styles.ImageBackground_11_5009}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef8a41b9-73d9-48c5-acd8-e52a273d518e"
                  }}
                  style={styles.ImageBackground_11_5010}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6444a72-7d85-43ca-ad15-116fde4d7c63"
                  }}
                  style={styles.ImageBackground_11_5013}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce08de6b-4ea7-4ddd-856b-a16424381233"
                }}
                style={styles.ImageBackground_11_5015}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bafb631-c079-4409-bd23-884119ca8b30"
                }}
                style={styles.ImageBackground_11_5016}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/629b9875-b8ac-4cd5-b858-0b06cb802d87"
                }}
                style={styles.ImageBackground_11_5017}
              />
              <View style={styles.View_11_5018}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e65257a-0c50-40f1-8ae6-606e372b89fa"
                  }}
                  style={styles.ImageBackground_11_5019}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9177d28a-58d1-41c8-acaf-e23a08f89756"
                  }}
                  style={styles.ImageBackground_11_5020}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d88431c-5132-4513-a2dd-6703203a8dee"
                  }}
                  style={styles.ImageBackground_11_5022}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15a6c378-b6e1-46ed-a30b-f76d05c6a0ab"
                  }}
                  style={styles.ImageBackground_11_5023}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/941a6428-afee-4b4a-ad07-f2a20f4c01c6"
                  }}
                  style={styles.ImageBackground_11_5024}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f47f434e-45d3-448d-b9de-7ba7fa194900"
                  }}
                  style={styles.ImageBackground_11_5025}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a5486d0-92de-4224-bd20-560b0b512cd5"
                  }}
                  style={styles.ImageBackground_11_5026}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97cd6d0a-9f99-4db3-b931-8fa9d20b3036"
                  }}
                  style={styles.ImageBackground_11_5028}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6c828a1-fa98-4d50-acfe-e23029f9f988"
                  }}
                  style={styles.ImageBackground_11_5030}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9155b9f-a03f-4694-ada0-8f2d79708bb0"
                  }}
                  style={styles.ImageBackground_11_5032}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b0f8ac8-689f-428b-9ef8-3a163be8af4f"
                  }}
                  style={styles.ImageBackground_11_5034}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cbbb192-15a1-44ef-80cf-29d2c56e022e"
                  }}
                  style={styles.ImageBackground_11_5035}
                />
                <View style={styles.View_11_5036}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b17fc7bf-0f6c-44f2-9d08-035c416050e1"
                    }}
                    style={styles.ImageBackground_11_5037}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/244ba097-9c68-49e5-a93c-380eeaa9c9a1"
                    }}
                    style={styles.ImageBackground_11_5039}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2ba98a3-1b01-41a1-9c01-f3833494380d"
                    }}
                    style={styles.ImageBackground_11_5041}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c31b7f47-e8a6-440e-a07d-bfe75a85fca5"
                    }}
                    style={styles.ImageBackground_11_5043}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdbd5b7f-8d2f-4ae0-91bc-1093de41d8df"
                    }}
                    style={styles.ImageBackground_11_5044}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68fc5cc2-1856-412f-99db-656335d54c6d"
                    }}
                    style={styles.ImageBackground_11_5045}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b86a5009-94e0-4433-9a6a-d2ee78e5715c"
          }}
          style={styles.ImageBackground_11_5046}
        />
        <View style={styles.View_11_5048}>
          <View style={styles.View_11_5049}>
            <View style={styles.View_11_5050}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d71f6154-fd49-46dd-a5ad-174292212c17"
                }}
                style={styles.ImageBackground_11_5051}
              />
            </View>
          </View>
          <View style={styles.View_11_5053}>
            <View style={styles.View_11_5054}>
              <View style={styles.View_11_5055}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1db5cad6-691a-45dc-ae9a-322e0d7563a5"
                  }}
                  style={styles.ImageBackground_11_5056}
                />
              </View>
            </View>
            <View style={styles.View_11_5058}>
              <View style={styles.View_11_5059}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c313fba-8c7f-44c0-8c31-7aa77ae1e669"
                  }}
                  style={styles.ImageBackground_11_5060}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_5062}>
          <View style={styles.View_11_5063}>
            <View style={styles.View_11_5064}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f2add4a-a84b-4c7a-9c78-119d1c73c405"
                }}
                style={styles.ImageBackground_11_5065}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e41293b-dae1-4835-a560-5b1f26e5eeef"
            }}
            style={styles.ImageBackground_11_5067}
          />
        </View>
        <View style={styles.View_11_5068}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da6f143d-cd4b-4d20-a434-ea3a5890349d"
            }}
            style={styles.ImageBackground_11_5069}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/363dcee6-2e65-4990-a50f-787490fa8e46"
            }}
            style={styles.ImageBackground_11_5074}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/215dad2a-203c-41e8-971f-20ffd7bc6b40"
            }}
            style={styles.ImageBackground_11_5075}
          />
        </View>
      </View>
      <View style={styles.View_45_12881}>
        <View style={styles.View_45_12882}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb0910f2-746a-4190-b76d-167520dcb99a"
            }}
            style={styles.ImageBackground_45_12883}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d4700c4-612f-486b-aaf5-754290fcb76d"
          }}
          style={styles.ImageBackground_45_12889}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_8_4996: {
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
  View_8_5236: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_8_5236: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5247: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("26%")
  },
  View_8_5248: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_5248_8_4782: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_5248_8_4782: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_5248_8_4783: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_8_5249: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_5249_8_4802: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_5249_8_4802: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5253: {
    width: wp("33%"),
    height: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_5254: {
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
  View_8_5255: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_5255: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5256: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_8_5256: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5257: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4498: {
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
  View_I11_4498_11_3270: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_4498_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I11_4498_11_3271: {
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
  View_I11_4498_11_3272: {
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
  Text_I11_4498_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4512: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4513: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_4513: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4514: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4515: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_11_4515: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4516: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I11_4516_10_3043: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_11_4517: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4518: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4519: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_4519: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4532: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_4532_11_4523: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_4532_11_4523: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I11_4532_11_4524: {
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
  View_I11_4532_11_4525: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I11_4532_11_4525: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I11_4532_11_4526: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I11_4532_11_4526_10_3043: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_11_4539: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I11_4539_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I11_4539_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5335: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_5336: {
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
  View_I8_5336_8_5308: {
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
  ImageBackground_I8_5336_8_5309: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_5337: {
    width: wp("22%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_8_5337: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4541: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4542: {
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
  View_I11_4542_8_5311: {
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
  View_11_4543: {
    width: wp("22%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_11_4543: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4855: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_11_4856: {
    width: wp("13%"),
    height: hp("25%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_11_4857: {
    width: wp("12%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4859: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_4861: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4863: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_4865: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_11_4867: {
    width: wp("12%"),
    height: hp("24%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4868: {
    width: wp("12%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4869: {
    width: wp("12%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4871: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_11_4873: {
    width: wp("11%"),
    height: hp("22%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4874: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4876: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_4878: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4880: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_4882: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_11_4884: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4885: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4886: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4888: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_4890: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_4891: {
    width: wp("14%"),
    height: hp("18%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_4892: {
    width: wp("14%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4893: {
    width: wp("13%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4894: {
    width: wp("14%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4896: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_11_4897: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4901: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_11_4903: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4904: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4905: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4907: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4908: {
    width: wp("4%"),
    height: hp("13%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4910: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4912: {
    width: wp("9%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4913: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4915: {
    width: wp("5%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_11_4916: {
    width: wp("5%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_11_4919: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_11_4920: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_11_4921: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_11_4923: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_11_4925: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_11_4927: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_11_4929: {
    width: wp("12%"),
    height: hp("18%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_11_4930: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_4931: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4932: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4933: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4935: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_11_4936: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4940: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_11_4942: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4943: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4944: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4946: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4947: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_4949: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_4950: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_11_4952: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4953: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4956: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_4957: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_4958: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4960: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4962: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_4964: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4966: {
    width: wp("21%"),
    height: hp("46%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_11_4967: {
    width: wp("21%"),
    height: hp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4968: {
    width: wp("21%"),
    height: hp("14%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4969: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_4970: {
    width: wp("19%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4974: {
    width: wp("19%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4977: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_11_4979: {
    width: wp("21%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4980: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_11_4981: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_11_4983: {
    width: wp("10%"),
    height: hp("12%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_11_4984: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_11_4985: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_11_4986: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4988: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_4989: {
    width: wp("1%"),
    height: hp("18%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_4991: {
    width: wp("0%"),
    height: hp("13%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_11_4993: {
    width: wp("2%"),
    height: hp("12%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_11_4994: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_11_4995: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_11_4996: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_11_4998: {
    width: wp("10%"),
    height: hp("12%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_4999: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5000: {
    width: wp("13%"),
    height: hp("15%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_5001: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5009: {
    width: wp("13%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5010: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5013: {
    width: wp("11%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5015: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_11_5016: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_5017: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5018: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_11_5019: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5020: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5022: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5023: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5024: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5025: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5026: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_5028: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5030: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5032: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5034: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5035: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_5036: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5037: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5039: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5041: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5043: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5044: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5045: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5046: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_11_5048: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_11_5049: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5050: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5051: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5053: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_5054: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_5055: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5056: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5058: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5059: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5060: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5062: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_5063: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5064: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5065: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5067: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_5068: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_11_5069: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5074: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5075: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_45_12881: {
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
  View_45_12882: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12883: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12889: {
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
