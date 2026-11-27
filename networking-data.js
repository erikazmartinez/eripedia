const netTopic=(title,lead,explain,points,example,tip)=>({title,lead,explain,points,example,tip});
const networkingData={
  id:'networking',title:'Networking 1',short:'ITN',description:'Introduction to Networks · Modules 1–8',
  modules:[
    {id:1,title:'Networks and connected devices',source:'Networking modules 1–4 reviewer, pp. 1–4',topics:[
      netTopic('Who does what on a network','A network joins devices so they can exchange information and share services.','Think of a website visit: your phone requests a page, a web server provides it, and network devices carry the messages between them.',[
        ['Host or end device','A device at the start or end of a network message, such as a phone, computer, printer, or server.'],
        ['Client','A device or program that requests a service. A browser requesting a page is a client.'],
        ['Server','A device or program that provides a service, such as web pages, email, or shared files.'],
        ['Intermediary device','A device that joins end devices and forwards or manages their traffic. Switches, routers, and access points are examples.'],
        ['Network medium','The path carrying signals: copper uses electricity, fiber uses light, and wireless uses radio waves.']
      ],'Browser → request → web server → page returned. A switch links local devices; a router connects the local network to another network.','A peer-to-peer device can be both client and server, but a dedicated server is easier to manage as a network grows.'),
      netTopic('Network size and maps','A network diagram can show either physical placement or the path communication takes.','A physical map answers “Where is it?” A logical map answers “How is it connected and addressed?” Both help when planning or fixing a network.',[
        ['LAN','A local area network serving a limited place such as a home, office, or school.'],
        ['WAN','A wide area network that joins LANs across larger distances, often through a service provider.'],
        ['Physical topology','The real locations of devices, ports, and cables.'],
        ['Logical topology','The communication paths, ports, and addressing used by devices.'],
        ['Intranet and extranet','An intranet is private to an organization; an extranet gives authorized outsiders limited access.']
      ],'A school floor plan with cable runs is physical. A diagram showing which devices share a subnet and where the router sits is logical.','A NIC connects a device to the network; a port or interface is its connection point.'),
      netTopic('A reliable network','Good networks keep working, grow, prioritize important traffic, and protect information.','If one link fails, a second route can keep traffic moving. If a video call shares a busy link with downloads, QoS can give the call suitable priority.',[
        ['Fault tolerance','The ability to keep service running when a component fails, often through redundant paths.'],
        ['Scalability','The ability to add users, devices, and services without serious loss of performance.'],
        ['Quality of Service (QoS)','Traffic management that gives suitable priority to delay-sensitive data such as voice or live video.'],
        ['Confidentiality','Only authorized people can read information.'],
        ['Integrity and availability','Integrity means data is not secretly changed; availability means authorized users can reach it when needed.']
      ],'A second router link provides another route if the first link fails. A firewall limits unwanted traffic at the network edge.','Remember the security goals as confidentiality, integrity, and availability.'),
      netTopic('Internet access and everyday trends','Internet links, cloud services, and personal devices change how a network is used.','A home might connect through cable, DSL, cellular, satellite, or wireless broadband. One converged network may carry ordinary data, calls, and video.',[
        ['Converged network','One shared network infrastructure that carries data, voice, and video.'],
        ['Cloud computing','Applications, files, or backups supplied by internet-connected data centers.'],
        ['Bring Your Own Device (BYOD)','Use of personal phones or computers for work or school access.'],
        ['External threat','A risk from outside, such as malware, interception, or a denial-of-service attack.'],
        ['Internal threat','A risk from within, including lost devices, mistakes, or malicious insiders.']
      ],'A student joins a video class from a personal laptop while using cloud files; access controls and a firewall help protect the network.','The connection type affects coverage and speed; the same security goals still apply.'),
    ]},
    {id:2,title:'IOS, protocols, and models',source:'Networking modules 1–4 reviewer, pp. 4–8',topics:[
      netTopic('Working in Cisco IOS','IOS uses command modes so you can inspect a device or change its configuration.','Read the prompt before typing. The prompt ending tells you whether you are viewing information, managing the device, or editing a setting.',[
        ['Shell and kernel','The shell accepts user requests; the kernel manages hardware resources for the operating system.'],
        ['CLI and GUI','A CLI uses typed commands; a GUI uses windows, icons, and menus.'],
        ['User EXEC','The limited monitoring mode marked by a > prompt.'],
        ['Privileged EXEC','The management mode marked by a # prompt.'],
        ['Configuration mode','A mode for changing device-wide, line, or interface settings.']
      ],'Switch> enable → Switch# configure terminal → Switch(config)#. Use exit to go back one level; end returns to privileged EXEC.','Use ? for context help and Tab to complete a unique command.'),
      netTopic('Save and protect device settings','A setting changed in the running configuration is active now, but needs saving to survive a restart.','Remote management should use SSH. A strong enable secret and protected console or VTY access help keep unauthorized people out.',[
        ['Running configuration','The current configuration in volatile RAM.'],
        ['Startup configuration','The saved configuration in NVRAM loaded when the device starts.'],
        ['SSH','Encrypted remote command-line access.'],
        ['Telnet','Unencrypted remote access; credentials and commands can travel as readable text.'],
        ['VTY line','A virtual terminal line used for remote management sessions.']
      ],'Set a hostname and strong access credentials, then run copy running-config startup-config. Test remote access with SSH, not Telnet.','Password encryption hides many displayed passwords; it does not make weak passwords strong.'),
      netTopic('Addresses and switch management','An IP address identifies a network interface; a mask and gateway tell it where to send traffic.','Hosts can be configured manually or receive settings from DHCP. A Layer 2 switch uses a virtual interface for its own remote management.',[
        ['IP address','A logical address assigned to a network interface.'],
        ['Subnet mask','A value that separates the network portion of an IPv4 address from the host portion.'],
        ['Default gateway','The router address a host uses for destinations outside its local network.'],
        ['DHCP','A service that automatically supplies IP configuration to clients.'],
        ['Switch virtual interface (SVI)','A virtual switch interface that can hold a management IP address.']
      ],'A host with 192.168.1.10, mask 255.255.255.0, and gateway 192.168.1.1 can reach its LAN and send remote traffic to the gateway.','A switch SVI is for managing the switch; it is not a physical user port.'),
      netTopic('Protocols and layered communication','Different protocols handle different jobs, and layers keep those jobs understandable.','For a web page, HTTP describes the request, TCP manages reliable transport, IP routes packets, and Ethernet delivers frames on the local link.',[
        ['Protocol','An agreed set of rules for message format, timing, and meaning.'],
        ['Protocol suite','A group of protocols designed to work together; TCP/IP is used by the internet.'],
        ['OSI model','A seven-layer reference model, from physical signals up to application services.'],
        ['TCP/IP model','A practical four-layer model: network access, internet, transport, and application.'],
        ['Encapsulation','Adding each layer’s control information as data travels toward the medium.'],
        ['Segmentation','Breaking a large message into smaller parts for transport.']
      ],'Sending: data → segment → packet → frame → bits. Receiving removes those layers in reverse.','OSI network is for IP routing; data link is for local frames; physical carries the bits.'),
    ]},
    {id:3,title:'Signals, Ethernet, and switching',source:'Networking modules 1–4 reviewer, pp. 8–12',topics:[
      netTopic('Signals and media','The physical layer turns bits into signals that copper, fiber, or wireless media can carry.','The best medium depends on distance, interference, speed, environment, and cost. A fast link can still feel slow if delay or overhead is high.',[
        ['Bandwidth','The theoretical carrying capacity of a link.'],
        ['Latency','The time a message takes to travel from one point to another.'],
        ['Throughput and goodput','Throughput is the actual transfer rate; goodput counts useful application data after overhead.'],
        ['Attenuation','Signal weakening over distance.'],
        ['EMI, RFI, and crosstalk','Electrical or radio interference, or unwanted signal leakage between nearby wires.'],
        ['UTP, STP, and fiber','UTP is common twisted-pair copper; STP adds shielding; fiber uses light and resists electrical interference.']
      ],'A long copper run near electrical equipment may suffer noise; fiber avoids EMI and supports a longer link.','Wireless gives mobility but shares radio space and needs strong security.'),
      netTopic('Binary, decimal, and hexadecimal','Computers store bits; people often write the same value in decimal or compact hexadecimal.','Binary uses 0 and 1. Hexadecimal uses 0–9 and A–F. One hex digit matches four bits, so it is easier to read long binary addresses.',[
        ['Bit','One binary digit: 0 or 1.'],
        ['Byte','Eight bits; it can represent 256 different values, from 0 through 255.'],
        ['Nibble','Four bits, equal to one hexadecimal digit.'],
        ['Binary','Base 2 notation using only 0 and 1.'],
        ['Hexadecimal','Base 16 notation using 0–9 and A–F; A means 10 and F means 15.']
      ],'00100111₂ = 32 + 4 + 2 + 1 = 39₁₀. 4B₁₆ = 4 × 16 + 11 = 75₁₀. E₁₆ = 1110₂. 101₁₀ = 01100101₂.','For binary ↔ hex, group bits into sets of four from the right. The largest two-digit hex value is FF.'),
      netTopic('Frames and local addressing','The data link layer wraps an IP packet in a frame for delivery on one link.','A frame carries a header, data, and an error-checking trailer. Ethernet uses MAC addresses to reach NICs on the current LAN.',[
        ['Frame','The data-link unit that carries a packet over one local link.'],
        ['MAC address','A local link-layer address used by Ethernet to identify a network interface.'],
        ['LLC sublayer','The data-link part that connects network-layer software to the link hardware.'],
        ['MAC sublayer','The data-link part that handles framing, local addresses, and access to the medium.'],
        ['Half-duplex and full-duplex','Half-duplex sends one direction at a time; full-duplex sends and receives at once.'],
        ['Frame Check Sequence (FCS)','Trailer information used to detect a damaged frame.']
      ],'An Ethernet frame uses the next device’s MAC address. When a router forwards the packet onto another link, it builds a new frame.','The IP destination stays the final host; the frame destination changes at each routed link.'),
      netTopic('How a switch forwards frames','A switch learns where devices are by watching source MAC addresses on incoming frames.','For a known destination, the switch sends the frame only to the matching port. For an unknown destination or a broadcast, it floods the frame except back to the incoming port.',[
        ['MAC address table','A switch’s record of learned MAC addresses and their ports.'],
        ['Known unicast','A frame whose destination MAC is in the table, so it can be forwarded directly.'],
        ['Unknown unicast','A frame whose destination MAC is not yet known, so it is flooded locally.'],
        ['Store-and-forward','The switch receives and checks a whole frame before forwarding.'],
        ['Cut-through','The switch starts forwarding after reading the destination, with lower delay but possible damaged frames.'],
        ['Duplex mismatch','Different duplex settings at the ends of a link, causing poor performance.']
      ],'A frame from Ana enters port 2: the switch learns Ana’s MAC on port 2. A later reply to Ana goes directly to that port.','Routers stop ordinary Layer 2 broadcasts; switches flood them within the local broadcast domain.'),
    ]},
    {id:4,title:'IP routing and address resolution',source:'Networking modules 1–4 reviewer, pp. 13–18',topics:[
      netTopic('What the network layer does','IP addresses devices and routes packets between networks.','IP is connectionless and best effort: it sends a packet without first establishing a session, and it does not itself promise delivery or retransmission.',[
        ['Packet','The network-layer unit carried between networks.'],
        ['Connectionless IP','IP sends packets without first setting up a dedicated connection.'],
        ['Best-effort delivery','IP attempts delivery but does not guarantee arrival, order, or retransmission.'],
        ['Media independence','IP can travel over copper, fiber, or wireless links.'],
        ['Time to Live / Hop Limit','A field reduced at each router; a packet is dropped when it reaches zero to prevent endless loops.'],
        ['MTU','The largest packet or frame size supported on a particular link.']
      ],'A large IPv4 packet may be fragmented for a smaller link. IPv6 routers do not fragment packets.','TCP can add reliability above IP when an application needs it.'),
      netTopic('Local or remote destination','A host compares the destination with its own network; remote traffic goes to the default gateway.','The first Ethernet frame for a remote website is addressed to the gateway’s MAC. The IP packet still names the website’s server as its final destination.',[
        ['Default gateway','The local router interface used to reach other networks.'],
        ['Routing table','A list of known network paths used to select where a packet goes next.'],
        ['Connected route','A network directly attached to an active router interface.'],
        ['Static route','A route entered manually by an administrator.'],
        ['Dynamic route','A route learned and updated by a routing protocol.'],
        ['Default route','The fallback path used when no more specific route matches.']
      ],'A laptop can reach its printer on the same LAN directly, but sends traffic for a remote web server to its gateway.','A missing gateway may leave local communication working while remote communication fails.'),
      netTopic('ARP and IPv6 Neighbor Discovery','A device needs a next-hop link address before it can place an IP packet in a local frame.','IPv4 ARP looks up a MAC address for a known local IPv4 address. IPv6 Neighbor Discovery uses ICMPv6 messages rather than ARP.',[
        ['ARP','The IPv4 process that resolves a local IPv4 address to a MAC address.'],
        ['ARP table','Temporarily stored IPv4-to-MAC mappings.'],
        ['ARP request and reply','A request is broadcast locally; the address owner replies with its MAC address.'],
        ['Neighbor Discovery (ND)','IPv6 address resolution and router discovery using ICMPv6.'],
        ['Router Solicitation and Advertisement','IPv6 messages used to ask for and announce router and addressing information.'],
        ['ARP spoofing','False ARP replies that can mislead devices about the MAC address for an IPv4 address.']
      ],'To reach a remote server, the host resolves the gateway’s IPv4 address to its MAC—not the remote server’s MAC.','ARP is local to a link. The next router creates a new frame for the next link.'),
      netTopic('Basic router setup and checks','Router interfaces need an address and must be enabled before they can forward traffic.','Give a router a meaningful name, secure access, configure its LAN interface, and verify that the interface and routes are working.',[
        ['Interface status up/up','Both the physical interface and its line protocol are operating.'],
        ['Interface description','A short note documenting what a router port connects to.'],
        ['IPv4 routing table','The router’s known IPv4 paths, viewable with show ip route.'],
        ['IPv6 routing table','The router’s known IPv6 paths, viewable with show ipv6 route.'],
        ['Switch default gateway','The gateway a Layer 2 switch uses for its own remote management traffic.']
      ],'On the router interface: assign 192.168.10.1 with mask 255.255.255.0, then use no shutdown. Check show ip interface brief for up/up.','The switch’s management gateway does not route ordinary user traffic.'),
    ]},
    {id:5,title:'IPv4 Addressing and Subnetting',source:'ITN Module 11 (your Module 5)',topics:[
      netTopic('Read an IPv4 address','An IPv4 address identifies a device on an IP network.','It has a network portion and a host portion. The subnet mask or prefix length marks the boundary between them.',[
        ['IPv4 address','A 32-bit address written as four decimal octets, such as 192.168.10.25.'],['Subnet mask','A pattern of network bits followed by host bits; 255.255.255.0 corresponds to /24.'],['Prefix length','The number of network bits, written after a slash, such as /24.'],['Network address','The address with all host bits set to zero.'],['Broadcast address','The address with all host bits set to one in an IPv4 subnet.'],['Usable host address','An address between the network and broadcast addresses that can be assigned to a host.']
      ],'For 192.168.10.25/24, the network is 192.168.10.0, the broadcast is 192.168.10.255, and 192.168.10.25 is a usable host address.','Count network bits with the prefix; the rest are host bits.'),
      netTopic('IPv4 delivery and address ranges','How a packet is delivered depends on its destination.','One-to-one delivery uses unicast; one-to-everyone on the local subnet uses broadcast; one-to-a-group uses multicast.',[
        ['Unicast','A message from one sender to one destination.'],['Broadcast','An IPv4 message sent to all devices on the local broadcast domain.'],['Multicast','A message sent to devices that joined a particular group.'],['Private IPv4 address','An address from a reserved range used inside networks and not routed on the public internet.'],['Public IPv4 address','An address that can be routed across the public internet.'],['NAT','Translation between private and public addresses, commonly at a network edge.']
      ],'A home laptop might use a private 192.168.x.x address while its router translates traffic to a public address.','Broadcast is local; routers do not forward ordinary broadcasts.'),
      netTopic('Why subnet a network','Subnetting divides a network into smaller address groups.','Smaller broadcast domains reduce unnecessary traffic and help organize users or departments. Choose a subnet size that allows the required hosts.',[
        ['Subnet','A smaller network made by borrowing bits from an address’s host portion.'],['Broadcast domain','The set of devices that receive a local broadcast.'],['/26 mask','A prefix with 26 network bits, equivalent to 255.255.255.192; each subnet has 64 total addresses.'],['Usable host count','Usually the total addresses minus network and broadcast addresses.'],['VLSM','Variable Length Subnet Masking: using different prefix lengths for subnets of different sizes.']
      ],'Splitting a /24 into /26 subnets gives four groups. One is 192.168.10.0/26, with host addresses .1 through .62 and broadcast .63.','For exam questions, identify the block size, then the network and broadcast boundaries.'),
      netTopic('Plan addresses before assigning them','An address plan keeps subnets from overlapping and leaves room for growth.','List each network’s host needs, allocate larger subnets first, and reserve space for future devices and router links.',[
        ['Address plan','A record of subnets, prefixes, gateways, and assigned ranges.'],['Subnet overlap','Two planned subnets claiming some of the same addresses.'],['Gateway address','The router interface address hosts use to reach other networks.'],['Point-to-point link','A connection between two network devices that needs very few addresses.']
      ],'If one department needs about 50 hosts and another 12, a /26 and a /28 fit those sizes better than assigning both a /26.','VLSM is about matching address space to actual need.')
    ]},
    {id:6,title:'IPv6 Addressing and ICMP',source:'[M6-MAIN] IPv6 Addressing - ICMP',topics:[
      netTopic('Why IPv6 looks different','IPv6 uses much longer addresses to provide far more address space.','Write hexadecimal groups separated by colons. You can omit leading zeros in a group and compress one run of all-zero groups with :: once.',[
        ['IPv6 address','A 128-bit address displayed as eight groups of hexadecimal digits.'],['IPv6 prefix length','The number of network bits, such as /64.'],['Leading-zero omission','Writing 00ab as ab within a group.'],['Zero compression','Replacing one consecutive run of zero groups with ::.'],['Dual stack','Running IPv4 and IPv6 together on a device or network.']
      ],'2001:0db8:0000:0000:0000:0000:0000:0001 can be written 2001:db8::1.','Use :: only once, or the number of omitted groups becomes ambiguous.'),
      netTopic('IPv6 address types','An IPv6 interface may use different addresses for different scopes.','A link-local address works only on its local link; a global unicast address can be routed more widely. IPv6 uses multicast instead of IPv4 broadcast.',[
        ['Global unicast address (GUA)','An IPv6 address intended for routable one-to-one communication.'],['Link-local address (LLA)','An IPv6 address used on the local link, commonly beginning with fe80::.'],['Multicast address','An address for a group of interested IPv6 devices.'],['Anycast address','The same address assigned to multiple devices; routing delivers traffic to the nearest one.'],['Loopback address','::1, used by a host to communicate with itself.']
      ],'A host may use a GUA for a remote website and a link-local address to communicate with its local router.','IPv6 has no broadcast address.'),
      netTopic('How IPv6 hosts get addresses','A host can build its own address or receive information from a server.','Router Advertisements announce prefix and configuration guidance. SLAAC lets a host form an address; DHCPv6 can provide addresses or other settings.',[
        ['Router Advertisement (RA)','An ICMPv6 message that announces router and prefix information.'],['SLAAC','Stateless Address Autoconfiguration; a host forms its IPv6 address using RA information.'],['DHCPv6','A service that supplies IPv6 configuration.'],['Stateless DHCPv6','Provides settings such as DNS while SLAAC forms the address.'],['Stateful DHCPv6','Assigns the address and other configuration through a server.'],['Duplicate Address Detection (DAD)','A check that an IPv6 address is not already in use on the link.']
      ],'A router advertises a /64 prefix; a laptop uses SLAAC to form its address and may ask DHCPv6 for DNS details.','The RA flags tell the host which method to use.'),
      netTopic('ICMP and neighbor discovery','ICMP messages help report errors and test connectivity.','IPv6 Neighbor Discovery uses ICMPv6 for neighbor address resolution and router discovery. Ping tests reachability; traceroute shows the path hop by hop.',[
        ['ICMP','The control protocol used for network error and diagnostic messages.'],['ICMPv6','The IPv6 form of ICMP, also used by Neighbor Discovery.'],['Neighbor Solicitation (NS)','Asks about an IPv6 neighbor or checks whether an address is already used.'],['Neighbor Advertisement (NA)','Replies with neighbor information.'],['Ping','A reachability test using echo request and echo reply.'],['Traceroute','A tool that reveals routers along the path by varying the hop limit.']
      ],'If ping to the local gateway works but ping to a remote address fails, check routing after confirming local connectivity.','A failed ping does not always prove a host is down; filtering may block replies.')
    ]},
    {id:7,title:'Transport and Application Layers',source:'[M7-MAIN] Transport Layer - Application Layer',topics:[
      netTopic('TCP and UDP serve different needs','The transport layer moves data between applications on hosts.','TCP favors ordered, reliable delivery with acknowledgments and retransmission. UDP sends with less overhead and leaves recovery to the application.',[
        ['TCP','Connection-oriented transport that numbers data, acknowledges receipt, and retransmits losses.'],['UDP','Connectionless transport with low overhead and no built-in delivery guarantee.'],['Port number','A transport-layer number identifying an application service or conversation.'],['Socket','An IP address and port number together.'],['Segmentation','Breaking application data into transport-sized pieces.']
      ],'A file download typically needs TCP reliability; a live voice call often values UDP’s lower delay.','Neither protocol makes an application automatically secure.'),
      netTopic('How TCP keeps a conversation reliable','TCP establishes a connection, tracks data, and adjusts its sending rate.','Its three-way handshake uses SYN, SYN-ACK, and ACK. Sequence numbers put data in order; acknowledgments and retransmissions recover losses.',[
        ['Three-way handshake','TCP’s SYN, SYN-ACK, ACK exchange to establish a connection.'],['Sequence number','A number that lets TCP order transmitted bytes.'],['Acknowledgment','A signal that data was received.'],['Retransmission','Sending lost or unacknowledged data again.'],['Flow control','Adjusting transmission to avoid overwhelming the receiver.'],['Window size','The amount of data a receiver can accept before more acknowledgment is needed.']
      ],'If one segment is lost, TCP can resend it and deliver the stream in order to the application.','UDP has no TCP handshake or automatic retransmission.'),
      netTopic('Clients, servers, and names','Applications use protocols to request services and exchange information.','A client sends a request; a server provides the service. DNS resolves names to IP addresses, while DHCP supplies network settings automatically.',[
        ['Client','A device or program requesting a network service.'],['Server','A device or program providing a service.'],['DNS','The naming service that maps domain names to IP addresses.'],['DHCP','A service that leases network configuration such as an address, mask, gateway, and DNS server.'],['DHCP discover-offer-request-ack','The common sequence by which an IPv4 client obtains a lease.']
      ],'You enter a site name; DNS finds its IP address before the browser connects. A new laptop can obtain its local settings from DHCP.','DNS resolves names; DHCP assigns configuration.'),
      netTopic('Common application protocols','Choose a protocol based on the service it provides.','Web, email, file sharing, and remote access use different application protocols. Know the purpose before memorizing port numbers.',[
        ['HTTP','A protocol for transferring web resources.'],['HTTPS','HTTP protected by TLS encryption.'],['SMTP','A protocol for sending email.'],['POP3 and IMAP','Protocols for retrieving email; IMAP keeps messages synchronized with a server.'],['FTP','A file transfer protocol without built-in encryption.'],['SMB','A protocol for shared files and printers.']
      ],'A browser uses HTTPS for a protected website; a mail client uses SMTP to send and IMAP to read synchronized mail.','The service function matters more than a long port table for this review.')
    ]},
    {id:8,title:'Building and Securing a Small Network',source:'[M8-MAIN] Building and Securing a Small Network',topics:[
      netTopic('Plan a small network','Start with the users, devices, applications, and expected growth.','Pick appropriate switches, routers, links, and addressing; document connections and baseline behavior so later faults are easier to locate.',[
        ['Small network topology','A diagram of devices and their physical or logical connections.'],['Device inventory','A list of hardware, addresses, software, and roles.'],['Baseline','A record of normal performance and configuration.'],['Redundancy','An alternate component or path that keeps service available after a failure.'],['Scalability','The ability to support additional users or traffic.']
      ],'For a small office, record switch ports, router interfaces, address ranges, and where important services live.','Good documentation shortens troubleshooting time.'),
      netTopic('Recognize threats and weaknesses','An attack uses a weakness to affect confidentiality, integrity, or availability.','Threats may come from malware, stolen credentials, unauthorized access, or disruption. Reduce exposure with updates, strong access control, and backups.',[
        ['Threat','A possible cause of harm to a network or its data.'],['Vulnerability','A weakness that a threat can exploit.'],['Malware','Software intended to damage, spy, or gain unauthorized access.'],['Virus','Malware that attaches to other files or programs and spreads when they run.'],['Worm','Malware that can spread through networks without attaching to another file.'],['Trojan horse','Malware disguised as useful software that a user is persuaded to run.'],['Denial of service (DoS)','An attack that makes a service unavailable by exhausting its resources.'],['Phishing','A deceptive message that tries to obtain information or trigger unsafe actions.']
      ],'A fake software installer can carry a Trojan; a flood of requests can prevent legitimate users from reaching a service.','A threat is the danger; a vulnerability is the weakness it uses.'),
      netTopic('Protect network devices','Security starts with basic device and account settings.','Change default credentials, use strong passwords and encrypted remote access, restrict privileges, update software, and disable unused services or ports.',[
        ['Device hardening','Reducing a device’s attack surface through secure configuration.'],['Least privilege','Giving an account only the access needed for its task.'],['SSH','Encrypted remote command-line access.'],['Access control list (ACL)','Rules that permit or deny selected network traffic.'],['Firewall','A device or program that filters traffic according to rules.'],['Backup','A recoverable copy of data or configuration.']
      ],'Disable an unused switch port and use SSH instead of an unencrypted remote login.','Security needs both prevention and a way to recover.'),
      netTopic('Troubleshoot step by step','Find where communication stops before changing settings.','Check physical connectivity, device/interface state, local addressing, gateway, DNS, and the destination. Compare current results with your baseline.',[
        ['Troubleshooting methodology','A repeatable process to define a problem, test likely causes, fix, and verify.'],['show ip interface brief','A quick IOS check of interface addresses and status.'],['show ip route','A check of known IPv4 routes.'],['ping','A reachability check to a target address.'],['traceroute','A check of the path toward a destination.'],['ipconfig or ifconfig','A host command for viewing local IP configuration.']
      ],'If a website name fails, first ping the gateway, then an outside IP address; if the IP works but the name does not, investigate DNS.','Change one thing at a time and verify the result.')
    ]}
  ]
};

const networkingConversionCards=[
  {module:3,term:'39',definition:'Convert binary 00100111 to decimal.',type:'conversion'},
  {module:3,term:'75',definition:'Convert hexadecimal 4B to decimal.',type:'conversion'},
  {module:3,term:'11',definition:'Convert hexadecimal B to decimal.',type:'conversion'},
  {module:3,term:'14',definition:'Convert hexadecimal E to decimal.',type:'conversion'},
  {module:3,term:'01100101',definition:'Convert decimal 101 to 8-bit binary.',type:'conversion'},
  {module:3,term:'1110',definition:'Convert hexadecimal E to 4-bit binary.',type:'conversion'},
  {module:3,term:'1001',definition:'Convert hexadecimal 9 to 4-bit binary.',type:'conversion'},
  {module:3,term:'FF',definition:'Write the largest two-digit hexadecimal value.',type:'conversion'},
  {module:3,term:'127',definition:'What is the largest unsigned value in 7 bits?',type:'conversion'},
  {module:3,term:'256',definition:'How many distinct values can 8 bits represent?',type:'conversion'},
  {module:3,term:'2A',definition:'Convert decimal 42 to hexadecimal.',type:'conversion'},
  {module:3,term:'42',definition:'Convert hexadecimal 2A to decimal.',type:'conversion'},
  {module:3,term:'A',definition:'Convert binary 1010 to one hexadecimal digit.',type:'conversion'},
  {module:3,term:'1100',definition:'Convert hexadecimal C to 4-bit binary.',type:'conversion'},
  {module:3,term:'1010',definition:'Convert decimal 10 to 4-bit binary.',type:'conversion'},
  {module:3,term:'15',definition:'Convert binary 1111 to decimal.',type:'conversion'}
];
