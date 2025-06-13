import React, { useEffect, useState } from "react";
import "../styles/History.css";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import axios from "axios";

const History = () => {
   const { id } = useParams();
    const [campaign, setCampaigns] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigation = useNavigate();

    const handleNavigation = () => {
    // Perform any logic before navigation
    navigation("/"); // Navigate to the home page without refreshing
  };
    useEffect(() => {
      const fetchCampaigns = async () => {
        try {
          const response = await axios.get(
            `https://facebookadsmangerserver.vercel.app/api/newcampaing/${id}`
          );
          setCampaigns(response.data);
        } catch (err) {
          setError("Error fetching campaigns");
        } finally {
          setLoading(false);
        }
      };
  
      fetchCampaigns();
    }, []);
  return (
    <div>
      <div>
         <div class="">
                <SideBar   />
              </div>
      </div>
      <div  style={{ width: "95%" }} class="_2k0c _96v5 _8_1l snipcss-aflOp style-cvCF7" id="style-cvCF7">
         <div
                 style={{ marginLeft: "5px", zIndex: "999" }}
                 class="x1a0uwpx x78zum5 x1ob5r32 xdt5ytf x5yr21d x1jj3tg0 x6ikm8r x10wlt62 x1iorvi4 x4uap5 x18d9i69 xkhd6sd x10l6tqk x187nhsf x1vjfegm x5jzwa4"
               >
                 <div
                   onClick={handleNavigation}
                   class="xlup9mm x1gslohp xw3qccf x12nagc xsgj6o6 x1a2a7pz x1kky2od x889kno x1iji9kk x1a8lsjc x1sln4lm x1ypdohk x4nwuxf xmbozn3 x1lcm9me x1yr5g0i xrt01vj x10y3i5r snipcss0-1-1-2 snipcss-RfBNi"
                   icon="[object Object]"
                   aria-label="Close"
                   role="button"
                   tabindex="0"
                   data-auto-logging-id="f67df74f4"
                 >
                              <i alt="" data-visualcompletion="css-img" class="img style-y9MLo" id="style-y9MLo"></i>
       
                   <div class="x1rg5ohu x67bb7w snipcss0-2-2-4" id="js_u5">
                     <div class="x1ypdohk xlup9mm x1anpbxc xmo9yow xyorhqc x17adc0v x1kky2od x1ejq31n xd10rxx x1sy0etr x17r0tee x1a2a7pz snipcss0-3-4-5"></div>
                   </div>
                 </div>
       
                 <div
                   aria-disabled="false"
                   aria-label="View charts (Ctrl+Y)"
                   class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r xjbqb8w snipcss-QxH4d"
                   data-pitloot-persistonclick="false"
                   id="insights_tray_button"
                   role="button"
                   tabindex="0"
                   data-auto-logging-id="f635e58ec"
                 >
                   <div class="xbsr9hj">
                     <div class="x3nfvp2 x120ccyz x140t73q" role="presentation">
                                       <div class="xtwfq29 style-FAEbx" id="style-FAEbx"></div>
                     </div>
                   </div>
                 </div>
                 <Link to="/editmainchart">
                   <div
                     aria-disabled="false"
                     aria-label="Edit (Ctrl+U)"
                     class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r x4nwuxf snipcss0-4-16-17 snipcss-7MyY5"
                     data-pitloot-persistonclick="false"
                     role="button"
                     tabindex="0"
                     data-auto-logging-id="f1d7f5864"
                   >
                     <div class="xbsr9hj snipcss0-5-17-18">
                       <div
                         class="x3nfvp2 x120ccyz x140t73q snipcss0-6-18-19"
                         role="presentation"
                       >
                                                                     <div class="xtwfq29 style-T9A6C" id="style-T9A6C"></div>
       
                       </div>
                     </div>
                   </div>
                 </Link>
                 <Link to="/history">
                   <div
                     aria-disabled="false"
                     aria-label="See history (Ctrl+I)"
                     class="x972fbf xcfux6l x1qhh985 xm0m39n x1ejq31n xd10rxx x1sy0etr x17r0tee x15wryii x14yi0bh x2kcyu4 xmfk5bu x9f619 x1ypdohk xc9qbxq x1a2a7pz x889kno x1iji9kk x1a8lsjc x1sln4lm x1n2onr6 x14qfxbe x1gslohp x12nagc xsgj6o6 xw3qccf x1lcm9me x1yr5g0i xrt01vj x10y3i5r x4nwuxf snipcss-KmW2A"
                     data-pitloot-persistonclick="false"
                     role="button"
                     tabindex="0"
                     data-auto-logging-id="f19b1362991cda8"
                   >
                     <div class="xbsr9hj">
                       <div class="x3nfvp2 x120ccyz x140t73q" role="presentation">
                         <div class="xtwfq29 style-i8HGz" id="style-i8HGz"></div>
                       </div>
                     </div>
                   </div>
                 </Link>
       
                 <div class="x10l6tqk xwa60dl">
                   <div class="x1rg5ohu x67bb7w">
                     <span class=" " data-tracked="true" data-clickable="1">
                       <div
                         aria-disabled="false"
                         aria-label="Collapse view"
                         class="_8ywk"
                         role="button"
                         tabindex="0"
                       >
                         <i
                           alt=""
                           data-visualcompletion="css-img"
                           class="img style-UoVCf"
                           id="style-UoVCf"
                         ></i>
                       </div>
                     </span>
                   </div>
                 </div>
               </div>
        <div data-visualcompletion="ignore" class="_96uw">
          <span
            data-surface-wrapper="1"
            data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/editor_drawer/hero_root:AdsEditorCampaignStructureContainer.react"
            data-auto-logging-id="f8ba79c39e8238"
            id="style-55xDH"
            class="style-55xDH"
          >
            <div class="">
              <div class="_1_tm _9898" id="campaign_structure_tree_root">
                <div class="x2izyaf x178xt8z xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x15bcfbt xolcy6v x3ckiwt xc2dlm9 xcfux6l x9f619 xgif2c7 xod5an3 x1yrsyyn x10b6aqq x1ye3gou xn6708d x1n2onr6 xh8yej3">
                  <div class="xgqtt45 xeq5yr9">
                    <div class="x78zum5 xdt5ytf xdl72j9 x1iyjqo2 xeuugli x1n2onr6 xh8yej3">
                      <div
                        class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s style-2WznB"
                        data-sscoverage-ignore="true"
                        id="style-2WznB"
                      >
                        <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                          <div class="x1iyjqo2">
                            <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 xs83m0k x65s2av">
                              <label id="js_hu" for="js_ht">
                                <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                  <span class="xmi5d70 x1fvot60 xxio538 xbsr9hj xq9mrsl x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli">
                                    Search
                                  </span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="x1lcm9me x1yr5g0i xo71vjh x5pf9jr x78zum5 xdt5ytf x1iyjqo2">
                        <div class="x78zum5 xdt5ytf x1iyjqo2">
                          <div class="x1iyjqo2">
                            <div class="x1n2onr6 xh8yej3">
                              <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1gzqxud xbsr9hj xm7lytj x1ykpatu xlu9dua x1w2lkzu">
                                <div class=""></div>
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                  <div class="x6s0dn4 x78zum5 x1q0g3np x1a02dak x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                    <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94">
                                      <div class="x6s0dn4 x3nfvp2 x1q0g3np xozqiw3 x2lwn1j xeuugli x1c4vz4f x19lwn94 xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl xqcrz7y x2lah0s">
                                        ​
                                        <div
                                          class="x3nfvp2 x120ccyz x4s1yf2"
                                          role="presentation"
                                        >
                                          <div
                                            class="xtwfq29 style-GLwTt"
                                            id="style-GLwTt"
                                          ></div>
                                        </div>
                                      </div>
                                      <input
                                        aria-autocomplete="list"
                                        aria-expanded="false"
                                        aria-haspopup="listbox"
                                        role="combobox"
                                        placeholder="Search"
                                        id="js_ht"
                                        aria-labelledby="js_hu"
                                        aria-controls="js_hs"
                                        aria-busy="false"
                                        aria-disabled="false"
                                        autocomplete="off"
                                        class="xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xdj266r x11i5rnm xat24cr x1mh8g0r x1t137rt xexx8yu x4uap5 x18d9i69 xkhd6sd xr4vacz x1gnnqk1 x1541jtf x1urst0s x1glnyev x1ad04t7 x1ix68h3 x19gujb8 xni1clt x1tutvks xfrpkgu x15h3p50 x1gf4pb6 xh7izdl x10emqs4 x2yyzbt xu8dvwe xmi5d70 x1fvot60 xo1l8bm xxio538 x1rffpxw xh8yej3"
                                        type="text"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="xwebqov xvyu6v8 xrsgblv x10lij0i x1lcm9me x1yr5g0i xrt01vj x10y3i5r x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="x17qophe x10l6tqk xds687c x1ey2m1c">
                      <div id="style-womFU" class="style-womFU">
                        <div
                          class="__qa __qb _2tr- style-9d4LO"
                          id="style-9d4LO"
                        >
                          <div class="_65ab _65ac">
                            <div
                              class="__q7 style-TBXWV"
                              id="style-TBXWV"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="x6ikm8r x10wlt62 style-IH3Fe" id="style-IH3Fe">
                  <div id="style-1iINH" class="style-1iINH">
                    <div
                      aria-label="grid"
                      class="ReactVirtualized__Grid ReactVirtualized__List style-o2zbq"
                      role="grid"
                      tabindex="0"
                      id="style-o2zbq"
                    >
                      <div
                        class="ReactVirtualized__Grid__innerScrollContainer style-vIwP6"
                        id="style-vIwP6"
                      >
                        <div role="row" id="style-nrkTT" class="style-nrkTT">
                          <span
                            data-surface-wrapper="1"
                            data-surface="/am/editor_drawer/editor_tree:campaign"
                            data-auto-logging-id="f1c82c3bb725104"
                            id="style-rSEie"
                            class="style-rSEie"
                          >
                            <div>
                              <div
                                aria-label="Campaign"
                                class="x9f619 x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 xo1l8bm xbsr9hj x1k4ywey x14ihq94 x1ug7tv7 x6kzwsm xd1rtb7 x19p7ews x26u7qi "
                                data-id="120212244373700644"
                                data-objecttype="CAMPAIGN_GROUP"
                                id="ads_campaign_structure_item_120212244373700644"
                                role="rowheader"
                                tabindex="0"
                                data-tracked="true"
                                data-interactable="|click|"
                              >
                                <div class="x6s0dn4 x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                                  <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                                    <svg
                                      viewBox="0 0 48 48"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      class="x1qsmy5i xlup9mm x1kky2od"
                                    >
                                      <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5z"></path>
                                    </svg>
                                  </span>
                                  <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                                    <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                      <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                        <span class="_3dfi _3dfj">
                                           {campaign.campaingname}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                                    <div class="x1lliihq">
                                      <div
                                        class="x3nfvp2 x193iq5w xxymvpz"
                                        role="none"
                                      >
                                        <div
                                          aria-busy="false"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                          role="button"
                                          tabindex="0"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div
                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                data-sscoverage-ignore="true"
                                              >
                                                default
                                              </div>
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-B2e2F"
                                                    id="style-B2e2F"
                                                  ></i>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="x1s85apg">
                                      <div
                                        class="x3nfvp2 x193iq5w xxymvpz"
                                        role="none"
                                      >
                                        <div
                                          aria-busy="false"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                          role="button"
                                          tabindex="0"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div
                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                data-sscoverage-ignore="true"
                                              >
                                                Action menu
                                              </div>
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-FHDUs"
                                                    id="style-FHDUs"
                                                  ></i>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div role="row" id="style-gCley" class="style-gCley">
                          <span
                            data-surface-wrapper="1"
                            data-surface="/am/editor_drawer/editor_tree:adset"
                            data-auto-logging-id="f39cdaf3c0d2858"
                            id="style-YL644"
                            class="style-YL644"
                          >
                            <div>
                              <div
                                aria-label="Ad set"
                                class="x19p7ews x26u7qi x1ftr3km x2izyaf x9f619 x5e6ka x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 "
                                data-id="120212244373720644"
                                data-objecttype="CAMPAIGN"
                                id="ads_campaign_structure_item_120212244373720644"
                                role="rowheader"
                                tabindex="0"
                                data-tracked="true"
                                data-interactable="|click|"
                              >
                                <div class="x6s0dn4 x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                                  <span class="x1c4vz4f x2lah0s x1wpsl4u"></span>
                                  <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                                    <svg
                                      viewBox="0 0 16 16"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      class="x4s1yf2 xlup9mm x1kky2od"
                                    >
                                      <g data-name="Layer 2">
                                        <g>
                                          <g data-name="16">
                                            <rect
                                              class="xbh8q5q xi5qq39"
                                              x="9.5"
                                              y="0.5"
                                              width="6"
                                              height="6"
                                              rx="1"
                                            ></rect>
                                            <rect
                                              class="xbh8q5q xi5qq39"
                                              x="0.5"
                                              y="0.5"
                                              width="6"
                                              height="6"
                                              rx="1"
                                            ></rect>
                                            <rect
                                              class="xbh8q5q xi5qq39"
                                              x="9.5"
                                              y="9.5"
                                              width="6"
                                              height="6"
                                              rx="1"
                                              transform="rotate(90 12.5 12.5)"
                                            ></rect>
                                            <rect
                                              class="xbh8q5q xi5qq39"
                                              x="0.5"
                                              y="9.5"
                                              width="6"
                                              height="6"
                                              rx="1"
                                              transform="rotate(90 3.5 12.5)"
                                            ></rect>
                                          </g>
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                                    <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                      <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                        <span class="_3dfi _3dfj">
                                           {campaign.campaingname}
                                         
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                                    <div class="x1lliihq">
                                      <div
                                        class="x3nfvp2 x193iq5w xxymvpz"
                                        role="none"
                                      >
                                        <div
                                          aria-busy="false"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                          role="button"
                                          tabindex="0"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div
                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                data-sscoverage-ignore="true"
                                              >
                                                default
                                              </div>
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-JlPUP"
                                                    id="style-JlPUP"
                                                  ></i>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="x1s85apg">
                                      <div
                                        class="x3nfvp2 x193iq5w xxymvpz"
                                        role="none"
                                      >
                                        <div
                                          aria-busy="false"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                          role="button"
                                          tabindex="0"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div
                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                data-sscoverage-ignore="true"
                                              >
                                                Action menu
                                              </div>
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                  <i
                                              alt=""
                                              data-visualcompletion="css-img"
                                              class="img style-zMAMl"
                                              id="style-zMAMl"
                                            ></i>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                        <div role="row" id="style-kYw6i" class="style-kYw6i">
                          <span
                            data-surface-wrapper="1"
                            data-surface="/am/editor_drawer/editor_tree:ad"
                            data-auto-logging-id="fc35ccb1845c8"
                            id="style-sMaFe"
                            class="style-sMaFe"
                          >
                            <div>
                              <div
                                aria-label="Ad"
                                class="x19p7ews x26u7qi x1ftr3km x2izyaf x9f619 x5e6ka x1ypdohk x1lliihq x1a2a7pz x6ikm8r x10wlt62 x1ye3gou x1hzt7jf x87ps6o xh8yej3 xwvwv9b x1sxyh0 "
                                data-id="120212244374510644"
                                data-objecttype="ADGROUP"
                                id="ads_campaign_structure_item_120212244374510644"
                                role="rowheader"
                                tabindex="0"
                                data-tracked="true"
                                data-interactable="|click|"
                              >
                                <div class="x6s0dn4 x9f619 x78zum5 x1iorvi4 x4uap5 xjkvuk6 xkhd6sd xwvwv9b">
                                  <span class="x1c4vz4f x2lah0s x1sx8fc2"></span>
                                  <span class="x1ok221b x1emribx xat24cr x1mh8g0r">
                                    <svg
                                      viewBox="0 0 16 16"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      class="x4s1yf2 xlup9mm x1kky2od"
                                    >
                                      <g data-name="Layer 2">
                                        <g data-name="16">
                                          <rect
                                            x="1.5"
                                            y="1.5"
                                            width="13"
                                            height="13"
                                            rx="1.25"
                                            stroke="currentColor"
                                            fill="none"
                                          ></rect>
                                          <circle
                                            cx="4.5"
                                            cy="4.5"
                                            r="1"
                                          ></circle>
                                          <path
                                            stroke-linecap="round"
                                            stroke="currentColor"
                                            fill="none"
                                            d="M7.5 4.5 12.5 4.5"
                                          ></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </span>
                                  <div class="x6ikm8r x10wlt62 x1iyjqo2 xs83m0k x1t1x2f9">
                                    <div class="x6s0dn4 x78zum5 xwvwv9b x1qughib">
                                      <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli xw3qccf xr9ek0c">
                                        <span class="_3dfi _3dfj">
                                          Promoting website:
                                        {campaign.campaingname}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="x6s0dn4 x78zum5 xl56j7k x1gryazu xt4ypqs">
                                    <div class="x1lliihq">
                                      <div
                                        class="x3nfvp2 x193iq5w xxymvpz"
                                        role="none"
                                      >
                                        <div
                                          aria-busy="false"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                          role="button"
                                          tabindex="0"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div
                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                data-sscoverage-ignore="true"
                                              >
                                                default
                                              </div>
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-5MUps"
                                                    id="style-5MUps"
                                                  ></i>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="x1s85apg">
                                      <div
                                        class="x3nfvp2 x193iq5w xxymvpz"
                                        role="none"
                                      >
                                        <div
                                          aria-busy="false"
                                          class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x1t137rt x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                                          role="button"
                                          tabindex="0"
                                        >
                                          <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                                            <div class="x78zum5">
                                              <div
                                                class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                                data-sscoverage-ignore="true"
                                              >
                                                Action menu
                                              </div>
                                              <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                                <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                                  <i
                                                    alt=""
                                                    data-visualcompletion="css-img"
                                                    class="img style-GQ4QR"
                                                    id="style-GQ4QR"
                                                  ></i>
                                                </div>
                                                ​
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="resize-triggers">
                    <div class="expand-trigger">
                      <div id="style-hnBKd" class="style-hnBKd"></div>
                    </div>
                    <div class="contract-trigger"></div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div class="_2k0g">
          <span
            data-surface-wrapper="1"
            data-non-int-surface="/am/hero_root:AdsPEMainAppWithLeftNavigation.react/editor_drawer/hero_root:AdsPEActivityLogTrayTabContentContainer.react"
            data-auto-logging-id="f3d1ee53533cb98"
            class="style-mNso7"
            id="style-mNso7"
          >
            <div class="x5yr21d">
              <div class="_3ptk _8z1k">
                <div>
                  <div>
                    <div
                      class="x9f619 xn3w4p2 xh8yej3 x2izyaf x15bcfbt xolcy6v x3ckiwt xc2dlm9 x178xt8z xcfux6l xso031l xm0m39n xgif2c7 x1iorvi4 xjkvuk6 x4uap5 x1ye3gou style-rmYbJ"
                      id="style-rmYbJ"
                    >
                      <div class="x6s0dn4 x1ypdohk x78zum5 xq8finb">
                        <div class="x3nfvp2 x193iq5w xxymvpz" role="none">
                          <div
                            aria-busy="false"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                            role="button"
                            tabindex="0"
                            id="js_rj"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                              <div class="x78zum5">
                                <div
                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                  data-sscoverage-ignore="true"
                                >
                                  Open
                                </div>
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                  <div class="x3nfvp2 x2lah0s x1c4vz4f">
                                    <i
                                      alt=""
                                      data-visualcompletion="css-img"
                                      class="img style-EJeDq"
                                      id="style-EJeDq"
                                    ></i>
                                  </div>
                                  ​
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x6ikm8r x10wlt62">
                        <div class="x6s0dn4 x3nfvp2 x1r8uery x1iyjqo2 xq8finb xeuugli">
                          <div
                            class="x6s0dn4 x3nfvp2 style-HefXX"
                            id="style-HefXX"
                          >
                            <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 xlyipyv xuxw1ft x1r8uery">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <span
                                  class=" "
                                  data-tracked="true"
                                  data-interactable="|click|"
                                >
                                  <div
                                    class="x1xlr1w8 x1qsmy5i x1k4ywey x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                    data-hover="tooltip"
                                    data-testid="nav-header-CAMPAIGN_GROUP"
                                    data-tooltip-content="[08/25/2024] Promoting https://flarequick.com/cf/r/66c77801fbc98f0012461683?ad_id=&amp;adset_id=&amp;campaign_id..."
                                    data-tooltip-display="overflow"
                                    data-tooltip-position="above"
                                    data-tooltip-text-direction="auto"
                                  >
                                    <div class="_96mf">
                                      <div class="_96mg">
                                        <svg
                                          viewBox="0 0 48 48"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          class="x1qsmy5i xlup9mm x1kky2od"
                                        >
                                          <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5z"></path>
                                        </svg>
                                      </div>
                                      <div
                                        aria-level="4"
                                        class="x1xqt7ti xsuwoey x63nzvj x1qsmy5i xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                        role="heading"
                                      >
                                        <span class="_4gz1">
                                          {campaign?.campaingname}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div class="x6s0dn4 x3nfvp2 x1i64zmx x1emribx">
                              <i
                                alt=""
                                data-visualcompletion="css-img"
                                class="img style-wrMmm"
                                id="style-wrMmm"
                              ></i>
                            </div>
                            <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 xlyipyv xuxw1ft x1r8uery">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <span
                                  class=" "
                                  data-tracked="true"
                                  data-interactable="|click|"
                                >
                                  <div
                                    class="xo1l8bm xbsr9hj x1v911su x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                    data-hover="tooltip"
                                    data-testid="nav-header-CAMPAIGN"
                                    data-tooltip-content="1 Ad set"
                                    data-tooltip-display="overflow"
                                    data-tooltip-position="above"
                                    data-tooltip-text-direction="auto"
                                  >
                                    <a
                                      data-hover="tooltip"
                                      data-tooltip-display="overflow"
                                      class="_231w _4yeg style-kzNEl"
                                      href="#"
                                      id="style-kzNEl"
                                    >
                                      <div class="_96mf">
                                        <div class="_96mg">
                                          <svg
                                            viewBox="0 0 16 16"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            class="x4s1yf2 xlup9mm x1kky2od"
                                          >
                                            <g data-name="Layer 2">
                                              <g>
                                                <g data-name="16">
                                                  <rect
                                                    class="xbh8q5q xi5qq39"
                                                    x="9.5"
                                                    y="0.5"
                                                    width="6"
                                                    height="6"
                                                    rx="1"
                                                  ></rect>
                                                  <rect
                                                    class="xbh8q5q xi5qq39"
                                                    x="0.5"
                                                    y="0.5"
                                                    width="6"
                                                    height="6"
                                                    rx="1"
                                                  ></rect>
                                                  <rect
                                                    class="xbh8q5q xi5qq39"
                                                    x="9.5"
                                                    y="9.5"
                                                    width="6"
                                                    height="6"
                                                    rx="1"
                                                    transform="rotate(90 12.5 12.5)"
                                                  ></rect>
                                                  <rect
                                                    class="xbh8q5q xi5qq39"
                                                    x="0.5"
                                                    y="9.5"
                                                    width="6"
                                                    height="6"
                                                    rx="1"
                                                    transform="rotate(90 3.5 12.5)"
                                                  ></rect>
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div
                                          aria-level="4"
                                          class="x1xqt7ti xsuwoey x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                          role="heading"
                                        >
                                          <span class="_4gz1">1 Ad set</span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div class="x6s0dn4 x3nfvp2 x1i64zmx x1emribx">
                              <i
                                alt=""
                                data-visualcompletion="css-img"
                                class="img style-qXQ5H"
                                id="style-qXQ5H"
                              ></i>
                            </div>
                            <div class="x1iyjqo2 xc02obx x6ikm8r x10wlt62 xlyipyv xuxw1ft x1r8uery">
                              <div class="_3qn7 _61-0 _2fyi _3qng">
                                <span
                                  class=" "
                                  data-tracked="true"
                                  data-interactable="|click|"
                                >
                                  <div
                                    class="xo1l8bm xbsr9hj x1v911su x1iorvi4 xjkvuk6 x1e558r4 x150jy0e x1lcm9me x1yr5g0i xrt01vj x10y3i5r"
                                    data-hover="tooltip"
                                    data-testid="nav-header-ADGROUP"
                                    data-tooltip-content="1 Ad"
                                    data-tooltip-display="overflow"
                                    data-tooltip-position="above"
                                    data-tooltip-text-direction="auto"
                                  >
                                    <a
                                      data-hover="tooltip"
                                      data-tooltip-display="overflow"
                                      class="_231w _4yeg style-6DRbo"
                                      href="#"
                                      id="style-6DRbo"
                                    >
                                      <div class="_96mf">
                                        <div class="_96mg">
                                          <svg
                                            viewBox="0 0 16 16"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            class="x4s1yf2 xlup9mm x1kky2od"
                                          >
                                            <g data-name="Layer 2">
                                              <g data-name="16">
                                                <rect
                                                  x="1.5"
                                                  y="1.5"
                                                  width="13"
                                                  height="13"
                                                  rx="1.25"
                                                  stroke="currentColor"
                                                  fill="none"
                                                ></rect>
                                                <circle
                                                  cx="4.5"
                                                  cy="4.5"
                                                  r="1"
                                                ></circle>
                                                <path
                                                  stroke-linecap="round"
                                                  stroke="currentColor"
                                                  fill="none"
                                                  d="M7.5 4.5 12.5 4.5"
                                                ></path>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div
                                          aria-level="4"
                                          class="x1xqt7ti xsuwoey x63nzvj x1541jtf xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj x1fcty0u xeuugli"
                                          role="heading"
                                        >
                                          <span class="_4gz1">1 Ad</span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="_8ivh">
                          <div class="_8ivk">
                            <div class="x6s0dn4 x78zum5 x2lwn1j xeuugli x14ju556">
                              <div class="x6s0dn4 x3nfvp2 x1xxsxie x16n37ib xq8finb xp4054r">
                                <span>
                                  <div class="ellipsis">
                                    <div class="clearfix _ikh">
                                      <div class="_4bl7">
                                        <div class="x1yc453h x1kky2od x1y5rjcf">
                                          <i
                                            alt=""
                                            data-visualcompletion="css-img"
                                            class="img style-aD6jY"
                                            id="style-aD6jY"
                                          ></i>
                                        </div>
                                      </div>
                                      <div class="_4bl9">
                                        <span class="xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xq9mrsl x1h4wwuj xeuugli">
                                          Active
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                              <div class="xy80clv x26u7qi xckqwgs x1i1rx1s x17rw0jw xmo9yow"></div>
                              <div data-visualcompletion="ignore" class="">
                                <div>
                                  <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x19lwn94 x1c4vz4f">
                                    <div class="x1rg5ohu x1n2onr6 x3oybdh">
                                      <input
                                        aria-checked="true"
                                        aria-label="On/Off"
                                        role="switch"
                                        aria-describedby="js_mf"
                                        aria-labelledby="js_md"
                                        class="xjyslct x1ypdohk x5yr21d x17qophe xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1t137rt x10l6tqk x13vifvy xh8yej3 x1vjfegm"
                                        id="js_me"
                                        type="checkbox"
                                        value="true"
                                        checked=""
                                      />
                                      <div class="x1n2onr6 xh8yej3">
                                        <div class="x6s0dn4 x78zum5 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg xo1l8bm xbsr9hj x1k4ywey x13dflua xxziih7 x12w9bfk x14qfxbe xexx8yu x4uap5 x18d9i69 xkhd6sd x15406qy">
                                          <div class=""></div>
                                          <div class="xw4jnvo x1qx5ct2 xzolkzo x12go9s9 x1rnf11y xprq8jg x13dflua x6o7n8i xxziih7 x12w9bfk xo1l8bm x140t73q x19bke7z x1psfjxj"></div>
                                        </div>
                                        <div class="xwebqov xvyu6v8 xrsgblv x10lij0i xzolkzo x12go9s9 x1rnf11y xprq8jg x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x13dflua x6o7n8i xxziih7 x12w9bfk xg01cxk x47corl x10l6tqk x17qophe xds687c x13vifvy x1ey2m1c x6ikm8r x10wlt62 xnl74ce xmb4j5p xdx8kah xwmxa91 xmn8db3 x8lbu6m x2te4dl x1bs8fl3 xhhp2wi x14q35kh x1wa3ocq x1n7iyjn x1t0di37 x1tt7eqi xe25xm5 xsp6npd x1s928wv x1w3onc2 x1j6awrg x9obomg x1ryaxvv x1hvfe8t x1te75w5"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            aria-busy="false"
                            aria-controls="js_mg"
                            aria-expanded="false"
                            aria-haspopup="menu"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1ye3gou xn6708d"
                            role="button"
                            tabindex="0"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                              <div class="x78zum5">
                                <div
                                  class="x1qvwoe0 xjm9jq1 x1y332i5 xcwd3tp x1jyxor1 x39eecv x6ikm8r x10wlt62 x10l6tqk xuxw1ft x1i1rx1s"
                                  data-sscoverage-ignore="true"
                                >
                                  Action menu
                                </div>
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk xl56j7k xh8yej3">
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-sVHk8"
                                      id="style-sVHk8"
                                    ></div>
                                  </div>
                                  ​
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_22s_ _7ayd _8z1m">
                  <div class="x5yr21d x1q85c4o xiy17q3 x1nr1p0w x2li9jd xldge1k x6n32m9">
                    <div class="_6jw8">
                      <div class="_13uo">
                        <div>
                          <span
                            class=" "
                            data-tracked="true"
                            data-interactable="|click|"
                          >
                            <span class="_5ldw">
                              <span>
                                <button
                                  aria-haspopup="true"
                                  type="button"
                                  aria-disabled="false"
                                  class="_271k _271m _1qjd _ai7j _ai7l _ai7m style-VNKsj"
                                  id="style-VNKsj"
                                >
                                  <div class="_43rl">
                                    <div
                                      data-hover="tooltip"
                                      data-tooltip-display="overflow"
                                      class="_43rm"
                                    >
                                      <div class="_1uz0">
                                        <div>
                                          This month: 1 Oct 2024 - 24 Oct
                                          2024&nbsp;
                                        </div>
                                      </div>
                                    </div>
                                    <i
                                      aria-hidden="true"
                                      class="_271o img style-1CCIC"
                                      alt=""
                                      data-visualcompletion="css-img"
                                      id="style-1CCIC"
                                    ></i>
                                  </div>
                                </button>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="x78zum5 x13a6bvl x2lwn1j xeuugli x1y1aw1k x1sxyh0 xwib8y2 xurb0ha">
                        <div
                          class="x6s0dn4 x78zum5 x1nhvcw1 x19lwn94"
                          role="toolbar"
                          data-auto-logging-component-type="GeoToolBar"
                        >
                          <div class="x1iyjqo2 xs83m0k xdl72j9"></div>
                          <div
                            aria-busy="false"
                            aria-controls="js_mh"
                            aria-expanded="false"
                            aria-haspopup="menu"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d"
                            role="button"
                            tabindex="0"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                              <div class="x78zum5">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                    Activity types: All
                                  </div>
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-UfcIK"
                                      id="style-UfcIK"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                          <div
                            aria-busy="false"
                            aria-controls="js_mi"
                            aria-expanded="false"
                            aria-haspopup="menu"
                            class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 xggy1nq x1ja2u2z x6s0dn4 x1ejq31n xd10rxx x1sy0etr x17r0tee x3nfvp2 xdl72j9 x1q0g3np x2lah0s x193iq5w x1n2onr6 x1hl2dhg x87ps6o xxymvpz xlh3980 xvmahel x1lku1pv x1g40iwv x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ob88yx xaatb59 x1qgsegg xo1l8bm xbsr9hj x1v911su x1y1aw1k xwib8y2 x1swvt13 xn6708d"
                            role="button"
                            tabindex="0"
                          >
                            <span class="xmi5d70 x1fvot60 xxio538 x1heor9g xq9mrsl x1h4wwuj x1pd3egz xeuugli xh8yej3">
                              <div class="x78zum5">
                                <div class="x6s0dn4 x78zum5 x1q0g3np xozqiw3 x2lwn1j xeuugli x1iyjqo2 x19lwn94 x1hc1fzr x13dflua x6o7n8i xxziih7 x12w9bfk x1nhvcw1 xh8yej3">
                                  <div class="x1xqt7ti x1fvot60 xk50ysn xxio538 x1heor9g xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli x1iyjqo2">
                                    Changed by: Anyone
                                  </div>
                                  <div
                                    class="x3nfvp2 x120ccyz x1heor9g x2lah0s x1c4vz4f x1gryazu"
                                    role="presentation"
                                  >
                                    <div
                                      class="xtwfq29 style-QbgG4"
                                      id="style-QbgG4"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="_4u-c _6jw5">
                        <div id="style-Oq4Nc" class="style-Oq4Nc">
                          <div class="_6m6l _6m6m style-8kJYt" id="style-8kJYt">
                            <div
                              aria-valuemax="100"
                              aria-valuemin="0"
                              aria-valuenow="100"
                              class="x9f619 xdk7pt x6ikm8r x10wlt62 x1n2onr6 xh8yej3 xzolkzo x12go9s9 x1rnf11y xprq8jg xjbqb8w"
                              role="progressbar"
                            >
                              <div
                                class="x5yr21d x17qophe x10l6tqk xds687c xh8yej3 x11xpdln x1wsgiic xpt81ld xqkc6xh style-9THha"
                                id="style-9THha"
                              ></div>
                            </div>
                          </div>
                          <div class="x78zum5 x1iyjqo2 x193iq5w xeaf4i8 xedcshv xw2csxc x1odjw0f x1gzqxud">
                            <div class="x1iyjqo2 x1n2onr6 x193iq5w xmz0i5r x1ja2u2z">
                              <table
                                aria-label="Activity log table"
                                class="x1lliihq xh8yej3 x5yr21d xw2csxc x1odjw0f x1mzt3pk"
                                role="grid"
                              >
                                <thead class="x1lliihq xh8yej3 x1vjfegm x7wzq59 x13vifvy x1pshirs">
                                  <tr
                                    class="x1s3fex4 x1uqg51p style-2UWmP"
                                    role="row"
                                    id="style-2UWmP"
                                  >
                                    <th
                                      aria-colindex="1"
                                      class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xwebqov xvyu6v8 xrsgblv x10lij0i x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-xD3pV"
                                      role="columnheader"
                                      tabindex="0"
                                      id="style-xD3pV"
                                    >
                                      <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                        <div class="xeuugli x6ikm8r x10wlt62">
                                          <div class="x1rg5ohu x193iq5w xxymvpz">
                                            <div
                                              aria-level="4"
                                              class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-zRYP7"
                                              role="heading"
                                              id="style-zRYP7"
                                            >
                                              Activity
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th
                                      aria-colindex="2"
                                      class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xwebqov xvyu6v8 xrsgblv x10lij0i x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-1tGik"
                                      role="columnheader"
                                      tabindex="0"
                                      id="style-1tGik"
                                    >
                                      <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                        <div class="xeuugli x6ikm8r x10wlt62">
                                          <div class="x1rg5ohu x193iq5w xxymvpz">
                                            <div
                                              aria-level="4"
                                              class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-WZ2J4"
                                              role="heading"
                                              id="style-WZ2J4"
                                            >
                                              Activity details
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th
                                      aria-colindex="3"
                                      class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xwebqov xvyu6v8 xrsgblv x10lij0i x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-aBR6S"
                                      role="columnheader"
                                      tabindex="0"
                                      id="style-aBR6S"
                                    >
                                      <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                        <div class="xeuugli x6ikm8r x10wlt62">
                                          <div class="x1rg5ohu x193iq5w xxymvpz">
                                            <div
                                              aria-level="4"
                                              class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-xi5gU"
                                              role="heading"
                                              id="style-xi5gU"
                                            >
                                              Item changed
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th
                                      aria-colindex="4"
                                      class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xwebqov xvyu6v8 xrsgblv x10lij0i x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-athba"
                                      role="columnheader"
                                      tabindex="0"
                                      id="style-athba"
                                    >
                                      <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                        <div class="xeuugli x6ikm8r x10wlt62">
                                          <div class="x1rg5ohu x193iq5w xxymvpz">
                                            <div
                                              aria-level="4"
                                              class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-JNA8s"
                                              role="heading"
                                              id="style-JNA8s"
                                            >
                                              Changed by
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th
                                      aria-colindex="5"
                                      class="x1pd3egz x1n2onr6 x1yc453h x78zum5 x6s0dn4 x1nhvcw1 xwebqov xvyu6v8 xrsgblv x10lij0i x1gzqxud x1y1aw1k xwib8y2 x1swvt13 x1pi30zi style-cy8YT"
                                      role="columnheader"
                                      tabindex="0"
                                      id="style-cy8YT"
                                    >
                                      <div class="x1iyjqo2 xh8yej3 xmz0i5r">
                                        <div class="xeuugli x6ikm8r x10wlt62">
                                          <div class="x1rg5ohu x193iq5w xxymvpz">
                                            <div
                                              aria-level="4"
                                              class="x1xqt7ti xsuwoey x63nzvj xbsr9hj xq9mrsl x1yc453h x1mzt3pk x1vvkbs x13faqbe x117nqv4 xeuugli x104kibb x6ikm8r x10wlt62 x1ua5tub style-7vwJO"
                                              role="heading"
                                              id="style-7vwJO"
                                            >
                                              Date and Time
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody class="x1lliihq xh8yej3 x1n2onr6 x1ja2u2z"></tbody>
                              </table>
                            </div>
                          </div>
                          <div class="x1ow4hk9 x10l6tqk x2b8uid x6mplv7 xh8yej3">
                            <div class="_2ql1">
                              <div class="_2ql2">
                                <i
                                  class="_3-96 img style-AiqNy"
                                  alt=""
                                  data-visualcompletion="css-img"
                                  id="style-AiqNy"
                                ></i>
                                <div
                                  aria-level="3"
                                  class="x1xqt7ti x1uxerd5 xrohxju xbsr9hj xq9mrsl x2b8uid x1h4wwuj x117nqv4 xeuugli x12nagc"
                                  role="heading"
                                >
                                  No activity during selected date range
                                </div>
                                <div class="xmi5d70 x1fvot60 xo1l8bm xxio538 x1541jtf xq9mrsl x2b8uid x1h4wwuj xeuugli">
                                  Try again with a different date range. Bear in
                                  mind that new activity can take up to 15
                                  minutes to be shown in this table.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default History;
