import { Service } from './common'

export const frontend_service: Service = {
  name: 'BlueOS Frontend',
  description: 'Frontend status and logic.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const service_scanner_service: Service = {
  name: 'Service Scanner',
  description: 'Actual scanner for running services.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const wifi_service: Service = {
  name: 'Wifi Manager',
  description: 'Service responsible for managing wifi configuration on BlueOS.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const ethernet_service: Service = {
  name: 'Ethernet Manager',
  description: 'Responsible for management of ethernet adapters configuration.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const autopilot_service: Service = {
  name: 'Autopilot Manager',
  description: 'Responsible for management of autopilot status and configuration.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const filebrowser_service: Service = {
  name: 'Filebrowser',
  description: 'File browsing service.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const video_manager_service: Service = {
  name: 'Video Manager',
  description: 'Video management service for BlueOS.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const mavlink_service: Service = {
  name: 'MavLink2Rest',
  description: 'MavLink communication layer over REST API.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const bridget_service: Service = {
  name: 'Bridget',
  description: 'Bridges management service for BlueOS.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const commander_service: Service = {
  name: 'Commander',
  description: 'Helper program to provide easy access to commands via REST API.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const nmea_injector_service: Service = {
  name: 'NMEA Injector',
  description: 'Allows management of sockets for NMEA data injectior.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const system_information_service: Service = {
  name: 'System Information',
  description: 'Provides system information, E.g: CPU, disk, network interface and etc.',
  company: 'Blue Robotics',
  version: '0.1.0',
}

export const network_speed_test_service: Service = {
  name: 'Network Speed Test',
  description: 'Service to test network speed',
  company: 'Blue Robotics',
  version: '0.1.0',
}
