export interface VoltageMeters {
  id: number;
  voltage: number;
}

export interface AnalogValues {
  voltage: number;
  mahDrawn: number;
  rssi: number;
  amperage: number;
}

export interface RawGpsData {
  fix: boolean;
  numSat: number;
  lat: number;
  lon: number;
  alt: number;
  speed: number;
  groundCourse: number;
}

export interface BoardInfo {
  boardIdentifier: string;
  boardVersion: number;
  boardType: number;
  targetCapabilities: number;
  targetName: string;
  boardName: string;
  manufacturerId: string;
  signature: number[];
  mcuTypeId: number;
  configurationState: number | undefined;
  sampleRateHz: number | undefined;
}

export type ImuUnit = [number, number, number];

export interface ImuData {
  accelerometer: ImuUnit;
  gyroscope: ImuUnit;
  magnetometer: ImuUnit;
}

export interface Kinematics {
  roll: number;
  pitch: number;
  heading: number;
}

export interface Status {
  cycleTime: number;
  i2cError: number;
  sensors: Sensors[];
  mode: number;
  profile: number;
}

export interface ExtendedStatus extends Status {
  cpuload: number;
  numProfiles: number;
  rateProfile: number;
  armingDisabledFlags: DisarmFlags[];
}

export interface RCTuning {
  rcRate: number;
  rcExpo: number;
  rollPitchRate: number;
  pitchRate: number;
  rollRate: number;
  yawRate: number;
  dynamicThrottlePid: number;
  throttleMid: number;
  throttleExpo: number;
  dynamicThrottleBreakpoint: number;
  rcYawExpo: number;
  rcYawRate: number;
  rcPitchRate: number;
  rcPitchExpo: number;
  throttleLimitType: number;
  throttleLimitPercent: number;
  rollRateLimit: number;
  pitchRateLimit: number;
  yawRateLimit: number;
}

export interface RCDeadband {
  deadband: number;
  yawDeadband: number;
  altHoldDeadhand: number;
  deadband3dThrottle: number;
}

export enum Features {
  RX_PPM,
  INFLIGHT_ACC_CAL,
  RX_SERIAL,
  MOTOR_STOP,
  SERVO_TILT,
  SOFTSERIAL,
  GPS,
  SONAR,
  TELEMETRY,
  "3D",
  RX_PARALLEL_PWM,
  RX_MSP,
  RSSI_ADC,
  LED_STRIP,
  DISPLAY,
  BLACKBOX,
  CHANNEL_FORWARDING,
  FAILSAFE,
  TRANSPONDER,
  AIRMODE,
  SUPEREXPO_RATES,
  SDCARD,
  OSD,
  VTX,
  RX_SPI,
  ESC_SENSOR,
  ANTI_GRAVITY,
  DYNAMIC_FILTER,
  VBAT,
  VCURRENT_METER,
}

export enum DisarmFlags {
  NO_GYRO,
  FAILSAFE,
  RX_FAILSAFE,
  BAD_RX_RECOVERY,
  BOXFAILSAFE,
  THROTTLE,
  ANGLE,
  BOOT_GRACE_TIME,
  NOPREARM,
  LOAD,
  CALIBRATING,
  CLI,
  CMS_MENU,
  OSD_MENU,
  BST,
  MSP,
  RUNAWAY_TAKEOFF,
  PARALYZE,
  GPS,
  RESC,
  RPMFILTER,
  CRASH,
  REBOOT_REQD,
  DSHOT_BBANG,
  NO_ACC_CAL,
  ARM_SWITCH,
  UNKNOWN,
}

export enum Sensors {
  ACCELEROMETER,
  BAROMETER,
  MAGNETOMETER,
  GPS,
  SONAR,
  GYRO,
  UNKNOWN,
}

export type FeatureBits = Record<number, Features>;

export interface Feature {
  key: Features;
  enabled: boolean;
}