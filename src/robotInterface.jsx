import Modbus from 'jsmodbus';
import EventEmitter from 'events';

export default class extends EventEmitter {
  constructor(robot_type) {
    super();

    this.robot_type = robot_type;
    this.connected = false;
  }

  connect(host, port) {
    this.client = Modbus.client.tcp.complete(
      {'host': host, 'port': port, 'autoReconnect': false,
        'unitId': 1
    }).connect();

    this.client.on('connect', () => {
      this.connected = true;
      this.emit('connect');
      this.heartbeat();
    });

    this.client.on('close', () => {
      this.connected = false;
      this.emit('disconnect');
    });
  }

  heartbeat() {
    this.client.readHoldingRegisters(0, 10).then((resp) => {
      console.log(resp)
      if (this.connected)
        setTimeout(() => {
          this.heartbeat()
        }, 2000);
    }, (err) => {
      console.error(err)
    })
  }

  disconnect() {
    this.client.close();
  }
}
