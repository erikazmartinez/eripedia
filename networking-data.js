const netTopic=(title,lead,explain,points,example,tip,table,model)=>({title,lead,explain,points,example,tip,table,model});
const networkingData={
  id:'networking',title:'Networking 1',short:'ITN',description:'Introduction to Networks · Modules 1–8',
  modules:[
    {id:1,title:'Networks and connected devices',source:'Networking modules 1–4 reviewer, pp. 1–4',topics:[
      netTopic('Who does what on a network','A network joins devices so they can exchange information and share services.','Think of a website visit: your phone requests a page, a web server provides it, and network devices carry the messages between them.',[
        ['Host','A device at the start or end of a network message, such as a phone, computer, printer, or server.','END DEVICES'],
        ['End device','Another name for a host: a device that sends or receives network messages.','END DEVICES'],
        ['Client','A device or program that requests a service. A browser requesting a page is a client.'],
        ['Server','A device or program that provides a service, such as web pages, email, or shared files.'],
        ['Intermediary device','A device that joins end devices and forwards or manages their traffic. Switches, routers, and access points are examples.'],
        ['Network medium','The path carrying signals: copper uses electricity, fiber uses light, and wireless uses radio waves.']
      ],'Browser → request → web server → page returned. A switch links local devices; a router connects the local network to another network.','A peer-to-peer device can be both client and server, but a dedicated server is easier to manage as a network grows.'),
      netTopic('Network size and maps','A network diagram can show either physical placement or the path communication takes.','A physical map answers “Where is it?” A logical map answers “How is it connected and addressed?” Both help when planning or fixing a network.',[
        ['LAN','Local Area Network — a network serving a limited place such as a home, office, or school.','NETWORK SCOPE'],
        ['WAN','Wide Area Network — a network that joins LANs across larger distances, often through a service provider.','NETWORK SCOPE'],
        ['Physical topology','The real locations of devices, ports, and cables.'],
        ['Logical topology','The communication paths, ports, and addressing used by devices.'],
        ['Intranet','A private network used inside an organization.','PRIVATE NETWORK ACCESS'],
        ['Extranet','A private network that gives authorized outsiders limited access.','PRIVATE NETWORK ACCESS']
      ],'A school floor plan with cable runs is physical. A diagram showing which devices share a subnet and where the router sits is logical.','A NIC connects a device to the network; a port or interface is its connection point.'),
      netTopic('A reliable network','Good networks keep working, grow, prioritize important traffic, and protect information.','If one link fails, a second route can keep traffic moving. If a video call shares a busy link with downloads, QoS can give the call suitable priority.',[
        ['Fault tolerance','The ability to keep service running when a component fails, often through redundant paths.'],
        ['Scalability','The ability to add users, devices, and services without serious loss of performance.'],
        ['Quality of Service (QoS)','Traffic management that gives suitable priority to delay-sensitive data such as voice or live video.'],
        ['Confidentiality','Only authorized people can read information.'],
        ['Integrity','Information remains accurate and is not changed without permission.','SECURITY GOALS'],
        ['Availability','Authorized users can reach data and services when needed.','SECURITY GOALS']
      ],'A second router link provides another route if the first link fails. A firewall limits unwanted traffic at the network edge.','Remember the security goals as confidentiality, integrity, and availability.'),
      netTopic('Internet access and everyday trends','Internet links, cloud services, and personal devices change how a network is used.','A home might connect through cable, DSL, cellular, satellite, or wireless broadband. One converged network may carry ordinary data, calls, and video.',[
        ['Converged network','One shared network infrastructure that carries data, voice, and video.'],
        ['Cloud computing','Applications, files, or backups supplied by internet-connected data centers.'],
        ['Bring Your Own Device (BYOD)','Use of personal phones or computers for work or school access.'],
        ['External threat','A risk from outside, such as malware, interception, or a denial-of-service attack.'],
        ['Internal threat','A risk from within, including lost devices, mistakes, or malicious insiders.']
      ],'A student joins a video class from a personal laptop while using cloud files; access controls and a firewall help protect the network.','The connection type affects coverage and speed; the same security goals still apply.'),
      netTopic('Devices, connections, and internet access','Different network devices have distinct jobs.','Name the device by what it does: switches join local devices, routers connect networks, and firewalls filter traffic.',[
        ['Switch','An intermediary device that connects devices on a local network and forwards frames toward the correct port.','INTERMEDIARY DEVICES'],
        ['Router','An intermediary device that connects different networks and selects a path for packets.','INTERMEDIARY DEVICES'],
        ['Wireless access point','An intermediary device that lets wireless devices join a wired network.','INTERMEDIARY DEVICES'],
        ['Firewall','A device or program that filters traffic according to security rules.','INTERMEDIARY DEVICES'],
        ['NIC','Network Interface Card — the hardware that connects a device to a network.','DEVICE CONNECTIONS'],
        ['Physical port','The socket where a cable connects.','DEVICE CONNECTIONS'],
        ['Interface','The point where a device connects and communicates with a network.','DEVICE CONNECTIONS'],
        ['DSL','Digital Subscriber Line — broadband internet access through a telephone line.','INTERNET ACCESS'],
        ['Cellular access','Internet access through a mobile-phone network.','INTERNET ACCESS'],
        ['Satellite access','Internet access through satellites, useful where wired service is unavailable.','INTERNET ACCESS'],
        ['Cable access','Broadband internet access through a cable provider.','INTERNET ACCESS']
      ],'A phone joins a wireless access point; a switch connects devices on the local network; a router connects that network to the provider.','A topology diagram uses symbols to show devices and their connections.'),
    ]},
    {id:2,title:'IOS, protocols, and models',source:'Networking modules 1–4 reviewer, pp. 4–8',topics:[
      netTopic('Working in Cisco IOS','IOS uses command modes so you can inspect a device or change its configuration.','Read the prompt before typing. The prompt ending tells you whether you are viewing information, managing the device, or editing a setting.',[
        ['Shell','The operating system part that accepts user commands and requests.','OPERATING SYSTEM PARTS'],
        ['Kernel','The operating system core that manages hardware resources and connects software to hardware.','OPERATING SYSTEM PARTS'],
        ['Hardware','The physical electronics and components controlled by the operating system.','PHYSICAL COMPUTER'],
        ['CLI','Command-Line Interface — a way to control a device by typing commands.','USER INTERFACES'],
        ['GUI','Graphical User Interface — a way to control a device through windows, icons, and menus.','USER INTERFACES'],
        ['User EXEC','User EXEC mode — the limited monitoring mode marked by a > prompt. EXEC means the command execution environment.','CISCO IOS COMMAND MODES'],
        ['Privileged EXEC','Privileged EXEC mode — the management mode marked by a # prompt.','CISCO IOS COMMAND MODES'],
        ['Global configuration mode','The mode for device-wide settings, marked by (config)#.','CISCO IOS COMMAND MODES'],
        ['Interface configuration mode','The mode for changing one interface, marked by (config-if)#.','CISCO IOS COMMAND MODES'],
        ['Line configuration mode','The mode for changing console or virtual terminal access, marked by (config-line)#.','CISCO IOS COMMAND MODES'],
        ['Cisco IOS','Cisco Internetwork Operating System — the software used to operate and configure Cisco network devices.','NETWORK DEVICE SOFTWARE']
      ],'Switch> enable → Switch# configure terminal → Switch(config)#. Use exit to go back one level; end returns to privileged EXEC.','Use ? for context help and Tab to complete a unique command.'),
      netTopic('Save and protect device settings','A setting changed in the running configuration is active now, but needs saving to survive a restart.','Remote management should use SSH. A strong enable secret and protected console or VTY access help keep unauthorized people out.',[
        ['Running configuration','The current configuration in volatile Random Access Memory (RAM); it takes effect immediately but disappears after power loss.','CONFIGURATION FILES'],
        ['Startup configuration','The saved configuration in Nonvolatile Random Access Memory (NVRAM), loaded when the device starts.','CONFIGURATION FILES'],
        ['SSH','Secure Shell — encrypted remote command-line access.','REMOTE ACCESS'],
        ['Telnet','Unencrypted remote access; credentials and commands can travel as readable text.'],
        ['VTY line','Virtual Teletype line — a virtual terminal line used for remote management sessions.','REMOTE ACCESS']
      ],'Set a hostname and strong access credentials, then run copy running-config startup-config. Test remote access with SSH, not Telnet.','Password encryption hides many displayed passwords; it does not make weak passwords strong.'),
      netTopic('Addresses and switch management','An IP address identifies a network interface; a mask and gateway tell it where to send traffic.','Hosts can be configured manually or receive settings from DHCP. A Layer 2 switch uses a virtual interface for its own remote management.',[
        ['IP address','Internet Protocol address — a logical address assigned to a network interface.'],
        ['Subnet mask','A value that separates the network portion of an IPv4 address from the host portion.'],
        ['Default gateway','The router address a host uses for destinations outside its local network.'],
        ['DHCP','Dynamic Host Configuration Protocol — a service that automatically supplies IP configuration to clients.'],
        ['SVI','Switch Virtual Interface — a virtual switch interface that can hold a management IP address.']
      ],'A host with 192.168.1.10, mask 255.255.255.0, and gateway 192.168.1.1 can reach its LAN and send remote traffic to the gateway.','A switch SVI is for managing the switch; it is not a physical user port.'),
      netTopic('Protocols and layered communication','Different protocols handle different jobs, and layers keep those jobs understandable.','For a web page, HTTP describes the request, TCP manages reliable transport, IP routes packets, and Ethernet delivers frames on the local link.',[
        ['Protocol','An agreed set of rules for message format, timing, and meaning.'],
        ['Protocol suite','A group of protocols designed to work together; the Transmission Control Protocol/Internet Protocol (TCP/IP) suite is used by the internet.'],
        ['OSI model','Open Systems Interconnection model — a seven-layer reference model, from physical signals up to application services.'],
        ['TCP/IP model','Transmission Control Protocol/Internet Protocol model — a practical four-layer model: network access, internet, transport, and application.'],
        ['Encapsulation','Adding each layer’s control information as data travels toward the medium.'],
        ['Segmentation','Breaking a large message into smaller parts for transport.']
      ],'Sending: data → segment → packet → frame → bits. Receiving removes those layers in reverse.','OSI network is for IP routing; data link is for local frames; physical carries the bits.',null,{
        layers:[
          [1,'Physical','Sends bits as physical signals.'],[2,'Data Link','Creates frames and handles local delivery.'],[3,'Network','Uses logical addresses and routes packets.'],[4,'Transport','Segments, transfers, and reassembles data.'],[5,'Session','Manages conversations or sessions.'],[6,'Presentation','Represents, translates, encrypts, or compresses data.'],[7,'Application','Provides network services used by applications.']
        ],
        tcpIp:[
          ['Network Access','Local media, frames, and signals','OSI 1–2'],['Internet','Addressing and routing','OSI 3'],['Transport','End-to-end communication','OSI 4'],['Application','User data, presentation, and sessions','OSI 5–7']
        ]
      }),
      netTopic('Cisco commands and saved settings','Cisco Internetwork Operating System (IOS) commands are easier to follow when you know the mode and the command pieces.','A keyword is built into the command; an argument is a value you supply. Configuration changes take effect now in running memory and must be saved for the next startup.',[
        ['Keyword','A word already defined by IOS, such as ping.','COMMAND PARTS'],
        ['Argument','A value supplied with a command, such as an IP address after ping.','COMMAND PARTS'],
        ['Context-sensitive help','A question mark (?) shows valid commands or options at the current prompt.','COMMAND HELP'],
        ['Tab completion','Tab completes a command when its remaining letters identify one command.','COMMAND HELP'],
        ['enable','Moves from User EXEC to Privileged EXEC mode.','MODE CHANGES'],
        ['configure terminal','Moves from Privileged EXEC to global configuration mode.','MODE CHANGES'],
        ['exit','Moves back one configuration level.','MODE CHANGES'],
        ['end','Returns from configuration modes to Privileged EXEC.','MODE CHANGES'],
        ['Message of the day banner','A notice displayed to users before access to the device.','ACCESS SETTINGS'],
        ['copy running-config startup-config','Saves the current configuration so it can be loaded after a restart.','SAVING SETTINGS']
      ],'In ping 10.10.10.5, ping is the keyword and 10.10.10.5 is the address argument.','Read the prompt first; a changed running configuration is lost on restart until saved.'),
      netTopic('Protocols and data units in one web request','Several protocols cooperate as data travels from an application to the network medium.','Each lower layer adds the information needed for its job. The receiver removes that information in reverse order.',[
        ['HTTP','Hypertext Transfer Protocol — specifies web requests and responses.','WEB REQUEST PROTOCOLS'],
        ['TCP','Transmission Control Protocol — manages reliable transport between applications.','WEB REQUEST PROTOCOLS'],
        ['IP','Internet Protocol — addresses and forwards packets across networks.','WEB REQUEST PROTOCOLS'],
        ['Ethernet','A local networking technology that carries frames across a link.','WEB REQUEST PROTOCOLS'],
        ['PDU','Protocol Data Unit — the name for a layer’s unit of data.','DATA UNITS'],
        ['Data','The application’s information before lower-layer wrapping.','DATA UNITS'],
        ['Segment','A transport-layer unit, commonly used for TCP.','DATA UNITS'],
        ['Packet','A network-layer unit carrying IP addressing.','DATA UNITS'],
        ['Frame','A data-link unit for one local link.','DATA UNITS'],
        ['Bits','The 0s and 1s sent as signals by the physical layer.','DATA UNITS'],
        ['De-encapsulation','Removing the control information of each layer as received data moves upward.','RECEIVING']
      ],'A browser creates data; TCP makes segments; IP makes packets; Ethernet makes frames; the physical layer sends bits.','The application uses the final data after the receiving host de-encapsulates it.'),
      netTopic('Protocol jobs and standards groups','Protocols define how devices exchange messages; standards groups help different vendors follow common rules.','A single protocol may provide addressing, sequencing, flow control, or error detection. Different organizations publish standards for internet protocols, hardware, cabling, and telecommunications.',[
        ['Addressing','Identifying the sender and intended receiver of a message.','PROTOCOL FUNCTIONS'],
        ['Sequencing','Numbering information so it can be put back in order.','PROTOCOL FUNCTIONS'],
        ['Flow control','Adjusting the sending rate so a receiver is not overwhelmed.','PROTOCOL FUNCTIONS'],
        ['Error detection','Checking whether transmitted information was damaged.','PROTOCOL FUNCTIONS'],
        ['IETF','Internet Engineering Task Force — develops and maintains many internet and TCP/IP standards.','STANDARDS GROUPS'],
        ['IAB','Internet Architecture Board — helps manage internet architecture and standards.','STANDARDS GROUPS'],
        ['ICANN','Internet Corporation for Assigned Names and Numbers — coordinates domain names and identifiers.','STANDARDS GROUPS'],
        ['IANA','Internet Assigned Numbers Authority — coordinates address and protocol identifier allocation.','STANDARDS GROUPS'],
        ['IEEE','Institute of Electrical and Electronics Engineers — develops electrical, electronics, and networking standards.','STANDARDS GROUPS'],
        ['TIA','Telecommunications Industry Association — develops cabling and connector standards.','STANDARDS GROUPS'],
        ['EIA','Electronic Industries Alliance — works on cabling, connector, and communications standards.','STANDARDS GROUPS'],
        ['ITU-T','International Telecommunication Union Telecommunication Standardization Sector — develops telecommunications standards.','STANDARDS GROUPS']
      ],'Ethernet links follow networking standards; internet protocols follow standards so unlike devices can still communicate.','For exam review, first connect each organization to its general job; detailed standard numbers are less useful here.'),
    ]},
    {id:3,title:'Signals, Ethernet, and switching',source:'Networking modules 1–4 reviewer, pp. 8–12',topics:[
      netTopic('Signals and media','The physical layer turns bits into signals that copper, fiber, or wireless media can carry.','The best medium depends on distance, interference, speed, environment, and cost. A fast link can still feel slow if delay or overhead is high.',[
        ['Bandwidth','The theoretical carrying capacity of a link.'],
        ['Latency','The time a message takes to travel from one point to another.'],
        ['Throughput','The actual rate of bits transferred over a link.','PERFORMANCE MEASURES'],
        ['Goodput','The rate of useful application data after overhead is removed.','PERFORMANCE MEASURES'],
        ['Attenuation','Signal weakening over distance.'],
        ['EMI','Electromagnetic Interference — electrical noise that distorts a signal.','SIGNAL PROBLEMS'],
        ['RFI','Radio Frequency Interference — radio noise that distorts a signal.','SIGNAL PROBLEMS'],
        ['Crosstalk','Unwanted signal leakage from one wire into a nearby wire.','SIGNAL PROBLEMS'],
        ['UTP','Unshielded Twisted Pair — common copper cable with twisted wire pairs.','NETWORK MEDIA'],
        ['STP','Shielded Twisted Pair — twisted-pair copper with shielding against interference.','NETWORK MEDIA'],
        ['Fiber-optic cable','A medium that carries light and resists electrical interference.','NETWORK MEDIA']
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
        ['MAC address','Media Access Control address — a 48-bit local Ethernet address that identifies a network interface.'],
        ['LLC sublayer','Logical Link Control sublayer — the data-link part connecting network-layer software to link hardware.'],
        ['MAC sublayer','Media Access Control sublayer — the data-link part handling framing, local addresses, and access to the medium.'],
        ['Half-duplex','Communication in one direction at a time.','DUPLEX MODES'],
        ['Full-duplex','Communication in both directions at the same time.','DUPLEX MODES'],
        ['Frame Check Sequence (FCS)','The frame trailer value used to detect a damaged frame.']
      ],'An Ethernet frame uses the next device’s MAC address. When a router forwards the packet onto another link, it builds a new frame.','The IP destination stays the final host; the frame destination changes at each routed link.'),
      netTopic('How a switch forwards frames','A switch learns where devices are by watching source MAC addresses on incoming frames.','For a known destination, the switch sends the frame only to the matching port. For an unknown destination or a broadcast, it floods the frame except back to the incoming port.',[
        ['MAC address table','A switch’s record of learned Media Access Control (MAC) addresses and their ports.'],
        ['Known unicast','A frame whose destination MAC is in the table, so it can be forwarded directly.'],
        ['Unknown unicast','A frame whose destination MAC is not yet known, so it is flooded locally.'],
        ['Store-and-forward','The switch receives and checks a whole frame before forwarding.'],
        ['Cut-through','The switch starts forwarding after reading the destination, with lower delay but possible damaged frames.'],
        ['Duplex mismatch','Different duplex settings at the ends of a link, causing poor performance.']
      ],'A frame from Ana enters port 2: the switch learns Ana’s MAC on port 2. A later reply to Ana goes directly to that port.','Routers stop ordinary Layer 2 broadcasts; switches flood them within the local broadcast domain.'),
      netTopic('Ethernet frame and switch details','Ethernet frames carry one local hop of a packet.','The frame has a header for addressing and type, data for the packet, and a trailer for error detection. A switch learns sources and chooses how to forward frames.',[
        ['Frame header','The opening fields that identify source and destination MAC addresses and other control information.','FRAME PARTS'],
        ['Frame data','The network-layer packet being carried.','FRAME PARTS'],
        ['Frame trailer','The ending field used to detect errors in the frame.','FRAME PARTS'],
        ['FCS','Frame Check Sequence — the frame trailer value used to detect damage.','FRAME PARTS'],
        ['MAC address length','An Ethernet Media Access Control (MAC) address is 48 bits, written as 12 hexadecimal digits.','ETHERNET ADDRESSING'],
        ['Store-and-forward switching','The switch receives and checks the entire frame before forwarding it.','SWITCH FORWARDING'],
        ['Fast-forward switching','A cut-through method that starts forwarding as soon as the destination MAC is known.','SWITCH FORWARDING'],
        ['Fragment-free switching','A cut-through method that checks the first 64 bytes before forwarding.','SWITCH FORWARDING'],
        ['Port-based buffering','Each switch port uses its own queue while waiting to forward frames.','FRAME BUFFERING'],
        ['Shared-memory buffering','Switch ports share a common pool of frame memory.','FRAME BUFFERING'],
        ['Autonegotiation','Link devices automatically choose compatible speed and duplex settings.','LINK SETTINGS']
      ],'A switch may buffer a frame if the destination port is busy. With store-and-forward, it checks the whole frame before sending it onward.','A MAC address identifies a local interface; an IP address identifies the end-to-end network destination.'),
    ]},
    {id:4,title:'IP routing and address resolution',source:'Networking modules 1–4 reviewer, pp. 13–18',topics:[
      netTopic('What the network layer does','IP addresses devices and routes packets between networks.','IP is connectionless and best effort: it sends a packet without first establishing a session, and it does not itself promise delivery or retransmission.',[
        ['Packet','The network-layer unit carried between networks.'],
        ['Connectionless IP','Internet Protocol (IP) sends packets without first setting up a dedicated connection.'],
        ['Best-effort delivery','IP attempts delivery but does not guarantee arrival, order, or retransmission.'],
        ['Media independence','IP can travel over copper, fiber, or wireless links.'],
        ['Time to Live (TTL)','An IPv4 field reduced at each router; the packet is dropped when it reaches zero.','LOOP PREVENTION FIELDS'],
        ['Hop Limit','The IPv6 field reduced at each router; the packet is dropped when it reaches zero.','LOOP PREVENTION FIELDS'],
        ['MTU','Maximum Transmission Unit — the largest packet or frame size supported on a particular link.']
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
        ['ARP','Address Resolution Protocol — the IPv4 process that resolves a local IPv4 address to a Media Access Control (MAC) address.'],
        ['ARP table','Address Resolution Protocol table — temporarily stored IPv4-to-MAC mappings.'],
        ['ARP request','A local broadcast asking which device owns an IPv4 address.','ARP MESSAGES'],
        ['ARP reply','The address owner’s response containing its MAC address.','ARP MESSAGES'],
        ['Neighbor Discovery (ND)','An IPv6 process for address resolution and router discovery using Internet Control Message Protocol version 6 (ICMPv6).'],
        ['Router Solicitation (RS)','An IPv6 host message asking routers for addressing information.','NEIGHBOR DISCOVERY MESSAGES'],
        ['Router Advertisement (RA)','An IPv6 router message announcing prefix and addressing information.','NEIGHBOR DISCOVERY MESSAGES'],
        ['ARP spoofing','False ARP replies that can mislead devices about the MAC address for an IPv4 address.']
      ],'To reach a remote server, the host resolves the gateway’s IPv4 address to its MAC—not the remote server’s MAC.','ARP is local to a link. The next router creates a new frame for the next link.'),
      netTopic('Basic router setup and checks','Router interfaces need an address and must be enabled before they can forward traffic.','Give a router a meaningful name, secure access, configure its LAN interface, and verify that the interface and routes are working.',[
        ['Interface status up/up','Both the physical interface and its line protocol are operating.'],
        ['Interface description','A short note documenting what a router port connects to.'],
        ['IPv4 routing table','The router’s known IPv4 paths, viewable with show ip route.'],
        ['IPv6 routing table','The router’s known IPv6 paths, viewable with show ipv6 route.'],
        ['Switch default gateway','The gateway a Layer 2 switch uses for its own remote management traffic.']
      ],'On the router interface: assign 192.168.10.1 with mask 255.255.255.0, then use no shutdown. Check show ip interface brief for up/up.','The switch’s management gateway does not route ordinary user traffic.'),
      netTopic('Packet headers and router checks','IPv4 and IPv6 packet headers carry the information routers need to forward packets.','The source and destination IP addresses identify the endpoints. The IPv4 Time to Live (TTL) and IPv6 Hop Limit stop packets from looping forever.',[
        ['IPv4 header','The control information before an IPv4 packet’s data, including source and destination addresses and Time to Live.','PACKET HEADERS'],
        ['IPv6 base header','A 40-byte header with source and destination addresses, payload length, next header, and Hop Limit.','PACKET HEADERS'],
        ['Fragmentation','Splitting an oversized packet for a smaller link; IPv4 routers may fragment, while IPv6 routers do not.','PACKET SIZE'],
        ['no shutdown','The Cisco IOS interface command that activates an interface.','ROUTER SETUP'],
        ['show ip interface brief','A quick view of IPv4 interface addresses and whether interfaces are up.','ROUTER CHECKS'],
        ['show ip route','Displays known IPv4 routes.','ROUTER CHECKS'],
        ['show ipv6 route','Displays known IPv6 routes.','ROUTER CHECKS']
      ],'If a router interface is administratively down, enter interface configuration mode and use no shutdown; then verify its state with show ip interface brief.','A route selects the next path; the router replaces the local frame for each new link.'),
    ]},
    {id:5,title:'IPv4 Addressing and Subnetting',source:'ITN Module 11 (your Module 5)',topics:[
      netTopic('Read an IPv4 address','An IPv4 address identifies a device on an IP network.','It has a network portion and a host portion. The subnet mask or prefix length marks the boundary between them.',[
        ['IPv4 address','Internet Protocol version 4 address — a 32-bit address written as four decimal octets, such as 192.168.10.25.'],['Subnet mask','A pattern of network bits followed by host bits; 255.255.255.0 corresponds to /24.'],['Prefix length','The number of network bits, written after a slash, such as /24.'],['Network address','The address with all host bits set to zero.'],['Broadcast address','The address with all host bits set to one in an IPv4 subnet.'],['Usable host address','An address between the network and broadcast addresses that can be assigned to a host.']
      ],'For 192.168.10.25/24, the network is 192.168.10.0, the broadcast is 192.168.10.255, and 192.168.10.25 is a usable host address.','Count network bits with the prefix; the rest are host bits.',{
        title:'Prefix length quick reference',
        note:'In the binary mask, each 1 belongs to the network portion; each 0 belongs to the host portion. The prefix counts the 1s.',
        rows:[
          ['/8','255.0.0.0','11111111.00000000.00000000.00000000'],
          ['/16','255.255.0.0','11111111.11111111.00000000.00000000'],
          ['/24','255.255.255.0','11111111.11111111.11111111.00000000'],
          ['/25','255.255.255.128','11111111.11111111.11111111.10000000'],
          ['/26','255.255.255.192','11111111.11111111.11111111.11000000'],
          ['/27','255.255.255.224','11111111.11111111.11111111.11100000'],
          ['/28','255.255.255.240','11111111.11111111.11111111.11110000'],
          ['/29','255.255.255.248','11111111.11111111.11111111.11111000'],
          ['/30','255.255.255.252','11111111.11111111.11111111.11111100']
        ]
      }),
      netTopic('IPv4 delivery and address ranges','How a packet is delivered depends on its destination.','One-to-one delivery uses unicast; one-to-everyone on the local subnet uses broadcast; one-to-a-group uses multicast.',[
        ['Unicast','A message from one sender to one destination.'],['Broadcast','An IPv4 message sent to all devices on the local broadcast domain.'],['Multicast','A message sent to devices that joined a particular group.'],['Private IPv4 address','An address from a reserved range used inside networks and not routed on the public internet.'],['Public IPv4 address','An address that can be routed across the public internet.'],['NAT','Network Address Translation — translation between private and public addresses, commonly at a network edge.']
      ],'A home laptop might use a private 192.168.x.x address while its router translates traffic to a public address.','Broadcast is local; routers do not forward ordinary broadcasts.'),
      netTopic('Why subnet a network','Subnetting divides a network into smaller address groups.','Smaller broadcast domains reduce unnecessary traffic and help organize users or departments. Choose a subnet size that allows the required hosts.',[
        ['Subnet','A smaller network made by borrowing bits from an address’s host portion.'],['Broadcast domain','The set of devices that receive a local broadcast.'],['/26 mask','A prefix with 26 network bits, equivalent to 255.255.255.192; each subnet has 64 total addresses.'],['Usable host count','Usually the total addresses minus network and broadcast addresses.'],['VLSM','Variable Length Subnet Masking: using different prefix lengths for subnets of different sizes.']
      ],'Splitting a /24 into /26 subnets gives four groups. One is 192.168.10.0/26, with host addresses .1 through .62 and broadcast .63.','For exam questions, identify the block size, then the network and broadcast boundaries.'),
      netTopic('Plan addresses before assigning them','An address plan keeps subnets from overlapping and leaves room for growth.','List each network’s host needs, allocate larger subnets first, and reserve space for future devices and router links.',[
        ['Address plan','A record of subnets, prefixes, gateways, and assigned ranges.'],['Subnet overlap','Two planned subnets claiming some of the same addresses.'],['Gateway address','The router interface address hosts use to reach other networks.'],['Point-to-point link','A connection between two network devices that needs very few addresses.']
      ],'If one department needs about 50 hosts and another 12, a /26 and a /28 fit those sizes better than assigning both a /26.','VLSM is about matching address space to actual need.'),
      netTopic('Special IPv4 addresses and assignment','Some IPv4 addresses have a special purpose and should be recognized quickly.','An address can be public, private, loopback, or link-local. Address allocation also follows a hierarchy from global authorities to service providers.',[
        ['Loopback address','An address in 127.0.0.0/8, commonly 127.0.0.1, used to test the local TCP/IP stack.','SPECIAL-USE ADDRESSES'],
        ['Link-local IPv4 address','A 169.254.0.0/16 address that a host may assign to itself when it cannot obtain a DHCP lease.','SPECIAL-USE ADDRESSES'],
        ['APIPA','Automatic Private IP Addressing — Windows automatic assignment of an IPv4 link-local address.','SPECIAL-USE ADDRESSES'],
        ['Classful addressing','The older A, B, and C class system with fixed network sizes; it wasted IPv4 addresses.','ADDRESS ALLOCATION'],
        ['IANA','Internet Assigned Numbers Authority — manages global IP address block allocation.','ADDRESS ALLOCATION'],
        ['RIR','Regional Internet Registry — receives address blocks and allocates them to providers in its region.','ADDRESS ALLOCATION'],
        ['ISP','Internet Service Provider — provides internet connectivity and address blocks to customers.','ADDRESS ALLOCATION']
      ],'If a Windows computer shows a 169.254.x.x address, check whether it can reach a DHCP server. Use 127.0.0.1 to test its local network stack.','A link-local address helps local communication but does not replace a valid network address and gateway.'),
      netTopic('Calculate an IPv4 subnet','A subnet mask divides the 32-bit IPv4 address into network and host bits.','Use the prefix to count network bits, find the subnet boundary, and identify the network address, usable hosts, and broadcast address.',[
        ['Logical AND','A bit comparison used to find the network address: only 1 AND 1 gives 1.','FINDING THE NETWORK'],
        ['Borrowed bits','Host bits turned into network bits to create more subnets.','SUBNET SIZE'],
        ['Block size','The number of addresses in one subnet before the next subnet begins.','SUBNET SIZE'],
        ['Host bits','The bits after the prefix that identify addresses within the subnet.','SUBNET SIZE'],
        ['Network address','The first address in a subnet, with all host bits zero.','ADDRESS BOUNDARIES'],
        ['Broadcast address','The last IPv4 address in a subnet, with all host bits one.','ADDRESS BOUNDARIES'],
        ['Usable host count','For ordinary IPv4 subnets, 2 raised to the host-bit count, minus the network and broadcast addresses.','ADDRESS BOUNDARIES'],
        ['Largest-first subnet planning','Assign the largest host group first, then split the remaining address space for smaller groups.','ADDRESS PLANNING']
      ],'A /26 leaves 6 host bits, so each subnet has 64 addresses and usually 62 usable host addresses. The first 192.168.10.0/26 subnet has usable .1 through .62 and broadcast .63.','When planning with VLSM, assign the largest host group first and avoid overlapping ranges.')
    ]},
    {id:6,title:'IPv6 Addressing and ICMP',source:'[M6-MAIN] IPv6 Addressing - ICMP',topics:[
      netTopic('Why IPv6 looks different','IPv6 uses much longer addresses to provide far more address space.','Write hexadecimal groups separated by colons. You can omit leading zeros in a group and compress one run of all-zero groups with :: once.',[
        ['IPv6 address','Internet Protocol version 6 address — a 128-bit address displayed as eight groups of hexadecimal digits.'],['IPv6 prefix length','The number of network bits, such as /64.'],['Leading-zero omission','Writing 00ab as ab within a group.'],['Zero compression','Replacing one consecutive run of zero groups with ::.'],['Dual stack','Running IPv4 and IPv6 together on a device or network.']
      ],'2001:0db8:0000:0000:0000:0000:0000:0001 can be written 2001:db8::1.','Use :: only once, or the number of omitted groups becomes ambiguous.'),
      netTopic('IPv6 address types','An IPv6 interface may use different addresses for different scopes.','A link-local address works only on its local link; a global unicast address can be routed more widely. IPv6 uses multicast instead of IPv4 broadcast.',[
        ['Global unicast address (GUA)','An IPv6 address intended for routable one-to-one communication.'],['Link-local address (LLA)','An IPv6 address used on the local link, commonly beginning with fe80::.'],['Multicast address','An address for a group of interested IPv6 devices.'],['Anycast address','The same address assigned to multiple devices; routing delivers traffic to the nearest one.'],['Loopback address','::1, used by a host to communicate with itself.']
      ],'A host may use a GUA for a remote website and a link-local address to communicate with its local router.','IPv6 has no broadcast address.'),
      netTopic('How IPv6 hosts get addresses','A host can build its own address or receive information from a server.','Router Advertisements announce prefix and configuration guidance. SLAAC lets a host form an address; DHCPv6 can provide addresses or other settings.',[
        ['Router Advertisement (RA)','An Internet Control Message Protocol version 6 (ICMPv6) message that announces router and prefix information.'],['SLAAC','Stateless Address Autoconfiguration — a host forms its IPv6 address using RA information.'],['DHCPv6','Dynamic Host Configuration Protocol version 6 — a service that supplies IPv6 configuration.'],['Stateless DHCPv6','Dynamic Host Configuration Protocol version 6 without address assignment — provides settings such as DNS while SLAAC forms the address.'],['Stateful DHCPv6','Dynamic Host Configuration Protocol version 6 with address assignment — assigns the address and other configuration through a server.'],['Duplicate Address Detection (DAD)','A check that an IPv6 address is not already in use on the link.']
      ],'A router advertises a /64 prefix; a laptop uses SLAAC to form its address and may ask DHCPv6 for DNS details.','The RA flags tell the host which method to use.'),
      netTopic('ICMP and neighbor discovery','ICMP messages help report errors and test connectivity.','IPv6 Neighbor Discovery uses ICMPv6 for neighbor address resolution and router discovery. Ping tests reachability; traceroute shows the path hop by hop.',[
        ['ICMP','Internet Control Message Protocol — the control protocol used for network error and diagnostic messages.'],['ICMPv6','Internet Control Message Protocol version 6 — the IPv6 form of ICMP, also used by Neighbor Discovery.'],['Neighbor Solicitation (NS)','Asks about an IPv6 neighbor or checks whether an address is already used.'],['Neighbor Advertisement (NA)','Replies with neighbor information.'],['Ping','A reachability test using echo request and echo reply.'],['Traceroute','A tool that reveals routers along the path by varying the hop limit.']
      ],'If ping to the local gateway works but ping to a remote address fails, check routing after confirming local connectivity.','A failed ping does not always prove a host is down; filtering may block replies.'),
      netTopic('IPv6 structure and address setup','An IPv6 address has a network portion and an interface portion.','A global address can include a provider-assigned routing prefix, a subnet ID, and an interface ID. A device can receive an address automatically or have one configured manually.',[
        ['Global routing prefix','The part of a global unicast address assigned to a customer or site by a provider.','ADDRESS PARTS'],
        ['Subnet ID','The part of a global unicast address used to create separate IPv6 subnets.','ADDRESS PARTS'],
        ['Interface ID','The part identifying an interface within an IPv6 subnet.','ADDRESS PARTS'],
        ['Unique local address','An IPv6 address intended for local use within a site or limited set of sites, not for direct internet routing.','ADDRESS SCOPE'],
        ['Static IPv6 configuration','Entering an address and prefix manually on an interface.','ADDRESS METHODS'],
        ['EUI-64','Extended Unique Identifier 64-bit process — derives an interface ID from a 48-bit Ethernet MAC address.','INTERFACE ID METHODS'],
        ['Random interface ID','An interface ID generated without directly using the device MAC address.','INTERFACE ID METHODS'],
        ['Tunneling','A transition method that carries IPv6 traffic across an IPv4 network.','IPv4 TO IPv6 TRANSITION'],
        ['Translation','A transition method that lets IPv4-only and IPv6-only systems communicate.','IPv4 TO IPv6 TRANSITION']
      ],'With a /48 global routing prefix, the subnet ID can identify individual /64 networks; the interface ID identifies a device within one of them.','Every IPv6-enabled interface needs a link-local address for communication on its local link.'),
      netTopic('IPv6 multicast and ICMP messages','IPv6 uses multicast groups for selected receivers and ICMPv6 for important control messages.','Neighbor Discovery uses router and neighbor messages to discover routers, learn link addresses, and check for duplicate addresses.',[
        ['IPv6 multicast','One packet sent to a selected group of IPv6 devices; multicast addresses begin with ff00::/8.','MULTICAST GROUPS'],
        ['All-nodes multicast','The ff02::1 group joined by IPv6-enabled devices on a local link.','MULTICAST GROUPS'],
        ['All-routers multicast','The ff02::2 group joined by IPv6 routers on a local link.','MULTICAST GROUPS'],
        ['Solicited-node multicast','A group derived from a device’s IPv6 address and used by Neighbor Discovery.','MULTICAST GROUPS'],
        ['Echo request','An ICMP message asking a destination to respond; ping sends it.','ICMP DIAGNOSTICS'],
        ['Echo reply','The destination’s response to an echo request.','ICMP DIAGNOSTICS'],
        ['Destination unreachable','An ICMP message reporting that a destination or service could not be reached.','ICMP DIAGNOSTICS'],
        ['Time exceeded','An ICMP message sent when an IPv4 Time to Live or IPv6 Hop Limit reaches zero.','ICMP DIAGNOSTICS'],
        ['DAD','Duplicate Address Detection — an IPv6 check using Neighbor Solicitation to see whether an address is already in use.','NEIGHBOR DISCOVERY']
      ],'A host sends a Router Solicitation; a router responds with a Router Advertisement. The host may then check its new address using Duplicate Address Detection.','Ping uses echo messages; traceroute uses expiring hop limits to reveal the path.'),
    ]},
    {id:7,title:'Transport and Application Layers',source:'[M7-MAIN] Transport Layer - Application Layer',topics:[
      netTopic('TCP and UDP serve different needs','The transport layer moves data between applications on hosts.','TCP favors ordered, reliable delivery with acknowledgments and retransmission. UDP sends with less overhead and leaves recovery to the application.',[
        ['TCP','Transmission Control Protocol — connection-oriented transport that numbers data, acknowledges receipt, and retransmits losses.'],['UDP','User Datagram Protocol — connectionless transport with low overhead and no built-in delivery guarantee.'],['Port number','A transport-layer number identifying an application service or conversation.'],['Socket','An Internet Protocol (IP) address and port number together.'],['Segmentation','Breaking application data into transport-sized pieces.']
      ],'A file download typically needs TCP reliability; a live voice call often values UDP’s lower delay.','Neither protocol makes an application automatically secure.'),
      netTopic('How TCP keeps a conversation reliable','TCP establishes a connection, tracks data, and adjusts its sending rate.','Its three-way handshake uses SYN, SYN-ACK, and ACK. Sequence numbers put data in order; acknowledgments and retransmissions recover losses.',[
        ['Three-way handshake','The TCP connection exchange: SYN request, SYN-ACK response, then ACK confirmation.'],['SYN','Synchronize sequence numbers — the TCP flag used to begin a connection.','TCP CONTROL FLAGS'],['ACK','Acknowledgment — the TCP flag confirming received information.','TCP CONTROL FLAGS'],['FIN','Finish or no more data — the TCP flag used when ending a session.','TCP CONTROL FLAGS'],['Sequence number','A number that lets TCP order transmitted bytes.'],['Acknowledgment','A signal that data was received.'],['Retransmission','Sending lost or unacknowledged data again.'],['Flow control','Adjusting transmission to avoid overwhelming the receiver.'],['Window size','The amount of data a receiver can accept before more acknowledgment is needed.']
      ],'If one segment is lost, TCP can resend it and deliver the stream in order to the application.','UDP has no TCP handshake or automatic retransmission.'),
      netTopic('Clients, servers, and names','Applications use protocols to request services and exchange information.','A client sends a request; a server provides the service. DNS resolves names to IP addresses, while DHCP supplies network settings automatically.',[
        ['Client','A device or program requesting a network service.'],['Server','A device or program providing a service.'],['DNS','Domain Name System — the naming service that maps domain names to IP addresses.'],['DHCP','Dynamic Host Configuration Protocol — a service that leases network configuration such as an address, mask, gateway, and DNS server.'],['Discover','The first DHCP message: the client looks for a DHCP server.','DHCP LEASE STEPS'],['Offer','A DHCP server proposes an address and settings.','DHCP LEASE STEPS'],['Request','The client asks to use the offered address.','DHCP LEASE STEPS'],['Acknowledgment','The server confirms the lease.','DHCP LEASE STEPS']
      ],'You enter a site name; DNS finds its IP address before the browser connects. A new laptop can obtain its local settings from DHCP.','DNS resolves names; DHCP assigns configuration.'),
      netTopic('Common application protocols','Choose a protocol based on the service it provides.','Web, email, file sharing, and remote access use different application protocols. Know the purpose before memorizing port numbers.',[
        ['HTTP','Hypertext Transfer Protocol — a request-and-response protocol for transferring web resources.','WEB'],['HTTPS','Hypertext Transfer Protocol Secure — HTTP protected by Transport Layer Security (TLS) encryption.','WEB'],['SMTP','Simple Mail Transfer Protocol — used for sending email.','EMAIL'],['POP3','Post Office Protocol version 3 — retrieves email from a server, commonly downloading messages to a client.','EMAIL'],['IMAP','Internet Message Access Protocol — retrieves email while keeping messages synchronized with the server.','EMAIL'],['FTP','File Transfer Protocol — transfers files between a client and server without built-in encryption.','FILE SHARING'],['SMB','Server Message Block — a request-and-response protocol for shared files and printers.','FILE SHARING']
      ],'A browser uses HTTPS for a protected website; a mail client uses SMTP to send and IMAP to read synchronized mail.','The service function matters more than a long port table for this review.'),
      netTopic('Transport conversations and ports','The transport layer keeps application conversations separate and delivers data to the right process.','A TCP or UDP segment includes source and destination port numbers. TCP tracks a connection and can recover loss; UDP keeps its header small and sends without a connection.',[
        ['Multiplexing','Using port numbers so several application conversations can share a network connection.','APPLICATION DELIVERY'],
        ['Source port','The number identifying the sending application process.','PORTS'],
        ['Destination port','The number identifying the receiving application service.','PORTS'],
        ['Socket pair','The source and destination IP addresses together with their port numbers, identifying a conversation.','PORTS'],
        ['Well-known port','A port reserved for a common network service.','PORT GROUPS'],
        ['Registered port','A port assigned to an application by registration.','PORT GROUPS'],
        ['Dynamic port','A temporary port commonly chosen by a client for one conversation.','PORT GROUPS'],
        ['TCP segment','A transport unit with control information for ordering, acknowledgment, and reliability.','TRANSPORT UNITS'],
        ['UDP datagram','A transport unit with a small header and no built-in ordering or retransmission.','TRANSPORT UNITS'],
        ['MSS','Maximum Segment Size — the largest TCP data portion a receiver is willing to accept in one segment.','TCP FLOW CONTROL'],
        ['Congestion avoidance','TCP reducing its sending rate when the network appears overloaded.','TCP FLOW CONTROL'],
        ['netstat','A host tool for viewing active network connections and listening ports.','CHECKING CONNECTIONS']
      ],'A browser and a mail app can use the same host at once because their conversations have different port and socket information.','TCP uses a handshake to establish a session; UDP does not.'),
      netTopic('Application models and name lookup','Application protocols describe how programs exchange requests and responses.','A client/server service has a requester and a provider. In peer-to-peer applications, a device may perform both roles. DNS helps applications find numeric IP addresses from readable names.',[
        ['Client/server model','A client requests a service from a server that provides it.','APPLICATION MODELS'],
        ['P2P network','Peer-to-Peer network — devices can share resources directly without every service depending on a dedicated server.','APPLICATION MODELS'],
        ['P2P application','Peer-to-Peer application — a program that can act as both client and server.','APPLICATION MODELS'],
        ['Presentation layer','OSI Layer 6 — formats, translates, encrypts, or compresses application data.','UPPER OSI LAYERS'],
        ['Session layer','OSI Layer 5 — helps create and manage conversations between applications.','UPPER OSI LAYERS'],
        ['DNS hierarchy','Domain Name System names are organized in levels so servers can resolve a name step by step.','NAME RESOLUTION'],
        ['DNS resource record','Stored DNS information used to answer a name lookup.','NAME RESOLUTION'],
        ['nslookup','A host tool that asks a DNS server about a domain name.','NAME RESOLUTION'],
        ['DHCP lease','Dynamic Host Configuration Protocol assignment of temporary IP settings to a client.','ADDRESS SERVICES']
      ],'When you type a website name, DNS resolves it to an IP address; the browser can then request the page through HTTP or HTTPS.','DNS finds addresses from names; DHCP gives network settings to a host.'),
    ]},
    {id:8,title:'Building and Securing a Small Network',source:'[M8-MAIN] Building and Securing a Small Network',topics:[
      netTopic('Plan a small network','Start with the users, devices, applications, and expected growth.','Pick appropriate switches, routers, links, and addressing; document connections and baseline behavior so later faults are easier to locate.',[
        ['Small network topology','A diagram of devices and their physical or logical connections.'],['Device inventory','A list of hardware, addresses, software, and roles.'],['Baseline','A record of normal performance and configuration.'],['Redundancy','An alternate component or path that keeps service available after a failure.'],['Scalability','The ability to support additional users or traffic.']
      ],'For a small office, record switch ports, router interfaces, address ranges, and where important services live.','Good documentation shortens troubleshooting time.'),
      netTopic('Recognize threats and weaknesses','An attack uses a weakness to affect confidentiality, integrity, or availability.','Threats may come from malware, stolen credentials, unauthorized access, or disruption. Reduce exposure with updates, strong access control, and backups.',[
        ['Threat','A possible cause of harm to a network or its data.'],['Vulnerability','A weakness that a threat can exploit.'],['Malware','Software intended to damage, spy, or gain unauthorized access.'],['Virus','Malware that attaches to other files or programs and spreads when they run.'],['Worm','Malware that can spread through networks without attaching to another file.'],['Trojan horse','Malware disguised as useful software that a user is persuaded to run.'],['Denial of service (DoS)','An attack that makes a service unavailable by exhausting its resources.'],['Phishing','A deceptive message that tries to obtain information or trigger unsafe actions.']
      ],'A fake software installer can carry a Trojan; a flood of requests can prevent legitimate users from reaching a service.','A threat is the danger; a vulnerability is the weakness it uses.'),
      netTopic('Protect network devices','Security starts with basic device and account settings.','Change default credentials, use strong passwords and encrypted remote access, restrict privileges, update software, and disable unused services or ports.',[
        ['Device hardening','Reducing a device’s attack surface through secure configuration.'],['Least privilege','Giving an account only the access needed for its task.'],['SSH','Secure Shell — encrypted remote command-line access.'],['Access control list (ACL)','A list of rules that permit or deny selected network traffic.'],['Firewall','A device or program that filters traffic according to rules.'],['Backup','A recoverable copy of data or configuration.']
      ],'Disable an unused switch port and use SSH instead of an unencrypted remote login.','Security needs both prevention and a way to recover.'),
      netTopic('Troubleshoot step by step','Find where communication stops before changing settings.','Check physical connectivity, device/interface state, local addressing, gateway, DNS, and the destination. Compare current results with your baseline.',[
        ['Troubleshooting methodology','A repeatable process to define a problem, test likely causes, fix, and verify.'],['show ip interface brief','A quick Cisco Internetwork Operating System (IOS) check of interface addresses and status.'],['show ip route','A command that shows known IPv4 routes.'],['ping','A reachability check to a target address.'],['traceroute','A check of the path toward a destination.'],['ipconfig','A Windows command for viewing local IP configuration.','HOST COMMANDS'],['ifconfig','A command for viewing active interface IP settings on Linux.','HOST COMMANDS']
      ],'If a website name fails, first ping the gateway, then an outside IP address; if the IP works but the name does not, investigate DNS.','Change one thing at a time and verify the result.'),
      netTopic('Attack types and layered defenses','Network security protects information and access through several complementary controls.','An attacker may first gather information, then try to gain access or disrupt service. A defense-in-depth approach combines device, network, and endpoint protections.',[
        ['Reconnaissance attack','Gathering network information before an attempted intrusion.','ATTACK TYPES'],
        ['Access attack','Trying to enter a system by exploiting authentication or service weaknesses.','ATTACK TYPES'],
        ['DoS','Denial of Service — an attack that exhausts resources so legitimate users cannot use a service.','ATTACK TYPES'],
        ['DDoS','Distributed Denial of Service — a service-disrupting attack from multiple coordinated sources.','ATTACK TYPES'],
        ['Defense in depth','Using several security measures together instead of relying on one barrier.','SECURITY CONTROLS'],
        ['AAA','Authentication, Authorization, and Accounting — checking identity, controlling allowed actions, and recording activity.','SECURITY CONTROLS'],
        ['DMZ','Demilitarized Zone — a separate network for services that outsiders may access under specific rules.','SECURITY CONTROLS'],
        ['Endpoint security','Protecting client devices such as laptops, phones, and servers with updates and security tools.','SECURITY CONTROLS'],
        ['Physical security','Protecting devices and network spaces against unauthorized physical access.','SECURITY CONTROLS']
      ],'An internet-facing server can sit in a DMZ behind firewall rules, while its accounts use AAA and the server receives security updates.','Regular backups and software patches help both prevention and recovery.'),
      netTopic('Grow and verify a small network','Plan for current needs, then collect evidence about normal behavior before changing or expanding the network.','Addressing, device selection, redundancy, and traffic management affect future growth. Ping, traceroute, and show commands help verify what is working.',[
        ['Addressing scheme','A plan assigning unique IP addresses to hosts, servers, network devices, and interfaces.','NETWORK PLANNING'],
        ['Traffic management','Giving real-time voice and video suitable priority alongside ordinary data.','NETWORK PLANNING'],
        ['Protocol analysis','Studying captured traffic to learn what applications and protocols use the network.','GROWTH CHECKS'],
        ['Peak utilization','A period when network use is highest; measuring it reveals capacity needs.','GROWTH CHECKS'],
        ['Network baseline','Saved measurements and command results that show normal network behavior.','VERIFICATION'],
        ['Extended ping','A Cisco IOS ping with extra choices such as the source address.','VERIFICATION'],
        ['Extended traceroute','A Cisco IOS trace with extra choices to investigate a route.','VERIFICATION'],
        ['show running-config','Displays the device’s current settings.','IOS CHECKS'],
        ['show interfaces','Displays interface status and error information.','IOS CHECKS'],
        ['show cdp neighbors','Displays nearby Cisco devices discovered by Cisco Discovery Protocol (CDP).','IOS CHECKS']
      ],'Record ping and traceroute results while a network works normally. Compare later results with that baseline when a user reports slow service.','A growing network needs enough ports, address space, link capacity, and alternate paths for important traffic.'),
      netTopic('Troubleshooting sequence and common faults','Use a repeatable sequence to find the actual cause before changing settings.','Begin by describing the symptom, test a likely cause, apply a planned fix, verify it, and document the outcome.',[
        ['Step 1: Identify the problem','Ask the user what changed and gather the symptoms.','SIX TROUBLESHOOTING STEPS'],
        ['Step 2: Form a theory','List the most likely causes from the evidence.','SIX TROUBLESHOOTING STEPS'],
        ['Step 3: Test the theory','Check whether a suspected cause actually explains the failure.','SIX TROUBLESHOOTING STEPS'],
        ['Step 4: Plan and fix','Choose and apply a solution for the confirmed cause.','SIX TROUBLESHOOTING STEPS'],
        ['Step 5: Verify and prevent','Check full operation and take reasonable steps to avoid recurrence.','SIX TROUBLESHOOTING STEPS'],
        ['Step 6: Document','Record findings, actions, and results for future use.','SIX TROUBLESHOOTING STEPS'],
        ['Duplex mismatch','Different duplex modes at link ends causing poor performance or errors.','COMMON FAULTS'],
        ['APIPA address','Automatic Private IP Addressing in the 169.254.0.0/16 range; on Windows it often signals a DHCP failure.','COMMON FAULTS'],
        ['Default gateway fault','A wrong or missing gateway can leave local communication working while remote destinations fail.','COMMON FAULTS'],
        ['DNS fault','Name lookup fails even when a direct IP connection works.','COMMON FAULTS'],
        ['debug','A Cisco IOS command that displays selected process or protocol activity in real time.','DIAGNOSTIC COMMANDS'],
        ['terminal monitor','A Cisco IOS command that shows certain messages on a remote terminal session.','DIAGNOSTIC COMMANDS']
      ],'If an IP address works but a website name fails, test DNS. If only remote networks fail, check the gateway and routing.','Document the fix after verifying it; escalate when the cause requires unavailable access or expertise.'),
      netTopic('Device hardening and firewall controls','Secure a device by reducing unnecessary access and filtering only the traffic the network needs.','Protect device accounts, prefer encrypted remote management, disable unused services, and use firewall rules appropriate to the traffic.',[
        ['Strong password','A long, difficult-to-guess password that avoids obvious words or personal details.','DEVICE ACCESS'],
        ['enable secret','A Cisco IOS setting that protects privileged access with a secret password.','DEVICE ACCESS'],
        ['service password-encryption','A Cisco IOS command that obscures many stored plaintext passwords in the displayed configuration.','DEVICE ACCESS'],
        ['SSH setup','Secure Shell access needs a device hostname, domain name, cryptographic keys, and permitted remote login.','REMOTE MANAGEMENT'],
        ['Disable unused services','Turn off unneeded device services or ports to reduce possible attack paths.','DEVICE HARDENING'],
        ['AutoSecure','A Cisco router feature that helps apply a set of device security settings.','DEVICE HARDENING'],
        ['Packet filtering','Firewall decisions based on addresses or similar packet information.','FIREWALL METHODS'],
        ['Application filtering','Firewall decisions based on application type or port.','FIREWALL METHODS'],
        ['URL filtering','Uniform Resource Locator filtering — firewall decisions based on a website address or selected keywords.','FIREWALL METHODS'],
        ['SPI','Stateful Packet Inspection — a firewall method that tracks conversations and blocks unexpected incoming packets unless allowed.','FIREWALL METHODS']
      ],'Allow an administrator to connect with SSH, protect privileged mode with enable secret, and turn off services the network does not use.','Password encryption hides displayed passwords; it does not replace strong passwords or secure remote access.')
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
