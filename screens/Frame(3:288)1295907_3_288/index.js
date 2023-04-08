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
      <View style={styles.View_3_289}>
        <View style={styles.View_3_290}>
          <View style={styles.View_3_291}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46b2f2fb-8358-48db-a968-31aa1f8be072"
              }}
              style={styles.ImageBackground_3_292}
            />
            <View style={styles.View_3_293} />
            <View style={styles.View_3_294}>
              <View style={styles.View_3_295}>
                <Text style={styles.Text_3_295}>Carefuly Built</Text>
              </View>
              <View style={styles.View_3_296}>
                <Text style={styles.Text_3_296}>
                  Flexibility, Speed, Ease of Use.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_297}>
            <View style={styles.View_3_298}>
              <View style={styles.View_3_299}>
                <Text style={styles.Text_3_299}>Let&#39;s get Social</Text>
              </View>
              <View style={styles.View_3_300}>
                <Text style={styles.Text_3_300}>
                  Follow &amp; Get in Touch with Us
                </Text>
              </View>
              <View style={styles.View_3_301}>
                <Text style={styles.Text_3_301}>
                  It&#39;s easy. Just add your links and you&#39;re ready to go.
                  Social links are wildely available in Sticky
                </Text>
              </View>
              <View style={styles.View_3_302}>
                <View style={styles.View_3_303}>
                  <View style={styles.View_3_304}>
                    <Text style={styles.Text_3_304}></Text>
                  </View>
                </View>
                <View style={styles.View_3_305}>
                  <View style={styles.View_3_306}>
                    <Text style={styles.Text_3_306}></Text>
                  </View>
                </View>
                <View style={styles.View_3_307}>
                  <View style={styles.View_3_308}>
                    <Text style={styles.Text_3_308}></Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3_309}>
            <View style={styles.View_3_310}>
              <View style={styles.View_3_311}>
                <Text style={styles.Text_3_311}>Packed with Goodies</Text>
              </View>
              <View style={styles.View_3_312}>
                <Text style={styles.Text_3_312}>
                  The Absolute Best Products &amp; Care for You
                </Text>
              </View>
              <View style={styles.View_3_313}>
                <Text style={styles.Text_3_313}>
                  Over 10 years of Experience in Building Gorgeous Products only
                  for you! We are Envato Elite.
                </Text>
              </View>
              <View style={styles.View_3_314} />
            </View>
            <View style={styles.View_3_315}>
              <View style={styles.View_3_316}>
                <View style={styles.View_3_317}>
                  <Text style={styles.Text_3_317}></Text>
                </View>
                <View style={styles.View_3_318}>
                  <Text style={styles.Text_3_318}>Future Proof</Text>
                </View>
                <View style={styles.View_3_319}>
                  <Text style={styles.Text_3_319}>
                    Built to last, with the latest quality code
                  </Text>
                </View>
              </View>
              <View style={styles.View_3_320}>
                <View style={styles.View_3_321}>
                  <Text style={styles.Text_3_321}></Text>
                </View>
                <View style={styles.View_3_322}>
                  <Text style={styles.Text_3_322}>Powerful</Text>
                </View>
                <View style={styles.View_3_323}>
                  <Text style={styles.Text_3_323}>
                    Speed, Features and Flexibility all in One!
                  </Text>
                </View>
              </View>
              <View style={styles.View_3_324}>
                <View style={styles.View_3_325}>
                  <Text style={styles.Text_3_325}></Text>
                </View>
                <View style={styles.View_3_326}>
                  <Text style={styles.Text_3_326}>Easy to Use</Text>
                </View>
                <View style={styles.View_3_327}>
                  <Text style={styles.Text_3_327}>
                    Customers love our work for it&#39;s ease.
                  </Text>
                </View>
              </View>
              <View style={styles.View_3_328}>
                <View style={styles.View_3_329}>
                  <Text style={styles.Text_3_329}></Text>
                </View>
                <View style={styles.View_3_330}>
                  <Text style={styles.Text_3_330}>Customer Care</Text>
                </View>
                <View style={styles.View_3_331}>
                  <Text style={styles.Text_3_331}>
                    We treat others like we want to be treated.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3_332}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69479261-050b-4ea1-900d-9c6f49500f26"
              }}
              style={styles.ImageBackground_3_333}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e1dad8b-b045-45e2-83d0-515146a8470d"
              }}
              style={styles.ImageBackground_3_345}
            />
          </View>
          <View style={styles.View_3_357}>
            <View style={styles.View_3_358}>
              <View style={styles.View_3_359}>
                <Text style={styles.Text_3_359}>Care &amp; Quality</Text>
              </View>
              <View style={styles.View_3_360}>
                <Text style={styles.Text_3_360}>
                  No stone left unturned, no aspect overlooked.
                </Text>
              </View>
              <View style={styles.View_3_361}>
                <View style={styles.View_3_362}>
                  <Text style={styles.Text_3_362}></Text>
                </View>
                <View style={styles.View_3_363}>
                  <Text style={styles.Text_3_363}></Text>
                </View>
                <View style={styles.View_3_364}>
                  <Text style={styles.Text_3_364}></Text>
                </View>
                <View style={styles.View_3_365}>
                  <Text style={styles.Text_3_365}></Text>
                </View>
                <View style={styles.View_3_366}>
                  <Text style={styles.Text_3_366}></Text>
                </View>
              </View>
              <View style={styles.View_3_367}>
                <View style={styles.View_3_368}>
                  <Text style={styles.Text_3_368}>More Testimonials</Text>
                </View>
              </View>
              <View style={styles.View_3_369}>
                <Text style={styles.Text_3_369}>
                  The best support I have ever had, it&#39;s so good I purchased
                  another theme. Highlighy Recommended.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_370}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1d31eb5-2025-4d36-af5f-2212b9bd1676"
              }}
              style={styles.ImageBackground_3_371}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52f60508-2bf6-46ef-90f6-df0eeeea19b1"
              }}
              style={styles.ImageBackground_3_377}
            />
          </View>
          <View style={styles.View_3_383}>
            <View style={styles.View_3_384}>
              <View style={styles.View_3_385}>
                <View style={styles.View_3_386}>
                  <Text style={styles.Text_3_386}></Text>
                </View>
              </View>
              <View style={styles.View_3_387}>
                <Text style={styles.Text_3_387}></Text>
              </View>
            </View>
            <View style={styles.View_3_388}>
              <Text style={styles.Text_3_388}>Dark Mode</Text>
            </View>
            <View style={styles.View_3_389}>
              <Text style={styles.Text_3_389}>Sticky will Remember</Text>
            </View>
            <View style={styles.View_3_390}>
              <View style={styles.View_3_391} />
              <View style={styles.View_3_392} />
            </View>
          </View>
          <View style={styles.View_3_393}>
            <View style={styles.View_3_394}>
              <View style={styles.View_3_395}>
                <Text style={styles.Text_3_395}>Get Sticky Today</Text>
              </View>
              <View style={styles.View_3_396}>
                <Text style={styles.Text_3_396}>
                  Tons of Awesome Features just for You.
                </Text>
              </View>
              <View style={styles.View_3_397}>
                <Text style={styles.Text_3_397}>
                  Fast, easy to use and filled with features. Get Sticky Today
                  and give your site the Mobile Feeling it deserves.
                </Text>
              </View>
              <View style={styles.View_3_398}>
                <View style={styles.View_3_399}>
                  <Text style={styles.Text_3_399}>Purchase Now - $25</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_3_400}>
            <View style={styles.View_3_401}>
              <Text style={styles.Text_3_401}>StickyMobile</Text>
            </View>
            <View style={styles.View_3_402}>
              <View style={styles.View_3_403}>
                <View style={styles.View_3_404}>
                  <Text style={styles.Text_3_404}>Made with</Text>
                </View>
                <View style={styles.View_3_405}>
                  <Text style={styles.Text_3_405}></Text>
                </View>
                <View style={styles.View_3_406}>
                  <Text style={styles.Text_3_406}>by Enabled</Text>
                </View>
              </View>
              <View style={styles.View_3_407}>
                <Text style={styles.Text_3_407}>
                  Powered by the best Mobile Website Developer on Envato Market.
                  Elite Quality. Elite Products.
                </Text>
              </View>
            </View>
            <View style={styles.View_3_408}>
              <View style={styles.View_3_409}>
                <View style={styles.View_3_410}>
                  <Text style={styles.Text_3_410}></Text>
                </View>
              </View>
              <View style={styles.View_3_411}>
                <View style={styles.View_3_412}>
                  <Text style={styles.Text_3_412}></Text>
                </View>
              </View>
              <View style={styles.View_3_413}>
                <View style={styles.View_3_414}>
                  <Text style={styles.Text_3_414}></Text>
                </View>
              </View>
              <View style={styles.View_3_415}>
                <View style={styles.View_3_416}>
                  <Text style={styles.Text_3_416}></Text>
                </View>
              </View>
              <View style={styles.View_3_417}>
                <View style={styles.View_3_418}>
                  <Text style={styles.Text_3_418}></Text>
                </View>
              </View>
            </View>
            <View style={styles.View_3_419}>
              <View style={styles.View_3_420}>
                <Text style={styles.Text_3_420}>
                  Copyright © Enabled 2023. All Rights Reserved.
                </Text>
              </View>
            </View>
            <View style={styles.View_3_421}>
              <View style={styles.View_3_422}>
                <Text style={styles.Text_3_422}>
                  Privacy Policy | Terms and Conditions | Back to Top
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_423}>
        <View style={styles.View_3_424}>
          <View style={styles.View_3_425}>
            <Text style={styles.Text_3_425}></Text>
          </View>
          <View style={styles.View_3_426}>
            <Text style={styles.Text_3_426}>Home</Text>
          </View>
        </View>
        <View style={styles.View_3_427}>
          <View style={styles.View_3_428}>
            <Text style={styles.Text_3_428}></Text>
          </View>
          <View style={styles.View_3_429}>
            <Text style={styles.Text_3_429}>Features</Text>
          </View>
        </View>
        <View style={styles.View_3_430}>
          <View style={styles.View_3_431}>
            <Text style={styles.Text_3_431}></Text>
          </View>
          <View style={styles.View_3_432}>
            <Text style={styles.Text_3_432}>Pages</Text>
          </View>
        </View>
        <View style={styles.View_3_433}>
          <View style={styles.View_3_434}>
            <Text style={styles.Text_3_434}></Text>
          </View>
          <View style={styles.View_3_435}>
            <Text style={styles.Text_3_435}>Search</Text>
          </View>
        </View>
        <View style={styles.View_3_436}>
          <View style={styles.View_3_437}>
            <Text style={styles.Text_3_437}></Text>
          </View>
          <View style={styles.View_3_438}>
            <Text style={styles.Text_3_438}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_439}>
        <View style={styles.View_3_440}>
          <View style={styles.View_3_441}>
            <Text style={styles.Text_3_441}>Settings</Text>
          </View>
          <View style={styles.View_3_442}>
            <Text style={styles.Text_3_442}>Flexible and Easy to Use</Text>
          </View>
        </View>
        <View style={styles.View_3_443} />
        <View style={styles.View_3_444}>
          <View style={styles.View_3_445}>
            <View style={styles.View_3_446}>
              <View style={styles.View_3_447}>
                <Text style={styles.Text_3_447}></Text>
              </View>
            </View>
            <View style={styles.View_3_448}>
              <Text style={styles.Text_3_448}>Dark Mode</Text>
            </View>
            <View style={styles.View_3_449}>
              <Text style={styles.Text_3_449}></Text>
            </View>
          </View>
          <View style={styles.View_3_450}>
            <View style={styles.View_3_451}>
              <View style={styles.View_3_452}>
                <View style={styles.View_3_453}>
                  <Text style={styles.Text_3_453}></Text>
                </View>
              </View>
              <View style={styles.View_3_454}>
                <Text style={styles.Text_3_454}></Text>
              </View>
            </View>
            <View style={styles.View_3_455}>
              <View style={styles.View_3_456}>
                <View style={styles.View_3_457}>
                  <Text style={styles.Text_3_457}></Text>
                </View>
              </View>
              <View style={styles.View_3_458}>
                <Text style={styles.Text_3_458}></Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3_459}>
          <Text style={styles.Text_3_459}></Text>
        </View>
        <View style={styles.View_3_460}>
          <Text style={styles.Text_3_460}>Page Highlight</Text>
        </View>
        <View style={styles.View_3_461}>
          <Text style={styles.Text_3_461}>16 Colors Highlights Included</Text>
        </View>
        <View style={styles.View_3_462}>
          <Text style={styles.Text_3_462}>Background Color</Text>
        </View>
        <View style={styles.View_3_463}>
          <Text style={styles.Text_3_463}>10 Page Gradients Included</Text>
        </View>
        <View style={styles.View_3_464}>
          <View style={styles.View_3_465}>
            <Text style={styles.Text_3_465}>HOT</Text>
          </View>
        </View>
        <View style={styles.View_3_466}>
          <View style={styles.View_3_467}>
            <Text style={styles.Text_3_467}>NEW</Text>
          </View>
        </View>
        <View style={styles.View_3_468}>
          <View style={styles.View_3_469} />
          <View style={styles.View_3_470} />
        </View>
      </View>
      <View style={styles.View_3_471}>
        <View style={styles.View_3_472}>
          <View style={styles.View_3_473}>
            <Text style={styles.Text_3_473}>Highlights</Text>
          </View>
          <View style={styles.View_3_474}>
            <Text style={styles.Text_3_474}>
              Any Element can have a Highlight Color
            </Text>
          </View>
        </View>
        <View style={styles.View_3_475} />
        <View style={styles.View_3_476}>
          <View style={styles.View_3_477}>
            <View style={styles.View_3_478}>
              <View style={styles.View_3_479}>
                <Text style={styles.Text_3_479}></Text>
              </View>
              <View style={styles.View_3_480}>
                <Text style={styles.Text_3_480}>Default</Text>
              </View>
            </View>
            <View style={styles.View_3_481}>
              <View style={styles.View_3_482}>
                <Text style={styles.Text_3_482}></Text>
              </View>
              <View style={styles.View_3_483}>
                <Text style={styles.Text_3_483}>Red</Text>
              </View>
            </View>
            <View style={styles.View_3_484}>
              <View style={styles.View_3_485}>
                <Text style={styles.Text_3_485}></Text>
              </View>
              <View style={styles.View_3_486}>
                <Text style={styles.Text_3_486}>Orange</Text>
              </View>
            </View>
            <View style={styles.View_3_487}>
              <View style={styles.View_3_488}>
                <Text style={styles.Text_3_488}></Text>
              </View>
              <View style={styles.View_3_489}>
                <Text style={styles.Text_3_489}>Pink</Text>
              </View>
            </View>
            <View style={styles.View_3_490}>
              <View style={styles.View_3_491}>
                <Text style={styles.Text_3_491}></Text>
              </View>
              <View style={styles.View_3_492}>
                <Text style={styles.Text_3_492}>Purple</Text>
              </View>
            </View>
            <View style={styles.View_3_493}>
              <View style={styles.View_3_494}>
                <Text style={styles.Text_3_494}></Text>
              </View>
              <View style={styles.View_3_495}>
                <Text style={styles.Text_3_495}>Aqua</Text>
              </View>
            </View>
            <View style={styles.View_3_496}>
              <View style={styles.View_3_497}>
                <Text style={styles.Text_3_497}></Text>
              </View>
              <View style={styles.View_3_498}>
                <Text style={styles.Text_3_498}>Teal</Text>
              </View>
            </View>
            <View style={styles.View_3_499}>
              <View style={styles.View_3_500}>
                <Text style={styles.Text_3_500}></Text>
              </View>
              <View style={styles.View_3_501}>
                <Text style={styles.Text_3_501}>Mint</Text>
              </View>
            </View>
            <View style={styles.View_3_502}>
              <View style={styles.View_3_503}>
                <Text style={styles.Text_3_503}></Text>
              </View>
              <View style={styles.View_3_504}>
                <Text style={styles.Text_3_504}>Green</Text>
              </View>
            </View>
            <View style={styles.View_3_505}>
              <View style={styles.View_3_506}>
                <Text style={styles.Text_3_506}></Text>
              </View>
              <View style={styles.View_3_507}>
                <Text style={styles.Text_3_507}>Grass</Text>
              </View>
            </View>
            <View style={styles.View_3_508}>
              <View style={styles.View_3_509}>
                <Text style={styles.Text_3_509}></Text>
              </View>
              <View style={styles.View_3_510}>
                <Text style={styles.Text_3_510}>Sunny</Text>
              </View>
            </View>
            <View style={styles.View_3_511}>
              <View style={styles.View_3_512}>
                <Text style={styles.Text_3_512}></Text>
              </View>
              <View style={styles.View_3_513}>
                <Text style={styles.Text_3_513}>Goldish</Text>
              </View>
            </View>
            <View style={styles.View_3_514}>
              <View style={styles.View_3_515}>
                <Text style={styles.Text_3_515}></Text>
              </View>
              <View style={styles.View_3_516}>
                <Text style={styles.Text_3_516}>Wood</Text>
              </View>
            </View>
            <View style={styles.View_3_517}>
              <View style={styles.View_3_518}>
                <Text style={styles.Text_3_518}></Text>
              </View>
              <View style={styles.View_3_519}>
                <Text style={styles.Text_3_519}>Night</Text>
              </View>
            </View>
            <View style={styles.View_3_520}>
              <View style={styles.View_3_521}>
                <Text style={styles.Text_3_521}></Text>
              </View>
              <View style={styles.View_3_522}>
                <Text style={styles.Text_3_522}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_523}>
            <View style={styles.View_3_524}>
              <Text style={styles.Text_3_524}>Back to Settings</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3_525}>
          <Text style={styles.Text_3_525}></Text>
        </View>
      </View>
      <View style={styles.View_3_526}>
        <View style={styles.View_3_527}>
          <View style={styles.View_3_528}>
            <Text style={styles.Text_3_528}>Backgrounds</Text>
          </View>
          <View style={styles.View_3_529}>
            <Text style={styles.Text_3_529}>
              Change Page Color Behind Content Boxes
            </Text>
          </View>
        </View>
        <View style={styles.View_3_530} />
        <View style={styles.View_3_531}>
          <View style={styles.View_3_532}>
            <View style={styles.View_3_533}>
              <View style={styles.View_3_534} />
              <View style={styles.View_3_535}>
                <Text style={styles.Text_3_535}>Default</Text>
              </View>
            </View>
            <View style={styles.View_3_536}>
              <View style={styles.View_3_537} />
              <View style={styles.View_3_538}>
                <Text style={styles.Text_3_538}>Plum</Text>
              </View>
            </View>
            <View style={styles.View_3_539}>
              <View style={styles.View_3_540} />
              <View style={styles.View_3_541}>
                <Text style={styles.Text_3_541}>Magenta</Text>
              </View>
            </View>
            <View style={styles.View_3_542}>
              <View style={styles.View_3_543} />
              <View style={styles.View_3_544}>
                <Text style={styles.Text_3_544}>Dark</Text>
              </View>
            </View>
            <View style={styles.View_3_545}>
              <View style={styles.View_3_546} />
              <View style={styles.View_3_547}>
                <Text style={styles.Text_3_547}>Violet</Text>
              </View>
            </View>
            <View style={styles.View_3_548}>
              <View style={styles.View_3_549} />
              <View style={styles.View_3_550}>
                <Text style={styles.Text_3_550}>Red</Text>
              </View>
            </View>
            <View style={styles.View_3_551}>
              <View style={styles.View_3_552} />
              <View style={styles.View_3_553}>
                <Text style={styles.Text_3_553}>Green</Text>
              </View>
            </View>
            <View style={styles.View_3_554}>
              <View style={styles.View_3_555} />
              <View style={styles.View_3_556}>
                <Text style={styles.Text_3_556}>Sky</Text>
              </View>
            </View>
            <View style={styles.View_3_557}>
              <View style={styles.View_3_558} />
              <View style={styles.View_3_559}>
                <Text style={styles.Text_3_559}>Orange</Text>
              </View>
            </View>
            <View style={styles.View_3_560}>
              <View style={styles.View_3_561} />
              <View style={styles.View_3_562}>
                <Text style={styles.Text_3_562}>Yellow</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_563}>
            <View style={styles.View_3_564}>
              <Text style={styles.Text_3_564}>Back to Settings</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3_565}>
          <Text style={styles.Text_3_565}></Text>
        </View>
      </View>
      <View style={styles.View_3_566}>
        <View style={styles.View_3_567}>
          <View style={styles.View_3_568}>
            <Text style={styles.Text_3_568}>Share the Love</Text>
          </View>
          <View style={styles.View_3_569}>
            <Text style={styles.Text_3_569}>
              Just Tap the Social Icon. We&#39;ll add the Link
            </Text>
          </View>
        </View>
        <View style={styles.View_3_570}>
          <View style={styles.View_3_571} />
          <View style={styles.View_3_572}>
            <View style={styles.View_3_573}>
              <View style={styles.View_3_574}>
                <Text style={styles.Text_3_574}></Text>
              </View>
              <View style={styles.View_3_575}>
                <Text style={styles.Text_3_575}>Facebook</Text>
              </View>
              <View style={styles.View_3_576}>
                <Text style={styles.Text_3_576}></Text>
              </View>
            </View>
            <View style={styles.View_3_577}>
              <View style={styles.View_3_578}>
                <Text style={styles.Text_3_578}></Text>
              </View>
              <View style={styles.View_3_579}>
                <Text style={styles.Text_3_579}>Twitter</Text>
              </View>
              <View style={styles.View_3_580}>
                <Text style={styles.Text_3_580}></Text>
              </View>
            </View>
            <View style={styles.View_3_581}>
              <View style={styles.View_3_582}>
                <Text style={styles.Text_3_582}></Text>
              </View>
              <View style={styles.View_3_583}>
                <Text style={styles.Text_3_583}>LinkedIn</Text>
              </View>
              <View style={styles.View_3_584}>
                <Text style={styles.Text_3_584}></Text>
              </View>
            </View>
            <View style={styles.View_3_585}>
              <View style={styles.View_3_586}>
                <Text style={styles.Text_3_586}></Text>
              </View>
              <View style={styles.View_3_587}>
                <Text style={styles.Text_3_587}>WhatsApp</Text>
              </View>
              <View style={styles.View_3_588}>
                <Text style={styles.Text_3_588}></Text>
              </View>
            </View>
            <View style={styles.View_3_589}>
              <View style={styles.View_3_590}>
                <Text style={styles.Text_3_590}></Text>
              </View>
              <View style={styles.View_3_591}>
                <Text style={styles.Text_3_591}>Email</Text>
              </View>
              <View style={styles.View_3_592}>
                <Text style={styles.Text_3_592}></Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_3_593}>
          <Text style={styles.Text_3_593}></Text>
        </View>
      </View>
      <View style={styles.View_3_594}>
        <View style={styles.View_3_595}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30c9d591-36af-47bd-9348-ae6f0779dea9"
            }}
            style={styles.ImageBackground_3_596}
          />
          <View style={styles.View_3_597}>
            <Text style={styles.Text_3_597}>
              Add Sticky on your Home Screen
            </Text>
          </View>
          <View style={styles.View_3_598}>
            <Text style={styles.Text_3_598}>
              Install Sticky on your home screen, and access it just like a
              regular app. It really is that simple!
            </Text>
          </View>
          <View style={styles.View_3_599}>
            <View style={styles.View_3_600}>
              <Text style={styles.Text_3_600}>Add to Home Screen</Text>
            </View>
          </View>
          <View style={styles.View_3_601}>
            <Text style={styles.Text_3_601}>Maybe later</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_602}>
        <View style={styles.View_3_603}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c70245a-cbb5-49dc-8e25-d719ef23f7b7"
            }}
            style={styles.ImageBackground_3_604}
          />
          <View style={styles.View_3_605}>
            <Text style={styles.Text_3_605}>
              Add Sticky on your Home Screen
            </Text>
          </View>
          <View style={styles.View_3_606}>
            <Text style={styles.Text_3_606}>
              Install Sticky, and access it like a regular app. Open your Safari
              menu and tap &quot;Add to Home Screen&quot;.
            </Text>
          </View>
          <View style={styles.View_3_607}>
            <Text style={styles.Text_3_607}>Maybe later</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(226, 102, 66, 1)" },
  View_2: { height: hp("499%") },
  View_3_289: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("499%"),
    minHeight: hp("499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_3_290: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("499%"),
    minHeight: hp("499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_291: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("172%"),
    minHeight: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_3_292: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("172%"),
    minHeight: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_293: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_294: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("161%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_295: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_295: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_296: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_296: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_297: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("179%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_298: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_299: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_299: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_300: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_300: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_301: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_3_301: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_302: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_303: {
    width: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(59, 89, 152, 1)"
  },
  View_3_304: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_305: {
    width: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 102, 66, 1)"
  },
  View_3_306: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_306: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_307: {
    width: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(25, 102, 37, 1)"
  },
  View_3_308: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_309: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("215%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_310: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_311: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_311: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_312: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_312: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_313: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_3_313: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_314: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05000000074505806
  },
  View_3_315: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_316: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_317: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_317: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 31,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_318: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_3_318: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_319: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_3_319: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_320: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_321: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_321: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 31,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_322: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_3_322: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_323: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_3_323: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_324: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_325: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_325: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 31,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_326: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_3_326: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_327: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_3_327: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_328: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_329: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_329: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 31,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_330: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_3_330: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_331: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_3_331: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_332: {
    width: wp("550%"),
    minWidth: wp("550%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-200%"),
    top: hp("285%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_333: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("201%"),
    top: hp("0%")
  },
  ImageBackground_3_345: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("251%"),
    top: hp("0%")
  },
  View_3_357: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("324%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_358: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_359: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_359: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_360: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_360: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_361: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_362: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_362: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_363: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_363: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_364: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_364: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_365: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_365: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_366: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_366: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_367: {
    width: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("26%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_368: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_369: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_3_369: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 17,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_370: {
    width: wp("550%"),
    minWidth: wp("550%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-200%"),
    top: hp("366%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_371: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("201%"),
    top: hp("0%")
  },
  ImageBackground_3_377: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("251%"),
    top: hp("0%")
  },
  View_3_383: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("395%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_384: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_385: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_386: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_386: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_387: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_387: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_388: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_388: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_389: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_389: {
    color: "rgba(203, 203, 203, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_390: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_391: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_3_392: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(152, 152, 152, 1)",
    borderWidth: 1
  },
  View_3_393: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("409%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_394: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_395: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_395: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_396: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_396: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_397: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_3_397: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_398: {
    width: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("20%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_399: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_400: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("445%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_401: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_401: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_402: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_403: {
    width: wp("8%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_404: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    justifyContent: "center"
  },
  Text_3_404: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_405: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_405: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_406: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("-1%"),
    justifyContent: "center"
  },
  Text_3_406: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_407: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("-1%"),
    justifyContent: "center"
  },
  Text_3_407: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_408: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_409: {
    width: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%"),
    backgroundColor: "rgba(59, 89, 152, 1)"
  },
  View_3_410: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_410: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_411: {
    width: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(25, 102, 37, 1)"
  },
  View_3_412: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_412: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_413: {
    width: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 102, 66, 1)"
  },
  View_3_414: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_414: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_415: {
    width: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_416: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_416: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_417: {
    width: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    backgroundColor: "rgba(144, 144, 144, 1)"
  },
  View_3_418: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_418: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_419: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_420: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_420: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_421: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_422: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_422: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_423: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("139%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_3_424: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_425: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_425: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_426: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_426: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_427: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_428: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_428: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_429: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_429: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_430: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_431: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_431: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_432: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_432: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_433: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_434: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_434: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_435: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_435: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_436: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_437: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_437: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_438: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_438: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_439: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("149%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_440: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_441: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_441: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_442: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_3_442: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_443: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05000000074505806
  },
  View_3_444: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_445: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_446: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_447: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_447: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_448: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_448: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_449: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_449: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_450: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_451: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_452: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(226, 102, 66, 1)"
  },
  View_3_453: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_453: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_454: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_454: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_455: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_456: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(25, 102, 37, 1)"
  },
  View_3_457: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_457: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_458: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_458: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_459: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_459: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_460: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_3_460: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_461: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_3_461: {
    color: "rgba(203, 203, 203, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_462: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_3_462: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_463: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_3_463: {
    color: "rgba(203, 203, 203, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_464: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("25%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_465: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_465: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_466: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("35%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_467: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_468: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_469: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_3_470: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(152, 152, 152, 1)",
    borderWidth: 1
  },
  View_3_471: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("150%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_472: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_473: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_473: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_474: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_3_474: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_475: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05000000074505806
  },
  View_3_476: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_477: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_478: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_479: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_479: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_480: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_480: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_481: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_482: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_482: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_483: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_483: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_484: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_485: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_485: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_486: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_486: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_487: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_488: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_488: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_489: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_489: {
    color: "rgba(215, 112, 173, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_490: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_491: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_491: {
    color: "rgba(150, 122, 220, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_492: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_492: {
    color: "rgba(172, 146, 236, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_493: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_494: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_494: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_495: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_495: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_496: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_497: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_497: {
    color: "rgba(125, 177, 177, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_498: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_498: {
    color: "rgba(160, 206, 203, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_499: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_500: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_500: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_501: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_501: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_502: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_503: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_503: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_504: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_504: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_505: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_506: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_506: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_507: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_507: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_508: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_509: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_509: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_510: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_510: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_511: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_512: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_512: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_513: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_513: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_514: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_515: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_515: {
    color: "rgba(170, 142, 105, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_516: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_516: {
    color: "rgba(186, 162, 134, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_517: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_518: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_518: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_519: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_519: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_520: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_521: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_521: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_522: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_522: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_523: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_524: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_524: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_525: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_525: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_526: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("149%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_527: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_528: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_528: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_529: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_3_529: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_530: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05000000074505806
  },
  View_3_531: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_532: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_533: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_534: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_3_535: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_535: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_536: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_537: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_538: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_538: {
    color: "rgba(103, 114, 164, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_539: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_540: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_541: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_541: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_542: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_543: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_544: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_544: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_545: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_546: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_547: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_547: {
    color: "rgba(103, 60, 88, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_548: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_549: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_550: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_550: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_551: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_552: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_553: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_553: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_554: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_555: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_556: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_556: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_557: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_558: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_559: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_559: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_560: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_561: {
    width: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  View_3_562: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_3_562: {
    color: "rgba(246, 187, 66, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_563: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_564: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_564: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_565: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_565: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_566: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("149%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_567: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_568: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_568: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_569: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_3_569: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_570: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_571: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.05000000074505806
  },
  View_3_572: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_573: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_574: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_574: {
    color: "rgba(59, 89, 152, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_575: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_575: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_576: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_576: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_577: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_578: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_578: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_579: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_579: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_580: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_580: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_581: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_582: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_582: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_583: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_583: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_584: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_584: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_585: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_586: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_586: {
    color: "rgba(226, 102, 66, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_587: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_3_587: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_588: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_3_588: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_589: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_590: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_590: {
    color: "rgba(25, 102, 37, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_591: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_591: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_592: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_3_592: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_593: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_3_593: {
    color: "rgba(220, 53, 69, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_594: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("149%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_3_595: {
    width: wp("16%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_596: {
    width: wp("5%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_3_597: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_3_597: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_598: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_3_598: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_599: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("32%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_3_600: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_3_600: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_601: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_3_601: {
    color: "rgba(108, 108, 108, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_602: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("149%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_3_603: {
    width: wp("18%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_604: {
    width: wp("5%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  View_3_605: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_3_605: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_3_606: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_3_606: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_607: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_3_607: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
