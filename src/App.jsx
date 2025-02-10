import './App.css'
import logo from '../src/assets/logo.jpg'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiWechat2Fill } from "react-icons/ri";
import { SiLivechat } from "react-icons/si";
import heroImg from '../src/assets/1.png'
import loginImage from '../src/assets/login.png'

function App() {

  return (
    <>
      <div className='bg-black text-white'>
        <div className='bg-black'>
          <div className="navbar text-neutral-content flex justify-between max-w-6xl mx-auto">
            <Link className='' to={'https://hpwinvip.net'}>
              {/* <div className='flex items-center'>
                <p className='ml-4 text-3xl font-bold text-orange-300'> Winners PlayGround</p>
              </div> */}
              <img className='h-12 object-cover' src={logo} alt="" />
            </Link>
            <Link to={'https://hpwinvip.net'}><img src={loginImage} alt="" /></Link>
          </div>
        </div>
        <section className='pt-8 bg-black text-white'>
          <div className='flex gap-8 items-center max-w-6xl mx-auto '>
            <div id="hero" className='text-center w-1/2'>
              <h1 className='text-5xl'>Stay Accessible Anytime, Anywhere</h1>
              <p className='text-2xl my-2'>Please save this info domain for backup purposes.</p>
              <p className=''><span className='text-xl font-semibold'>Dear Valued Members,</span> Should you feel slowness or difficulties to access our website, kindly visit the alternate link for better performance.</p>
              <div className=''>
                <p>Select one of the following link to continue:</p>
                <div className='space-x-3 mt-4'>
                  <Link to={'https://hpwin88.com'}><button className='bg-orange-400 px-6 py-2 rounded-md'>Link 1</button></Link>
                  <Link to={'https://hpwinvipgo.com'}><button className='bg-orange-400 px-6 py-2 rounded-md'>Link 2</button></Link>
                  <Link to={'https://hpwinvipnow.com'}><button className='bg-orange-400 px-6 py-2 rounded-md'>Link 3</button></Link>
                </div>
              </div>
            </div>
            <img className='w-1/2' src={heroImg} alt="" />
          </div>
        </section>
        <section className='py-16'>
          <div className='max-w-6xl mx-auto'>
            <div id="hero" className='text-center'>
              <h1 className='text-4xl'>Having Difficulties Accessing Our Site?</h1>
              <p className='text-2xl my-2'>Please Contact With Our Special Customer Support Specialist.</p>
              <div className='mt-8'>
                <div className='space-x-3 flex justify-center'>
                  <Link className='border-2 p-4 rounded-lg' to={'https://api.whatsapp.com/send?phone=60182536271'}>
                    <IoLogoWhatsapp className='text-4xl w-full'></IoLogoWhatsapp>
                    <button className='px-6 py-2 rounded-md'>Whatsapp</button>
                  </Link>
                  <Link className='border-2 p-4 rounded-lg' to={'/'}>
                    <RiWechat2Fill className='text-4xl w-full'></RiWechat2Fill>
                    <button className='px-6 py-2 rounded-md'>Wechat</button>
                  </Link>
                  <Link className='border-2 p-4 rounded-lg' to={'/'}>
                    <SiLivechat className='text-4xl w-full'></SiLivechat>
                    <button className='px-6 py-2 rounded-md'>Live Chat</button>
                  </Link>
                </div>
              </div>
            </div>
            <h2 className='text-center mt-4 text-4xl font-bold'>Setting Up Public DNS</h2>
            <div className='mt-8'>
              <Tabs>
                <div className='text-center'>
                  <TabList>
                    <Tab>Windows</Tab>
                    <Tab>macOS</Tab>
                    <Tab>Android</Tab>
                    <Tab>iOS</Tab>
                  </TabList>
                </div>
                <TabPanel className="mt-6">
                  <ol className='list-decimal'>
                    <li>Click on the <span className='font-bold text-orange-500'>Start menu </span> {'>'} <span className='font-bold text-orange-500'>Settings</span> (⚙️ icon).</li>
                    <li>Click on <span className='font-bold text-orange-500'>Network & Internet</span>.</li>
                    <li>Click on <span className='font-bold text-orange-500'>Change adapter options</span>.</li>
                    <li>Right click on the Wi-Fi network you are connected to.</li>
                    <li>Click <span className='font-bold text-orange-500'>Properties</span>.</li>
                    <li>Select Internet <span className='font-bold text-orange-500'> Protocol Version 4</span>.</li>
                    <li>Click Properties.</li>
                    <li>Click <span className='font-bold text-orange-500'>Use the following DNS server address</span>:</li>
                    <li>
                      Replace any IP addresses that may be already listed, with:
                      <div className='bg-slate-800 p-6 rounded-lg my-2'>
                        <ol>
                          <li>Cloudflare</li>
                          <li>1.1.1.1</li>
                          <li>1.0.0.1</li>
                          <li className='my-2'>OR</li>
                          <li>Google Public DNS</li>
                          <li>8.8.8.8</li>
                          <li>8.8.4.4</li>
                        </ol>
                      </div>
                    </li>
                    <li>Click <span className='font-bold text-orange-500'>OK</span>.</li>
                    <li>Now go to <span className='font-bold text-orange-500'>Internet Protocol Version 6</span>.</li>
                    <li>Click <span className='font-bold text-orange-500'>Properties</span>.</li>
                    <li>Click <span className='font-bold text-orange-500'>Use the following DNS server address</span>:</li>
                    <li>
                      Remove any IP addresses that may be already listed and in their place add:
                      <div className='bg-slate-800 p-6 rounded-lg my-2'>
                        <ol>
                          <li>Cloudflare</li>
                          <li>2606:4700:4700::1111</li>
                          <li>2606:4700:4700::1001</li>
                          <li className='my-2'>OR</li>
                          <li>Google Public DNS</li>
                          <li>2001:4860:4860::8888</li>
                          <li>2001:4860:4860::8844</li>
                        </ol>
                      </div>
                    </li>
                    <li>Click <span className='font-bold text-orange-500'>OK</span>.</li>
                    <li>Click <span className='font-bold text-orange-500'>Close</span>.</li>
                  </ol>
                </TabPanel>
                <TabPanel>
                  <ol className='list-decimal'>
                    <h2 className='text-2xl -ml-4'>IPv4</h2>
                    <li>Go to System Preferences. You can find it by pressing <span className='bg-slate-400 p-1 rounded-sm'>Command</span> + <span className='bg-slate-400 p-1 rounded-sm'>Space</span> on your keyboard and typing <span className='font-bold text-orange-500'>System Preferences</span>.</li>
                    <li>Click on the <span className='font-bold text-orange-500'>Network</span> icon {'>'} <span className='font-bold text-orange-500'>Advanced</span>.</li>
                    <li>Select the <span className='font-bold text-orange-500'>DNS</span> tab. Take note of any IP addresses you might have and save them in a safe place in case you need to use them later.</li>
                    <li>
                      Remove any IP addresses that may be already listed and in their place add:
                      <div className='bg-slate-800 p-6 rounded-lg my-2'>
                        <ol>
                          <li>Cloudflare</li>
                          <li>1.1.1.1</li>
                          <li>1.0.0.1</li>
                          <li className='my-2'>OR</li>
                          <li>Google Public DNS</li>
                          <li>8.8.8.8</li>
                          <li>8.8.4.4</li>
                        </ol>
                      </div>
                    </li>
                    <li>Click<span className='font-bold text-orange-500'>OK</span> {'>'}<span className='font-bold text-orange-500'>Apply</span>.</li>
                    <h2 className='text-2xl -ml-4 mt-8'>IPv6</h2>
                    <li>Go to System Preferences. You can find it by pressing <span className='bg-slate-400 p-1 rounded-sm'>Command</span> + <span className='bg-slate-400 p-1 rounded-sm'>Space</span> on your keyboard and typing <span className='font-bold text-orange-500'>System Preferences</span>.</li>
                    <li>Click on the <span className='font-bold text-orange-500'>Network</span> icon {'>'} <span className='font-bold text-orange-500'>Advanced</span>.</li>
                    <li>Select the <span className='font-bold text-orange-500'>DNS</span> tab. Take note of any IP addresses you might have and save them in a safe place in case you need to use them later.</li>
                    <li>
                      Remove any IP addresses that may be already listed and in their place add:
                      <div className='bg-slate-800 p-6 rounded-lg my-2'>
                        <ol>
                          <li>Cloudflare</li>
                          <li>2606:4700:4700::1111</li>
                          <li>2606:4700:4700::1001</li>
                          <li className='my-2'>OR</li>
                          <li>Google Public DNS</li>
                          <li>2001:4860:4860::8888</li>
                          <li>2001:4860:4860::8844</li>
                        </ol>
                      </div>
                    </li>
                    <li>Click<span className='font-bold text-orange-500'>OK</span> {'>'}<span className='font-bold text-orange-500'>Apply</span>.</li>
                  </ol>
                </TabPanel>
                <TabPanel>
                  <div className='-ml-4'>
                    <p><span className='font-bold text-orange-500'>1.1.1.1: Faster Internet</span> is the preferred method of setting up 1.1.1.1 DNS resolver, as it allows you to automatically configure your phone to use 1.1.1.1 on any network you connect to.</p>
                    <p>The app also allows you to enable encryption for DNS queries or enable WARP mode, which keeps all your HTTP traffic private and secure, including your DNS queries to 1.1.1.1.</p>
                    <p>You can select between these two options in 1.1.1.1: Faster {"Internet's"} settings. By default, 1.1.1.1:Faster Internet is configured to WARP mode.</p>
                  </div>
                  <h2 className='text-2xl -ml-4 mt-8 mb-2'>Set up 1.1.1.1: Faster Internet</h2>
                  <ol className='list-decimal'>
                    <li>Download <span className='font-bold text-orange-500'>1.1.1.1: Faster Internet from Google Play</span> for free.</li>
                    <li>Launch 1.1.1.1: Faster Internet and accept the Terms of Service.</li>
                    <li>Toggle the <span className='font-bold text-orange-500'>WARP</span> button to <span className='font-bold text-orange-500'>Connected</span>.</li>
                    <li>Install the VPN profile that allows your phone to connect securely to 1.1.1.1.</li>
                  </ol>
                  <p className='-ml-4 mt-4'> Your connection to the Internet and your DNS queries are now protected. Alternatively, you may want to only encrypt your DNS queries and leave the remaining traffic unencrypted. If this is the case:</p>
                  <div>
                    <ol className='list-decimal'>
                      <li>Open 1.1.1.1: Faster Internet.</li>
                      <li>Toggle the WARP button and choose <span className='font-bold text-orange-500'>Switch to DNS only mode</span>. If the WARP toggle is disconnected, tap the <span className='font-bold text-orange-500'>menu button</span>.</li>
                      <li>You will see two options: 1.1.1.1 and WARP. Select <span className='font-bold text-orange-500'>1.1.1.1</span>.</li>
                    </ol>
                  </div>
                  <p className='-ml-4'>You are now using encryption only for your DNS queries.</p>
                  <div>
                    <h2 className='text-2xl -ml-4 mt-8'>Configure 1.1.1.1 manually</h2>
                    <h3 className='text-xl -ml-4 mb-2'>Android 9 Pie or later</h3>
                    <p className='-ml-4'>Android Pie and later supports DNS over TLS to secure your queries through encryption. In Android, this option is called Private DNS and it prevents your queries from being tracked, modified or surveilled by third-parties. Unlike previous versions of Android, this method also ensures 1.1.1.1 does not need to be configured for each new WiFi network your smartphone joins.</p>
                    <div>
                      <ol className='list-decimal'>
                        <li>Go to <span className='font-bold text-orange-500'>Settings </span> {'>'} <span className='font-bold text-orange-500'>Network & internet</span>.</li>
                        <li>Select <span className='font-bold text-orange-500'>Advanced</span> {'>'} <span className='font-bold text-orange-500'>Private DNS</span>.</li>
                        <li>Select the <span className='font-bold text-orange-500'>Private DNS provider hostname</span> option.</li>
                        <li>Enter <span className='font-bold text-orange-500'>one.one.one.one</span> or <span className='font-bold text-orange-500'>1dot1dot1dot1.cloudflare-dns.com</span> and press <span className='font-bold text-orange-500'>Save</span>.</li>
                        <li>Visit <span className='font-bold text-orange-500'>1.1.1.1/help</span> to verify DNS over TLS is enabled.</li>
                      </ol>
                    </div>
                    <div>
                      <h2 className='text-2xl -ml-4 mt-8 mb-2'>Previous Android versions</h2>
                      <ol className='list-decimal'>
                        <li>Open <span className='font-bold text-orange-500'>Settings</span> {'>'} <span className='font-bold text-orange-500'>Wi-Fi</span>.</li>
                        <li>Press down and hold on the name of the network you are currently connected to.</li>
                        <li>Click <span className='font-bold text-orange-500'>Modify Network</span>.</li>
                        <li>Select the check box <span className='font-bold text-orange-500'>Show Advanced Options</span>.</li>
                        <li>Change the IP Settings to <span className='font-bold text-orange-500'>Static</span>.</li>
                        <li>Take note of any IP addresses you might have and save them in a safe place in case you need to use them later.</li>
                        <li>
                          Remove any IP addresses that may be already listed and in their place add:
                          <div className='bg-slate-800 p-6 rounded-lg my-2'>
                            <ol>
                              <li>1.1.1.1</li>
                              <li>1.0.0.1</li>
                              <li>2606:4700:4700::1111</li>
                              <li>2606:4700:4700::1001</li>
                            </ol>
                          </div>
                        </li>
                        <li>Click <span className='font-bold text-orange-500'>Save</span>. You may need to disconnect from the Wi-Fi and reconnect for the changes to take place.</li>
                      </ol>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <p className='-ml-4'><span className='font-bold text-orange-500'>1.1.1.1: Faster Internet</span> is the preferred method of setting up 1.1.1.1 DNS resolver in iOS devices. It allows you to automatically configure your phone to use 1.1.1.1 on any network you connect to, and solves iOS inability of using an alternative DNS resolver in cellular connections.
                    The app also allows you to enable encryption for DNS queries or enable WARP mode, which keeps all your HTTP traffic private and secure, including your DNS queries to 1.1.1.1.</p>
                  <p className='-ml-4'>You can select between these two options in 1.1.1.1: Faster {"Internet's"} settings. By default, 1.1.1.1:Faster Internet is configured to WARP mode.</p>
                  <h2 className='text-2xl -ml-4 mt-8'>Set up 1.1.1.1: Faster Internet</h2>
                  <ol className='list-decimal'>
                    <li>Download <span className='font-bold text-orange-500'>1.1.1.1: Faster Internet from the App Store</span> for free.</li>
                    <li>Launch 1.1.1.1: Faster Internet and accept the Terms of Service.</li>
                    <li>Install the VPN profile that allows your phone to connect securely to 1.1.1.1.</li>
                    <li>Toggle the <span className='font-bold text-orange-500'>WARP</span> button to <span className='font-bold text-orange-500'>Connected</span>.</li>
                    <p className='-ml-4 mt-2'>
                      Your connection to the Internet and your DNS queries are now protected. Alternatively, you may want to only encrypt your DNS queries and leave the remaining traffic unencrypted. If this is the case:
                    </p>
                    <div>
                      <ol className='list-decimal'>
                        <li>Open 1.1.1.1: Faster Internet.</li>
                        <li>Toggle the WARP button and choose <span className='font-bold text-orange-500'>Switch to DNS only mode</span>. If the WARP toggle is disconnected, tap the <span className='font-bold text-orange-500'>menu button</span>.</li>
                        <li>You will see two options: 1.1.1.1 and WARP. Select <span className='font-bold text-orange-500'>1.1.1.1</span> {'>'} <span className='font-bold text-orange-500'>Done</span>.</li>
                      </ol>
                    </div>
                    <p className='-ml-4 mt-2'>You are now using encryption only for your DNS queries.</p>

                    <div>
                      <h2 className='text-2xl -ml-4 mt-8'>Configure 1.1.1.1 manually</h2>
                      <p className='bg-slate-800 p-6 rounded-lg my-2 border-l-2 text-xl'>If you configure 1.1.1.1 manually, you will have to do it for every WiFi network your device connects to. This method {"doesn't"} work for cellular connections.</p>
                      <div>
                        <ol className='list-decimal'>
                          <li>Go to <span className='font-bold text-orange-500'>Settings</span> {">"} <span className='font-bold text-orange-500'>Wi-Fi</span>.</li>
                          <li>Select the {"'i'"} icon next to the WiFi network you are connected to.</li>
                          <li>Scroll down until you see the section called Configure DNS.</li>
                          <li>Change the configuration from <span className='font-bold text-orange-500'>Automatic</span> to <span className='font-bold text-orange-500'>Manual</span>.</li>
                          <li>Select <span className='font-bold text-orange-500'>Add Server</span>.</li>
                          <li>Take note of any IP addresses you might have and save them in a safe place in case you need to use them later.</li>
                          <li>
                            Remove any IP addresses that may be already listed and in their place add:

                          </li>
                          <div className='bg-slate-800 p-6 rounded-lg my-2'>
                            <ol>
                              <li>1.1.1.1</li>
                              <li>1.0.0.1</li>
                              <li>2606:4700:4700::1111</li>
                              <li>2606:4700:4700::1001</li>
                            </ol>
                          </div>
                          <li>Select <span className='font-bold text-orange-500'>Save</span>.</li>
                        </ol>
                      </div>
                    </div>
                  </ol>
                </TabPanel>
              </Tabs>
            </div>
            <div className='bg-slate-800 p-6 rounded-lg my-2 border-l-2 text-xl mt-8'>
              <p><span className='font-bold text-orange-500'>Note:</span> Setting up a static IP address to configure a DNS server may prevent you from connecting to some public Wi-Fi networks that use captive portals (these are the web pages some wireless networks employ to let users log in and use their services).</p>
              <p className='my-2'>If you are experiencing connectivity issues related to captive portals:</p>
              <ol className='list-decimal ml-8'>
                <li>Remove the static IP addresses from the device.</li>
                <li>Connect to the Wi-Fi network.</li>
                <li>Once the connection has been established, re-add the static IP addresses.</li>
              </ol>
            </div>
          </div>
        </section>
        <div className='bg-neutral'>
          <footer className="footer text-neutral-content items-center p-4 max-w-6xl mx-auto">
            <aside className="grid-flow-col items-center">
              <p>© {new Date().getFullYear()} HPWIN - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <Link to={'/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link to={'/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link to={'/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
