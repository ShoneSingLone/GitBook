# 当我在使用VPS时

## 内存不够导致的问题

[How To Add Swap on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04)
npm i 的时候回出现莫名其妙被killed，是的，小水管资源有限。
Check the System for Swap Information

```bash
sudo swapon -s
```

current memory and swap usage in Megabytes

```bash
free -m
```

Check Available Space on the Hard Drive Partition

```bash
df -h
```

Create a Swap File

```bash
sudo dd if=/dev/zero  of=/swapfile bs=23532b count=1
```

active

```bash
mkswap /swapfile
```

mount

```bash
swapon /swapfile
```

auto mount when reboot 

```bash
echo "/swapfile swap swap defaults 0 0" >> /etc/fstab
```