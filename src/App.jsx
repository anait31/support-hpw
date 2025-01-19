import './App.css'
import logo from '../src/assets/logo.jpg'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {

  return (
    <>
      <div className=''>
        <div className="navbar text-neutral-content max-w-6xl mx-auto">
          <Link to={'/'}><img src={logo} alt="" /></Link>
        </div>
        <section>
          <div id="hero">
            <h1>Stay Accessible Anytime, Anywhere</h1>
            <p>Please save this info domain for backup purposes.</p>
            <p><span>Dear Valued Members,</span> Should you feel slowness or difficulties to access our website, kindly visit the alternate link for better performance.</p>
            <div>
              <p>Select one of the following link to continue:</p>
              <Link to={'/'}><button>Link 1</button></Link>
              <Link to={'/'}><button>Link 2</button></Link>
              <Link to={'/'}><button>Link 3</button></Link>
            </div>
          </div>
        </section>
        <section className='max-w-6xl mx-auto'>
          <h2>Setting Up Public DNS</h2>
          <div className=''>
            <Tabs>
              <div className='text-center'>
                <TabList>
                  <Tab>Windows</Tab>
                  <Tab>macOS</Tab>
                  <Tab>Android</Tab>
                  <Tab>iOS</Tab>
                </TabList>
              </div>

              <TabPanel>
                <ol className='list-decimal'>
                  <li>Click on the Start menu Settings (⚙️ icon).</li>
                  <li>Click on Network & Internet.</li>
                  <li>Click on Change adapter options.</li>
                  <li>Right click on the Wi-Fi network you are connected to.</li>
                  <li>Click Properties.</li>
                  <li>Select Internet Protocol Version 4.</li>
                  <li>Click Properties.</li>
                  <li>Click Use the following DNS server address.</li>
                  <li>
                    Replace any IP addresses that may be already listed, with:
                    <div>
                      <ol>
                        <li>Cloudflare</li>
                        <li>1.1.1.1</li>
                        <li>1.0.0.1</li>
                        <li>Or</li>
                        <li>Google Public DNS</li>
                        <li>8.8.8.8</li>
                        <li>8.8.4.4</li>
                      </ol>
                    </div>
                  </li>
                  <li>Click OK.</li>
                  <li>Now go to Internet Protocol Version 6.</li>
                  <li>Click Properties.</li>
                  <li>Click Use the following DNS server address.</li>
                  <li>
                    Remove any IP addresses that may be already listed and in their place add:
                    <div>
                      <ol>
                        <li>Cloudflare</li>
                        <li>2606:4700:4700::1111</li>
                        <li>2606:4700:4700::1001</li>
                        <li>Or</li>
                        <li>Google Public DNS</li>
                        <li>2001:4860:4860::8888</li>
                        <li>2001:4860:4860::8844</li>
                      </ol>
                    </div>
                  </li>
                  <li>Click OK.</li>
                  <li>Click Close.</li>
                </ol>
              </TabPanel>
              <TabPanel>
                <ol className='list-decimal'>
                  <h2>IPv4</h2>
                  <li>Go to System Preferences. You can find it by pressing <span>Command</span> + <span>Space</span> on your keyboard and typing <span>System Preferences</span>.</li>
                  <li>Click on the Network icon Advanced.</li>
                  <li>Select the <span>DNS</span> tab. Take note of any IP addresses you might have and save them in a safe place in case you need to use them later.</li>
                  <li>
                    Remove any IP addresses that may be already listed and in their place add:
                    <div>
                      <ol>
                        <li>Cloudflare</li>
                        <li>1.1.1.1</li>
                        <li>1.0.0.1</li>
                        <li>Or</li>
                        <li>Google Public DNS</li>
                        <li>8.8.8.8</li>
                        <li>8.8.4.4</li>
                      </ol>
                    </div>
                  </li>
                  <li>Click OK.</li>
                  <h2>IPv6</h2>
                  <li>Go to System Preferences. You can find it by pressing <span>Command</span> + <span>Space</span> on your keyboard and typing <span>System Preferences</span>.</li>
                  <li>Click on the Network icon Advanced.</li>
                  <li>Select the <span>DNS</span> tab. Take note of any IP addresses you might have and save them in a safe place in case you need to use them later.</li>
                  <li>
                    Remove any IP addresses that may be already listed and in their place add:
                    <div>
                      <ol>
                        <li>Cloudflare</li>
                        <li>2606:4700:4700::1111</li>
                        <li>2606:4700:4700::1001</li>
                        <li>Or</li>
                        <li>Google Public DNS</li>
                        <li>2001:4860:4860::8888</li>
                        <li>2001:4860:4860::8844</li>
                      </ol>
                    </div>
                  </li>
                  <li>Click OK.</li>
                </ol>
              </TabPanel>
              <TabPanel>
                <div>
                  <p><span>1.1.1.1: Faster Internet</span> is the preferred method of setting up 1.1.1.1 DNS resolver, as it allows you to automatically configure your phone to use 1.1.1.1 on any network you connect to.</p>
                  <p>The app also allows you to enable encryption for DNS queries or enable WARP mode, which keeps all your HTTP traffic private and secure, including your DNS queries to 1.1.1.1.</p>
                  <p>You can select between these two options in 1.1.1.1: Faster Internet's settings. By default, 1.1.1.1:Faster Internet is configured to WARP mode.</p>
                </div>
                <h2>Set up 1.1.1.1: Faster Internet</h2>
                <ol className='list-decimal'>
                  <li>Download <span>1.1.1.1: Faster Internet from Google Play</span> for free.</li>
                  <li>Launch 1.1.1.1: Faster Internet and accept the Terms of Service.</li>
                  <li>Toggle the <span>WARP</span> button to <span>Connected</span>.</li>
                  <li>Install the VPN profile that allows your phone to connect securely to 1.1.1.1.</li>
                  <li>
                    Your connection to the Internet and your DNS queries are now protected. Alternatively, you may want to only encrypt your DNS queries and leave the remaining traffic unencrypted. If this is the case:
                    <div>
                      <ol>
                        <li>Open 1.1.1.1: Faster Internet.</li>
                        <li>Toggle the WARP button and choose <span>Switch to DNS only mode</span>. If the WARP toggle is disconnected, tap the <span>menu button</span>.</li>
                        <li>You will see two options: 1.1.1.1 and WARP. Select <span>1.1.1.1 Done</span>.</li>
                      </ol>
                    </div>
                    <p>You are now using encryption only for your DNS queries.</p>
                  </li>
                  <div>
                    <h2>Configure 1.1.1.1 manually</h2>
                    <h3>Android 9 Pie or later</h3>
                    <p>Android Pie and later supports DNS over TLS to secure your queries through encryption. In Android, this option is called Private DNS and it prevents your queries from being tracked, modified or surveilled by third-parties. Unlike previous versions of Android, this method also ensures 1.1.1.1 does not need to be configured for each new WiFi network your smartphone joins.</p>
                    <div>
                      <ol>
                        <li>Go to <span>Settings Network & internet.</span></li>
                        <li>Select <span>Advanced Private DNS</span>.</li>
                        <li>Select the <span>Private DNS provider hostname</span> option.</li>
                        <li>Enter <span>one.one.one.one</span> or <span>1dot1dot1dot1.cloudflare-dns.com</span> and press <span>Save</span>.</li>
                        <li>Visit <span>1.1.1.1/help</span> to verify DNS over TLS is enabled.</li>
                      </ol>
                    </div>
                    <div>
                      <h2>Previous Android versions</h2>
                      <ol>
                        <li>Open <span>Settings Wi-Fi</span>.</li>
                        <li>Press down and hold on the name of the network you are currently connected to.</li>
                        <li>Click <span>Modify Network</span>.</li>
                        <li>Select the check box <span>Show Advanced Options</span>.</li>
                        <li>Change the IP Settings to <span>Static</span>.</li>
                        <li>Take note of any IP addresses you might have and save them in a safe place in case you need to use them later.</li>
                        <li>
                          Remove any IP addresses that may be already listed and in their place add:
                          <ol>
                            <li>1.1.1.1</li>
                            <li>1.0.0.1</li>
                            <li>2606:4700:4700::1111</li>
                            <li>2606:4700:4700::1001</li>
                          </ol>
                        </li>
                        <li>Click Save. You may need to disconnect from the Wi-Fi and reconnect for the changes to take place.</li>
                      </ol>
                    </div>
                  </div>
                </ol>
              </TabPanel>
              <TabPanel>
                <p>1.1.1.1: Faster Internet is the preferred method of setting up 1.1.1.1 DNS resolver in iOS devices. It allows you to automatically configure your phone to use 1.1.1.1 on any network you connect to, and solves iOS inability of using an alternative DNS resolver in cellular connections.
                  The app also allows you to enable encryption for DNS queries or enable WARP mode, which keeps all your HTTP traffic private and secure, including your DNS queries to 1.1.1.1.</p>
                <p>You can select between these two options in 1.1.1.1: Faster Internet's settings. By default, 1.1.1.1:Faster Internet is configured to WARP mode.</p>
                <h2>Set up 1.1.1.1: Faster Internet</h2>
                <ol className='list-decimal'>
                  <li>Download <span>1.1.1.1: Faster Internet from the App Store</span> for free.</li>
                  <li>Launch 1.1.1.1: Faster Internet and accept the Terms of Service.</li>
                  <li>Install the VPN profile that allows your phone to connect securely to 1.1.1.1.</li>
                  <li>Toggle the <span>WARP</span> button to <span>Connected</span>.</li>
                  <li>
                    Your connection to the Internet and your DNS queries are now protected. Alternatively, you may want to only encrypt your DNS queries and leave the remaining traffic unencrypted. If this is the case:
                    <div>
                      <ol>
                        <li>Open 1.1.1.1: Faster Internet.</li>
                        <li>Toggle the WARP button and choose <span>Switch to DNS only mode</span>. If the WARP toggle is disconnected, tap the <span>menu button</span>.</li>
                        <li>You will see two options: 1.1.1.1 and WARP. Select <span>1.1.1.1 Done</span>.</li>
                      </ol>
                    </div>
                    <p>You are now using encryption only for your DNS queries.</p>
                  </li>
                  <div>
                    <h2>Configure 1.1.1.1 manually</h2>
                    <p>If you configure 1.1.1.1 manually, you will have to do it for every WiFi network your device connects to. This method doesn't work for cellular connections.</p>
                    <div>
                      <ol>
                        <li>Go to <span>Settings Wi-Fi</span>.</li>
                        <li>Select the 'i' icon next to the WiFi network you are connected to.</li>
                        <li>Scroll down until you see the section called Configure DNS.</li>
                        <li>Change the configuration from <span>Automatic</span> to <span>Manual</span>.</li>
                        <li>Select <span>Add Server</span>.</li>
                        <li>Take note of any IP addresses you might have and save them in a safe place in case you need to use them later.</li>
                        <li>
                          Remove any IP addresses that may be already listed and in their place add:
                          <ol>
                            <li>1.1.1.1</li>
                            <li>1.0.0.1</li>
                            <li>2606:4700:4700::1111</li>
                            <li>2606:4700:4700::1001</li>
                          </ol>
                        </li>
                        <li>Select <span>Save</span>.</li>
                      </ol>
                    </div>
                  </div>
                </ol>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <p><span>Note:</span> Setting up a static IP address to configure a DNS server may prevent you from connecting to some public Wi-Fi networks that use captive portals (these are the web pages some wireless networks employ to let users log in and use their services).</p>
            <p>If you are experiencing connectivity issues related to captive portals:</p>
            <ol className='list-decimal'>
              <li>Remove the static IP addresses from the device.</li>
              <li>Connect to the Wi-Fi network.</li>
              <li>Once the connection has been established, re-add the static IP addresses.</li>
            </ol>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
